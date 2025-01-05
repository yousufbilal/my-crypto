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
      <FormControl fullWidth>
        <InputLabel>Portfolio</InputLabel>
        <Select value={test} label="Age" onChange={handleDropDown}>
          {collectionListTest?.map((value, index) => {
            return <MenuItem value={value}>{value}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </>
  );
};

export default PortfolioDropDown;
