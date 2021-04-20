import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAMKt2q7flBve-gYZ_p7kkMcfhU8q_5748",
    authDomain: "redesigned-robot.firebaseapp.com",
    projectId: "redesigned-robot",
    storageBucket: "redesigned-robot.appspot.com",
    messagingSenderId: "663556270126",
    appId: "1:663556270126:web:d017245f1405fdb85897bf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;