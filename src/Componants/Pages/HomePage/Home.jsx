import { Box } from "@mui/system";
import CoinDataTable from "../../Organism/CoinDataTable/CoinDataTable";
import TrendingContainer from "../../Organism/TrendingContainer/TrendingContainer";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoinTrending } from "../../../Store/Features/coinTrendingSlice/coinTrendingSlice";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addCoinList } from "../../../Store/Features/coinListSlice/coinListSlice";
import { addCoinStatusUpdate } from "../../../Store/Features/coinStatusUpdateSlice/coinStatusUpdateSlice";
import { all } from "axios";

export const Home = () => {
  const navigate = useNavigate();
  const [favCoins, setFavCoins] = useState([]);
  const [coinList, setCoinList] = useState([]);
  const [currentList, setCurrentList] = useState([]);
  const { coinHistoricPrice } = useSelector((state) => state.historicPrice);

  const dispatch = useDispatch();

  const { trendingData, trendingError, trendingLoading } = useSelector(
    (state) => state.coinTrending
  );

  const { coinCategoriesLoading, coinCategoriesData, coinCategoriesError } =

    useSelector((state) => state.coinList);

  let coins = trendingData.coins;
  let nfts = trendingData.nfts;
  let categories = trendingData.categories;
  let cryptoCoins = coins?.map((item) => {
    return item.item;
  });

  const handleReturn = (coin) => {
    // dispatch(addCoinStatusUpdate(coin.id));
    // navigate("/about", { state: { coin, coinHistoricPrice } });
  };

  //here im populating the data from the api into the redux state
  const populateTrendingData = () => {
    dispatch(addCoinTrending());
  };

  useEffect(() => {
    populateTrendingData();
  }, []);

  //do this again
  const favSelect = (coinData) => {
    let isInFavCoins = favCoins?.some((test) => test.id === coinData.id);
    if (isInFavCoins) {
      setFavCoins((prevFavCoins) =>
        prevFavCoins.filter((coin) => coin.id !== coinData.id)
      );
    } else {
      setFavCoins((prevFavCoins) => [coinData, ...prevFavCoins]);
    }
  };

  const reloadCategories = () => {
    dispatch(addCoinList());
  };

  // useEffect(() => {
  //   paginationClick(1);
  // }, []);

  // const paginationClick = (page) => {
  //   const startIndex = (page - 1) * 5; // Calculate start index
  //   const endIndex = startIndex + 5; // Calculate end index
  //   const tempCurrentList = coinCategoriesData?.slice(startIndex, endIndex);
  //   setCurrentList(tempCurrentList);
  // };

  // var subsetXORSum = function (nums) {
  //   for (let i = 0; i < nums.length; i++) {
  //     let binaryValue = nums[i].toString(2);
  //     console.log(binaryValue);
  //   }
  // };

  // let nums = [1, 3];
  // subsetXORSum(nums);

  return (
    <Box display={"flex"} flexDirection={"column"} padding={3}>
      <TrendingContainer
        nfts={nfts}
        categories={categories}
        cryptoCoins={cryptoCoins}
        trendingData={trendingData}
        trendingError={trendingError}
        trendingLoading={trendingLoading}
        onReload={populateTrendingData}
      />

      <CoinDataTable
        coinCategoriesLoading={coinCategoriesLoading}
        coinCategoriesData={coinCategoriesData}
        coinCategoriesError={coinCategoriesError}
        currentList={currentList}
        handleReturn={handleReturn}
        favSelect={favSelect}
        reloadCategories={reloadCategories}
      />
    </Box>
  );
};
