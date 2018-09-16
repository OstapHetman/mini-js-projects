export const getFromLocalStorage = () => {
  const productCounter = document.querySelector("#counter");
  let products;
  if (localStorage.getItem("products") === null) {
    products = [];
  } else {
    products = JSON.parse(localStorage.getItem("products"));
  }

  products.forEach(item => {
    productCounter.innerHTML = item;
  });
};
