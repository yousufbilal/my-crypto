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
      flexDirection="row"
      border="1px solid red"
      padding="50px"
      background="red"
    >
      <CardTrends trending={cryptoCoins} heading="Trending Coins" />
      <CardTrends trending={nfts} heading="Trending NFTs" />
      <CardTrends trending={categories} heading="Trending Categories" />
    </Box>
  );
};

export default CoinDataMolecule;
