import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/HomePage/Home";
import { About } from "./Pages/About/About";
// import Layout from "./Componants/Layout/Layout"; // Ensure the correct path
// import AdminWrapper from "./Pages/AdminWrapper/AdminWrapper";
import CoinPrice from "./Componants/CoinPrice/CoinPrice";
import NFT from "./Componants/NFT/NFT";
import "./App.css";



function App() {
  return (
    <div className="main-page">
      {/* <CoinPrice /> */}
      {/* <NFT/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;


{/* <Routes>
<Route path="/" element={<AdminWrapper selected="Home" componant="Home" />} />
<Route path="/show" element={<AdminWrapper selected="show" componant="Show" />} />
<Route path="/about" element={<AdminWrapper selected="about" componant="About" />} />
</Routes> */}