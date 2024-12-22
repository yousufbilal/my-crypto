import "react-loading-skeleton/dist/skeleton.css";
import React from "react";
import { Box } from "@mui/system";
import MoleculeTable from "../../Molecules/MoleculeTable/MoleculeTable";
import PaginationAtom from "../../Atoms/PaginationAtom/PaginationAtom";
import Skeleton from "react-loading-skeleton";
import TyprographyAtom from "../../Atoms/TyprographyAtom/TyprographyAtom";
import { Button } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";

const CoinDataTable = ({
  currentList,
  handleReturn,
  favSelect,
  paginationClick,
  coinCategoriesLoading,
  coinCategoriesData,
  coinCategoriesError,
  reloadCategories
}) => {
  if (coinCategoriesLoading) {
    return (
      <>
        <Skeleton style={{ backgroundColor: "blue" }} />
        <Skeleton style={{ backgroundColor: "red" }} />
        <Skeleton style={{ backgroundColor: "green" }} />
      </>
    );
  }

  if (coinCategoriesData.length >= 0) {
    return (
      <>
        <MoleculeTable
          coinCategoriesData={coinCategoriesData}
          currentList={currentList}
          handleReturn={handleReturn}
          favSelect={favSelect}
        />
        <Box display="flex" justifyContent="center" marginTop={2}>
          <PaginationAtom paginationClick={paginationClick} />
        </Box>
      </>
    );
  }

  if (coinCategoriesError) {
    return (
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          width: "100%",
          height: "400px",
          background: "white"
        }}
      >
        <TyprographyAtom>Network Error for Categories</TyprographyAtom>
        <Button onClick={() => reloadCategories()}>
          <ReplayIcon />
        </Button>
      </Box>
    );
  }

  return (
    <>
      {/* <MoleculeTable
        currentList={currentList}
        handleReturn={handleReturn}
        favSelect={favSelect}
      /> */}

      {/* <Box display="flex" justifyContent="center" marginTop={2}>
        <PaginationAtom paginationClick={paginationClick} />
      </Box> */}
    </>
  );
};

export default CoinDataTable;
