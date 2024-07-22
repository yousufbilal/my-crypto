import { Box, border } from "@mui/system";
import SideBar from "../SideBar/SideBar";
import CoinDataTable from "../../Componants/CoinDataTable/CoinDataTable";
import Header from "../../Componants/Header/Header";
import TrendingCards from "../../Componants/TrendingCards/TrendingCards";
import NFTCards from "../../Componants/NFTCards/NFTCards";
import DeFiCard from "../../Componants/DeFiCard/DeFiCard";
import "./Home.css";

export const Home = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      overflow={"hidden"}
      sx={{ background: "white", height: "100%", width: "100%" }}
    >
      <Box>
        <SideBar />
      </Box>

      <Box display="flex" flexDirection="column" width="100%">
        <Box width="100%">
          <Header />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          padding={"20px"}
        >
          <Box
            width="100%"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent={"space-between"}
            borderRadius={"5px"}
            marginBottom={"30px"}
            sx={{ backgroundColor: "#ECEEF1", padding: 3 }}
          >
            <TrendingCards />
            <NFTCards />
            <DeFiCard />
          </Box>

          <Box>
            <CoinDataTable />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

{
  /* <Box sx={{ background: "white" }}>
  <Header />
  <Box display="flex">
    <Box>
      <SideBar />
    </Box>

    <Box display={"flex"} justifyContent={"center"}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
        marginTop={"20px"}
        border={"1px solid blue"}
        padding={"20px"}
        sx={{ background: "#ECEEF1" }}
      >
        <TrendingCards label="trending" />
        <NFTCards />
        <DeFiCard />
      </Box>

      <Box>
        <CoinDataTable />
      </Box>
    </Box>
  </Box>
</Box>; */
}
