import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SideBar from "../SideBar/SideBar";

export const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center"
      }}
    >
      <SideBar />
      ABOUT PAGE
      <Box
        sx={{
          marginLeft: 2
        }}
      >
        <Link to="/"></Link>
      </Box>
    </Box>
  );
};
