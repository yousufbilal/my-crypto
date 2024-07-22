import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoinTrending } from "../../Store/Features/coinTrending/coinTrending";
import { Box } from "@mui/system";

const NFTCards = () => {
  const dispatch = useDispatch();
  const { trending, coinTrendingStatus, coinTrendingErrors } = useSelector(
    (state) => state.coinTrending
  );

  useEffect(() => {
    dispatch(addCoinTrending);
  }, [dispatch]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      overflow="scroll"
      sx={{
        width: "500px",
        height: "400px",
        background: "white",
        overflow: "auto",
        border: "none",
        boxShadow: "none",
        padding: "10px",
        borderRadius: "10px",
        "&::-webkit-scrollbar": {
          display: "none"
        },
        "-ms-overflow-style": "none",
        "scrollbar-width": "none"
      }}
    >
      <h3>Trending NFTCards</h3>
      <Box component="ol" sx={{ padding: 0, margin: 0 }}>
        {trending.nfts?.map((item) => (
          <li
            key={item.id} // Make sure to add a unique key for each item
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: "5px",
              marginBottom: "20px",
              padding: "10px",
              border: "1px solid #ddd" // Optional: Add border for better visual separation
            }}
          >
            <img
              src={item.thumb}
              alt={`Thumbnail for ${item.name}`}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "5px",
                marginRight: "10px"
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                flexGrow: 1
              }}
            >
              <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                {item.name}
              </div>
              <div>Floor Price: {item.data.floor_price}</div>
            </Box>
            <img
              src={item.data.sparkline}
              alt={`Sparkline for ${item.name}`}
              style={{
                width: "auto",
                height: "40px",
                borderRadius: "5px"
              }}
            />
          </li>
        ))}
      </Box>
    </Box>
  );
};

export default NFTCards;
