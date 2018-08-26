const listItems = document.querySelector("#list-items");
const select = document.querySelector("#brands");
const selected = document.querySelector("#selected");

document.addEventListener("DOMContentLoaded", fetchFromJson);

// Get
function fetchFromJson() {
  let output = "";
  //  let selectEl = "";

  fetch("http://localhost:3000/brands")
    .then(response => response.json())
    .then(brands => {
      brands.forEach(brand => {
        output += `
                <div class="col-md-4 mb-3 ">
                    <div class="border text-center">
                        <p class="mb-0">${brand.brand}</p>
                    </div>    
                </div>
        `;
        let option = document.createElement("option");
        option.value = brand.brand;
        option.appendChild(document.createTextNode(brand.brand));
        select.appendChild(option);
      });
      listItems.innerHTML = output;
    })
    .catch(err => console.log(err));
}
