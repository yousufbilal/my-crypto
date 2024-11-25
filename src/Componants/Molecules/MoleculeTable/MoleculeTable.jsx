import React from "react";
import { Table } from "@mui/material";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import ImageAtom from "../../Atoms/ImageAtom/ImageAtom";
import Star from "@mui/icons-material/Star";
import StarBorder from "@mui/icons-material/StarBorder";
import Checkbox from "@mui/material/Checkbox";
import { useTranslation } from "react-i18next";

const MoleculeTable = ({ currentList, handleReturn, favSelect }) => {
  const { t, i18n } = useTranslation("common");

  return (
    <Table
      stickyHeader
      style={{
        border: "1px solid #ddd",
        borderSpacing: "0",
        tableLayout: "fixed"
      }}
    >
      <TableHead>
        <TableCell>{t("image")}</TableCell>
        <TableCell>{t("coin_symbol")}</TableCell>
        <TableCell>{t("coin_name")}</TableCell>
        <TableCell>{t("coin_current_price")}</TableCell>
        <TableCell>{t("coin_market_cap")}</TableCell>
        <TableCell>{t("coin_percentage_change")}</TableCell>
        <TableCell>{t("coin_last_update")}</TableCell>
        <TableCell>{t("coin Date")}</TableCell>
      </TableHead>

      <TableBody>
        {currentList?.map((coin) => (
          <TableRow key={coin.id} onClick={() => handleReturn(coin)}>
            <TableCell onClick={(event) => event.stopPropagation()}>
              <Checkbox
                onClick={() => {
                  favSelect(coin);
                }}
                icon={<StarBorder />}
                checkedIcon={<Star />}
              />
            </TableCell>

            <TableCell
              style={{ padding: "0", overflow: "hidden" }} // Remove padding and handle overflow
            >
              <ImageAtom
                src={coin.image}
                style={{ width: "50px", height: "50px" }}
              />
            </TableCell>
            <TableCell style={{ padding: "0", fontSize: "15px" }}>
              {coin.symbol}
            </TableCell>
            <TableCell style={{ padding: "0", fontSize: "15px" }}>
              {coin.name}
            </TableCell>
            <TableCell style={{ padding: "0", fontSize: "15px" }}>
              {coin.current_price.toFixed(2)}
            </TableCell>
            <TableCell style={{ padding: "0", fontSize: "15px" }}>
              {coin.market_cap.toFixed(2)}
            </TableCell>
            <TableCell style={{ padding: "0", fontSize: "15px" }}>
              {coin.price_change_percentage_24h.toFixed(2)}
            </TableCell>
            <TableCell style={{ padding: "0", fontSize: "15px" }}>
              {coin.last_updated}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MoleculeTable;
