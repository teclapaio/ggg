// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChn6GeuKajy1T4GxkOfGrFk4RkvNdDKps",
  authDomain: "nehuen-tienda.firebaseapp.com",
  projectId: "nehuen-tienda",
  storageBucket: "nehuen-tienda.appspot.com",
  messagingSenderId: "1052613184724",
  appId: "1:1052613184724:web:5c5390c26d7cc0cc567f41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 