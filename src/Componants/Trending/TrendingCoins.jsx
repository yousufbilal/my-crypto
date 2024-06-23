import React, { useEffect, useState } from "react";
import { dummyData } from "../../HelperFile/helper";
import Container from '@mui/material/Container';

import  "./TrendingCoins.css"


const TrendingCoins = () => {
  const [trendingCoinHeading, setTrendingCoinHeading] = useState("");
  const [trendingMarketChange, setTrendingMarketChange] = useState("");
  const [trendingSlug, setTrendingSlug] = useState("");
  const [trendingMarketCap, setTrendingMarketCap] = useState("");
  const [trendingMarketCapBtc, setTrendingMarketCapBtc] = useState("");
  const [trendingTotalVolume, setTrendingTotalVolume] = useState("");

  useEffect(() => {
    const fetchData = () => {
      setTrendingCoinHeading(dummyData.name);
      setTrendingMarketChange(dummyData.market_cap_1h_change);
      setTrendingSlug(dummyData.slug);
      setTrendingMarketCap(dummyData.data.market_cap);
      setTrendingMarketCapBtc(dummyData.data.market_cap_btc);
      setTrendingTotalVolume(dummyData.data.total_volume);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>TrendingCoins Component</h1>

      <Container className="trending-container">
        <p>Trending Coin Heading: {trendingCoinHeading}</p>
        <p>Trending Market Cap Change (1h): {trendingMarketChange}</p>
        <p>Trending Slug: {trendingSlug}</p>
        <p>Trending Market Cap: {trendingMarketCap}</p>
        <p>Trending Market Cap (BTC): {trendingMarketCapBtc}</p>
        <p>Trending Total Volume: {trendingTotalVolume}</p>
      </Container>
    </>
  );
};

export default TrendingCoins;
