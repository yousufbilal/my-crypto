import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoinTrending } from "../../Store/Features/coinTrending/coinTrending"; // correct import path
import { TableBody, TableCell, TableContainer, TableHead } from "@mui/material";

const Cards = ({ label }) => {
  const dispatch = useDispatch();

  const { trending, coinTrendingStatus, coinTrendingErrors } = useSelector(
    (state) => state.coinTrending
  );

  const testFunc = () => {
    // if (trending && trending.coins) {
    //   for (let i = 0; i < trending.coins.length; i++) {
    //     for (let j = 0; j < trending.coins.length; j++) {
    //       // console.log(trending.coins[i].id[j]);
    //       console.log(trending.coins[i].item.id);
    //     }
    //   }
    // }
    // if (trending && trending.coins) {
    //   trending.coins.map((item) => {
    //     console.log(item);
    //     // console.log(item.id);
    //   });
    // }
    // if (trending && trending.coins) {
    //   trending.coins.map((item) => {
    //     console.log(item.item.id);
    //     // console.log(item.id);
    //   });
    // }
    console.log(trending.coins);
  };

  useEffect(() => {
    testFunc();
  }, [trending]);

  useEffect(() => {
    dispatch(addCoinTrending());
  }, [dispatch]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      overflow={"scroll"}
      sx={{ height: "400px", width: "500px", border: "1px solid black" }}
    >
      {label}
      {trending && trending.coins ? (
        <ol>
          {trending.coins.map((item) => (
            <>
              <li>
                <img
                  src={item.item.small}
                  alt={item.item.symbol}
                  style={{ width: "50px", height: "50px", marginRight: "10px" }}
                />
                {item.item.symbol}______{item.item.data.price}
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

export default Cards;

//fetch('https://api.coingecko.com/api/v3/search/trending', options)
