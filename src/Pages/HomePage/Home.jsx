import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import "./Home.css";

export const Home = () => {
  return (
    <Box>
      HOME
      <Link to="/about">About</Link>
      <Link to="/show">Show</Link>
    </Box>
  );
};
