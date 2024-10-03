import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { addCoinList } from "../../Store/Features/coinListSlice/coinListSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LocalStorageFunc } from "../Atoms/LocalStorageFunc";

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
    // const filtered = categories.filter((item) =>
    const filtered = LocalStorageFunc().filter((item) =>
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
        <Box>
          <TextField
            onChange={(e) => userInput(e)}
            label="Search"
            variant="outlined"
            fullWidth
            autoComplete="off"
          />
          <Box position={"fixed"}>
            {filterData.length > 0
              ? filterData.map((filterCoin) => (
                  <Box onClick={() => handleReturn(filterCoin)}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#F9F6EE",
                        width: "150px",
                        height: "50px",
                        border: "1px solid #ECEEF1",
                        borderRadius: "5px",
                        marginTop: "5px"
                      }}
                    >
                      {filterCoin.name}
                    </Box>
                  </Box>
                ))
              : null}
          </Box>
        </Box>
        {/* <SearchIcon /> */}
      </Box>
    </Box>
  );
};

export default SearchBar;
