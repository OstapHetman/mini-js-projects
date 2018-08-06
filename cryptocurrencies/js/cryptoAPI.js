class CryptoAPI {
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
