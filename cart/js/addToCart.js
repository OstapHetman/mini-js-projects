import { addToLocalStorage } from "./addToLocalStorage.js";

export const addToCart = () => {
  const addBtns = document.querySelectorAll(".add-to-cart-btn");
  let counter = 0;

  // Loop throw all btns and add event
  addBtns.forEach(btn => {
    btn.addEventListener("click", event => {
      const productName = event.target.getAttribute("data-productName");
      const productPrice = event.target.getAttribute("data-productPrice");
      counter++;

      addToLocalStorage(counter);

      // console.log(`${productName}, ${productPrice}`);
    });
  });
};
