import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4rySMx2fs9YcN7h_VQQ8BoDMira83RD8",
  authDomain: "kts-app-a2049.firebaseapp.com",
  projectId: "kts-app-a2049",
  storageBucket: "kts-app-a2049.appspot.com",
  messagingSenderId: "868926503951",
  appId: "1:868926503951:web:1c8c4229a1e2ecbdb5777a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
