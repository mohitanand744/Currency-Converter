let apiUrl =
  "https://v6.exchangerate-api.com/v6/9938a6ae2b4f18570f810514/latest/USD";
let fromCurrency = document.querySelector(".fromcurrency");
let toCurrency = document.querySelector(".tocurrency");

currencies.forEach((Currency) => {
  let options = document.createElement("option");
  options.value = Currency;
  options.text = Currency;
  fromCurrency.append(options);
});

currencies.forEach((Currency) => {
  let options = document.createElement("option");
  options.value = Currency;
  options.text = Currency;
  toCurrency.append(options);
});
