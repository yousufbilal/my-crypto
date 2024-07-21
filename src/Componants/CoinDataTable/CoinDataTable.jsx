import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoinList } from "../../Store/Features/coinListSlice/coinListSlice";
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
import Star from "@mui/icons-material/Star";
import StarBorder from "@mui/icons-material/StarBorder";
import { fetchCoinHistoricPrice } from "../../Store/Features/coinHistoricPrice/coinHistoricPrice";
import Checkbox from "@mui/material/Checkbox";
import { Sparkline } from "react-sparklines";

const CoinDataTable = () => {
  const dispatch = useDispatch();
  const { categories, status } = useSelector((state) => state.coinList);
  const { coinHistoricPrice } = useSelector((state) => state.historicPrice);
  // const { t } = useTranslation();

  useEffect(() => {
    dispatch(addCoinList());
    // dispatch(fetchCoinHistoricPrice());
  }, [dispatch]);

  const isLoading = status === "loading" || !categories.length;

  const navigate = useNavigate();

  const handleReturn = (coin) => {
    navigate("/about", { state: { coin, coinHistoricPrice } });
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
            overflow: "auto",
            padding: "10px"
          }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
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
              {categories.map((coin) => (
                <TableRow key={coin.id} onClick={() => handleReturn(coin)}>
                  <TableCell
                    onClick={(event) => event.stopPropagation()} // Prevents handleReturn
                    sx={{ height: "100%" }}
                  >
                    <Checkbox icon={<StarBorder />} checkedIcon={<Star />} />
                  </TableCell>
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
                  <TableCell>
                    (
                    {/* <Sparkline
                      data={[
                        { x: 0, xval: "2005", yval: 20090440 },
                        { x: 1, xval: "2006", yval: 20264080 }
                        //...other data points
                      ]}
                      xName="xval"
                      yName="yval"
                    /> */}
                    );
                  </TableCell>
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
