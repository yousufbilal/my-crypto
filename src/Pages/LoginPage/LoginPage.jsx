import React, { useEffect, useState } from "react";
import { Box, Container, border } from "@mui/system";
import { Button, CardMedia, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import dashboardImage from "../../Assests/dashboardImage.png";
import screenshot2 from "../../Assests/screenshot2.png";
import bitcoinAnimation from "../../Assests/bitcoinAnimation.gif";
// import Cryptowallet from "../../Assests/";

export const LoginPage = () => {
  const [userName, setUserName] = useState();
  const [userPassWord, setUserPassword] = useState();
  const [submitValue, setSubmitValue] = useState(false);

  const testFunc = () => {
    setSubmitValue(true);
    console.log(userName, userPassWord);
  };

  useEffect(() => {
    testFunc();
  }, [submitValue]);

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ background: "white", height: "100vh", width: "30%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",

            alignItems: "center",
            height: "100vh"
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <img
                src={bitcoinAnimation}
                alt="Bitcoin Animation"
                style={{
                  width: "30%",
                  height: "auto",
                  borderRadius: "10px"
                }}
              />
            </Box>
            <TextField
              onChange={(e) => setUserName(e.target.value)}
              placeholder="user name"
            ></TextField>

            <TextField
              onChange={(e) => setUserPassword(e.target.value)}
              placeholder="password"
            ></TextField>

            <Link
            // to={"/home"}
            >
              <Button
                onClick={() => testFunc()}
                sx={{ border: "1px solid #ADD8E6", width: "300px" }}
              >
                Submit
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: "#6CB4EE",
          width: "70%",
          height: "100vh",
          padding: "10px",
          overflow: "hidden"
        }}
      >
        <CardMedia
          sx={{
            display: "flex",
            borderRadius: "5px",
            marginLeft: "300px",
            marginTop: "450px",

            border: "px solid #6CB4EE"
          }}
          component="img"
          image={screenshot2}
          alt="Example Image"
        />
      </Box>
    </Box>
  );
};
