import React from "react";
import Skeleton from "react-loading-skeleton";
import TyprographyAtom from "../../Atoms/TyprographyAtom/TyprographyAtom";
import { Typography } from "@mui/material";
import { Box, border, width } from "@mui/system";

const CoinLoadingMolecule = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      padding="20px"
    >
      <Typography
        variant="h6"
        marginTop="10px"
        width={"100vw"}
        border={"1px solid red"}
      >
        <TyprographyAtom>Loading Trending Data...</TyprographyAtom>
        <Skeleton></Skeleton>
        <Skeleton></Skeleton>
        <Skeleton></Skeleton>
      </Typography>
    </Box>
  );
};

export default CoinLoadingMolecule;
