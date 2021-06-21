import firebase from "firebase/app";
import "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaCIzc0d5Z1CpNMsVZC7UJG7EWkgHJy_g",
  authDomain: "zoltannat-55eaa.firebaseapp.com",
  databaseURL: "https://zoltannat-55eaa-default-rtdb.firebaseio.com",
  projectId: "zoltannat-55eaa",
  storageBucket: "zoltannat-55eaa.appspot.com",
  messagingSenderId: "760219817103",
  appId: "1:760219817103:web:d1eef7a571873c20420cfa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
