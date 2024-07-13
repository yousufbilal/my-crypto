import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";

const CoinCard = (coin) => {
  const { categories, status } = useSelector((state) => state.coinList);
  const isLoading = status === "loading" || !categories.length;
  
  console.log(coin)

  return (
    <Card>
      {isLoading ? (
        <div className="card-container">
          <Skeleton height={50} width={300} />
          <Skeleton height={40} width={200} />
          <Skeleton height={40} width={150} />
        </div>
      ) : (
        <CardContent>
          <Typography variant="h5" component="div"></Typography>
          <Typography variant="body2" color="text.secondary">
            <Box>Coin Name: {coin?.name}</Box>
            <Box>Current Price: {coin?.current_price}</Box>
            <Box>Market Cap: {coin?.market_cap}</Box>
            <Box>Price Change: {coin?.price_change_percentage_24h}</Box>
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default CoinCard;
