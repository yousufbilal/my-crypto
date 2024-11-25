import { Box } from "@mui/system";
import CoinDataTable from "../../Organism/CoinDataTable/CoinDataTable";
import TrendingContainer from "../../Organism/TrendingContainer/TrendingContainer";
import React from "react";
import { UseSelector } from "react-redux";

export const Home = () => {
//   const { categories, status } = useSelector((state) => state.coinList);
// let test = {categories,status}
// test.categories
  //heavy lifiting and logic should be here 
  //extra the slice data using redux selector
  //use effect with 3 methods 
  return (
    <Box display={"flex"} flexDirection={"column"} padding={"20px"}>
      <TrendingContainer />
      <CoinDataTable />
    </Box>
  );
};

//