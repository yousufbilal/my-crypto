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


export const assetPlatFormAPI = () => {
    return fetch('https://api.coingecko.com/api/v3/asset_platforms')
        .then(response => response.json())
        .then(data => data)
}


//Coins List 
export const CoinList = () => {
    return fetch("https://api.coingecko.com/api/v3/coins/list")
        .then(response => response.json());
}

//Coin Price
export const CoinPriceAPI = (coinIDs) => {
    return fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinIDs}&vs_currencies=usd`)
        .then(response => response.json())
        .catch(err => {
            console.error('Error fetching data from CoinGecko API:', err);
            throw err;
        });
};


//Trending Coins
export const trendingCoins = () => {
    return fetch('https://api.coingecko.com/api/v3/search/trending').
        then(response => response.json()).
        then(data => data)
}


//to get NFT DATA 
export const NFTAPI = (platFormData) => {
    // return fetch("https://api.coingecko.com/api/v3/nfts/asset_platform_id/contract/contract_address")
    return fetch(`https://api.coingecko.com/api/v3/nfts/${platFormData}/contract/0xBd3531dA5CF5857e7CfAA92426877b022e612cf8`)
        .then(response => response.json())
        .then(data => data)
}



//i need global variables that store the platform the id the dates so i can use them in different files 
