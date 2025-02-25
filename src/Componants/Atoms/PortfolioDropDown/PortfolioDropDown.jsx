import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PortfolioDropDown = ({ collectionListTest }) => {
  const [test, setTest] = useState("");
  const navigate = useNavigate();

  const handleDropDown = (event) => {
    const selectedValue = event.target.value;
    setTest(selectedValue);
    navigate("/FavPage", { state: { selected: selectedValue } });
  };

  return (
    <>
      <Select value={test} label="Portfolio" onChange={handleDropDown}>
        {collectionListTest?.map((value, index) => (
          <MenuItem key={index} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default PortfolioDropDown;
