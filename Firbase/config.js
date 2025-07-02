// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.YOUR_API_KEY,
    authDomain: process.env.YOUR_AUTH_DOMAIN,
    projectId: process.env.YOUR_PROJECT_ID,
    storageBucket: process.env.YOUR_STORAGE_BUCKET,
    messagingSenderId: process.env.YOUR_MESSAGING_SENDER_ID,
    appId: process.env.YOUR_APP_ID,
    measurementId: process.env.YOUR_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
