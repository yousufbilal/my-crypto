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
      display={"flex"}
      flexDirection={"column"}
      overflow={"scroll"}
      sx={{ width: "500px", height: "400px"}}
    >
      <ol>
        {trending.categories?.map((item) => {
          return (
            <li>
              Name {item.name}
              Total Volume {item.data.total_volume}
              Market Cap{item.data.market_cap}
              <img
                src={item.data.sparkline}
                alt={`Sparkline for ${item.name}`}
                style={{ width: "200px", height: "auto" }}
              />
            </li>
          );
        })}

        <li></li>
      </ol>
    </Box>
  );
};

export default DeFiCard;
