import { addToCart } from "./js/addToCart.js";
import { getFromLocalStorage } from "./js/getFromLocalStorage.js";

addToCart();

getFromLocalStorage();

const numberInputs = document.querySelectorAll('input[type="number"]');
const plus = document.querySelectorAll("span.plus");
const minus = document.querySelectorAll("span.minus");
let counter = 1;

numberInputs.forEach((el, index) => {
  el.parentElement.setAttribute("data-index", `${index}`);
  el.parentElement.setAttribute("data-counter", `${counter}`);
});

// Increment
plus.forEach(el => {
  el.addEventListener("click", event => {
    let plusAttr = el.parentElement.getAttribute("data-index");

    numberInputs.forEach(numberInput => {
      let inputAttr = numberInput.parentElement.getAttribute("data-index");
      if (plusAttr == inputAttr) {
        // counter = 1
        counter = el.parentElement.getAttribute("data-counter");
        console.log(event.target.parentElement);
        // increment counter
        numberInput.value = ++counter;
        // increment counter and set to data-attribute
        el.parentElement.setAttribute("data-counter", `${counter}`);
      }
    });
  });
});

// Decrement
minus.forEach(el => {
  let minusAttr = el.parentElement.getAttribute("data-index");
  el.addEventListener("click", () => {
    numberInputs.forEach(numberInput => {
      let inputAttr = numberInput.parentElement.getAttribute("data-index");
      if (counter > 1) {
        if (minusAttr == inputAttr) {
          // increment counter
          numberInput.value = --counter;
          // increment counter and set to data-attribute
          el.parentElement.setAttribute("data-counter", `${counter}`);
        }
      } else {
        return false;
      }
    });
  });
});
