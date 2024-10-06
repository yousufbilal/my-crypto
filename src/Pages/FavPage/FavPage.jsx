import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Avatar
} from "@mui/material";
import { getDatabase } from "firebase/database";
import { ref, set, get } from "firebase/database";
import { useSSR } from "react-i18next";
import Header from "../../Componants/Header/Header";

const FavPage = () => {
  const location = useLocation();
  const testFavCoin = location.state?.favCoins;
  const favAccountHolder = location.state?.currenAccountUser;
  const favAccountHolderName = location.state?.currenAccountUserName;
  const favAccountHolderPassword = location.state?.currenAccountUserPassword;

  // const db = getDatabase();
  // const userRef = ref(db, `users/${favAccountHolder}`);
  // const userDataResponse = get(userRef);
  // // const userData = userDataResponse.val();

  // useEffect(() => {
  //   set(userRef, {
  //     userName: favAccountHolderName,
  //     userPassWord: favAccountHolderPassword,
  //     // currentFavList: location.state?.favCoins
  //     currentFavList: testFavCoin
  //   });
  // }, []);

  return (
    <Container sx={{ border: "1px solid #ECEEF1", padding: "16px" }}>
      <Header />

      <Typography variant="h4" gutterBottom>
        {/* {favAccountHolder} Favorite Coins */}
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
