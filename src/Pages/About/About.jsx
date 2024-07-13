import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import HomeIcon from "@mui/icons-material/Home";
import { useLocation } from "react-router-dom";
import CoinCard from "../../Componants/CoinCard/CoinCard";

export const About = () => {
  const location = useLocation();
  const coin = location.state?.coin;

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
