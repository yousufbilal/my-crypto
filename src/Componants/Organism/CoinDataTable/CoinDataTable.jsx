import "react-loading-skeleton/dist/skeleton.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoinList } from "../../../Store/Features/coinListSlice/coinListSlice";
import { useNavigate } from "react-router-dom";
import { addCoinStatusUpdate } from "../../../Store/Features/coinStatusUpdateSlice/coinStatusUpdateSlice";
import { LocalStorageFunc } from "../../Utilities/LocalStorageFunc/LocalStorageFunc";
import { Box } from "@mui/system";
import MoleculeTable from "../../Molecules/MoleculeTable/MoleculeTable";
import PaginationAtom from "../../Atoms/PaginationAtom/PaginationAtom";

const CoinDataTable = ({}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [favCoins, setFavCoins] = useState([]);
  const [coinList, setCoinList] = useState([]);
  const [currentList, setCurrentList] = useState([]);
  const { coinHistoricPrice } = useSelector((state) => state.historicPrice);

  const handleReturn = (coin) => {
    dispatch(addCoinStatusUpdate(coin.id));
    navigate("/about", { state: { coin, coinHistoricPrice } });
  };

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
    const storedList = LocalStorageFunc();
    if (storedList) {
      dispatch(addCoinList());
    }
    const tempCurrentList = JSON.parse(JSON.stringify(LocalStorageFunc())); //deep copying to not modify the orignal array
    setCoinList(tempCurrentList);
    setCurrentList(tempCurrentList.slice(0, 5));
  }, [dispatch, LocalStorageFunc]); //include a dependacy

  const paginationClick = (page) => {
    let currentTempList = JSON.parse(JSON.stringify(coinList)); //deep copying to not modify the orignal array
    const nextListIndex = page == 1 ? 0 : (page - 1) * 5;
    const tempCurrentList = currentTempList.splice(nextListIndex, 5); //this line
    setCurrentList(tempCurrentList);
  };

  return (
    <>
      <MoleculeTable
        currentList={currentList}
        handleReturn={handleReturn}
        favSelect={favSelect}
      />

      <Box display="flex" justifyContent="center" marginTop={2}>
        <PaginationAtom paginationClick={paginationClick} />
      </Box>
    </>
  );
};

export default CoinDataTable;
