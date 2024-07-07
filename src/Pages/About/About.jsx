import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SideBar from "../SideBar/SideBar";
import TestComponant from "../../Componants/Atoms/TestComponant";

export const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center"
      }}
    >
      <SideBar />
      <TestComponant />
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
