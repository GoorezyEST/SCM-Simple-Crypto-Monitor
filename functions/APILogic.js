//Internal function to fetch each crypto information
async function fetchCryptoData(cryptoID) {
  try {
    //API Call with the crypto ID
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${cryptoID}`
    );
    //If the call fails
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    //Format data into JSON
    const data = await response.json();
    //Store data in our prefered format
    const result = {
      name: data.name,
      price: data.market_data.current_price,
      image: data.image.small,
      last_month: data.market_data.price_change_percentage_30d_in_currency,
      last_24: data.market_data.price_change_percentage_24h_in_currency,
      last_week: data.market_data.price_change_percentage_7d_in_currency,
      symbol: data.symbol,
    };
    //Return the data
    return result;
  } catch (error) {
    //Handle possible errors
    console.error("Error fetching crypto data:", error);
    return null;
  }
}

//Import list of cryptos to map
import { CryptosData } from "@/data/Cryptocurrencies";

export async function getCryptos() {
  try {
    //Make all the API Calls mapping the cryptos information
    const promises = CryptosData.map((item) => fetchCryptoData(item.id));
    //Await until all promises are made
    const data = await Promise.all(promises);
    //Return the result
    return data;
  } catch (error) {
    //Handle possible errors
    console.error("Error fetching crypto data:", error);
    return null;
  }
}
