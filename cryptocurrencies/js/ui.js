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
  displayResult(result, currency) {
    let template = "";
    let currencyName;

    currencyName = "price_" + currency.toLowerCase();
    const value = result[currencyName];

    const prevResult = document.querySelector("#result > div");

    if (prevResult) {
      prevResult.remove();
    }

    template += `
    <div class="card cyan darken-3">
        <div class="card-content white-text">
            <span class="card-title">Result</span>
            <p>The price of ${result.name} from ${currency} is ${value}</p>
            <p>Last Hour: ${result.percent_change_1h} %</p>
            <p>Last Day: ${result.percent_change_24h} %</p>
            <p>Last 7 Days: ${result.percent_change_7d} %</p>

        </div>
    </div>
    `;

    this.showSpinner();

    setTimeout(() => {
      const divResult = document.querySelector("#result");
      divResult.innerHTML = template;

      document.querySelector(".spinner img").remove();
    }, 2000);
  }

  // Show spinner
  showSpinner() {
    const spinnerGif = document.createElement("img");
    spinnerGif.src = "img/spinner.gif";
    document.querySelector(".spinner").appendChild(spinnerGif);
  }
}
