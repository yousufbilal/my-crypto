import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@mui/material";
import { db } from "../../../fireBaseDataBase";
import {
  doc,
  getDoc,
  updateDoc,
  setDoc,
  deleteDoc,
  collection,
  getDocs
} from "firebase/firestore";
import { useLocation } from "react-router-dom";

const FavPage = () => {
  const [favCoinState, setFavCoinState] = useState();
  const location = useLocation();
  const { selected } = location.state || {};

  console.log(selected);

  const data = {
    name: "Los Angeles",
    country: "USA",
    state: "BDSK"
  };

  const getCollection = async () => {
    const docRef = doc(db, "Users-Collection", selected);
    let getData = await getDoc(docRef);
    setFavCoinState(getData.data());
  };

  const updateCollection = async () => {
    const data = {
      name: "Karachi",
      country: "Pakistan",
      state: "Sindh"
    };
    const docRef = doc(db, "Users-Collection", "test-collectionDoc3");
    await updateDoc(docRef, data);
  };

  const createCollection = async () => {
    const docRef = doc(db, "Users-Collection", "test-collectionDoc6");
    await setDoc(docRef, {});
  };

  const deleteCollection = async () => {
    const docRef = doc(db, "Users-Collection", "test-collectionDoc2");
    await deleteDoc(docRef);
  };

  const getCollectionList = async () => {
    const getRef = collection(db, "Users-Collection");
    const snapShot = await getDocs(getRef);
    snapShot.forEach((value) => {});
  };

  useEffect(() => {
    getCollection();
  }, [selected]);

  return (
    <Box>
      <Box display="flex" gap={2} mb={3}>
        <Button variant="contained" color="primary" onClick={createCollection}>
          Create Collection
        </Button>
        <Button variant="contained" color="secondary" onClick={getCollection}>
          Get Collection
        </Button>
        <Button variant="contained" color="success" onClick={updateCollection}>
          Update Collection
        </Button>
        <Button variant="contained" color="error" onClick={deleteCollection}>
          Delete Collection
        </Button>
        <Button variant="contained" color="info" onClick={getCollectionList}>
          Get Collection List
        </Button>
      </Box>

      <Table
        stickyHeader
        sx={{ border: "1px solid #ddd", tableLayout: "fixed", marginTop: 4 }}
      >
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Coin Symbol</TableCell>
            <TableCell>Coin Name</TableCell>
            <TableCell>Current Price</TableCell>
            <TableCell>Market Cap</TableCell>
            <TableCell>24h Change</TableCell>
            <TableCell>Last Updated</TableCell>
            <TableCell>Coin Date</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {favCoinState?.coins?.map((coin) => (
            <TableRow key={coin.id}>
              <TableCell>
                <img
                  src={coin.image}
                  alt={coin.name}
                  style={{ width: 30, height: 30 }}
                />
              </TableCell>
              <TableCell>{coin.symbol}</TableCell>
              <TableCell>{coin.name}</TableCell>
              <TableCell>{coin.current_price.toFixed(2)}</TableCell>
              <TableCell>{coin.market_cap.toFixed(2)}</TableCell>
              <TableCell>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </TableCell>
              <TableCell>
                {new Date(coin.last_updated).toLocaleString()}
              </TableCell>
              <TableCell>
                {new Date(coin.ath_date).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default FavPage;
