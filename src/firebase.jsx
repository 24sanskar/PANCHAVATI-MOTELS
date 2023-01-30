// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCD4Xhpi6mvqK51f8SEG4TnXjl_CadBPQ",
  authDomain: "panchavati-motel.firebaseapp.com",
  projectId: "panchavati-motel",
  storageBucket: "panchavati-motel.appspot.com",
  messagingSenderId: "740527846192",
  appId: "1:740527846192:web:18794b63a0f918fa0f0ef5",
};

// Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
//const provider = new firebase.auth.GoogleAuthProvider();

export { auth };
