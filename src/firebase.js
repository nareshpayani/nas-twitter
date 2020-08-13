import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBuJC7dlxc2xQXlq0Sq9luy_LT48QkCmtY",
    authDomain: "nas-twitter.firebaseapp.com",
    databaseURL: "https://nas-twitter.firebaseio.com",
    projectId: "nas-twitter",
    storageBucket: "nas-twitter.appspot.com",
    messagingSenderId: "9319948239",
    appId: "1:9319948239:web:ae784732fd96515f1bbcba",
    measurementId: "G-38826V9SEH"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;