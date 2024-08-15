import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Button, CardMedia, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import screenshot2 from "../../Assests/screenshot2.png";
import bitcoinAnimation from "../../Assests/bitcoinAnimation.gif";
import { ref, set, get } from "firebase/database";
import { getDatabase } from "firebase/database";

export const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [userPassWord, setUserPassword] = useState("");

  const writeUserData = async () => {
    const db = getDatabase();

    const usersRef = ref(db, "users");
    const snapshot = await get(usersRef);
    const usersData = snapshot.val();

    const userArray = Object.values(usersData);

    let test = userArray.some((name) => {
      return name.userName === userName;
    });

    if (!test) {
      await set(ref(db, `users/${userName}`), {
        userName: userName,
        userPassWord: userPassWord
      });
    } else {
      console.log("exists");
    }
  };

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
              value={userName} // Controlled input
            />

            <TextField
              onChange={(e) => setUserPassword(e.target.value)}
              placeholder="password"
              value={userPassWord} // Controlled input
            />

            <Link
            // to={"/home"}
            >
              <Button
                onClick={() => writeUserData()}
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
