import firebase from "firebase/app";
import "firebase/auth";

export  const auth = firebase.initializeApp({
    apiKey: "AIzaSyBRrEknb5T0P06NPy-yJ_8-sZwYIENDCrA",
    authDomain: "chattime-8e68b.firebaseapp.com",
    projectId: "chattime-8e68b",
    storageBucket: "chattime-8e68b.appspot.com",
    messagingSenderId: "759558542314",
    appId: "1:759558542314:web:d05c90fa071f6c3d159893"
  }).auth()