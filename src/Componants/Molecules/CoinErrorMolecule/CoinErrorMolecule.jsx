import React from "react";
import TyprographyAtom from "../../Atoms/TyprographyAtom/TyprographyAtom";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

const CoinErrorMolecule = ({ onReload }) => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        width: "100%",
        height: "400px",
        background: "white"
      }}
    >
      <Button onClick={() => onReload()}>Reload but</Button>
      <TyprographyAtom>Network Error</TyprographyAtom>
    </Box>
  );
};

export default CoinErrorMolecule;
