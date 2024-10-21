import { Box, Typography } from "@mui/material";
import { border, height } from "@mui/system";
import BitcoinLogo from "../../Assests/BitcoinLogo.svg";
import SearchBar from "../Atoms/SearchBar";
import { useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useEffect, useState } from "react";
import GoogleLogout from "../GoogleLogout/GoogleLogout";

const Header = () => {
  const userDataRedux = useSelector((state) => state.counter.userData);

  // const convertingtoJson = JSON.stringify(userDataRedux);
  // sessionStorage.setItem("sessionKey", convertingtoJson);
  // const value = sessionStorage.getItem("sessionKey");
  // const testParseJson = JSON.parse(value);
  // console.log(testParseJson);

  useEffect(() => {
    if (userDataRedux) {
      const convertingtoJson = JSON.stringify(userDataRedux);
      sessionStorage.setItem("sessionKey", convertingtoJson);
    }
  }, [userDataRedux]);

  const value = sessionStorage.getItem("sessionKey");
  const testParseJson = JSON.parse(value);

  // useEffect(() => {
  //   const value = sessionStorage.getItem("sessionKey");
  //   if (value) {
  //     const testParseJson = JSON.parse(value);
  //     console.log(testParseJson);
  //   }
  // }, []);

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
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            flexDirection: "column"
          }}
        >
          <Box>
            {testParseJson && testParseJson.photoURL ? (
              <img
                src={testParseJson.photoURL}
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
              "image error"
            )}
          </Box>

          <Typography>
            {testParseJson?.displayName && testParseJson?.displayName
              ? testParseJson?.displayName
              : "user name error "}
          </Typography>

          <Box>
            <GoogleLogout />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
