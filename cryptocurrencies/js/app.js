// Instantiate the class
const cryptoApi = new CryptoAPI();
const ui = new UI();

// Create vars
const form = document.getElementById("form");

// Events
form.addEventListener("submit", e => {
  e.preventDefault();
  // read currency
  const currencySelect = document.getElementById("currency").value;
  // read crypticurrency
  const cryptoCurrencySelect = document.getElementById("cryptocurrency").value;

  console.log(`${currencySelect} : ${cryptoCurrencySelect}`);
  // Validate selects
});
