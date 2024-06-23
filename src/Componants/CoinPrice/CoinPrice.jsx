import React, { useEffect, useState } from "react";
import { CoinPriceAPI, CoinList, CoinID } from "../../API/CoinGeckoAPI";
import { Box, width } from "@mui/system";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const CoinPrice = () => {
  let coinValueDummy = [
    {
      id: "bitcoin",
      symbol: "btc",
      name: "Bitcoin",
      image:
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
      current_price: 70187,
      market_cap: 1381651251183,
      market_cap_rank: 1,
      fully_diluted_valuation: 1474623675796,
      total_volume: 20154184933,
      high_24h: 70215,
      low_24h: 68060,
      price_change_24h: 2126.88,
      price_change_percentage_24h: 3.12502,
      market_cap_change_24h: 44287678051,
      market_cap_change_percentage_24h: 3.31157,
      circulating_supply: 19675987,
      total_supply: 21000000,
      max_supply: 21000000,
      ath: 73738,
      ath_change_percentage: -4.77063,
      ath_date: "2024-03-14T07:10:36.635Z",
      atl: 67.81,
      atl_change_percentage: 103455.83335,
      atl_date: "2013-07-06T00:00:00.000Z",
      roi: null,
      last_updated: "2024-04-07T16:49:31.736Z"
    },
    {
      id: "dogecoin",
      symbol: "doge",
      name: "Dogecoin",
      image:
        "https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256",
      current_price: 0.2568,
      market_cap: 33541612345,
      market_cap_rank: 10,
      fully_diluted_valuation: null,
      total_volume: 2456789123,
      high_24h: 0.2897,
      low_24h: 0.2489,
      price_change_24h: -0.0143,
      price_change_percentage_24h: -5.28,
      market_cap_change_24h: -123456789,
      market_cap_change_percentage_24h: -0.37,
      circulating_supply: 130976431476,
      total_supply: null,
      max_supply: null,
      ath: 0.7376,
      ath_change_percentage: -65.23,
      ath_date: "2021-05-08T14:56:32.634Z",
      atl: 0.0001,
      atl_change_percentage: 256800.0,
      atl_date: "2015-03-08T00:00:00.000Z",
      roi: null,
      last_updated: "2024-04-07T16:49:31.736Z"
    },

    {
      id: "ethereum",
      symbol: "eth",
      name: "Ethereum",
      image:
        "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
      current_price: 2323.45,
      market_cap: 271541849328,
      market_cap_rank: 2,
      fully_diluted_valuation: 271541849328,
      total_volume: 20154184933,
      high_24h: 2350.67,
      low_24h: 2280.12,
      price_change_24h: 43.21,
      price_change_percentage_24h: 1.89,
      market_cap_change_24h: 8976543210,
      market_cap_change_percentage_24h: 3.41,
      circulating_supply: 117122987,
      total_supply: 117122987,
      max_supply: null,
      ath: 4392.12,
      ath_change_percentage: -47.61,
      ath_date: "2022-11-10T14:56:32.634Z",
      atl: 0.42,
      atl_change_percentage: 552380.95,
      atl_date: "2015-10-20T00:00:00.000Z",
      roi: null,
      last_updated: "2024-04-07T16:49:31.736Z"
    },
    {
      id: "ripple",
      symbol: "xrp",
      name: "Ripple",
      image: "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731",
      current_price: 0.75,
      market_cap: 35000000000,
      market_cap_rank: 7,
      fully_diluted_valuation: null,
      total_volume: 1500000000,
      high_24h: 0.78,
      low_24h: 0.72,
      price_change_24h: 0.03,
      price_change_percentage_24h: 4.17,
      market_cap_change_24h: 50000000,
      market_cap_change_percentage_24h: 0.14,
      circulating_supply: 46700000000,
      total_supply: 100000000000,
      max_supply: 100000000000,
      ath: 3.84,
      ath_change_percentage: -80.46,
      ath_date: "2018-01-07T00:00:00.000Z",
      atl: 0.002686,
      atl_change_percentage: 27872.83,
      atl_date: "2014-05-22T00:00:00.000Z",
      roi: null,
      last_updated: "2024-04-07T16:49:31.736Z"
    },
    {
      id: "solana",
      symbol: "sol",
      name: "Solana",
      image: "https://assets.coingecko.com/coins/images/4128/large/coinmarketcap-solana-200.png?1616489452",
      current_price: 100.25,
      market_cap: 30000000000,
      market_cap_rank: 6,
      fully_diluted_valuation: null,
      total_volume: 2500000000,
      high_24h: 105.78,
      low_24h: 98.34,
      price_change_24h: 2.45,
      price_change_percentage_24h: 2.5,
      market_cap_change_24h: 450000000,
      market_cap_change_percentage_24h: 1.52,
      circulating_supply: 300000000,
      total_supply: 500000000,
      max_supply: null,
      ath: 258.34,
      ath_change_percentage: -61.15,
      ath_date: "2021-09-09T14:56:32.634Z",
      atl: 0.5,
      atl_change_percentage: 20000.0,
      atl_date: "2020-03-13T00:00:00.000Z",
      roi: null,
      last_updated: "2024-04-07T16:49:31.736Z"
    },
    {
      id: "terra-luna",
      symbol: "luna",
      name: "Terra",
      image: "https://assets.coingecko.com/coins/images/8284/large/luna1557227471663.png?1567147072",
      current_price: 50.75,
      market_cap: 15000000000,
      market_cap_rank: 11,
      fully_diluted_valuation: null,
      total_volume: 1800000000,
      high_24h: 52.34,
      low_24h: 48.12,
      price_change_24h: 1.23,
      price_change_percentage_24h: 2.48,
      market_cap_change_24h: 250000000,
      market_cap_change_percentage_24h: 1.69,
      circulating_supply: 300000000,
      total_supply: 500000000,
      max_supply: null,
      ath: 72.45,
      ath_change_percentage: -30.0,
      ath_date: "2023-05-15T14:56:32.634Z",
      atl: 0.25,
      atl_change_percentage: 20200.0,
      atl_date: "2020-04-02T00:00:00.000Z",
      roi: null,
      last_updated: "2024-04-07T16:49:31.736Z"
    },
    {
      id: "cardano",
      symbol: "ada",
      name: "Cardano",
      image: "https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860",
      current_price: 1.50,
      market_cap: 50000000000,
      market_cap_rank: 5,
      fully_diluted_valuation: null,
      total_volume: 3500000000,
      high_24h: 1.60,
      low_24h: 1.45,
      price_change_24h: 0.05,
      price_change_percentage_24h: 3.45,
      market_cap_change_24h: 1000000000,
      market_cap_change_percentage_24h: 2.04,
      circulating_supply: 33000000000,
      total_supply: 45000000000,
      max_supply: 45000000000,
      ath: 3.10,
      ath_change_percentage: -51.61,
      ath_date: "2021-05-16T14:56:32.634Z",
      atl: 0.0234,
      atl_change_percentage: 6314.52,
      atl_date: "2020-03-13T00:00:00.000Z",
      roi: null,
      last_updated: "2024-04-07T16:49:31.736Z"
    }
  
  ];

  const [coinListData, setCoinListData] = useState();
  const [coinNamePrice, setCoinNamePrice] = useState();

  // const CoinIDFunc = () => {
  //   const ids = coinListDummyData.map((coin) => coin.id);
  //   setCoinListData(ids);
  // };

  //   const CoinPriceFunc = () => {

  //     const priceKeys=Object.keys(coinValueDummy)
  //     priceKeys.map(coin=>{
  //       console.log(coinValueDummy[coin].usd)
  //       console.log(coinValueDummy[coin])

  //     })
  //     // console.log(coinValueDummy.bitcoin.usd)
  // };

  // const CoinPriceFunc = () => {
  //   const priceKeys = Object.keys(coinValueDummy);
  //  const priceNameCoin= priceKeys.map(coin => {
  //       const name = coin;
  //       const usdValue = coinValueDummy[coin].usd;
  //       setCoinNamePrice(priceNameCoin)
  //   });
  // };

  // let priceKeys;
  // const CoinPriceFunc = () => {
  //   priceKeys = Object.keys(coinValueDummy);
  //   // const formattedPrices = priceKeys.map(coin => {
  //   //   const name = coin;
  //   //   const usdValue = coinValueDummy[coin].usd;
  //   //   return `${name}: ${usdValue}`;
  //   // });
  //   // setCoinNamePrice(formattedPrices.join('\n'));
  // };

  useEffect(() => {
    // CoinIDFunc();
    // CoinPriceFunc();
  }, []);

  const fetchCoinPrice = async () => {
    const response = await CoinPriceAPI(coinListData);
    console.log(response);
  };

  // const fetchCoinID = async () => {
  //   const response = await CoinList();
  //   console.log(response);
  // };

  const fetchCoinList = async () => {
    const response = await CoinList();
    console.log(response);
  };

  // useEffect(() => {
  //   fetchCoinPrice(coinListData)
  //   // fetchCoinList();
  // }, [coinListData]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Coin Symbol</TableCell>
            <TableCell>Coin Name</TableCell>
            <TableCell>Coin Current Price</TableCell>
            <TableCell>Coin Market Cap</TableCell>
            <TableCell>Coin Percentage Change</TableCell>
            <TableCell>Coin Last Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(coinValueDummy).map(([key, value], index) => (
            <TableRow>
              <TableCell>
                <img
                  src={value.image}
                  style={{ width: 50, height: 50 }} 
                />
              </TableCell>
              <TableCell>{value.symbol}</TableCell>
              <TableCell>{value.name}</TableCell>
              <TableCell>{value.current_price}</TableCell>
              <TableCell>{value.market_cap}</TableCell>
              <TableCell>{value.price_change_percentage_24h}</TableCell>
              <TableCell>{value.last_updated}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CoinPrice;
