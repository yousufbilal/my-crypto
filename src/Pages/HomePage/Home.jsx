import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import SideBar from "../SideBar/SideBar";
import CoinPrice from "../../Componants/CoinPrice/CoinPrice";
import NivoLineChart from "../../Componants/NivoLineChart/NivoLineChart";
import "./Home.css";

export const Home = () => {
  console.log(process.env.REACT_APP_BASE_URL)
  return (
    <Box
      sx={{
        display: "flex"
      }}
    >
      <SideBar />
      <Box>
        <CoinPrice />
      </Box>
    </Box>
  );
};
