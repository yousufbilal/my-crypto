import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  Select,
  Tooltip,
  Typography
} from "@mui/material";
import BitcoinLogo from "../../../Assests/BitcoinLogo.svg";
import SearchBar from "../../Molecules/SearchBar/SearchBar";
import React, { useEffect, useState } from "react";
import GoogleLogout from "../../Molecules/GoogleLogout/GoogleLogout";
import { useNavigate } from "react-router-dom";
import ButtonAtom from "../../Atoms/ButtonAtom/ButtonAtom";
import TyprographyAtom from "../../Atoms/TyprographyAtom/TyprographyAtom";
import ImageAtom from "../../Atoms/ImageAtom/ImageAtom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { StarBorder } from "@mui/icons-material";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  addDoc,
  firestore,
  onSnapshot
} from "firebase/firestore";
import { db } from "../../.././fireBaseDataBase";
import { get } from "mongoose";

import PortfolioDropDown from "../../Atoms/PortfolioDropDown/PortfolioDropDown";

const Header = () => {
  const [doclistTest, setDocListTest] = useState(false);
  const [collectionListTest, setCollectionListTest] = useState();

  const navigate = useNavigate();

  const favButtonHandler = () => {
    navigate("/FavPage");
  };

  const collectionListHandler = () => {
    if (doclistTest === false) {
      setDocListTest(true);
    } else if (doclistTest === true) {
      setDocListTest(false);
    }
    console.log(doclistTest);
  };

  const collectionList = async () => {
    const collectionArray = [];
    const getRef = collection(db, "Users-Collection");
    onSnapshot(getRef, (snapshot) => {
      snapshot.forEach((doc) => {
        collectionArray.push(doc.id);
      });
      setCollectionListTest(collectionArray);
    });
  };

  useEffect(() => {
    collectionList();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
        background: "#FFFFFF",
        height: "20px",
        zIndex: "10",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
      }}
    >
      <Box display={"flex"} justifyContent={"center"} alignItems={"end"}>
        <TyprographyAtom>Crypto Tracker</TyprographyAtom>
        <ImageAtom
          src={BitcoinLogo}
          style={{ height: "100%", width: "50px" }}
        />
      </Box>
      <SearchBar />
      <Box>
        <GoogleLogout />

        {/* <Button onClick={collectionListHandler}> collectionListHandler </Button> */}
        {/* {doclistTest && collectionList()} */}

        <PortfolioDropDown collectionListTest={collectionListTest} />
      </Box>
    </Box>
  );
};

export default Header;
