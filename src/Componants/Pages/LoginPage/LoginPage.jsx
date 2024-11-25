import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { CardMedia } from "@mui/material";
import screenshot2 from "../../../Assests/screenshot2.png";
import bitcoinAnimation from "../../../Assests/bitcoinAnimation.gif";
import GoogleSignUp from "../../Molecules/GoogleSignUp/GoogleSignUp";

export const LoginPage = () => {
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
            <GoogleSignUp />
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
