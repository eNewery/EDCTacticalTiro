// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBnF3F5XDeTKyVvo7DsZQTDxhdsXXQXNVU",

  authDomain: "edctactical-ee5a4.firebaseapp.com",

  projectId: "edctactical-ee5a4",

  storageBucket: "edctactical-ee5a4.appspot.com",

  messagingSenderId: "225704432450",

  appId: "1:225704432450:web:114cd1f0c5b2d9538c2edb",

  measurementId: "G-VT0Z61HWQH"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);


export { db, auth };