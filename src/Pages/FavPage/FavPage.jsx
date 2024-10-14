import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Avatar
} from "@mui/material";
import Header from "../../Componants/Header/Header";
import { db } from "../../fireBaseDataBase";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  updateDoc
} from "firebase/firestore";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { type } from "@testing-library/user-event/dist/type";

const FavPage = () => {
  const [userID, setUserID] = useState();
  const [num1, setNum1] = useState();
  const [changeList, setChangeList] = useState();

  const [listOfDocs, setListOfDocs] = useState();

  const location = useLocation();
  const testFavCoin = location.state?.favCoins;

  const getDocumentsList = async () => {
    const docRef = collection(db, "users");
    const docSnap = await getDocs(docRef);

    const documentNames = docSnap?.docs?.map((doc) => {
      return doc.id;
    });

    setListOfDocs(documentNames);
  };

  // const deleteData = async () => {
  //   const docRef = doc(db, "users", "YepcwMAJ8u4hS2gOhEP1");
  //   await deleteDoc(docRef);
  //   console.log(`Document with ID ${userID} deleted successfully.`);
  // };

  const getData = async () => {
    // const docRef = collection(db, "users");
    const docRef = doc(db, "users", changeList);
    const docSnap = await getDoc(docRef);
    // const processedData = docSnap?.docs?.map((doc) => {
    //   return doc.data();
    // });

    console.log(docSnap.data());

    // let furtherMap = processedData[0]?.testFavCoin?.map((value) => {
    //   return value;
    // });

    // setNum1(furtherMap);

    // console.log(furtherMap);
  };

  const addData = async () => {
    const docRef = await addDoc(collection(db, "users"), { testFavCoin });
    setUserID(docRef.id);

    console.log("Document written with ID: ", docRef.id);
  };

  const updateData = async () => {
    const docRef = doc(db, "users", "S6VvZtZo2pgoPm2o1v5f");
    const result = await updateDoc(docRef, { testFavCoin });
    console.log("Document updated successfully", result);
  };

  const testMethod = (docID, index) => {
    if (index === 0) {
      setChangeList(docID);
    } else {
      setChangeList(docID);
    }
  };

  return (
    <Container sx={{ border: "1px solid #ECEEF1", padding: "16px" }}>
      <Header />

      <button onClick={() => getDocumentsList()}>All List</button>

      <button onClick={() => addData()}>Make New List</button>
      <button onClick={() => updateData()}>Update button</button>
      <button onClick={() => getData()}>Get button</button>

      <Typography>
        {listOfDocs ? (
          listOfDocs.map((docId, index) => (
            <Typography key={index} onClick={() => testMethod(docId, index)}>
              {docId}
            </Typography>
          ))
        ) : (
          <Typography>No documents found.</Typography>
        )}
      </Typography>

      <Typography variant="h4" gutterBottom></Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "center"
        }}
      >
        {num1 &&
          num1.map((coin) => (
            <Card key={coin.id} sx={{ width: 300 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 120,
                  width: 120,
                  margin: "16px auto"
                }}
              >
                {/* what is the avatar used for check  */}
                <Avatar
                  src={coin.image}
                  alt={coin.name}
                  sx={{ height: "100%", width: "100%" }}
                />
              </Box>
              <CardContent>
                <Box>{coin.name}</Box>
                <Box>Symbol: {coin.symbol.toUpperCase()}</Box>
                <Box>Current Price: ${coin.current_price.toLocaleString()}</Box>
                <Box>Market Cap: ${coin.market_cap.toLocaleString()}</Box>
                <Box>24h High: ${coin.high_24h.toLocaleString()}</Box>
                <Box>24h Low: ${coin.low_24h.toLocaleString()}</Box>
                <Box>ATH: ${coin.ath.toLocaleString()}</Box>
                <Box>ATL: ${coin.atl.toLocaleString()}</Box>
                <Box>
                  24h Change: {coin.price_change_percentage_24h.toFixed(2)}%
                </Box>
                <Box>
                  Max Supply:{" "}
                  {coin.max_supply ? coin.max_supply.toLocaleString() : "N/A"}
                </Box>
              </CardContent>
            </Card>
          ))}
      </Box>
    </Container>
  );
};

export default FavPage;
