import React from "react";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const SearchBar = () => {
  return (
    <Box display="flex" alignItems="center" sx={{marginRight:"100px"}}>
      <TextField label="Search" variant="outlined" />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
