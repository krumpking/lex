import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";

const openAIApiKey: string = process.env.OPENAI_API_KEY || "";

if (!openAIApiKey) throw new Error("OpenAI API key not found.");

export const llm = new ChatOpenAI({
  openAIApiKey,
  modelName: "gpt-3.5-turbo",
  temperature: 0.9,
});

export const embeddings = new OpenAIEmbeddings(
  {
    openAIApiKey,
  },
  { maxRetries: 0 },
);
