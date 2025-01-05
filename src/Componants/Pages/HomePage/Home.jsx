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

  useEffect(() => {
    paginationClick(1);
  }, []);

  const paginationClick = (page) => {
    const startIndex = (page - 1) * 5; // Calculate start index
    const endIndex = startIndex + 5; // Calculate end index
    // const tempCurrentList = coinCategoriesData?.slice(startIndex, endIndex);
    const tempCurrentList = coinCategoriesData?.slice(startIndex, endIndex);
    setCurrentList(tempCurrentList);
  };

  // let twoSum = (nums, target) => {
  //   const map = new Map();

  //   for (let i = 0; i < nums.length; i++) {
  //     let complement = target - nums[i];

  //     if (map.has(complement)){
  //       map.get(complement, i)
  //     }

  //     map.set(nums[i], i);
  //   }
  // };

  // twoSum([4, 5, 6], 10);
  //map does not have 6 intailly so we give map [0,6] then on the secodn one [1,5] 3rd time is [2,6]

  // var numIdenticalPairs = function (nums) {
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[i] == nums[j]) {
  //         console.log(nums[i], nums[j]);
  //       }
  //     }
  //   }
  // };

  // numIdenticalPairs([1, 2, 3, 1, 1, 3]);

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
        paginationClick={paginationClick}
        reloadCategories={reloadCategories}
      />
    </Box>
  );
};
