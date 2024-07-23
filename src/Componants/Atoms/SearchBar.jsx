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

  const cryptocurrencies = [
    { name: "Bitcoin" },
    { name: "Ethereum" },
    { name: "Ripple" },
    { name: "Litecoin" },
    { name: "Bitcoin Cash" }
  ];

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
        marginTop={"80px"}
      >
        <TextField
          onChange={(e) => userInput(e)}
          label="Search"
          variant="outlined"
          fullWidth
        />
        <SearchIcon />

        {filterData.length > 0 ? (
          filterData.map((filterCoin) => (
            <Box
              display="flex"
              flexDirection="column" // Changed from "row" to "column"
              onClick={() => handleReturn(filterCoin)}
              key={filterCoin.name} // It's a good practice to add a key when mapping through arrays
              sx={{ marginBottom: "10px" }} // Add some spacing between items if needed
            >
              <Box
                display="flex"
                flexDirection="row"
                sx={{
                  background: "white",
                  height: "100%",
                  width: "110px",
                  borderRadius: "5px"
                }}
              >
                {filterCoin.name}
              </Box>
            </Box>
          ))
        ) : (
          <ListItem>
            {/* <ListItemText
      style={{
        background: "white",
        height: "100%",
        borderRadius: "5px",
        padding: "10px"
      }}
      primary="No results found"
    /> */}
          </ListItem>
        )}
      </Box>
    </Box>
  );
};

export default SearchBar;

{
  /* <ListItem
style={{
  position: "relative",
  background: "white",
  height: "100%",
  borderRadius: "5px",
  padding: "10px",
  marginBottom: "10px"
}}
>
<ListItemText  onClick={() => testFunc(item.name)}/>{item.name}
</ListItemText>

</ListItem> */
}
