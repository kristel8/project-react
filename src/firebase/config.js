// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9BzbTxmWZbwWliJE71tTD4XCNuAFHJT0",
  authDomain: "rj-booki.firebaseapp.com",
  projectId: "rj-booki",
  storageBucket: "rj-booki.appspot.com",
  messagingSenderId: "927945398803",
  appId: "1:927945398803:web:7235778b180152b8157de6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);