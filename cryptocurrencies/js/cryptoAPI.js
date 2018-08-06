class CryptoAPI {
  // Query the rest api
  async queryAPI(currency, cryptoCurrency) {
    // Query the URL
    const url = await fetch(
      `https://api.coinmarketcap.com/v1/ticker/${cryptoCurrency}/?convert=${currency}`
    );

    const result = await url.json();

    return { result };
  }

  // Get All Cryptocurrencies
  async getCryptoCurrenciesList() {
    const url = await fetch("https://api.coinmarketcap.com/v1/ticker/");
    // Return as a json
    const cryptoCurrencies = await url.json();

    return {
      cryptoCurrencies
    };
  }
}
