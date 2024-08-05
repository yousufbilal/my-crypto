import { Card, CardContent, Typography, Divider, Box } from "@mui/material";
import React from "react";

const CoinMarketView = ({ statusUpdate }) => {
  const marketData = statusUpdate?.market_data;

  return (
    <Card
      sx={{
        maxWidth: 600,
        maxHeight: 600,
        margin: "auto",
        borderRadius: 2,
        boxShadow: 3,
        overflow: "hidden"
      }}
      onMouseEnter={(e) => (e.currentTarget.style.overflow = "auto")}
      onMouseLeave={(e) => (e.currentTarget.style.overflow = "hidden")}
    >
      <CardContent>
        <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
          Market Data
        </Typography>
        <Divider sx={{ marginBottom: 2 }} />

        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body1">
            <strong>All Time High:</strong> ${marketData?.ath?.usd ?? "N/A"}
          </Typography>
          <Typography variant="body1">
            <strong>All Time Low:</strong> ${marketData?.atl?.usd ?? "N/A"}
          </Typography>
          <Typography variant="body1">
            <strong>All Time Change Percentage:</strong>{" "}
            {marketData?.atl_change_percentage?.usd ?? "N/A"}%
          </Typography>
          <Typography variant="body1">
            <strong>Circulating Supply:</strong>{" "}
            {marketData?.circulating_supply ?? "N/A"}
          </Typography>
          <Typography variant="body1">
            <strong>Current Price:</strong> $
            {marketData?.current_price?.usd ?? "N/A"}
          </Typography>
          <Typography variant="body1">
            <strong>Last Updated:</strong> {marketData?.last_updated ?? "N/A"}
          </Typography>
        </Box>

        <Divider sx={{ marginBottom: 2 }} />

        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body1">
            <strong>Low 24h:</strong> ${marketData?.low_24h?.usd ?? "N/A"}
          </Typography>
          <Typography variant="body1">
            <strong>Market Cap:</strong> ${marketData?.market_cap?.usd ?? "N/A"}
          </Typography>
          <Typography variant="body1">
            <strong>Market Cap Change 24h:</strong> $
            {marketData?.market_cap_change_24h_in_currency?.usd ?? "N/A"}
          </Typography>
          <Typography variant="body1">
            <strong>Market Cap Change Percentage 24h:</strong>{" "}
            {marketData?.market_cap_change_percentage_24h ?? "N/A"}%
          </Typography>
          <Typography variant="body1">
            <strong>Market Cap Rank:</strong>{" "}
            {marketData?.market_cap_rank ?? "N/A"}
          </Typography>
        </Box>

        <Divider sx={{ marginBottom: 2 }} />

        <Box sx={{ marginBottom: 2 }}>
          <Typography variant="body1">
            <strong>Price Change 24h:</strong> $
            {marketData?.price_change_24h ?? "N/A"}
          </Typography>
          <Typography variant="body1">
            <strong>Price Change Percentage 24h:</strong>{" "}
            {marketData?.price_change_percentage_24h_in_currency?.usd ?? "N/A"}%
          </Typography>
          <Typography variant="body1">
            <strong>Price Change Percentage 7d:</strong>{" "}
            {marketData?.price_change_percentage_7d_in_currency?.usd ?? "N/A"}%
          </Typography>
        </Box>

        <Divider sx={{ marginBottom: 2 }} />

        <Box>
          <Typography variant="body1">
            <strong>Total Volume:</strong> $
            {marketData?.total_volume?.usd ?? "N/A"}
          </Typography>
          <Typography variant="body1">
            <strong>All Time High Change:</strong>{" "}
            {marketData?.ath_change_percentage?.usd ?? "N/A"}%
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CoinMarketView;
