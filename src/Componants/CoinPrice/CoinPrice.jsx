import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoinList } from "../../Store/Features/coinListSlice/coinListSlice";
import { fetchCoinPrice } from "../../Store/Features/coinPriceSlice/coinPriceSlice";
import { useTranslation } from "react-i18next";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import EqualizerIcon from "@mui/icons-material/Equalizer";
import { Box } from "@mui/system";
import SkeletonLoading from "../Atoms/SkeletonLoading";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const CoinPrice = () => {
  const dispatch = useDispatch();
  const { categories, status } = useSelector((state) => state.coinList);
  // const { priceList, status, errors } = useSelector((state) => state.coinPrice);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(addCoinList());
    dispatch(fetchCoinPrice());
  }, [dispatch]);

  const isLoading = status === "loading" || !categories.length;

  // const sortHanlderAccending = () => {
  //   categories.map((item)=>{
  //     console.log(item.current_price.sort((a,b)=>b-a))
  //   });
  // };

  // const sortedPrices = categories.map((item) => item.current_price).sort((a, b) => b - a);
  // console.log(sortedPrices);
  //  console.log(categories.coin.sort((a, b) => a - b))

  const RowFunc = () => {
    return (
      <>
        {/* <Link to={"/about"}>
          <EqualizerIcon active={selected === "about"} />
        </Link> */}
      </>
    );
  };

  
  const navigate = useNavigate();

  const handleReturn = (coin) => {
    navigate("/about", { state: { coin} });
  };

  let test = "yousuf";

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
            height: "500px",
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
                <TableRow onClick={()=> handleReturn(coin)}>
                  <TableCell>
                    <img
                      src={coin.image}
                      alt={coin.name}
                      style={{ width: 50, height: 50 }}
                    />
                  </TableCell>
                {/* put all the values in an array and use one table cell */}
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

//practise call back functions 

export default CoinPrice;

{
  /* <Link to={{ pathname: "/about", state: "yousuf" }}> */
}
