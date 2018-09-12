import fetchJsonp from "fetch-jsonp";

const petForm = document.querySelector("#pet-form");

petForm.addEventListener("submit", fetchAnimals);

// Fetch Animals from API
function fetchAnimals(e) {
  e.preventDefault();

  // Get User input
  const animal = document.querySelector("#animal").value;
  const zip = document.querySelector("#zip").value;

  // Fetch Pets
  fetchJsonp(
    `http://api.petfinder.com/pet.find?format=json&key=25c9705773357cb770bed271a518e943&animal=${animal}&location=${zip}&callback=callback`,
    {
      jsonpCallbackFunction: "callback"
    }
  )
    .then(res => res.json())
    .then(data => showAnimals(data.petfinder.pets.pet))
    .catch(err => console.log(err));
}

// JSONP Callback
function callback(data) {
  console.log(data);
}

// Show Listing of Pets
function showAnimals(pets) {
  const results = document.querySelector("#results");
  // Clear first
  results.innerHTML = "";
  // Loop Through Pets
  pets.forEach(pet => {
    console.log(pet);
    const div = document.createElement("div");
    div.classList.add("card", "card-body", "mb-3");
    div.innerHTML = `
        <div class="row">
            <div class="col-sm-6">
                <h4>${pet.name.$t} (${pet.age.$t})</h4>
                <p class="text-secondary">${pet.breeds.breed.$t}</p>
                <p>
                ${pet.contact.address1.$t} ${pet.contact.city.$t}
                ${pet.contact.state.$t} ${pet.contact.zip.$t}
                </p>
                <ul class="list-group">
                    <li class="list-group-item">Phone: ${
                      pet.contact.phone.$t
                    }</li>
                    ${
                      pet.contact.email.$t
                        ? `<li class="list-group-item">Email: ${
                            pet.contact.email.$t
                          }</li>`
                        : ``
                    }
                    <li class="list-group-item">Shelter ID: ${
                      pet.shelterId.$t
                    }</li>
                </ul>
            </div>
            <div class="col-sm-6">
            </div>
        </div>
    `;

    results.appendChild(div);
  });
}
