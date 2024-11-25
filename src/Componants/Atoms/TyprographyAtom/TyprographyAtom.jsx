import React from "react";
import { Typography } from "@mui/material";

const TyprographyAtom = ({ children }) => {
  return (
    <Typography
      display={"flex"}
      justifyContent={"center"}
      alignItems={"end"}
      variant="h6"
      marginRight={"10px"}
      sx={{
        fontWeight: "bold",
        color: "#1A679D",
        textAlign: "end",
        textTransform: "uppercase",
        letterSpacing: "0.5px"
      }}
    >
      {children}
    </Typography>
  );
};

export default TyprographyAtom;
