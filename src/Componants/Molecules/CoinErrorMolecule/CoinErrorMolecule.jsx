import React from "react";
import TyprographyAtom from "../../Atoms/TyprographyAtom/TyprographyAtom";
import { Box } from "@mui/system";

const CoinErrorMolecule = () => {
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
      <TyprographyAtom>Network Error</TyprographyAtom>
    </Box>
  );
};

export default CoinErrorMolecule;
