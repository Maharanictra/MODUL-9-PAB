import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyDl-suC2ZQ9r2m0gW2hZVgaFQ8N7I5Surs",
    authDomain: "fir-72903.firebaseapp.com",
    projectId: "fir-72903",
    storageBucket: "fir-72903.appspot.com",
    messagingSenderId: "963364337864",
    appId: "1:963364337864:web:d90e25457c77a942c2cdfd"
});

const FIREBASE = firebase;

export default FIREBASE;