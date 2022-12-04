// Import the functions you need from the SDKs you need

import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB83ryUHlNpYMgnPdNQ7gdnUrSuQ7-nuz4",
  authDomain: "signal-clone-d4cba.firebaseapp.com",
  projectId: "signal-clone-d4cba",
  storageBucket: "signal-clone-d4cba.appspot.com",
  messagingSenderId: "392302831797",
  appId: "1:392302831797:web:828cb44c7ccd06e227b6fc",
};

let app;
// Initialize Firebase
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
