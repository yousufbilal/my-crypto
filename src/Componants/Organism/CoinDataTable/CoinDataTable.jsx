import "react-loading-skeleton/dist/skeleton.css";
import React from "react";
import { Box } from "@mui/system";
import MoleculeTable from "../../Molecules/MoleculeTable/MoleculeTable";
import PaginationAtom from "../../Atoms/PaginationAtom/PaginationAtom";

const CoinDataTable = ({
  currentList,
  handleReturn,
  favSelect,
  paginationClick
}) => {
  return (
    <>
      <MoleculeTable
        currentList={currentList}
        handleReturn={handleReturn}
        favSelect={favSelect}
      />

      <Box display="flex" justifyContent="center" marginTop={2}>
        <PaginationAtom paginationClick={paginationClick} />
      </Box>
    </>
  );
};

export default CoinDataTable;
