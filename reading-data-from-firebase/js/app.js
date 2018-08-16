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
  let cross = document.createElement("div");

  li.setAttribute("data-id", doc.id);
  li.className = "list-group-item";
  cross.classList.add("text-danger", "font-weight-bold");
  name.textContent = doc.data().name;
  city.textContent = doc.data().city;
  cross.textContent = "X";

  li.appendChild(name);
  li.appendChild(city);
  li.appendChild(cross);

  cafeList.appendChild(li);

  // Deleting Data
  cross.addEventListener("click", e => {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute("data-id");
    db.collection("cafes")
      .doc(id)
      .delete();
  });
}

// Getting Data
// .where("city", "==", "London") queries
// .orderBy("city") ordering data
// .where('city', '==', 'London').orderBy('name')
// db.collection("cafes")
//   .get()
//   .then(snapshot => {
//     snapshot.docs.forEach(doc => {
//       // console.log(doc.data());
//       renderCafe(doc);
//     });
//   });

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

// Real Time listener
db.collection("cafes")
  .orderBy("city")
  .onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
      if (change.type == "added") {
        renderCafe(change.doc);
      } else if (change.type == "removed") {
        let li = cafeList.querySelector(`[data-id=${change.doc.id}]`);
        cafeList.removeChild(li);
      }
    });
  });
