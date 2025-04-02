// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBHugoS4_jlze_mVv3IxLroiDpZvHBKdIA",
	authDomain: "lexaniaafricalegal.firebaseapp.com",
	projectId: "lexaniaafricalegal",
	storageBucket: "lexaniaafricalegal.firebasestorage.app",
	messagingSenderId: "672432908022",
	appId: "1:672432908022:web:6d18daf8f86d1870132ed7",
	measurementId: "G-TREZ3E0DMV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
