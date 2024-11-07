// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe4b1jO8yKvAIKdSFjeKgKylZcK1UZ0IU",
  authDomain: "phuthotourist-a9822.firebaseapp.com",
  projectId: "phuthotourist-a9822",
  storageBucket: "phuthotourist-a9822.firebasestorage.app",
  messagingSenderId: "189783918509",
  appId: "1:189783918509:web:5f53da24f8c51fba264324",
  measurementId: "G-FWSE83ZFP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;