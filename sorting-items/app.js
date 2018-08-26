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
      let unique = [...new Set(brands.map(item => item.brand))];
      brands.forEach(brand => {
        output += `
            <div class="col-md-4 mb-3 brand ${brand.brand.toLowerCase()}" 
            data-brand="${brand.brand}">
                <div class="border text-center">
                    <img width=250 height=200 src="${brand.engine}">
                    <p class="mb-0" >${brand.brand}</p>
                    <p class="mb-0" >${brand.year}</p>
                </div>    
            </div>
        `;
      });
      unique.forEach(el => {
        let option = document.createElement("option");
        option.value = el;
        option.appendChild(document.createTextNode(el));
        select.appendChild(option);
      });

      listItems.innerHTML = output;
    })
    .catch(err => console.log(err));
}

setTimeout(function sorting() {
  let cols = document.querySelectorAll(".brand");
  let attr = "";

  select.addEventListener("change", getSelectedBrand);

  function getSelectedBrand() {
    let selectedBrand = this.value;
    cols.forEach(el => {
      attr = el.getAttribute("data-brand");
      if (attr !== selectedBrand) {
        el.style.display = "none";
      } else {
        el.style.display = "block";
      }
      if (selectedBrand == "all") {
        el.style.display = "block";
      }
    });
  }
}, 500);
