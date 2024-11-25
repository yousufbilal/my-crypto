import React from "react";
import Pagination from "@mui/material/Pagination";

const PaginationAtom = ({ paginationClick }) => {
  return (
    <>
      <Pagination
        count={20} // Change the count to the actual number of coins
        onChange={(event, page) => paginationClick(page)}
      />
    </>
  );
};

export default PaginationAtom;
