import React from "react";
import { Box } from "@mui/material";
import { border } from "@mui/system";
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
        alignItems: "start",
        padding: 2,
        boxSizing: "border-box",
        width: "100vw",
        overflow: "hidden",
        background: "#ADD8E6",
        padding: "none"
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

// border: "1px solid red"
