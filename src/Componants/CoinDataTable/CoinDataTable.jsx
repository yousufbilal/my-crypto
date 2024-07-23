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
  const [favCoins, setFavCoins] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categories, status } = useSelector((state) => state.coinList);
  const { coinHistoricPrice } = useSelector((state) => state.historicPrice);
  // const { t } = useTranslation();

  useEffect(() => {
    dispatch(addCoinList());
    // dispatch(fetchCoinHistoricPrice());
  }, [dispatch]);

  const isLoading = status === "loading" || !categories.length;

  const handleReturn = (coin) => {
    navigate("/about", { state: { coin, coinHistoricPrice } });
  };

  const favSelect = (coinData) => {
    console.log("Selected Coin:", coinData);
    setFavCoins((prevFavCoins) => [coinData, ...prevFavCoins]);
  };

  console.log(favCoins);

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
          style={{
            // maxHeight: "300px",
            overflow: "auto",
            border: "1px solid #ECEEF1"
          }}
        >
          <Table
            stickyHeader
            style={{
              border: "1px solid #ddd",
              borderSpacing: "10px",
              tableLayout: "fixed" // Helps to ensure consistent row height
            }}
          >
            <TableHead>
              <TableRow maxHeight={"5px"} style={{ fontSize: "20px" }}>
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
                <TableRow
                  onClick={() => handleReturn(coin)}
                  key={coin.id}
                  style={{
                    backgroundColor: "white",
                    height: "5px",
                    border: "1px solid red"
                  }}
                >
                  <TableCell onClick={(event) => event.stopPropagation()}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Checkbox
                        onClick={() => favSelect(coin)}
                        icon={<StarBorder />}
                        checkedIcon={<Star />}
                      />
                    </div>
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
                  <TableCell>{coin.current_price.toFixed(2)}</TableCell>
                  <TableCell>{coin.market_cap.toFixed(2)}</TableCell>
                  <TableCell>
                    {coin.price_change_percentage_24h.toFixed(2)}
                  </TableCell>
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
