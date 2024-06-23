import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

export const About = () => {
  return (
    <Box sx={{border:"1px solid red" , marginLeft:"50px"}}>
      <h1>ABOUT</h1>
      <Link to="/">
        <HomeIcon />
      </Link>
    </Box>
  );
};
