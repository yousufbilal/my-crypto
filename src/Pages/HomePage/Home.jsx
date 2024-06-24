import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import SideBar from "../SideBar/SideBar";
import CoinPrice from "../../Componants/CoinPrice/CoinPrice";
import "./Home.css";

export const Home = () => {
  return (
    <Box
      sx={{
        display: "flex"
        // alignItems: "center"
        // height:"500px"
      }}
    >
      <SideBar />
      <Box sx={{width:"100%"}}>
        <CoinPrice />
      </Box>
    </Box>
  );
};

{
  /* <Link to="/about">About</Link> */
}
{
  /* <Link to="/show">Show</Link> */
}
