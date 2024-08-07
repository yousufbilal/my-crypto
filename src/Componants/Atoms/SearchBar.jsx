import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { addCoinList } from "../../Store/Features/coinListSlice/coinListSlice";
import { useDispatch, useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { border } from "@mui/system";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [filterData, setFilterData] = useState([]);
  const dispatch = useDispatch();
  const { categories, status } = useSelector((state) => state.coinList);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(addCoinList());
  }, [dispatch]);

  const userInput = (e) => {
    let userData = e.target.value.toLowerCase();
    const filtered = categories.filter((item) =>
      item.name.toLowerCase().includes(userData)
    );
    setFilterData(filtered);
  };

  const handleReturn = (filterCoin) => {
    navigate("/about", { state: { filterCoin } });
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      sx={{
        width: "300px"
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        // marginTop={"80px"}
      >
        <TextField
          onChange={(e) => userInput(e)}
          label="Search"
          variant="outlined"
          fullWidth
        />
        <SearchIcon />

        {filterData.length > 0
          ? filterData.map((filterCoin) => (
              <Box onClick={() => handleReturn(filterCoin)}>
                <Box>{filterCoin.name}</Box>
              </Box>
            ))
          : null}
      </Box>
    </Box>
  );
};

export default SearchBar;
