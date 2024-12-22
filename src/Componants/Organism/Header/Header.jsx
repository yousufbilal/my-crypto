import { Box, Button, Typography } from "@mui/material";
import BitcoinLogo from "../../../Assests/BitcoinLogo.svg";
import SearchBar from "../../Molecules/SearchBar/SearchBar";
import React from "react";
import GoogleLogout from "../../Molecules/GoogleLogout/GoogleLogout";
import { useNavigate } from "react-router-dom";
import ButtonAtom from "../../Atoms/ButtonAtom/ButtonAtom";
import TyprographyAtom from "../../Atoms/TyprographyAtom/TyprographyAtom";
import ImageAtom from "../../Atoms/ImageAtom/ImageAtom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  const navigate = useNavigate();

  const favButtonHandler = () => {
    console.log("test fav button");
    navigate("/FavPage");
  };

  function twoSum(nums, target) {
    const map = new Map(); // To store the number and its index
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i]; // Find the complement

      if (map.has(complement)) {
        return [map.get(complement), i]; // Return the indices of the complement and current number
      }
      map.set(nums[i], i); // Store the current number and its index
    }
  }

  twoSum([5, 4, 6], 10);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
        background: "#FFFFFF",
        height: "20px",
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

      <SearchBar />

      <Box>
        <GoogleLogout />
        {/* <ButtonAtom test={favButtonHandler}>Go to Favorites</ButtonAtom> */}
        <AccountCircleIcon />
      </Box>
    </Box>
  );
};

export default Header;
