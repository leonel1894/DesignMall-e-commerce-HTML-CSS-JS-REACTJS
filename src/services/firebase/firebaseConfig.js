import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyC6a38AP2sjGeCeI1fjpC5J9JP4cBXnKr4",
    authDomain: "designmall.firebaseapp.com",
    projectId: "designmall",
    storageBucket: "designmall.appspot.com",
    messagingSenderId: "804406661804",
    appId: "1:804406661804:web:e4d6416e71b34751360509"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)