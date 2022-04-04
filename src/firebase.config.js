// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDLrYUzWJ20sRL2c2kNccPZAMCVkKs2Nc",
  authDomain: "house-marketplace-app-d72fc.firebaseapp.com",
  projectId: "house-marketplace-app-d72fc",
  storageBucket: "house-marketplace-app-d72fc.appspot.com",
  messagingSenderId: "706812425071",
  appId: "1:706812425071:web:1db07bad3d9f9454c6ae9a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
