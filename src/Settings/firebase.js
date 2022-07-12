import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAWGrY92tJ1YfWTF7Cwx3uAWrJIZ_isMJo",
    authDomain: "entregafinal-4143c.firebaseapp.com",
    projectId: "entregafinal-4143c",
    storageBucket: "entregafinal-4143c.appspot.com",
    messagingSenderId: "936228322077",
    appId: "1:936228322077:web:b207addf30217ec6e63ff4",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth = firebase.auth();
firebase.db = firebase.firestore();

export default firebase;
