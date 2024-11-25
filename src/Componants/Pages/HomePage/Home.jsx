import { Box } from "@mui/system";
import CoinDataTable from "../../Organism/CoinDataTable/CoinDataTable";
import TrendingContainer from "../../Organism/TrendingContainer/TrendingContainer";
import React from "react";

export const Home = () => {
  //heavy lifiting and logic should be here 
  return (
    <Box display={"flex"} flexDirection={"column"} padding={"20px"}>
      <TrendingContainer />
      <CoinDataTable />
    </Box>
  );
};
