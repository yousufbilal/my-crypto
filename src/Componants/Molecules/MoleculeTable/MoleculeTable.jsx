import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  List,
  ListItem,
  ListItemText,
  Table,
  Tooltip
} from "@mui/material";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import ImageAtom from "../../Atoms/ImageAtom/ImageAtom";
import Star from "@mui/icons-material/Star";
import Popover from "@mui/material/Popover";
import StarBorder from "@mui/icons-material/StarBorder";
import Checkbox from "@mui/material/Checkbox";
import { useTranslation } from "react-i18next";
import { Box, borderRadius, height } from "@mui/system";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  addDoc,
  deleteDoc,
  snapshotEqual,
  arrayUnion,
  onSnapshot
} from "firebase/firestore";
import { db } from "../../../fireBaseDataBase";

const MoleculeTable = ({
  currentList,
  handleReturn,
  favSelect,
  coinCategoriesData
}) => {
  const { t, i18n } = useTranslation("common");
  const [collectionList, setCollectionList] = useState(null);
  const [selectedCoinID, setSelectedCoinID] = useState(null);
  const [selectedCoinData, setSelectedCoinData] = useState(null);
  const [userInputPortfolio, setUserInputPortfolio] = useState(null);
  const [portfolioButton, setPortfolioButton] = useState(false);

  const getCollectionList = async () => {
    const getRef = collection(db, "Users-Collection");
    onSnapshot(getRef, (snapShot) => {
      const collectionArray = [];
      snapShot.forEach((doc) => {
        collectionArray.push(doc.id);
      });
      setCollectionList(collectionArray);
    });
  };

  const collectionListHandler = async (item) => {
    console.log("Selected Coin Data:", selectedCoinData);  // Log the selected coin data
    console.log("Selected Portfolio Item:", item);  // Log the portfolio item clicked
    
    const docRef = doc(db, "Users-Collection", item);
    await updateDoc(docRef, {
      coins: arrayUnion(selectedCoinData)
    });
  };

  //adding stuff into firebase
  const handleNewProtfolio = async (value) => {
    // console.log(value);
    // const docRef = doc(db, "Users-Collection", userInputPortfolio);
    // await setDoc(docRef, {});
  };

  //adding stuff into firebase
  const protfolioHandler = () => {
    if (portfolioButton === true) {
      setPortfolioButton(false);
    } else if (portfolioButton) {
      setPortfolioButton(true);
    }
  };

  useEffect(() => {
    getCollectionList();
  }, [portfolioButton]);

  useEffect(() => {
    getCollectionList();
  }, []);

  const portfolioList = () => {
    return (
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid #ccc",
          bgcolor: "white",
          width: "300px",
          maxHeight: "400px",
          overflowY: "auto",
          borderRadius: "8px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          padding: "8px"
        }}
      >
        {collectionList?.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              border: "1px solid #ddd",
              borderRadius: "4px",
              marginBottom: "8px",
              padding: "8px 16px",
              bgcolor: "#f9f9f9",
              "&:hover": {
                bgcolor: "#f1f1f1",
                cursor: "pointer"
              }
            }}
          >
            <Box onClick={() => collectionListHandler(item)}>{item}</Box>
          </ListItem>
        ))}
        <input
          value={userInputPortfolio}
          onChange={(e) => setUserInputPortfolio(e.target.value)}
          type="text"
          placeholder="add new portfolio name"
        />

        {/* <Button
          onClick={() => {
            // handleNewProtfolio();
            protfolioHandler();
          }}>
          Portfolio
        </Button> */}
      </List>
    );
  };

  const handleClick = (coin) => {
    favSelect(coin);
    if (selectedCoinID === coin.id) {
      setSelectedCoinID(null);
    } else if (selectedCoinID != coin.id) {
      setSelectedCoinID(coin.id);
      setSelectedCoinData(coin);
    }
  };

  return (
    <Table
      stickyHeader
      style={{
        border: "1px solid #ddd",
        borderSpacing: "0",
        tableLayout: "fixed",
        marginTop: 40
      }}
    >
      <TableHead>
        <TableCell>{t("image")}</TableCell>
        <TableCell>{t("coin_symbol")}</TableCell>
        <TableCell>{t("coin_name")}</TableCell>
        <TableCell>{t("coin_current_price")}</TableCell>
        <TableCell>{t("coin_market_cap")}</TableCell>
        <TableCell>{t("coin_percentage_change")}</TableCell>
        <TableCell>{t("coin_last_update")}</TableCell>
        <TableCell>{t("coin Date")}</TableCell>
      </TableHead>

      <TableBody>
        {coinCategoriesData?.map((coin) => (
          <TableRow key={coin.id} onClick={() => handleReturn(coin)}>
            <TableCell onClick={(event) => event.stopPropagation()}>
              <Checkbox
                onClick={() => {
                  handleClick(coin);
                }}
                icon={<StarBorder />}
                checkedIcon={<Star />}
              />
              {selectedCoinID === coin.id && portfolioList()}
            </TableCell>

            <TableCell style={{ padding: "0", overflow: "hidden" }}>
              <ImageAtom
                src={coin.image}
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
  );
};

export default MoleculeTable;
