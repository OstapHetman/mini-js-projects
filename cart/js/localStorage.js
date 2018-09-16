export const storeToLocalStorage = product => {
  let products;
  if (localStorage.getItem("products") === null) {
    products = [];
  } else {
    products = JSON.parse(localStorage.getItem("products"));
  }
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
};
