let apiUrl =
  "https://v6.exchangerate-api.com/v6/9938a6ae2b4f18570f810514/latest/USD";
let fromCurrency = document.querySelector(".fromcurrency");
let toCurrency = document.querySelector(".tocurrency");
let convertBtn = document.querySelector(".convert-btn");
let result = document.querySelector(".result");

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

fromCurrency.value = "USD";
toCurrency.value = "INR";

let convertCurrency = async () => {
  let amount = document.querySelector(".amount").value;
  let fcurrency = fromCurrency.value;
  let tcurrency = toCurrency.value;

  if (amount.length != 0) {
    let fetchData = await fetch(apiUrl);
    let data = await fetchData.json();
    let fExChRa = data.conversion_rates[fcurrency];
    let tExChRa = data.conversion_rates[tcurrency];
    let convertedAmount = (amount / fExChRa) * tExChRa;
    result.innerHTML = `${amount} ${fcurrency} = ${convertedAmount.toFixed(
      2
    )} ${tcurrency}`;
  } else {
    result.innerHTML = "Please Fill in the amount";
  }
};

convertBtn.addEventListener("click", convertCurrency);
