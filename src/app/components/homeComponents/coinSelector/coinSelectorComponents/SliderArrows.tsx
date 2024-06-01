import { NextPrevBtnSVG } from "../../../../../../public/coinSelectorSVGs";

export const PrevArrow = ({ onClick }: { onClick: () => void }) => (
  <button
    className="z-20 rotate-180 absolute -translate-x-16 -translate-y-4"
    onClick={onClick}
  >
    <NextPrevBtnSVG />
  </button>
);

export const NextArrow = ({ onClick }: { onClick: () => void }) => (
  <button
    className="z-20  absolute  left-full  -translate-x-10 -translate-y-24"
    onClick={onClick}
  >
    <NextPrevBtnSVG />
  </button>
);
