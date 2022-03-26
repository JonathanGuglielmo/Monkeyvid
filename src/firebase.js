import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAOxD4R5slP6Wh98HLTEnkL4I5qt3B6n08",
    authDomain: "monkey-movies.firebaseapp.com",
    projectId: "monkey-movies",
    storageBucket: "monkey-movies.appspot.com",
    messagingSenderId: "18676366068",
    appId: "1:18676366068:web:2ca047e32d1ee171a23ca1"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export {auth}