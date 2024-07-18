import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoinList } from "../../Store/Features/coinListSlice/coinListSlice";
import { fetchCoinDataTable } from "../../Store/Features/coinDataTableSlice/coinDataTableSlice";
import { useTranslation } from "react-i18next";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Skeleton from "react-loading-skeleton";
import { Link, useNavigate } from "react-router-dom";
import { fetchCoinIDs } from "../../Store/Features/coinIDSlice/coinIDSlice";
import { fetchCoinHistoricPrice } from "../../Store/Features/coinHistoricPrice/coinHistoricPrice";
const CoinDataTable = () => {
  const dispatch = useDispatch();
  const { categories, status } = useSelector((state) => state.coinList);
  // const { coinHistoricPrice } = useSelector((state) => state.fetchCoinHistoricPrice);
  // const { IDs } = useSelector((state) => state.coinID);
  // const { t } = useTranslation();

  // console.log(coinHistoricPrice.prices)

  useEffect(() => {
    dispatch(addCoinList());
    dispatch(fetchCoinIDs());
    dispatch(fetchCoinDataTable());
    dispatch(fetchCoinHistoricPrice());
  }, [dispatch]);

  const isLoading = status === "loading" || !categories.length;

  const navigate = useNavigate();

  const handleReturn = (coin) => {
    navigate("/about", { state: { coin, } });
    // navigate("/about", { state: { coin, coinHistoricPrice } });

  };

  return (
    <>
      {isLoading ? (
        <div className="card-container">
          <Skeleton height={50} width={300} />
          <Skeleton height={40} width={200} />
          <Skeleton height={40} width={150} />
        </div>
      ) : (
        <TableContainer
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            width: "100vw",
            overflowY: "auto",
            marginTop: "20px" // Adjust as necessary
          }}
          component={Paper}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Coin Symbol</TableCell>
                <TableCell>Coin Name</TableCell>
                <TableCell>Coin Current Price</TableCell>
                <TableCell>Coin Market Cap</TableCell>
                <TableCell>Coin Percentage Change</TableCell>
                <TableCell>Coin Last Update</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((coin, index) => (
                <TableRow onClick={() => handleReturn(coin)}>
                  <TableCell>
                    <img
                      src={coin.image}
                      alt={coin.name}
                      style={{ width: 50, height: 50 }}
                    />
                  </TableCell>
                  <TableCell>{coin.symbol}</TableCell>
                  <TableCell>{coin.name}</TableCell>
                  <TableCell>{coin.current_price}</TableCell>
                  <TableCell>{coin.market_cap}</TableCell>
                  <TableCell>{coin.price_change_percentage_24h}</TableCell>
                  <TableCell>{coin.last_updated}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default CoinDataTable;
