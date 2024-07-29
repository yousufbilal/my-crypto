import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoinStatusUpdate } from "../../Store/Features/coinStatusUpdateSlice/coinStatusUpdateSlice";

export const CoinStatus = () => {
  const dispatch = useDispatch();
  const { statusUpdate } = useSelector((state) => state.coinStatusUpdate);

  // console.log(statusUpdate);

  useEffect(() => {
    dispatch(addCoinStatusUpdate());
  }, [dispatch]);

  return <div>CoinStatus</div>;
};

