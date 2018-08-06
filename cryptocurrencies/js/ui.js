class UI {
  constructor() {
    this.init();
  }
  init() {
    this.printCryptoCurrencies();
  }
  // Print the <option> for the form
  printCryptoCurrencies() {
    cryptoApi.getCryptoCurrenciesList().then(data => {
      const cryptoCurrencies = data.cryptoCurrencies;

      // Build the <select>
      const select = document.getElementById("cryptocurrency");
      cryptoCurrencies.forEach(currency => {
        // add the <option>
        const option = document.createElement("option");
        option.value = currency.id;
        option.appendChild(document.createTextNode(currency.name));
        select.appendChild(option);
      });
    });
  }
}
