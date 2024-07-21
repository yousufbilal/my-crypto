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
      display={"flex"}
      flexDirection={"column"}
      overflow={"scroll"}
      sx={{ width: "500px", height: "400px" }}
    >
      Trending NFTCards
      <ol>
        {trending.nfts?.map((item) => {
          return (
            <li>
              <img src={item.thumb} />
              <img
                src={item.data.sparkline}
                alt={`Sparkline for ${item.name}`}
                style={{ width: "200px", height: "auto" }}
              />
              {item.name} {item.data.floor_price}
            </li>
          );
        })}
      </ol>
    </Box>
  );
};

export default NFTCards;
