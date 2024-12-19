// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyEWOp9k4mragJLcMZIMTW1TeUFJy1GE4",
  authDomain: "ludora-4e101.firebaseapp.com",
  projectId: "ludora-4e101",
  storageBucket: "ludora-4e101.firebasestorage.app",
  messagingSenderId: "395620267239",
  appId: "1:395620267239:web:1338ee8be2c9f770699e42",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
