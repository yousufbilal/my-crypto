import React from "react";
import { Box } from "@mui/system";
import TyprographyAtom from "../../Atoms/TyprographyAtom/TyprographyAtom";

const CardTrends = ({ trending, heading }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      overflow="scroll"
      sx={{
        width: "500px",
        height: "400px",
        "&::-webkit-scrollbar": {
          display: "none"
        }
      }}
    >
      <TyprographyAtom>{heading}</TyprographyAtom>

      <Box sx={{ padding: 0, margin: 0 }}>
        {trending?.map((item) => (
          <Box>
            <li
              key={item.id} //Make sure to add a unique key for each item
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
              {item.thumb ? (
                <img
                  src={item.thumb} // Only renders if item.thumb exists
                  alt={`Thumbnail for ${item.name}`}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "5px",
                    marginRight: "10px"
                  }}
                />
              ) : null}

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

                {item.data.floor_price ? (
                  <div>Floor Price: {item.data.floor_price}</div>
                ) : item.data.price_btc ? (
                  <div>Price BTC: {Number(item.data.price_btc).toFixed(6)}</div>
                ) : (
                  <div>Total Volume: {item.data.total_volume}</div>
                )}
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
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CardTrends;
