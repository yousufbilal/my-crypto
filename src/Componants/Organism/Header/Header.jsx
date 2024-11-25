import { Box, Button, Typography } from "@mui/material";
import BitcoinLogo from "../../../Assests/BitcoinLogo.svg";
import SearchBar from "../../Molecules/SearchBar/SearchBar";
import React from "react";
import GoogleLogout from "../../Molecules/GoogleLogout/GoogleLogout";
import { useNavigate } from "react-router-dom";
import ButtonAtom from "../../Atoms/ButtonAtom/ButtonAtom";
import TyprographyAtom from "../../Atoms/TyprographyAtom/TyprographyAtom";
import ImageAtom from "../../Atoms/ImageAtom/ImageAtom";

const Header = () => {
  const navigate = useNavigate();

  const favButtonHandler = () => {
    console.log("test fav button");
    navigate("/FavPage");
  };

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
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
      }}
    >
      <Box display={"flex"} justifyContent={"center"} alignItems={"end"}>
        <TyprographyAtom>Crypto Tracker</TyprographyAtom>
        <ImageAtom
          src={BitcoinLogo}
          style={{ height: "100%", width: "50px" }}
        />
      </Box>

      <Box>
        <SearchBar />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            flexDirection: "column"
          }}
        >
          <Box>
            <GoogleLogout />
          </Box>
          <ButtonAtom test={favButtonHandler}>Go to Favorites</ButtonAtom>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
