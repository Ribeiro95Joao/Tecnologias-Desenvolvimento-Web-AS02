// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCxLDKsx--SwogtCQot1F5rX3kaIjobCOw",
    authDomain: "as02-73301.firebaseapp.com",
    projectId: "as02-73301",
    storageBucket: "as02-73301.firebasestorage.app",
    messagingSenderId: "310280101958",
    appId: "1:310280101958:web:43e583315f4fedf0ffea47",
    measurementId: "G-J34FFXNVEC"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
