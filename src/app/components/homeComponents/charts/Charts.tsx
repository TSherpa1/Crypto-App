import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchBitcoin } from "@/lib/features/bitcoinSlice";

function Charts() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBitcoin());
  }, []);
  const bitcoinDataObj = useAppSelector((state) => state.bitcoin);
  const bitcoinData = bitcoinDataObj.data;
  return (
    <div>
      <div>Chart 1</div>
      <div>Chart 2</div>
    </div>
  );
}

export default Charts;
