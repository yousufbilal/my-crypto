import React from "react";
import { Button } from "@mui/material";

const ButtonAtom = ({
  test,
  children,
  variant = "outlined",
  color = "secondary",
  size = "small",
  sx = {}
}) => {
  return (
    <Button onClick={test} variant={variant} color={color} size={size} sx={sx}>
      {children}
    </Button>
  );
};

export default ButtonAtom;
