import { NextPrevBtnSVG } from "../../../../../../public/currencySelectorSVGS";

export const PrevArrow = ({ onClick }: { onClick: () => void }) => (
  <button
    className="z-20 rotate-180 absolute transform -translate-y-1/2"
    onClick={onClick}
    style={{ top: "45%", right: "97%" }}
  >
    <NextPrevBtnSVG />
  </button>
);

export const NextArrow = ({ onClick }: { onClick: () => void }) => (
  <button
    className="z-20  absolute transform -translate-y-1/2"
    onClick={onClick}
    style={{ top: "55%", left: "97%" }}
  >
    <NextPrevBtnSVG />
  </button>
);
