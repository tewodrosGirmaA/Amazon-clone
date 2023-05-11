// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC7ZXY9sUfwM0RCa2XHaFRUhoQ1o5Ov10Q",
  authDomain: "clone-ab3b1.firebaseapp.com",
  projectId: "clone-ab3b1",
  storageBucket: "clone-ab3b1.appspot.com",
  messagingSenderId: "946143907830",
  appId: "1:946143907830:web:408d6813e3b07f772341d7",
  measurementId: "G-L7XHNH13T4",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
