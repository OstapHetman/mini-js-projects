// Initialize Firebase
const config = {
  apiKey: "AIzaSyB0tGaiZfIUHZkKEMb4p34yQHNxaSUMlqM",
  authDomain: "fir-crud-8a5e8.firebaseapp.com",
  databaseURL: "https://fir-crud-8a5e8.firebaseio.com",
  projectId: "fir-crud-8a5e8",
  storageBucket: "fir-crud-8a5e8.appspot.com",
  messagingSenderId: "861463477580"
};

firebase.initializeApp(config);

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
