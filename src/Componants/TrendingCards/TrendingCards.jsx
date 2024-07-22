import { Box, border } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoinTrending } from "../../Store/Features/coinTrending/coinTrending"; // correct import path
import { TableBody, TableCell, TableContainer, TableHead } from "@mui/material";

const TrendingCards = () => {
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
      sx={{
        width: "500px",
        height: "400px",
        background: "white",
        overflow: "auto",
        border: "none",
        boxShadow: "none",
        padding: "10px",
        borderRadius: "10px",
        "&::-webkit-scrollbar": {
          display: "none"
        },
        "-ms-overflow-style": "none",
        "scrollbar-width": "none"
      }}
    >
      <h3>Trending Coins</h3>
      {trending && trending.coins ? (
        <Box>
          {trending.coins.map((item) => (
            <>
              <li
                style={{
                  width: "100%",
                  justifyContent: "space-between",
                  display: "flex",
                  flexDirection: "row",
                  // border: "1px solid gold",
                  borderRadius: "5px",
                  marginBottom: "20px",
                  border: "1px solid #ddd" ,
                  padding:"10px"
                }}
              >
                <img
                  src={item.item.small}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "5px"
                  }}
                />
                <Box
                  width={"100%"}
                  justifyContent={"center"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  <div>
                    {item.item.symbol} price:{coinPriceFormat()}
                  </div>
                </Box>
                <img
                  src={item.item.data.sparkline}
                  alt={`Sparkline for ${item.name}`}
                  style={{
                    borderRadius: "5px",
                    width: "auto",
                    height: "auto"
                  }}
                />
              </li>
            </>
          ))}
        </Box>
      ) : (
        <p>No items available</p>
      )}
    </Box>
  );
};

export default TrendingCards;

//fetch('https://api.coingecko.com/api/v3/search/trending', options)
