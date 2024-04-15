export const NextPrevBtnSVG = () => {
  return (
    <svg
      width="104"
      height="104"
      viewBox="0 0 104 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_bd_587_9117)">
        <circle
          cx="48.1992"
          cy="48"
          r="24"
          fill="#6161D6"
          fillOpacity="0.5"
          shapeRendering="crispEdges"
        />
        <circle
          cx="48.1992"
          cy="48"
          r="23.5"
          stroke="url(#paint0_linear_587_9117)"
          shapeRendering="crispEdges"
        />
      </g>
      <path
        d="M46.1387 53.2797L50.4853 48.9331C50.9987 48.4197 50.9987 47.5797 50.4853 47.0664L46.1387 42.7197"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_bd_587_9117"
          x="0.199219"
          y="0"
          width="104"
          height="104"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_587_9117"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="8"
            operator="dilate"
            in="SourceAlpha"
            result="effect2_dropShadow_587_9117"
          />
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.470588 0 0 0 0 0.470588 0 0 0 0 0.980392 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_backgroundBlur_587_9117"
            result="effect2_dropShadow_587_9117"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_587_9117"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_587_9117"
          x1="48.1992"
          y1="24"
          x2="48.1992"
          y2="72"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7878FA" />
          <stop offset="1" stopColor="#7878FA" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const GreenArrowSVG = () => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.60026 6.33301L5.26693 9.66634H11.9336L8.60026 6.33301Z"
        fill="#01F1E3"
      />
    </svg>
  );
};

export const RedArrowSVG = () => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.80013 9.66699L12.1335 6.33366L5.4668 6.33366L8.80013 9.66699Z"
        fill="#FE2264"
      />
    </svg>
  );
};
