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
  let options = select.querySelectorAll("option");
  let arr = [];

  cols.forEach(el => {
    let attr = el.getAttribute("data-brand");

    arr.push(attr);
  });

  select.addEventListener("change", function() {
    // let a = e.target.querySelector("option");
    // a.forEach(doc => {
    console.log(this.value);
    // });
  });

  //   options.forEach(el => {
  //     // console.log(`[${el}]`);

  //     el.addEventListener("click", e => {
  //       console.log("e.target");
  //     });
  //   });

  function a(element) {
    return (element = "Audi");
  }

  //   console.log(arr.find(a));
}, 1000);
