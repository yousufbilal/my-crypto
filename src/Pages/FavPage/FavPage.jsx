import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  TextField,
  Button,
  Avatar,
  ButtonGroup,
  Paper,
  Divider,
  Card,
  CardMedia,
  CardContent
} from "@mui/material";
import Header from "../../Componants/Header/Header";
import { db } from "../../fireBaseDataBase";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  updateDoc
} from "firebase/firestore";
import { useSelector } from "react-redux";
import SideBar from "../SideBar/SideBar";

const FavPage = () => {
  const [num1, setNum1] = useState([]);
  const [changeList, setChangeList] = useState("");
  const [newListInput, setNewListInput] = useState("");
  const [listOfDocs, setListOfDocs] = useState([]);
  const [addcoinPopup, setAddcoinPopup] = useState(false);

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

  const getDocumentsList = async () => {
    const docRef = collection(db, testParseJson.uid);
    const docSnap = await getDocs(docRef);

    const documentNames = docSnap?.docs?.map((doc) => doc.id);
    setListOfDocs(documentNames);
  };

  useEffect(() => {
    getDocumentsList();
  }, [listOfDocs]);

  const newListMethod = async () => {
    const docRef = doc(db, testParseJson.uid, newListInput);
    await setDoc(docRef, { testFavCoin });
  };

  const updateData = async () => {
    const docRef = doc(db, testParseJson.uid, changeList);
    await updateDoc(docRef, { testFavCoin });
    console.log("Document updated successfully");
  };

  const testMethod = async (docID, index) => {
    setChangeList(docID);
    const docRef = doc(db, testParseJson.uid, docID);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();

    if (data && data.testFavCoin) {
      setNum1(data.testFavCoin); // Store the full objects
    }
  };

  const addPortfolio = async () => {
    const docRef = doc(db, testParseJson.uid, newListInput);
    await setDoc(docRef, {});
  };

  const addCoinHandler = () => {
    setAddcoinPopup(addcoinPopup === true ? false : true);
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      overflow="hidden"
      sx={{
        background: "#f7f7f7",
        height: "100vh",
        width: "100vw",
        position: "relative"
      }}
    >
      {/* Header */}
      <Box
        sx={{
          width: "100%",
          height: "60px",
          position: "fixed",
          top: 0,
          zIndex: 10,
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          background: "#2196F3"
        }}
      >
        <Header />
      </Box>

      {/* Main Content Area */}
      <Box
        display="flex"
        flexDirection="row"
        width={"100vw"}
        sx={{
          paddingTop: "60px",
          border: "1px solid red"
        }}
      >
        {/* Sidebar */}
        <Box sx={{ minWidth: "25px", background: "#ADD8E6" }}>
          <SideBar />
        </Box>

        <Box display="flex" flexDirection="column" width="100%" p={4}>
          {/* Button Actions */}

          <Box
            sx={{
              display: "flex",
              border: "1px solid red",
              justifyContent: "space-between"
            }}
          >
            <ButtonGroup variant="contained" sx={{ marginBottom: "20px" }}>
              {/* <Button onClick={() => getDocumentsList()}>All List</Button> */}
              {/* <Button onClick={() => newListMethod()}>Make New List</Button> */}
              <Button onClick={() => updateData()}>Update</Button>
              {/* <Button onClick={() => addCoinHandler()}>Add Coin</Button> */}
            </ButtonGroup>
            <Paper
              elevation={3}
              sx={{ padding: "16px", maxWidth: "500px", marginBottom: "20px" }}
            >
              <Typography variant="h6" gutterBottom>
                Create New Portfolio
              </Typography>
              <TextField
                onChange={(e) => setNewListInput(e.target.value)}
                fullWidth
                placeholder="Enter new portfolio name"
                variant="outlined"
                sx={{ marginBottom: "16px" }}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => addPortfolio()}
              >
                Submit
              </Button>
            </Paper>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "20px"
              }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="Sample Image"
                  height="140"
                  image="https://via.placeholder.com/150" // Placeholder image URL
                />
                <CardContent>Coins</CardContent>
                <Button>Add Coins</Button>
              </Card>
            </Box>
          </Box>

          {/* coin card  */}

          {/* Portfolio List */}
          <Box mb={4}>
            <Typography variant="h6" gutterBottom>
              Portfolio List
            </Typography>
            {listOfDocs.length > 0 ? (
              listOfDocs.map((docId, index) => (
                <Typography
                  key={index}
                  onClick={() => testMethod(docId, index)}
                  sx={{
                    cursor: "pointer",
                    padding: "12px",
                    backgroundColor: "#f5f5f5",
                    marginBottom: "8px",
                    borderRadius: "4px",
                    "&:hover": { backgroundColor: "#ddd" }
                  }}
                >
                  {docId}
                </Typography>
              ))
            ) : (
              <Typography>No documents found.</Typography>
            )}
          </Box>

          {/* Table */}
          <Divider sx={{ marginBottom: "20px" }} />
          <Table sx={{ marginTop: "20px", backgroundColor: "#fff" }}>
            <TableHead>
              <TableRow>
                <TableCell>Coin</TableCell>
                <TableCell>Symbol</TableCell>
                <TableCell>Current Price</TableCell>
                <TableCell>Market Cap</TableCell>
                <TableCell>24h High</TableCell>
                <TableCell>24h Low</TableCell>
                <TableCell>ATH</TableCell>
                <TableCell>ATL</TableCell>
                <TableCell>24h Change (%)</TableCell>
                <TableCell>Max Supply</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {num1 &&
                num1.map((coin, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:hover": { background: "#f9f9f9" } }}
                  >
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                          src={coin.image}
                          alt={coin.name}
                          sx={{ marginRight: "8px" }}
                        />
                        {coin.name}
                      </Box>
                    </TableCell>
                    <TableCell>{coin.symbol.toUpperCase()}</TableCell>
                    <TableCell>
                      ${coin.current_price.toLocaleString()}
                    </TableCell>
                    <TableCell>${coin.market_cap.toLocaleString()}</TableCell>
                    <TableCell>${coin.high_24h.toLocaleString()}</TableCell>
                    <TableCell>${coin.low_24h.toLocaleString()}</TableCell>
                    <TableCell>${coin.ath.toLocaleString()}</TableCell>
                    <TableCell>${coin.atl.toLocaleString()}</TableCell>
                    <TableCell>
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </TableCell>
                    <TableCell>
                      {coin.max_supply
                        ? coin.max_supply.toLocaleString()
                        : "N/A"}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
};

export default FavPage;
