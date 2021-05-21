import firebase from 'firebase/app';
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

  var firebaseConfig = {
    apiKey: "AIzaSyB3VcmrYhe58JFIruvHFw6kf5MT5E36Cy0",
    authDomain: "trandyshows.firebaseapp.com",
    projectId: "trandyshows",
    storageBucket: "trandyshows.appspot.com",
    messagingSenderId: "312789501225",
    appId: "1:312789501225:web:9df17dae60e32ba554a338"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig)

export var googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export var auth = firebase.auth()
export var firestore = firebase.firestore()
export var serverTimestamp = () => firebase.firestore.FieldValue.serverTimestamp();
export var storage = firebase.storage().ref()

export default firebase;
