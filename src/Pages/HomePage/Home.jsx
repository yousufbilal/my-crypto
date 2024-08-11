import { Box, border } from "@mui/system";
import SideBar from "../SideBar/SideBar";
import CoinDataTable from "../../Componants/CoinDataTable/CoinDataTable";
import Header from "../../Componants/Header/Header";
import TrendingCards from "../../Componants/TrendingCards/TrendingCards";
import NFTCards from "../../Componants/NFTCards/NFTCards";
import DeFiCard from "../../Componants/DeFiCard/DeFiCard";
import "./Home.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

export const Home = () => {
  const [favCoins, setFavCoins] = useState([]);

  const navigate = useNavigate();

  const favButtonHandler = () => {
    navigate("/FavPage", { state: { favCoins } });
  };
  return (
    <Box
      display="flex"
      flexDirection="row"
      overflow="hidden"
      sx={{
        background: "white",
        height: "100%",
        width: "100%",
        position: "relative"
      }}
    >
      {/* <LocalStorageFunc/> */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "relative"
        }}
      >
        {/* Header */}
        <Box
          sx={{
            width: "100%",
            height: "64px",
            position: "absolute",
            top: 0,
            zIndex: 10,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            background: "#ADD8E6"
          }}
        >
          <Header />
        </Box>

        {/* Main Content */}
        <Box display="flex" flexDirection="row" sx={{ paddingTop: "64px" }}>
          {/* Sidebar */}
          <Box>
            <SideBar />
          </Box>

          {/* Main Content Area */}
          <Box display="flex" flexDirection="column" width="100%">
            <Box display="flex" flexDirection="column" padding={"20px"}>
              <Box
                width="100%"
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent={"space-between"}
                borderRadius={"5px"}
                marginBottom={"30px"}
                marginTop={"30px"}
                sx={{ backgroundColor: "#ECEEF1", padding: 3 }}
              >
                <TrendingCards />
                <NFTCards />
                <DeFiCard />
              </Box>
              <Box>
                <CoinDataTable
                  setFavCoins={setFavCoins}
                  favCoins={favCoins}
                  favButtonHandler={favButtonHandler}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* <CoinStatus /> */}
    </Box>
  );
};
