import { Box } from "@mui/system";
import CoinDataTable from "../../Organism/CoinDataTable/CoinDataTable";
import TrendingContainer from "../../Organism/TrendingContainer/TrendingContainer";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoinTrending } from "../../../Store/Features/coinTrendingSlice/coinTrendingSlice";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { LocalStorageFunc } from "../../Utilities/LocalStorageFunc/LocalStorageFunc";
import { addCoinList } from "../../../Store/Features/coinListSlice/coinListSlice";
import { addCoinStatusUpdate } from "../../../Store/Features/coinStatusUpdateSlice/coinStatusUpdateSlice";

export const Home = () => {
  const navigate = useNavigate();
  const [favCoins, setFavCoins] = useState([]);
  const [coinList, setCoinList] = useState([]);
  const [currentList, setCurrentList] = useState([]);
  const { coinHistoricPrice } = useSelector((state) => state.historicPrice);
  const storedCategories = localStorage.getItem("user");
  const localCategories = JSON.parse(storedCategories);
  const dispatch = useDispatch();

  const { trendingData, trendingError, trendingLoading } = useSelector(
    (state) => state.coinTrending
  );

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
    console.log("Test button reload");
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

  useEffect(() => {
    const storedList = localCategories;
    if (storedList) {
      dispatch(addCoinList());
    }
    const tempCurrentList = JSON.parse(JSON.stringify(localCategories)); //deep copying to not modify the orignal array
    setCoinList(tempCurrentList);
    setCurrentList(tempCurrentList.slice(0, 5));
  }, []); //include a dependacy

  const paginationClick = (page) => {
    let currentTempList = JSON.parse(JSON.stringify(coinList)); //deep copying to not modify the orignal array
    const nextListIndex = page == 1 ? 0 : (page - 1) * 5;
    const tempCurrentList = currentTempList.splice(nextListIndex, 5); //this line
    setCurrentList(tempCurrentList);
  };

  return (
    <Box display={"flex"} flexDirection={"column"} padding={"20px"}>
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
        currentList={currentList}
        handleReturn={handleReturn}
        favSelect={favSelect}
        paginationClick={paginationClick}
      />
    </Box>
  );
};

//
