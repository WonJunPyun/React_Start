import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    
    apiKey: "AIzaSyDywrh-pWF3qy0ww_oay3GHmddbtsuhC8o",
    authDomain: "first-react-ba173.firebaseapp.com",
    projectId: "first-react-ba173",
    storageBucket: "first-react-ba173.appspot.com",
    messagingSenderId: "536379965604",
    appId: "1:536379965604:web:6ca4e06e86cf61b4a6a631",
    measurementId: "G-YLD659JEVT"

};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };