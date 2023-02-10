import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.NEXT_APIKEY,
  authDomain:process.env.NEXT_DOMAINKEY,
  projectId:process.env.NEXT_PROJECT_ID,
  storageBucket:process.env.NEXT_STORAGEBUCKET,
  messagingSenderId:process.env.NEXT_MESSEGE_SENDER_ID,
  appId:NEXT_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
