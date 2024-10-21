import React, { useEffect, useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from "../../fireBaseDataBase";

const GoogleLogout = () => {
  const signoutHandler = async () => {
    try {
      const auth = getAuth(app);
      await signOut(auth);
      console.log("sign out function working");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Button onClick={signoutHandler}>
        <LogoutIcon />
      </Button>
    </Box>
  );
};

export default GoogleLogout;
