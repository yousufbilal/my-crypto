import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/HomePage/Home";
import { About } from "./Pages/About/About";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import CoinDataTable from "./Componants/CoinDataTable/CoinDataTable";
import NFT from "./Componants/NFT/NFT";
// require('dotenv').config();


import "./App.css";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="main-page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
