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

  // edit icon
  let editIconUI = document.createElement("span");
  editIconUI.class = "edit-user";
  editIconUI.innerHTML = " ✎";
  editIconUI.setAttribute("userid", snap.key);
  editIconUI.addEventListener("click", editButtonClicked);
  // Append after li.innerHTML = value.name
  li.append(editIconUI);
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

// Attach Click Event to the Add User Button
const addUserBtnUI = document.getElementById("add-user-btn");
addUserBtnUI.addEventListener("click", addUserBtnClicked);

function addUserBtnClicked() {
  // Create a new user Object
  const usersRef = dbRef.child("users");
  //  Get all the input fields from the Add User Form
  const addUserInputsUI = document.getElementsByClassName("user-input");

  // this object will hold the new user information
  let newUser = {};

  // loop through View to get the data for the model
  for (let i = 0, len = addUserInputsUI.length; i < len; i++) {
    let key = addUserInputsUI[i].getAttribute("data-key");
    let value = addUserInputsUI[i].value;
    newUser[key] = value;
  }

  // Push to the Firebase Database
  usersRef.push(newUser, function() {
    console.log("New User has been added");
  });
}

function editButtonClicked() {
  // show the Edit User Form
  document.getElementById("edit-user-module").style.display = "block";

  // set user id to the hidden input field
  document.querySelector(".edit-userid").value = e.target.getAttribute(
    "userid"
  );

  const userRef = dbRef.child("users/" + e.target.getAttribute("userid"));

  // set data to the user field
  const editUserInputsUI = document.querySelectorAll(".edit-user-input");

  userRef.on("value", snap => {
    for (var i = 0, len = editUserInputsUI.length; i < len; i++) {
      var key = editUserInputsUI[i].getAttribute("data-key");
      editUserInputsUI[i].value = snap.val()[key];
    }
  });
}
