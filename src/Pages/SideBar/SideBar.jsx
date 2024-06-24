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
      borderRadius={"5px"}
      gap={4}
      p={2}
      sx={{
        height: "100vh",
        border: "1px solid grey",
        width: "30px",
        backgroundColor: "lightblue"
      }}
    >
      <Link to={"/"}>
        <HomeIcon active={selected === "home"} />
      </Link>

      <Link to={"/about"}>
        <EqualizerIcon active={selected === "about"} />
      </Link>

      <CurrencyBitcoinIcon />

      <DashboardIcon />
      <ShowChartIcon />
    </Box>
  );
};

export default SideBar;

{
  /* <Link to="/">
<HomeIcon />
</Link>
<Link to="/show">
<EqualizerIcon />
</Link>
<Link to="/about">
<DashboardIcon />
</Link>
<Link to="/about">
<CurrencyBitcoinIcon />
</Link> */
}