import {initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
const firebaseConfig = {
    apiKey: "AIzaSyCWBUQdatlTqiKAa7CcDqxieF3n5dHUdgw",
    authDomain: "fir-29136.firebaseapp.com",
    projectId: "fir-29136",
    storageBucket: "fir-29136.appspot.com",
    messagingSenderId: "984239927512",
    appId: "1:984239927512:web:971a9403dd1104b03327ad",
    measurementId: "G-JHCB5XCVM2"
  }
  const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };