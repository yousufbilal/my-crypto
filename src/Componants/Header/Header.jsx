import React from "react";
import { Box, Typography } from "@mui/material";
import { border, height } from "@mui/system";
import BitcoinLogo from "../../Assests/BitcoinLogo.svg";
import SearchBar from "../Atoms/SearchBar";
import { useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = ({ currentGoogleUser }) => {
  // console.log(currentGoogleUser ? currentGoogleUser : "no data");
  const userDataRedux = useSelector((state) => state.counter.userData);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
        boxSizing: "border-box",
        background: "#FFFFFF",
        height: "60px",
        zIndex: "10",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
      }}
    >
      <Box display={"flex"} justifyContent={"center"} alignItems={"end"}>
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
          Crypto Tracker
        </Typography>
        <img
          src={BitcoinLogo}
          alt="Bitcoin Logo"
          style={{ height: "100%", width: "50px" }}
        />

        {/* {currentGoogleUser ? (
          <Typography> {currentGoogleUser} </Typography>
        ) : (
          <Typography>no name</Typography>
        )} */}
      </Box>

      <Box>
        <SearchBar />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        {/* {userDataRedux.displayName ? (
          <Typography> {userDataRedux?.displayName} </Typography>
        ) : (
          <Typography>no name</Typography>
        )} */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            flexDirection: "column"
          }}
        >
          <Box>
            {userDataRedux && userDataRedux.photoURL ? (
              <img
                src={userDataRedux.photoURL}
                width={50}
                height={50}
                style={{
                  borderRadius: 5,
                  marginTop: 5,
                  display: "flex",
                  justifyContent: "center"
                }}
                alt="User profile"
              />
            ) : (
              "user name error "
            )}
          </Box>

          <Typography>
            {userDataRedux && userDataRedux.displayName
              ? userDataRedux.displayName
              : "user name error "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
