import firebase from "firebase";
import firestore from "firebase/firestore";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyATkJ25380s4b5PeMipeNxNNAcYWTMuOqs",
  authDomain: "vuefs-dev-6560a.firebaseapp.com",
  databaseURL: "https://vuefs-dev-6560a.firebaseio.com",
  projectId: "vuefs-dev-6560a",
  storageBucket: "vuefs-dev-6560a.appspot.com",
  messagingSenderId: "331688615371"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
