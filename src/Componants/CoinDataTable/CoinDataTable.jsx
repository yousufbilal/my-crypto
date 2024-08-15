import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoinList } from "../../Store/Features/coinListSlice/coinListSlice";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";
import Star from "@mui/icons-material/Star";
import StarBorder from "@mui/icons-material/StarBorder";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import { addCoinStatusUpdate } from "../../Store/Features/coinStatusUpdateSlice/coinStatusUpdateSlice";
import { LocalStorageFunc } from "../Atoms/LocalStorageFunc";
import { useTranslation } from "react-i18next";

const CoinDataTable = ({ setFavCoins, favCoins, favButtonHandler }) => {
  const { t, i18n } = useTranslation("common");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { categories, status } = useSelector((state) => state.coinList);
  const { coinHistoricPrice } = useSelector((state) => state.historicPrice);

  // const { statusUpdate } = useSelector((state) => state.coinStatusUpdate);

  const handleReturn = (coin) => {
    dispatch(addCoinStatusUpdate(coin.id));
    navigate("/about", { state: { coin, coinHistoricPrice } });
  };

  // function HeaderComponent() {
  //   const { t, i18n } = useTranslation("common");
  //   return <div>
  //     <button onClick={() => i18n.changeLanguage('fn')}>fn</button>
  //     <button onClick={() => i18n.changeLanguage('en')}>en</button>
  //   </div>
  // }

  // useEffect(() => {
  //   const storedCategories = localStorage.getItem("user");
  //   if (storedCategories) {
  //     setLocalCategories(JSON.parse(storedCategories));
  //   } else {
  //     dispatch(addCoinList());
  //   }
  // }, [dispatch]);

  useEffect(() => {
    if (LocalStorageFunc()) {
      dispatch(addCoinList());
    }
  }, [dispatch]);

  const isLoading = status === "loading" || !LocalStorageFunc().length;

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

  return (
    <>
      <Button onClick={() => i18n.changeLanguage("fn")}>fn</Button>
      <Button onClick={() => i18n.changeLanguage("en")}>en</Button>

      {isLoading ? (
        <div className="card-container">
          <Skeleton height={50} width={"90%"} />
          <Skeleton height={50} width={"80%"} />
          <Skeleton height={50} width={"70%"} />
          <Skeleton height={50} width={"50%"} />
        </div>
      ) : (
        <TableContainer
          style={{
            borderRadius: "10px",
            overflow: "auto",
            border: "1px solid #ECEEF1"
          }}
        >
          <Table
            stickyHeader
            style={{
              border: "1px solid #ddd",
              borderSpacing: "0", // Remove spacing between cells
              tableLayout: "fixed" // Ensures consistent row height
            }}
          >
            <TableHead>
              <TableRow
                style={{
                  fontSize: "15px"
                }}
              >
                <TableCell>
                  <Button
                    sx={{ border: "1px solid #ECEEF1", fontSize: "15px" }}
                    onClick={() => favButtonHandler()}
                  >
                    Compare
                  </Button>
                </TableCell>
                <TableCell>{t("image")}</TableCell>
                <TableCell>{t("coin_symbol")}</TableCell>
                <TableCell>{t("coin_name")}</TableCell>
                <TableCell>{t("coin_current_price")}</TableCell>
                <TableCell>{t("coin_market_cap")}</TableCell>
                <TableCell>{t("coin_percentage_change")}</TableCell>
                <TableCell>{t("coin_last_update")}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {LocalStorageFunc().map((coin) => (
                <TableRow
                  key={coin.id}
                  onClick={() => handleReturn(coin)}
                  style={{
                    backgroundColor: "white"
                    // Set row height
                  }}
                >
                  <TableCell
                    onClick={(event) => event.stopPropagation()}
                    style={{ padding: "0" }} // Remove padding
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      <Checkbox
                        onClick={() => favSelect(coin)}
                        icon={<StarBorder style={{ fontSize: "30px" }} />}
                        checkedIcon={<Star style={{ fontSize: "20px" }} />}
                      />
                    </div>
                  </TableCell>
                  <TableCell
                    style={{ padding: "0", overflow: "hidden" }} // Remove padding and handle overflow
                  >
                    <img
                      src={coin.image}
                      alt={coin.name}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </TableCell>
                  <TableCell style={{ padding: "0", fontSize: "15px" }}>
                    {coin.symbol}
                  </TableCell>
                  <TableCell style={{ padding: "0", fontSize: "15px" }}>
                    {coin.name}
                  </TableCell>
                  <TableCell style={{ padding: "0", fontSize: "15px" }}>
                    {coin.current_price.toFixed(2)}
                  </TableCell>
                  <TableCell style={{ padding: "0", fontSize: "15px" }}>
                    {coin.market_cap.toFixed(2)}
                  </TableCell>
                  <TableCell style={{ padding: "0", fontSize: "15px" }}>
                    {coin.price_change_percentage_24h.toFixed(2)}
                  </TableCell>
                  <TableCell style={{ padding: "0", fontSize: "15px" }}>
                    {coin.last_updated}
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
