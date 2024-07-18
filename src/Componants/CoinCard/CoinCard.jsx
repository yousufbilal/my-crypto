import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";

const CoinCard = ({ coin }) => {
  const { categories, status } = useSelector((state) => state.coinList);
  const isLoading = status === "loading" || !categories.length;

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
              src={coin.image}
              alt={coin.name}
              style={{ width: 50, height: 50 }}
            />

            <Box sx={{ border: "1px solid red" , padding:"10px" }}>
              {/*  Basic Information */}
              <Box>Name: {coin?.name}</Box>
              <Box>Symbol: {coin?.symbol}</Box>
              <Box>ID: {coin?.id}</Box>
            </Box>

            <Box sx={{ border: "1px solid red", marginTop:"10px", padding:"10px" }}>
              {/* // Price Information */}
              <Box>Current Price: {coin?.current_price}</Box>
              <Box>All Time High: {coin?.ath}</Box>
              <Box>
                All Time High Change Percentage: {coin?.ath_change_percentage}
              </Box>
              <Box>All Time High Date: {coin?.ath_date}</Box>
              <Box>All Time Low: {coin?.atl}</Box>
              <Box>
                All Time Low Change Percentage: {coin?.atl_change_percentage}
              </Box>
              <Box>All Time Low Date: {coin?.atl_date}</Box>
              <Box>High 24h: {coin?.high_24h}</Box>
              <Box>Low 24h: {coin?.low_24h}</Box>
              <Box>Price Change 24h: {coin?.price_change_24h}</Box>
              <Box>
                Price Change Percentage 24h: {coin?.price_change_percentage_24h}
              </Box>
            </Box>

            <Box sx={{ border: "1px solid red" , marginTop:"10px" , padding:"10px"  }}>
              {/* // Supply and Market Information */}
              <Box>Circulating Supply: {coin?.circulating_supply}</Box>
              <Box>Total Supply: {coin?.total_supply}</Box>
              <Box>Max Supply: {coin?.max_supply}</Box>
              <Box>Market Cap: {coin?.market_cap}</Box>
              <Box>Market Cap Change 24h: {coin?.market_cap_change_24h}</Box>
              <Box>
                Market Cap Change Percentage 24h:{" "}%
                {coin?.market_cap_change_percentage_24h}
              </Box>
              <Box>Market Cap Rank: {coin?.market_cap_rank}</Box>
              <Box>
                Fully Diluted Valuation: {coin?.fully_diluted_valuation}
              </Box>
              <Box>Total Volume: {coin?.total_volume}</Box>
            </Box>

            <Box sx={{ border: "1px solid red" , marginTop:"10px"  , padding:"10px" }}>
              {/* // Additional Information */}
              <Box>ROI: {coin?.roi}</Box>
              <Box>Last Updated: {coin?.last_updated}</Box>
            </Box>
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default CoinCard;
