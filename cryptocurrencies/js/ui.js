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

  // Print a message
  printMessage(msg, className) {
    const div = document.createElement("div");
    const msgDiv = document.querySelector(".messages");

    div.className = className;
    div.appendChild(document.createTextNode(msg));
    msgDiv.appendChild(div);

    // Remove msg
    setTimeout(() => {
      document.querySelector(".messages div").remove();
    }, 2000);
  }

  // Print the result
  displayResult(result) {
    console.log(result);
  }
}
