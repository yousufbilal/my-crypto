import { View, Text } from "react-native";
import React from "react";
import { BitcoinLogo } from "../../../Assests/BitcoinLogo.svg";

const cryptoLogo = () => {
  return (
    <img
      src={BitcoinLogo}
      alt="Bitcoin Logo"
      style={{ height: "100%", width: "50px" }}
    />
  );
};

export default cryptoLogo;
