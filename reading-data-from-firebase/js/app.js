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

// Start coding
const cafeList = document.querySelector("#cafe-list");
const form = document.querySelector("#add-cafe-form");

// Create element and render cafe
function renderCafe(doc) {
  let li = document.createElement("li");
  let name = document.createElement("span");
  let city = document.createElement("span");

  li.setAttribute("data-id", doc.id);
  li.className = "list-group-item";
  name.textContent = doc.data().name;
  city.textContent = doc.data().city;

  li.appendChild(name);
  li.appendChild(city);

  cafeList.appendChild(li);
}

// Getting Data
db.collection("cafes")
  .get()
  .then(snapshot => {
    snapshot.docs.forEach(doc => {
      // console.log(doc.data());
      renderCafe(doc);
    });
  });

// Saving Data
form.addEventListener("submit", e => {
  e.preventDefault();
  let name = form.querySelector("#name");
  let city = form.querySelector("#city");

  db.collection("cafes").add({
    name: name.value,
    city: city.value
  });
  name.value = "";
  city.value = "";
});
