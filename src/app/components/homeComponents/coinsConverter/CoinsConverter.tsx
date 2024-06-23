import { useAppDispatch } from "@/lib/hooks";
import { setView } from "@/lib/features/coinsConverterSlice";

const CoinsConverter = () => {
  const dispatch = useAppDispatch();

  const handleClick = (view: "coins" | "converter") => {
    dispatch(setView(view));
  };
  return (
    <div className="flex">
      <div onClick={() => handleClick("coins")}>Coins</div>
      <div onClick={() => handleClick("converter")}>Converter</div>
    </div>
  );
};

export default CoinsConverter;

//need to dispatch the action of setView
//setView will take either coins or converter as an argument to set its state
