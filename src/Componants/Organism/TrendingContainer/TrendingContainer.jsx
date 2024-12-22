import React, { useEffect } from "react";
import { Box, border, width } from "@mui/system";
import CardTrends from "../../Molecules/CardTrends/CardTrends";
import TyprographyAtom from "../../Atoms/TyprographyAtom/TyprographyAtom";
import { Typography } from "@mui/material";
import SkeletonAtom from "../../Atoms/SkeletonAtom/SkeletonAtom";
import Skeleton from "react-loading-skeleton";
import { use } from "i18next";
import CoinDataMolecule from "../../Molecules/CoinDataMolecule/CoinDataMolecule";
import CoinErrorMolecule from "../../Molecules/CoinErrorMolecule/CoinErrorMolecule";
import CoinLoadingMolecule from "../../Molecules/CoinLoadingMolecule/CoinLoadingMolecule";

const TrendingContainer = ({
  nfts,
  categories,
  cryptoCoins,
  trendingData,
  trendingError,
  trendingLoading,
  onReload
}) => {
  if (trendingLoading) {
    return <CoinLoadingMolecule />;
  }

  if (trendingError) {
    return <CoinErrorMolecule onReload={onReload} />;
  }

  if (Object.keys(trendingData).length) {
    return (
      
      <CoinDataMolecule
        nfts={nfts}
        categories={categories}
        cryptoCoins={cryptoCoins}
        trendingData={trendingData}
      />
    );
  }
};

//clearing the state ? dispatch
//naming convenrions for atom , molecule , organism  and pages

export default TrendingContainer;
