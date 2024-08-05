import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import HomeIcon from "@mui/icons-material/Home";

const SideBar = ({ selected }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={4}
      p={2}
      borderRadius={"5px"}
      sx={{
        height: "100%",
        width: "50px",
        backgroundColor: "lightblue"
      }}
    >
      <Link to={"/home"}>
        <HomeIcon
          sx={{
            marginTop: "50px"
          }}
          active={selected === "home"}
        />
      </Link>
      <CurrencyBitcoinIcon />
      <DashboardIcon />
      <ShowChartIcon />
    </Box>
  );
};

export default SideBar;
