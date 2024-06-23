// export const CoinGeckoTrending = async () => {
//     try {
//         const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching trending coins:', error);
//         return null;
//     }
// };



//   export const CoinGeckoTrending = async () => {
//     try {
//       const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching trending coins:', error);
//       return null; 
//     }
//   };

// const options = {
//     method: 'GET',
//     headers: { accept: 'application/json' }
// };




// https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd

// return fetch("https://api.coingecko.com/api/v3/simple/price?ids=${CoinPriceAPI}&vs_currencies=${usd}")


export const CoinList = () => {
    return fetch("https://api.coingecko.com/api/v3/coins/list")
        .then(response => response.json());
}


export const CoinPriceAPI = (coinIDs) => {
    return fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinIDs}&vs_currencies=usd`)
        .then(response => response.json())
        .catch(err => {
            console.error('Error fetching data from CoinGecko API:', err);
            throw err;
        });
};





export const trendingCoins = () => {
    return fetch('https://api.coingecko.com/api/v3/search/trending').
        then(response => response.json()).
        then(data => data)

}

