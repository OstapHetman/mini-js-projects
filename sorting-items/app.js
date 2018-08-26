const listItems = document.querySelector("#list-items");
const select = document.querySelector("#brands");

// Show Brands from DB
document.addEventListener("DOMContentLoaded", fetchFromJson);

// Get
function fetchFromJson() {
  let output = "";

  fetch("http://localhost:3000/brands")
    .then(response => response.json())
    .then(brands => {
      brands.forEach(brand => {
        output += `
            <div class="col-md-4 mb-3 brand ${brand.brand.toLowerCase()}" 
            data-brand="${brand.brand}">
                <div class="border text-center">
                    <p class="mb-0" >${brand.brand}</p>
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

setTimeout(function sorting() {
  let cols = document.querySelectorAll(".brand");
  let arr = [];
  let attr = "";

  select.addEventListener("change", getSelectedBrand);

  function getSelectedBrand() {
    let selectedBrand = this.value;
    // if (selectedBrand == atrr) {
    // console.log(attr);
    cols.forEach(el => {
      attr = el.getAttribute("data-brand");
      if (selectedBrand == attr) {
        console.log("Brand: " + selectedBrand);
        console.log("Attr: " + attr);
      }
      arr.push(attr);
    });
    // }

    // if (arr.indexOf(selectedBrand) != -1) {
    //   console.log("YESS");
    // } else {
    //   console.log("NO");
    // }
  }
}, 1000);
