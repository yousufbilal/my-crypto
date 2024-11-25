import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  TextField,
  Button,
  Paper,
  Card,
  CardMedia,
  CardContent
} from "@mui/material";

import {
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  addDoc
} from "firebase/firestore";

import Star from "@mui/icons-material/Star";
import StarBorder from "@mui/icons-material/StarBorder";
import { useSelector } from "react-redux";
import { db } from "../../../fireBaseDataBase";
import { app } from "../../../fireBaseDataBase";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  browserSessionPersistence,
  setPersistence,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

import CoinDataTable from "../../Organism/CoinDataTable/CoinDataTable";

import { type } from "@testing-library/user-event/dist/type";

import { padding } from "@mui/system";

const FavPage = () => {
  const [num1, setNum1] = useState([]);
  const [changeList, setChangeList] = useState("");
  const [newListInput, setNewListInput] = useState("");
  const [listOfDocs, setListOfDocs] = useState([]);
  const [addcoinPopup, setAddcoinPopup] = useState(false);
  const location = useLocation();
  const testFavCoin = location.state?.favCoins;
  const userDataRedux = useSelector((state) => state.counter.userData);

  const [popup, setPopup] = useState(false);

  const [fireBaseData, setFireBaseData] = useState("");

  useEffect(() => {
    if (userDataRedux) {
      const convertingtoJson = JSON.stringify(userDataRedux);
      sessionStorage.setItem("sessionKey", convertingtoJson);
    }
  }, [userDataRedux]);

  const auth = getAuth(app);

  // const [docId, setDocId] = useState("");

  // const data = {
  //   name: "Los Angeles",
  //   state: "CA",
  //   country: "USA"
  // };

  const data = {
    name: "Karachi",
    state: "Sindh",
    country: "Pakistan"
  };

  // let obj = Object.assign({}, arr);

  const collectionHandler = async () => {
    let testCoinObj = Object.assign({}, testFavCoin);
    const docRef = doc(db, "test-collection", auth.currentUser.uid);
    await setDoc(docRef, testCoinObj);
  };

  const getData = async () => {
    const docRef = doc(db, "test-collection", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    let docSnapData = docSnap.data();
    let intoArray = Object.values(docSnapData);

    setFireBaseData(intoArray);
    // console.log(
    //   intoArray.map((value) => {
    //     return value.name;
    //   })
    // );
  };

  const popupHandler = () => {
    if (popup === true) {
      setPopup(false);
    } else {
      setPopup(true);
    }
  };

  console.log(popup);

  console.log(fireBaseData);

  return (
    <Box>
      <Button onClick={collectionHandler}>collection Handler</Button>
      <Button onClick={getData}>get data </Button>
      <Button onClick={popupHandler}>
        popup Button
        {popup ? (
          <Box
            sx={{
              position: "fixed",
              top: "50%",
              left: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              transform: "translate(-50%, -50%)",
              zIndex: 1000,
              borderRadius: "8px",
              background: "#DADADA",
              height: "100vh",
              width: "100vw",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              // width: "90%",
              maxWidth: "95%",
              maxHeight: "80%",

              opacity: 1
            }}
          >
            <CoinDataTable />
          </Box>
        ) : null}
      </Button>

      <Box>fav section</Box>

      <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Symbol</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fireBaseData &&
              fireBaseData.map((coin) => (
                <TableRow key={coin.id}>
                  <TableCell>
                    <img
                      src={coin.image}
                      alt={coin.name}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </TableCell>
                  <TableCell>{coin.symbol}</TableCell>
                  <TableCell>{coin.name}</TableCell>
                  <TableCell>{coin.current_price.toFixed(2)}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default FavPage;
