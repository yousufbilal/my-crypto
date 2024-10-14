import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Avatar,
  Button
} from "@mui/material";
import { getDatabase } from "firebase/database";
import { ref, set, get } from "firebase/database";
import { useSSR } from "react-i18next";
import Header from "../../Componants/Header/Header";
import { db } from "../../fireBaseDataBase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";

const FavPage = () => {
  const [userID, setUserID] = useState();
  const [num1, setNum1] = useState();

  const location = useLocation();
  const testFavCoin = location.state?.favCoins;
  const favAccountHolder = location.state?.currenAccountUser;
  const favAccountHolderName = location.state?.currenAccountUserName;
  const favAccountHolderPassword = location.state?.currenAccountUserPassword;

  // const db = getDatabase();
  // const userRef = ref(db, `users/${favAccountHolder}`);
  // const userDataResponse = get(userRef);
  // // const userData = userDataResponse.val();

  // useEffect(() => {
  //   set(userRef, {
  //     userName: favAccountHolderName,
  //     userPassWord: favAccountHolderPassword,
  //     // currentFavList: location.state?.favCoins
  //     currentFavList: testFavCoin
  //   });
  // }, []);

  const addData = async () => {
    const docRef = await addDoc(collection(db, "users"), { testFavCoin });
    setUserID(docRef.id);

    console.log("Document written with ID: ", docRef.id);
  };

  // const getData = async () => {
  //   const docRef = collection(db, "users");
  //   const docSnap = await getDocs(docRef);
  //   // console.log(docSnap._snapshot.docChanges[0].doc.data.value.mapValue.fields.favCoins.arrayValue.values[1].mapValue.fields);
  //   let test =
  //     docSnap._snapshot.docChanges[0].doc.data.value.mapValue.fields.favCoins.arrayValue.values.map(
  //       (value) => value.mapValue.fields
  //     );

  //   setNum1(test);
  // };

  // const getData = async () => {
  //   const docRef = collection(db, "users");
  //   const docSnap = await getDocs(docRef);
  //   const processedData = docSnap.docs.map((doc) => {
  //     const data = doc.data();
  //     return data.favCoins ? data.favCoins.map((coin) => coin) : [];
  //   });
  //   console.log(processedData);
  //   setNum1(processedData.flat());
  // };

  const getData = async () => {
    const docRef = collection(db, "users");
    const docSnap = await getDocs(docRef);
    const processedData = docSnap.docs.map((doc) => {
      return doc.data();
    });

    let furtherMap = processedData[0].favCoins.map((value) => {
      return value
    });

    console.log(furtherMap);

    setNum1(furtherMap);
  };

  // const getData = async () => {
  //   const docRef = collection(db, "users");
  //   const docSnap = await getDocs(docRef);
  //   const processedData = docSnap.docs.map((doc) => {
  //     const data = doc.data();
  //     return data.favCoins ? data.favCoins.map((coin) => coin) : [];
  //   });

  //   setNum1(processedData.flat());
  // };

  // const docRef = doc(db, "cities", "SF");
  // const docSnap = await getDoc(docRef);

  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data());
  // } else {
  //   // docSnap.data() will be undefined in this case
  //   console.log("No such document!");
  // }

  const deleteData = async () => {
    const docRef = doc(db, "users", "YepcwMAJ8u4hS2gOhEP1");
    // const docRef = doc(db, "users", userID);
    await deleteDoc(docRef);
    console.log(`Document with ID ${userID} deleted successfully.`);
  };

  return (
    <Container sx={{ border: "1px solid #ECEEF1", padding: "16px" }}>
      <Header />
      <button onClick={() => addData()}>ADD button</button>

      <button onClick={() => deleteData()}>Delete button</button>

      <button onClick={() => getData()}>Get button</button>

      <Typography variant="h4" gutterBottom>
        {/* {favAccountHolder} Favorite Coins */}
      </Typography>
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

    // <Box>
    //   <button onClick={() => addData()}>ADD button</button>
    //   <button onClick={() => deleteData()}>Delete button</button>
    //   <button onClick={() => getData()}>Get button</button>

    //   {num1 && num1.length > 0 ? (
    //     num1.map((value, index) => (
    //       <Typography key={index}>{value.id}</Typography>
    //     ))
    //   ) : (
    //     <Typography>No data available</Typography>
    //   )}
    // </Box>
  );
};

export default FavPage;
