import firebase from "firebase/app";
import "firebase/database";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDGGGb95TwGTY8m5p1jAfSmAOZ5Y1iN3SE",
  authDomain: "juno-zoltan.firebaseapp.com",
  projectId: "juno-zoltan",
  storageBucket: "juno-zoltan.appspot.com",
  messagingSenderId: "232035626294",
  appId: "1:232035626294:web:7e942bf960397c0bddd797",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
