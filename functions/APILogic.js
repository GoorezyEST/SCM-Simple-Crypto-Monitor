export async function fetchCryptoData(cryptoID) {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${cryptoID}`
  )
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });

  if (response) {
    const result = {
      name: response.name,
      price: response.market_data.current_price,
      image: response.image.small,
      last_month: response.market_data.price_change_percentage_30d_in_currency,
    };

    return result;
  }

  return "Error fetching data";
}
