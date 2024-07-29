import React from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Avatar
} from "@mui/material";

const FavPage = () => {
  const location = useLocation();
  const testFavCoin = location.state?.favCoins;

  console.log(testFavCoin);

  return (
    <Container sx={{ border: "1px solid #ECEEF1", padding: "16px" }}>
      <Typography variant="h4" gutterBottom>
        Favorite Coins
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "center"
        }}
      >
        {testFavCoin &&
          testFavCoin.map((coin) => (
            <Card key={coin.id} sx={{ width: 300 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 120,
                  width: 120,
                  margin: "16px auto"
                }}
              >
                {/* what is the avatar used for check  */}
                <Avatar
                  src={coin.image}
                  alt={coin.name}
                  sx={{ height: "100%", width: "100%" }}
                />
              </Box>
              <CardContent>
                <Box>{coin.name}</Box>
                <Box>Symbol: {coin.symbol.toUpperCase()}</Box>
                <Box>Current Price: ${coin.current_price.toLocaleString()}</Box>
                <Box>Market Cap: ${coin.market_cap.toLocaleString()}</Box>
                <Box>24h High: ${coin.high_24h.toLocaleString()}</Box>
                <Box>24h Low: ${coin.low_24h.toLocaleString()}</Box>
                <Box>ATH: ${coin.ath.toLocaleString()}</Box>
                <Box>ATL: ${coin.atl.toLocaleString()}</Box>
                <Box>
                  24h Change: {coin.price_change_percentage_24h.toFixed(2)}%
                </Box>
                <Box>
                  Max Supply:{" "}
                  {coin.max_supply ? coin.max_supply.toLocaleString() : "N/A"}
                </Box>
              </CardContent>
            </Card>
          ))}
      </Box>
    </Container>
  );
};

export default FavPage;
