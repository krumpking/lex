import { firestore } from "@/firebase/firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

export const addUser = async (
  companyId: string,
  name: string,
  email: string,
  companyName: string,
  orgType: string,
  country: string,
  role: string,
) => {
  console.log(name, email, companyName, orgType, country);

  try {
    const q = query(
      collection(firestore, "clients"),
      where("email", "==", email),
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Email exists, update the document
      const docRef = querySnapshot.docs[0].ref;
      await updateDoc(docRef, {
        name,
        timestamp: new Date(),
      });
      return querySnapshot.docs[0].data();
    }

    // Email doesn't exist, create new document
    const docRef = await addDoc(collection(firestore, "clients"), {
      name,
      email,
      companyName,
      companyId,
      orgType,
      country,
      role: role,
      timestamp: new Date(),
    });

    return {
      companyId: companyId,
      id: docRef.id,
      name,
      email,
      companyName,
      orgType,
      country,
      role: role,
    };
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export const addUserByAdmin = async (
  companyId: string,
  name: string,
  email: string,
  companyName: string,
  orgType: string,
  country: string,
  role: string,
) => {
  console.log(name, email, companyName, orgType, country);

  try {
    const q = query(
      collection(firestore, "clients"),
      where("email", "==", email),
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Email exists, update the document
      return null;
    }

    // Email doesn't exist, create new document
    const docRef = await addDoc(collection(firestore, "clients"), {
      name,
      email,
      companyName,
      companyId,
      orgType,
      country,
      role: role,
      timestamp: new Date(),
    });

    return {
      id: docRef.id,
      name,
      email,
      companyName,
      orgType,
      country,
      role: role,
    };
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export const getDataOne = async (
  collectionName: string,
  key: string,
  value: string,
): Promise<any> => {
  const q = query(
    collection(firestore, collectionName),
    where(key, "==", value),
  );
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const documents = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return documents;
  }

  return null;
};

export const getDataTwo = async (
  collectionName: string,
  key: string,
  value: string,
  keyTwo: string,
  valueTwo: string,
) => {
  const q = query(
    collection(firestore, collectionName),
    where(key, "==", value),
    where(keyTwo, "==", valueTwo),
  );
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const documents = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return documents;
  }

  return null;
};

export const getDataThree = async (
  collectionName: string,
  key: string,
  value: string,
  keyTwo: string,
  valueTwo: string,
  keyThree: string,
  valueThree: string,
) => {
  const q = query(
    collection(firestore, collectionName),
    where(key, "==", value),
    where(keyTwo, "==", valueTwo),
    where(keyThree, "==", valueThree),
  );
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const documents = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return documents;
  }

  return null;
};

export const updateDocument = async (
  collectionName: string,
  documentId: string,
  data: any,
) => {
  const docRef = doc(firestore, collectionName, documentId);
  await updateDoc(docRef, data);
  return true;
};

export const deleteDocument = async (
  collectionName: string,
  documentId: string,
) => {
  const docRef = doc(firestore, collectionName, documentId);
  await deleteDoc(docRef);
  return true;
};
