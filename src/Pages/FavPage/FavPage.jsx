import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Avatar,
  Input,
  TextField,
  Button
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
  updateDoc,
  setDoc
} from "firebase/firestore";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";

const FavPage = () => {
  const [userID, setUserID] = useState();
  const [num1, setNum1] = useState();
  const [changeList, setChangeList] = useState("");
  const [newListInput, setNewListInput] = useState("");

  const [listOfDocs, setListOfDocs] = useState();

  const location = useLocation();
  const testFavCoin = location.state?.favCoins;

  const userDataRedux = useSelector((state) => state.counter.userData);

  useEffect(() => {
    if (userDataRedux) {
      const convertingtoJson = JSON.stringify(userDataRedux);
      sessionStorage.setItem("sessionKey", convertingtoJson);
    }
  }, [userDataRedux]);

  const value = sessionStorage.getItem("sessionKey");
  const testParseJson = JSON.parse(value);

  // console.log(testParseJson.uid);

  // useEffect(() => {
  //   setUserID(userDataRedux.uid);
  // }, [userID]);

  const getDocumentsList = async () => {
    const docRef = collection(db, testParseJson.uid);
    const docSnap = await getDocs(docRef);

    const documentNames = docSnap?.docs?.map((doc) => {
      return doc.id;
    });

    setListOfDocs(documentNames);
  };

  useEffect(() => {
    getDocumentsList();
  }, []);

  // const deleteData = async () => {
  //   const docRef = doc(db, "users", "YepcwMAJ8u4hS2gOhEP1");
  //   await deleteDoc(docRef);
  //   console.log(`Document with ID ${userID} deleted successfully.`);
  // };

  const getData = async () => {
    const docRef = doc(db, testParseJson.uid, changeList);
    const docSnap = await getDoc(docRef);
    let test = docSnap.data();

    // let mapObj = test?.map((value) => {
    //   return value.name;
    // });
    console.log(test);
  };

  const addData = async () => {
    // const docRef = await addDoc(collection(db, "users"), { testFavCoin });

    const docRef = doc(db, testParseJson.uid, newListInput);
    await setDoc(docRef, { testFavCoin });
    console.log("Document written with ID: ", docRef.id);
  };

  const updateData = async () => {
    const docRef = doc(db, testParseJson.uid, changeList);
    const result = await updateDoc(docRef, { testFavCoin });
    console.log("Document updated successfully");
  };

  const testMethod = (docID, index) => {
    if (index === 0) {
      setChangeList(docID);
    } else {
      setChangeList(docID);
    }
  };

  const addPortfolio = async () => {
    const docRef = doc(db, testParseJson.uid, newListInput);
    await setDoc(docRef, {});
  };

  return (
    <Container sx={{ border: "1px solid #ECEEF1", padding: "16px" }}>
      <Header />

      <button onClick={() => getDocumentsList()}>All List</button>
      <button onClick={() => addData()}>Make New List</button>
      <button onClick={() => updateData()}>Update button</button>
      <button onClick={() => getData()}>Get button</button>

      <CardContent sx={{ height: 500, width: 500, border: "5px solid black" }}>
        <TextField
          onChange={(e) => setNewListInput(e.target.value)}
          sx={{ width: "100%" }}
          placeholder="Enter your new portfolio name"
        />
        <Button
          sx={{ border: "1px solid black", width: "100%", marginTop: "20px" }}
          onClick={() => {
            addPortfolio();
            // addData();
          }}
        >
          submit{" "}
        </Button>
      </CardContent>

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
