import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NFTAPI, assetPlatFormAPI } from "../../API/CoinGeckoAPI";
import { useSearchParams } from "react-router-dom";

const NFT = () => {
  //   const nftTestFunc = () => {
  //     let nftKeys = Object.keys(nft);
  //     let testReturn = "";
  //     for (let i = 0; i < nftKeys.length; i++) {
  //       let key = nftKeys[i];
  //       let value = nft[key];
  //       //   console.log(`${key}: ${value}`);
  //     }
  //   };

  //   for (let i = 0; i < nftKeys.length; i++) {
  //     let key = nftKeys[i];
  //     let value = nft[key];
  //     console.log(`${key}:`, value);
  //   }

  let platformDummyData = [
    {
      id: "valobit",
      chain_identifier: null,
      name: "Valobit",
      shortname: "",
      native_coin_id: "valobit"
    },
    {
      id: "iota-evm",
      chain_identifier: 8822,
      name: "Iota EVM",
      shortname: "",
      native_coin_id: "iota"
    },
    {
      id: "factom",
      chain_identifier: null,
      name: "Factom",
      shortname: "",
      native_coin_id: "factom"
    },
    {
      id: "neo",
      chain_identifier: null,
      name: "NEO",
      shortname: "",
      native_coin_id: "neo"
    }
  ];

  const [platFormData, setPlatFormData] = useState();

  const fetchPlatForm = async () => {
    let response = await assetPlatFormAPI();
    setPlatFormData(
      response.map((value) => {
        console.log(value.id);
      })
    );
  };

  const platformID = () => {
    setPlatFormData(
      platformDummyData.map((value) => {
        console.log(value.id);
      })
    );
  };

  const fetchNFT = async () => {
    let response = await NFTAPI(platFormData);
  };

  useEffect(() => {
    fetchNFT()
    // fetchPlatForm()
    platformID();
  }, []);

  return <></>;
};

export default NFT;

// {Object.entries(nft).map(([key, value], index) => {
//     return (
//       <CardContent sx={{border:"1px solid black"}}>
//         <Typography>{value.name}</Typography>
//         <Typography>{value.symbol}</Typography>
//         <Typography>{value.asset_platform_id}</Typography>
//       </CardContent>
//     );
//   })}

// First NFT object
// let nft1 =
// {
//     id: "pudgy-penguins",
//     contract_address: "0xBd3531dA5CF5857e7CfAA92426877b022e612cf8",
//     asset_platform_id: "ethereum",
//     name: "Pudgy Penguins",
//     symbol: "PPG",
//     image: {
//       small:
//         "https://assets.coingecko.com/nft_contracts/images/38/small/da64989d9762c8a61b3c65917edfdf97.png?1707287183"
//     },
//     description:
//       "Pudgy Penguins is a collection of 8,888 unique NFTs featuring cute cartoon penguins, which are generated from a collection of 150 different hand-drawn traits.",
//     native_currency: "ethereum",
//     native_currency_symbol: "ETH",
//     floor_price: {
//       native_currency: 12.5,
//       usd: 42317
//     },
//     market_cap: {
//       native_currency: 111100,
//       usd: 376114941
//     },
//     volume_24h: {
//       native_currency: 429.88,
//       usd: 1455314
//     },
//     floor_price_in_usd_24h_percentage_change: 1.07067,
//     floor_price_24h_percentage_change: {
//       usd: 1.070670607177908,
//       native_currency: 1.214574898785425
//     },
//     market_cap_24h_percentage_change: {
//       usd: 1.0706706071776666,
//       native_currency: -0.4048582995951417
//     },
//     volume_24h_percentage_change: {
//       usd: -3.1983377669874073,
//       native_currency: -1.801855313900942
//     },
//     number_of_unique_addresses: 4752,
//     number_of_unique_addresses_24h_percentage_change: 0.08425,
//     volume_in_usd_24h_percentage_change: -3.19834,
//     total_supply: 8888,
//     one_day_sales: 36,
//     one_day_sales_24h_percentage_change: -2.7027027027027,
//     one_day_average_sale_price: 11.941194388888889,
//     one_day_average_sale_price_24h_percentage_change: 0.925870927379588,
//     links: {
//       homepage: "https://www.pudgypenguins.com/",
//       twitter: "https://twitter.com/pudgypenguins",
//       discord: "https://discord.gg/pudgypenguins"
//     },
//     floor_price_7d_percentage_change: {
//       usd: -18.00149482623651,
//       native_currency: -13.793103448275861
//     },
//     floor_price_14d_percentage_change: {
//       usd: -8.632353394310407,
//       native_currency: -8.619051100226626
//     },
//     floor_price_30d_percentage_change: {
//       usd: -14.376564931440935,
//       native_currency: -0.7779012541673281
//     },
//     floor_price_60d_percentage_change: {
//       usd: 15.27797587032817,
//       native_currency: -18.0327868852459
//     },
//     floor_price_1y_percentage_change: {
//       usd: 429.5685372855,
//       native_currency: 196.20853080568722
//     },
//     explorers: [
//       {
//         name: "Etherscan",
//         link: "https://etherscan.io/token/0xBd3531dA5CF5857e7CfAA92426877b022e612cf8"
//       },
//       {
//         name: "Ethplorer",
//         link: "https://ethplorer.io/address/0xBd3531dA5CF5857e7CfAA92426877b022e612cf8"
//       }
//     ]
//   },

//   // Second NFT object
//   {
//     id: "cryptokitties",
//     contract_address: "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d",
//     asset_platform_id: "ethereum",
//     name: "CryptoKitties",
//     symbol: "CK",
//     image: {
//       small: "https://www.cryptokitties.co/images/kitty-1.png"
//     },
//     description: "CryptoKitties is a game centered around breedable, collectible, and adorable creatures called CryptoKitties!",
//     native_currency: "ethereum",
//     native_currency_symbol: "ETH",
//     floor_price: {
//       native_currency: 0.03,
//       usd: 100
//     },
//     market_cap: {
//       native_currency: 5000,
//       usd: 17000000
//     },
//     volume_24h: {
//       native_currency: 20,
//       usd: 68000
//     },
//     floor_price_in_usd_24h_percentage_change: 0.5,
//     floor_price_24h_percentage_change: {
//       usd: 0.5,
//       native_currency: 1.2
//     },
//     market_cap_24h_percentage_change: {
//       usd: 1.8,
//       native_currency: -0.3
//     },
//     volume_24h_percentage_change: {
//       usd: 1.2,
//       native_currency: 1.5
//     },
//     number_of_unique_addresses: 5000,
//     number_of_unique_addresses_24h_percentage_change: 0.3,
//     volume_in_usd_24h_percentage_change: -0.8,
//     total_supply: 100000,
//     one_day_sales: 200,
//     one_day_sales_24h_percentage_change: -2.0,
//     one_day_average_sale_price: 0.025,
//     one_day_average_sale_price_24h_percentage_change: 0.8,
//     links: {
//       homepage: "https://www.cryptokitties.co/",
//       twitter: "https://twitter.com/CryptoKitties",
//       discord: "https://discord.gg/cryptokitties"
//     },
//     floor_price_7d_percentage_change: {
//       usd: -2.0,
//       native_currency: -1.5
//     },
//     floor_price_14d_percentage_change: {
//       usd: -1.2,
//       native_currency: -1.8
//     },
//     floor_price_30d_percentage_change: {
//       usd: -1.8,
//       native_currency: -0.5
//     },
//     floor_price_60d_percentage_change: {
//       usd: 1.2,
//       native_currency: -1.8
//     },
//     floor_price_1y_percentage_change: {
//       usd: 150.0,
//       native_currency: 90.0
//     },
//     explorers: [
//       {
//         name: "Etherscan",
//         link: "https://etherscan.io/token/0x06012c8cf97BEaD5deAe237070F9587f8E7A266d"
//       },
//       {
//         name: "Ethplorer",
//         link: "https://ethplorer.io/address/0x06012c8cf97BEaD5deAe237070F9587f8E7A266d"
//       }
//     ]
//   }

//   const nftTestFunc = () => {
//     let nftKeys = Object.keys(nft);
//     let testReturn = "";
//     for (let i = 0; i < nftKeys.length; i++) {
//       let key = nftKeys[i];
//       let value = nft[key];
//       //   console.log(`${key}: ${value}`);
//     }
//   };

//   useEffect(() => {
//     nftTestFunc();
//   }, []);

//   for (let i = 0; i < nftKeys.length; i++) {
//     let key = nftKeys[i];
//     let value = nft[key];
//     console.log(`${key}:`, value);
//   }
