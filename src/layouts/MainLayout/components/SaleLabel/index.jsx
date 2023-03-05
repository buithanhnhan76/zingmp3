// libs
import React from "react";

const SaleLabel = (props) => (
  <svg
    width={32}
    height={32}
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 24h0c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h0c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
    <circle cx={17.5} cy={16.5} r={1.5} />
    <circle cx={21.5} cy={23.5} r={1.5} />
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m22 16-5 8"
    />
    <circle
      cx={16}
      cy={20}
      fill="none"
      r={10}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
    <path
      d="M14 10s-1-2.3-1-4c0-1.9 1-4 3-4s3 2.1 3 4c0 2.1-3 7-3 7"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
  </svg>
);

export default SaleLabel;
