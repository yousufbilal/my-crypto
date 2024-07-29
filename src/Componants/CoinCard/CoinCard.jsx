import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


const CoinCard = ({ coin, newCoin }) => {
  const { categories, status } = useSelector((state) => state.coinList);
  const isLoading = status === "loading" || !categories.length;

  const displayCoin = coin || newCoin;

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
            <img
              src={displayCoin.image}
              alt={displayCoin.name}
              style={{ width: 50, height: 50 }}
            />

            <Box sx={{ padding: "10px" }}>
              {/*  Basic Information */}
              <Box>Name: {displayCoin?.name}</Box>
              <Box>Symbol: {displayCoin?.symbol}</Box>
              <Box>ID: {displayCoin?.id}</Box>
            </Box>

            <Box sx={{ marginTop: "10px", padding: "10px" }}>
              {/* // Price Information */}
              <Box>Current Price: {displayCoin?.current_price}</Box>
              <Box>All Time High: {displayCoin?.ath}</Box>
              <Box>
                All Time High Change Percentage:{" "}
                {displayCoin?.ath_change_percentage}
              </Box>
              <Box>All Time High Date: {displayCoin?.ath_date}</Box>
              <Box>All Time Low: {displayCoin?.atl}</Box>
              <Box>
                All Time Low Change Percentage:{" "}
                {displayCoin?.atl_change_percentage}
              </Box>
              <Box>All Time Low Date: {displayCoin?.atl_date}</Box>
              <Box>High 24h: {displayCoin?.high_24h}</Box>
              <Box>Low 24h: {displayCoin?.low_24h}</Box>
              <Box>Price Change 24h: {displayCoin?.price_change_24h}</Box>
              <Box>
                Price Change Percentage 24h:{" "}
                {displayCoin?.price_change_percentage_24h}
              </Box>
            </Box>

            <Box sx={{ marginTop: "10px", padding: "10px" }}>
              {/* // Supply and Market Information */}
              <Box>Circulating Supply: {displayCoin?.circulating_supply}</Box>
              <Box>Total Supply: {displayCoin?.total_supply}</Box>
              <Box>Max Supply: {displayCoin?.max_supply}</Box>
              <Box>Market Cap: {displayCoin?.market_cap}</Box>
              <Box>
                Market Cap Change 24h: {displayCoin?.market_cap_change_24h}
              </Box>
              <Box>
                Market Cap Change Percentage 24h: %
                {displayCoin?.market_cap_change_percentage_24h}
              </Box>
              <Box>Market Cap Rank: {displayCoin?.market_cap_rank}</Box>
              <Box>
                Fully Diluted Valuation: {displayCoin?.fully_diluted_valuation}
              </Box>
              <Box>Total Volume: {displayCoin?.total_volume}</Box>
            </Box>

            <Box sx={{ marginTop: "10px", padding: "10px" }}>
              {/* // Additional Information */}
              <Box>ROI: {displayCoin?.roi}</Box>
              <Box>Last Updated: {displayCoin?.last_updated}</Box>
            </Box>
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default CoinCard;
