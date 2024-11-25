import React from "react";
import { Box } from "@mui/system";
import TrendingCards from "../../Molecules/TrendingCards/TrendingCards";
import TrendingCategories from "../../Molecules/TrendingCategories/TrendingCategories";
import TrendingNFTCards from "../../Molecules/TrendingNFTCards/TrendingNFTCards";

const TrendingContainer = () => {
  //loading state and error state on organisim
  //trending cards have skeletton here again
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
        <TrendingCards />
        <TrendingNFTCards />
        <TrendingCategories />
      </Box>
    </>
  );
};

export default TrendingContainer;
