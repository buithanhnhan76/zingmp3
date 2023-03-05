// libs
import React from "react";

const PriceLabel = (props) => (
  <svg
    width={32}
    height={32}
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <path d="M2 20 18 4h10v10L12 30z" />
      <circle cx={23} cy={9} r={2} />
      <path d="m24 8 6-6M17 11l-8 8M21 15l-4 4" />
    </g>
  </svg>
);

export default PriceLabel;
