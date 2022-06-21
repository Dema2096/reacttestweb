import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"
const firebaseConfig = {

  apiKey: "AIzaSyBcXJmvseOkQDcvy0GKFMjm4lusM_GhMxs",
  authDomain: "proyecto-web-e6d28.firebaseapp.com",
  projectId: "proyecto-web-e6d28",
  storageBucket: "proyecto-web-e6d28.appspot.com",
  messagingSenderId: "432628741879",
  appId: "1:432628741879:web:99ba16357368b983afc5f2",
  measurementId: "G-XCWXX523VB"
  };
  
  
  // Initialize Firebase
  
firebase.initializeApp(firebaseConfig);
firebase.db = firebase.firestore()
firebase.auth = firebase.auth()

export default firebase