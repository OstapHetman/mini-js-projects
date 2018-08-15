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

// Database Reference
const dbRef = firebase.database().ref();
const usersRef = dbRef.child("users");

// Get User List using Child_Added() method
const userListUI = document.getElementById("user-list");

usersRef.on("child_added", snap => {
  let user = snap.val();
  let li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = user.name;
  li.setAttribute("child-key", snap.key);
  li.addEventListener("click", userClicked);
  //   Get a DOM element reference for userList
  userListUI.append(li);
});

// Show User Detail on li click
function userClicked(e) {
  const userID = e.target.getAttribute("child-key");
  const userRef = dbRef.child(`users/${userID}`);
  const userDetailUI = document.getElementById("user-detail");

  userDetailUI.innerHTML = "";

  userRef.on("child_added", snap => {
    let p = document.createElement("p");
    p.innerHTML = snap.key + " - " + snap.val();
    userDetailUI.append(p);
  });
}
