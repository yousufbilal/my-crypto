import { Box, Container } from "@mui/system";
import SideBar from "../SideBar/SideBar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { fetchCoinHistoricPrice } from "../../Store/Features/coinHistoricPrice/coinHistoricPrice";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../Componants/Header/Header";
import { CoinOverView } from "../../Componants/CoinOverView/CoinOverView";
import CoinMarketView from "../../Componants/CoinMarketView/CoinMarketView";
import CoinCommunity from "../../Componants/CoinCommunity/CoinCommunity";
import MyResponsiveLine from "../../Componants/MyResponsiveLine/MyResponsiveLine";

export const About = ({ coinHistoricPrice }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const coin = location.state?.coin;
  // const newCoin = location.state?.filterCoin;
  const coinPrice = location.state?.coinHistoricPrice;
  const { statusUpdate } = useSelector((state) => state.coinStatusUpdate);

  useEffect(() => {
    dispatch(fetchCoinHistoricPrice(coin?.id));
  }, [dispatch]);

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
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "relative"
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

        <Box display="flex" flexDirection="row" sx={{ paddingTop: "64px" }}>
          <Box>
            <SideBar />
          </Box>

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
                <CoinOverView statusUpdate={statusUpdate} />
                <CoinMarketView statusUpdate={statusUpdate} />
                <CoinCommunity statusUpdate={statusUpdate} />
              </Box>

              <Box border={"5px solid #EBEEF1"} borderRadius={"5px "}>
                <MyResponsiveLine coinPrice={coinPrice} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
