import { addToCart } from "./js/addToCart.js";
import { getFromLocalStorage } from "./js/getFromLocalStorage.js";

addToCart();

getFromLocalStorage();

const numberInputs = document.querySelectorAll('input[type="number"]');
const plus = document.querySelectorAll("span.plus");
const minus = document.querySelectorAll("span.minus");
let counter = 1;

plus.forEach((el, index) => {
  el.setAttribute("data-index", `${index}`);
  el.setAttribute("data-counter", `${counter}`);
});
numberInputs.forEach((el, index) => {
  el.setAttribute("data-index", `${index}`);
  el.setAttribute("data-counter", `${counter}`);
});
plus.forEach(el => {
  el.addEventListener("click", () => {
    let plusAttr = el.getAttribute("data-index");
    let inputAttr = numberInput.getAttribute("data-index");
    numberInputs.forEach(numberInput => {
      if (plusAttr == inputAttr) {
        counter = el.getAttribute("data-counter");
        numberInput.value = ++counter;
        el.setAttribute("data-counter", `${counter}`);
      }
    });
  });
});

minus.forEach(el => {
  el.addEventListener("click", () => {
    if (counter > 1) {
      numberInput.value = --counter;
    } else {
      return false;
    }
  });
});
