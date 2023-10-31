// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
impot {getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAPAdHteemY07oX2HAaa6m3rBtiJNr-oJs",
  authDomain: "saarthi-e7ee5.firebaseapp.com",
  projectId: "saarthi-e7ee5",
  storageBucket: "saarthi-e7ee5.appspot.com",
  messagingSenderId: "880355658775",
  appId: "1:880355658775:web:3e9a9d2990273f55456052"
};

const app = initializeApp(firebaseConfig);

const auth=getAuth()