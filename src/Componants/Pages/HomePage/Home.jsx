import { Box } from "@mui/system";
import CoinDataTable from "../../Organism/CoinDataTable/CoinDataTable";
import TrendingContainer from "../../Organism/TrendingContainer/TrendingContainer";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoinTrending } from "../../../Store/Features/coinTrendingSlice/coinTrendingSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const { trending, coinTrendingErrors, coinTrendingStatus } = useSelector(
    (state) => state.coinTrending
  );

  //console.log(coinTrendingStatus)

  //why do i need the dispatch here
  useEffect(() => {
    dispatch(addCoinTrending());
  }, []);

  return (
    <Box display={"flex"} flexDirection={"column"} padding={"20px"}>
      <TrendingContainer trending={trending} />
      <CoinDataTable />
    </Box>
  );
};

//
