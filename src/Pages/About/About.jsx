import { Box } from "@mui/system";
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

export const About = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const coin = location.state?.coin;
  const newCoin = location.state?.filterCoin;
  const coinPrice = location.state?.coinHistoricPrice;

  useEffect(() => {
    dispatch(fetchCoinHistoricPrice(coin?.id));
  }, [dispatch]);

  return (
    <>
      ABOUT PAGE
      <Box
        sx={{
          display: "flex",
          flex: 1,
          alignItems: "center"
        }}
      >
        {/* <Header /> */}
        <SideBar />
        <CoinCard coin={coin} newCoin={newCoin} /> 
        
        <LineChart coinPrice={coinPrice || newCoin} />
      </Box>
    </>
  );
};
