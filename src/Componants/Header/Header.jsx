import React from "react";
import { Box } from "@mui/material";
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
        background: "#ADD8E6",
        height: "60px",
        zIndex: "10",
        background: "#ADD8E6"
      }}
    >
      <Box>
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
