import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import TrendingCards from "../../Molecules/TrendingCards/TrendingCards";
import TrendingCategories from "../../Molecules/TrendingCategories/TrendingCategories";
import TrendingNFTCards from "../../Molecules/TrendingNFTCards/TrendingNFTCards";
import CardTrends from "../../Molecules/CardTrends/CardTrends";

const TrendingContainer = ({ trending }) => {
  let coins = trending.coins;
  let nfts = trending.nfts;
  let categories = trending.categories;

  let yolo = coins?.map((item) => {
    return item.item;
  });

  return (
    <>
      <Box
        width="100%"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent={"space-between"}
        borderRadius={"5px"}
        marginBottom={"30px"}
        marginTop={"30px"}
        sx={{ backgroundColor: "#ECEEF1", padding: 3 }}
      >
        <CardTrends trending={nfts} heading="Trending NFTs" />
        <CardTrends trending={categories} heading="Trending Categories" />
        <CardTrends trending={yolo} heading="Trending Coins" />
      </Box>
    </>
  );
};

export default TrendingContainer;

{
/*<TrendingCards trending={trending} />
<TrendingNFTCards trending={trending} />
<TrendingCategories trending={trending} /> */
}
