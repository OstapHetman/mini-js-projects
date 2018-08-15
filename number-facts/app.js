const fact = document.querySelector("#fact");
const factText = document.querySelector("#fact-text");
const numberInput = document.querySelector("#number-input");

numberInput.addEventListener("input", getFactAjax);

// Old version
function getFactAjax() {
  let number = numberInput.value;

  let xhr = new XMLHttpRequest();
  xhr.open("GET", "http://numbersapi.com/" + number);

  xhr.onload = function() {
    if (this.status == 200 && number != "") {
      //   console.log(this.responseText);
      fact.style.display = "block";
      factText.innerText = this.responseText;
    }
  };

  xhr.send();
}
