import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoinTrending } from "../../Store/Features/coinTrending/coinTrending";
import { Box } from "@mui/system";

const DeFiCard = () => {
  const dispatch = useDispatch();
  const { trending, coinTrendingStatus, coinTrendingErrors } = useSelector(
    (state) => {
      return state.coinTrending;
    }
  );

  useEffect(() => {
    dispatch(addCoinTrending());
  }, []);

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
        "msoverflowstyle": "none",
        "scrollbarwidth": "none"
      }}
    >
      <h3>Trending Categories</h3>
      <Box component="ol" sx={{ padding: 0, margin: 0 }}>
        {trending.categories?.map((item) => (
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
              border: "1px solid #ddd"
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                flexGrow: 1
              }}
            >
              <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                Name: {item.name}
              </div>
              <div>Total Volume: {item.data.total_volume.toFixed(2)}</div>
              <div>Market Cap: {item.data.market_cap.toFixed(2)}</div>
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

export default DeFiCard;
