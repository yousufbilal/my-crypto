import React from "react";
import Skeleton from "react-loading-skeleton";
import TyprographyAtom from "../../Atoms/TyprographyAtom/TyprographyAtom";
import { Typography } from "@mui/material";
import { Box, border, width } from "@mui/system";
import CardTrends from "../CardTrends/CardTrends";

const CoinDataMolecule = ({ nfts, categories, cryptoCoins }) => {
  return (
    <Box
      display="flex"
      justifyContent={"space-between"}
      flexDirection="row"
      padding={4}
      borderRadius={5}
      bgcolor={"#F2F2F2"}


    >
      <CardTrends trending={cryptoCoins} heading="Trending Coins" />
      <CardTrends trending={nfts} heading="Trending NFTs" />
      <CardTrends trending={categories} heading="Trending Categories" />
    </Box>
  );
};

export default CoinDataMolecule;
