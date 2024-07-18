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


export const About = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const coin = location.state?.coin;
  const coinHistoric = location.state?.coinHistoricPrice;

  const { categories, status } = useSelector((state) => state.coinList);

  useEffect(() => {
    dispatch(fetchCoinHistoricPrice());
  }, [dispatch]);


  useEffect(() => {
    if (coin?.id) {
      dispatch(fetchCoinHistoricPrice(coin.id));
    }
  }, [coin, dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "500px"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: 1,
          alignItems: "center"
        }}
      >
        <SideBar />
        <LineChart coinHistoric={coinHistoric} />
        <CoinCard coin={coin} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2
        }}
      >
        <Link to="/">
          <HomeIcon />
        </Link>
      </Box>
    </Box>
  );
};

// https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30
// https://api.coingecko.com/api/v3/coins/{id}/market_chart/range
