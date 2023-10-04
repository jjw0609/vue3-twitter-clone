import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsTEvv_k5WEyjnQy0Cdhr5ZNyZe2N00js",
    authDomain: "twitter-clone-inflearn-10fc8.firebaseapp.com",
    projectId: "twitter-clone-inflearn-10fc8",
    storageBucket: "twitter-clone-inflearn-10fc8.appspot.com",
    messagingSenderId: "325557618636",
    appId: "1:325557618636:web:fe74e1dad3ca4f98af3f69",
    measurementId: "G-NT1D3TVGPK"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export const USER_COLLECTION = db.collection('users');