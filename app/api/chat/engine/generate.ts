import * as dotenv from "dotenv";
import * as fs from "fs";
import { VectorStoreIndex } from "llamaindex";
import { storageContextFromDefaults } from "llamaindex/storage/StorageContext";
import * as path from "path";
import { getDocuments } from "./loader";
import { initSettings } from "./settings";

dotenv.config();

interface IndexMetadata {
  lastIndexed: number;
  indexedFiles: { [filepath: string]: number }; // filepath -> last modified timestamp
}

function getMetadataPath(persistDir: string): string {
  return path.join(persistDir, "index-metadata.json");
}

function loadMetadata(persistDir: string): IndexMetadata {
  const metadataPath = getMetadataPath(persistDir);
  if (fs.existsSync(metadataPath)) {
    return JSON.parse(fs.readFileSync(metadataPath, "utf-8"));
  }
  return { lastIndexed: 0, indexedFiles: {} };
}

function saveMetadata(persistDir: string, metadata: IndexMetadata): void {
  const metadataPath = getMetadataPath(persistDir);
  fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
}

async function getRuntime<T>(func: () => Promise<T>): Promise<[T, number]> {
  const start = Date.now();
  const result = await func();
  const end = Date.now();
  return [result, end - start];
}

async function generateDatasource() {
  console.log("🚀 Starting indexing process...");

  const persistDir = process.env.STORAGE_CACHE_DIR;
  if (!persistDir) {
    throw new Error("STORAGE_CACHE_DIR environment variable is required!");
  }

  // Load existing metadata
  const metadata = loadMetadata(persistDir);
  console.log(
    `📊 Previous index contains ${Object.keys(metadata.indexedFiles).length} files`,
  );

  const [documents, loadTime] = await getRuntime(getDocuments);
  console.log(`📑 Loaded ${documents.length} documents in ${loadTime / 1000}s`);

  // Filter only new or modified documents
  const newDocuments = documents.filter((doc) => {
    const filepath = doc.metadata?.filepath;
    if (!filepath) return true; // Include if no filepath (safety check)

    const lastModified = fs.statSync(filepath).mtimeMs;
    return (
      !metadata.indexedFiles[filepath] ||
      metadata.indexedFiles[filepath] < lastModified
    );
  });

  if (newDocuments.length === 0) {
    console.log("✨ Index is up to date, no new documents to process");
    return;
  }

  console.log(`📝 Processing ${newDocuments.length} new/modified documents...`);

  const [, indexTime] = await getRuntime(async () => {
    const storageContext = await storageContextFromDefaults({ persistDir });

    // Create or update index
    const index = await VectorStoreIndex.fromDocuments(newDocuments, {
      storageContext,
    });

    // Update metadata
    newDocuments.forEach((doc) => {
      if (doc.metadata?.filepath) {
        metadata.indexedFiles[doc.metadata.filepath] = fs.statSync(
          doc.metadata.filepath,
        ).mtimeMs;
      }
    });
    metadata.lastIndexed = Date.now();
    saveMetadata(persistDir, metadata);
  });

  console.log(`✅ Index successfully updated in ${indexTime / 1000}s`);
  console.log(
    `📦 Total indexed files: ${Object.keys(metadata.indexedFiles).length}`,
  );
}

(async () => {
  try {
    console.log("⚙️ Initializing settings...");
    initSettings();
    await generateDatasource();
    console.log("🎉 Indexing process completed successfully");
  } catch (error) {
    console.error("❌ Error during indexing:", error);
    process.exit(1);
  }
})();
