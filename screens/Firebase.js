
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXppBBVW-7aCurgZ2jeguUomdStRJ0p6U",
  authDomain: "teste-b181e.firebaseapp.com",
  projectId: "teste-b181e",
  storageBucket: "teste-b181e.appspot.com",
  messagingSenderId: "1028837134752",
  appId: "1:1028837134752:web:6cdd7b93a35ca067a0d4c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);