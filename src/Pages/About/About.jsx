import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import HomeIcon from "@mui/icons-material/Home";
import { useLocation } from "react-router-dom";
import CoinCard from "../../Componants/CoinCard/CoinCard";
import LineChart from "../../Componants/PlotlyGraphs/LineChart";
import { useEffect } from "react";
import { fetchCoinHistoricPrice } from "../../Store/Features/coinHistoricPrice/coinHistoricPrice";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../Componants/Header/Header";
import { Typography } from "@mui/material";
import { CoinOverView } from "../../Componants/CoinOverView/CoinOverView";
import CoinMarketView from "../../Componants/CoinMarketView/CoinMarketView";
import CoinCommunity from "../../Componants/CoinCommunity/CoinCommunity";
import { CoinDev } from "../../Componants/CoinDev/CoinDev";
import MyResponsiveLine from "../../Componants/PlotlyGraphs/MyResponsiveLine";

export const About = ({ coinHistoricPrice }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const coin = location.state?.coin;
  const newCoin = location.state?.filterCoin;
  const coinPrice = location.state?.coinHistoricPrice;
  const { statusUpdate } = useSelector((state) => state.coinStatusUpdate);

  useEffect(() => {
    dispatch(fetchCoinHistoricPrice(coin?.id));
  }, [dispatch]);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh"
      }}
    >
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

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection="row"
        sx={{
          height: "100vh",
          paddingTop: "64px"
        }}
      >

          <SideBar />

        <CoinOverView statusUpdate={statusUpdate} />
        <CoinMarketView statusUpdate={statusUpdate} />
        <CoinCommunity statusUpdate={statusUpdate} />
      </Box>
      <Box sx={{ border: "1px solid red", padding: "20px" }}>
        <MyResponsiveLine coinPrice={coinPrice} />
      </Box>
    </Box>
  );
};

{
  /* <CoinDev /> */
}
