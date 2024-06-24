import { useAppDispatch } from "@/lib/hooks";
import { setView } from "@/lib/features/coinsConverterSlice";
import { useState } from "react";

const CoinsConverter = () => {
  const [activeTab, setActiveTab] = useState("coins");
  const dispatch = useAppDispatch();

  const handleClick = (view: "coins" | "converter") => {
    dispatch(setView(view));
    setActiveTab(view);
  };
  return (
    <div className="flex justify-start w-full mx-auto p-1 mt-4 mb-3 rounded-lg">
      <div className="flex gap-1 bg-darkIndigo p-1">
        <button
          className={`flex-1 py-2 text-center rounded-lg ${
            activeTab === "coins"
              ? "bg-fadedIndigo text-white"
              : "text-gray-400"
          }`}
          onClick={() => handleClick("coins")}
        >
          <p className="flex-1 py-0.25 px-14">Coins</p>
        </button>
        <button
          className={`flex-1 py-2 text-center rounded-lg ${
            activeTab === "converter"
              ? "bg-fadedIndigo text-white"
              : "text-gray-400"
          }`}
          onClick={() => handleClick("converter")}
        >
          <p className="flex-1 py-0.25 px-12">Converter</p>
        </button>
      </div>
    </div>
  );
};

export default CoinsConverter;
