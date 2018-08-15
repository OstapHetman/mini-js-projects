const fact = document.querySelector("#fact");
const factText = document.querySelector("#fact-text");
const numberInput = document.querySelector("#number-input");

numberInput.addEventListener("input", getFactFetch);

// Old version
// function getFactAjax() {
//   let number = numberInput.value;

//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", "http://numbersapi.com/" + number);

//   xhr.onload = function() {
//     if (this.status == 200 && number != "") {
//       //   console.log(this.responseText);
//       fact.style.display = "block";
//       factText.innerText = this.responseText;
//     }
//   };

//   xhr.send();
// }

// New feature
function getFactFetch() {
  let number = numberInput.value;

  fetch(`http://numbersapi.com/${number}`)
    .then(response => response.text())
    .then(data => {
      if (number != "") {
        fact.style.display = "block";
        factText.innerText = data;
      }
    })
    .catch(err => console.log(err));
}
