import React from "react";
import { Box, Typography } from "@mui/material";
import { border, height } from "@mui/system";
import BitcoinLogo from "../../Assests/BitcoinLogo.svg";
import SearchBar from "../Atoms/SearchBar";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
        boxSizing: "border-box",
        background: "#FFFFFF",
        height: "60px",
        zIndex: "10",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",

      }}
    >
      <Box display={"flex"} justifyContent={"center"} alignItems={"end"}>
        <Typography
          display={"flex"}
          justifyContent={"center"}
          alignItems={"end"}
          variant="h6"
          marginRight={"10px"}
          sx={{
            fontWeight: "bold",
            color: "#1A679D",
            textAlign: "end",
            textTransform: "uppercase",
            letterSpacing: "0.5px" 
          }}
        >
          Crypto Tracker
        </Typography>
        <img
          src={BitcoinLogo}
          alt="Bitcoin Logo"
          style={{ height: "100%", width: "50px" }}
        />
      </Box>

      <Box>
        <SearchBar />
      </Box>
    </Box>
  );
};

export default Header;
