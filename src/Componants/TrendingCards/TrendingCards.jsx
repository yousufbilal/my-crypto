import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoinTrending } from "../../Store/Features/coinTrending/coinTrending"; // correct import path
import { TableBody, TableCell, TableContainer, TableHead } from "@mui/material";

const TrendingCards = ({ label }) => {
  const dispatch = useDispatch();

  const { trending, coinTrendingStatus, coinTrendingErrors } = useSelector(
    (state) => state.coinTrending
  );

  console.log(trending.coins);

  const coinPriceFormat = () => {
    let coinPrice = 0;
    if (trending && trending.coins) {
      trending.coins.map(
        (item) => (coinPrice = item.item.data.price.toFixed(2))
      );
    }
    return coinPrice;
  };

  useEffect(() => {
    coinPriceFormat();
  }, [trending]);

  useEffect(() => {
    dispatch(addCoinTrending());
  }, [dispatch]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      overflow={"scroll"}
      sx={{ height: "400px", width: "500px" }}
    >
      {label}
      {trending && trending.coins ? (
        <ol>
          {trending.coins.map((item) => (
            <>
              <li>
                <img
                  src={item.item.small}
                  style={{ width: "50px", height: "50px", marginRight: "10px" }}
                />
                {item.item.symbol} price:{coinPriceFormat()}
                <img
                  src={item.item.data.sparkline}
                  alt={`Sparkline for ${item.name}`}
                  style={{ width: "200px", height: "auto" }}
                />
              </li>
            </>
          ))}
        </ol>
      ) : (
        <p>No items available</p>
      )}
    </Box>
  );
};

export default TrendingCards;

//fetch('https://api.coingecko.com/api/v3/search/trending', options)
