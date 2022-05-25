//import firebase from 'firebase/app';
import "firebase/storage"
//import { initializeApp } from 'firebase/app';
import 'firebase/firestore';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCY0CF-LreufHJIN3EtcDEahGvujqGlV0I",
  authDomain: "facebook-clone-cb309.firebaseapp.com",
  projectId: "facebook-clone-cb309",
  storageBucket: "facebook-clone-cb309.appspot.com",
  messagingSenderId: "462064900986",
  appId: "1:462064900986:web:8af6cd779c14cecd7114c3",
  measurementId: "G-HXCNQP5366"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage;

export { auth, db,storage };

//const app = !firebase.apps.length  ? firebase.initializeApp(firebaseConfig) : firebase.app();
//const db = app.firestore;
//const storage = firebase.storage;
//export { db, storage };
