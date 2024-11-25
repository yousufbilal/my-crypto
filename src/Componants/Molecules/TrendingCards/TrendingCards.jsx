import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoinTrending } from "../../../Store/Features/coinTrending/coinTrending";
import Skeleton from "react-loading-skeleton";
import ImageAtom from "../../Atoms/ImageAtom/ImageAtom";
import TyprographyAtom from "../../Atoms/TyprographyAtom/TyprographyAtom";
import "react-loading-skeleton/dist/skeleton.css";

const TrendingCards = () => {
  //this logic needs to be in home page 
  const dispatch = useDispatch();
  const { trending } = useSelector((state) => state.coinTrending);
  // const { t, i18n } = useTranslation("common");

  const coinPriceFormat = () => {
    let coinPrice = 0;
    if (trending && trending.coins) {
      trending.coins.map(
        (item) => (coinPrice = item.item.data.price.toFixed(2))
      );
    }
    return coinPrice;
  };

  useEffect(() => {
    coinPriceFormat();
  }, [trending]);

  useEffect(() => {
    dispatch(addCoinTrending());
  }, [dispatch]);

  return (
    <>
      {!trending ? (
        <Box className="card-container">
          <Skeleton height={50} width={"90%"} />
          <Skeleton height={50} width={"80%"} />
          <Skeleton height={50} width={"70%"} />
          <Skeleton height={50} width={"50%"} />
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          overflow={"scroll"}
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
            msoverflowstyle: "none",
            scrollbarwidth: "none"
          }}
        >
          <TyprographyAtom className="trending-coin">
            Trending Coins
          </TyprographyAtom>

          {trending && trending.coins ? (
            <Box>
              {trending.coins.map((item, index) => (
                <li
                  key={index}
                  style={{
                    width: "100%",
                    justifyContent: "space-between",
                    display: "flex",
                    flexDirection: "row",
                    borderRadius: "5px",
                    marginBottom: "20px",
                    border: "1px solid #ddd",
                    padding: "10px"
                  }}
                >
                  <ImageAtom
                    src={item.item.small}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "5px"
                    }}
                  />
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingLeft: "10px"
                    }}
                  >
                    {item.item.symbol}
                  </Box>
                  <Box
                    width={"100%"}
                    justifyContent={"center"}
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <Box>usd ${item.item.data.price.toFixed(2)}</Box>
                  </Box>

                  <ImageAtom
                    src={item.item.data.sparkline}
                    style={{
                      borderRadius: "5px",
                      width: "auto",
                      height: "auto"
                    }}
                  />
                </li>
              ))}
            </Box>
          ) : (
            <p>No items available</p>
          )}
        </Box>
      )}
    </>
  );
};

export default TrendingCards;
