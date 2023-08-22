// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyABdYs-seooVFzrM3pYDanRZgMfRin4zaA",

  authDomain: "edctactical-f8369.firebaseapp.com",

  projectId: "edctactical-f8369",

  storageBucket: "edctactical-f8369.appspot.com",

  messagingSenderId: "925545248288",

  appId: "1:925545248288:web:f96d23a762d5a9ecee6e45",

  measurementId: "G-ZXSYEH386Z"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);


export { db, auth };