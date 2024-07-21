import { Box } from "@mui/system";
import SideBar from "../SideBar/SideBar";
import CoinDataTable from "../../Componants/CoinDataTable/CoinDataTable";
import Header from "../../Componants/Header/Header";
import TrendingCards from "../../Componants/TrendingCards/TrendingCards";
import NFTCards from "../../Componants/NFTCards/NFTCards";
import DeFiCard from "../../Componants/DeFiCard/DeFiCard";
import "./Home.css";

export const Home = () => {
  // console.log(process.env.REACT_APP_BASE_URL);


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row"
      }}
    >
      <SideBar />
      <Box>
        <Header />
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          padding={"10px"}
        >
          <TrendingCards label={"trending"} />
          <NFTCards/>
          <DeFiCard/>
        </Box>
        <CoinDataTable />
      </Box>
    </Box>
  );
};
