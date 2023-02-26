// libs
import React from "react";

const HotSale = (props) => (
  <svg
    width={32}
    height={32}
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      fill="none"
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <path d="M9 15H7.5c-.8 0-1.5.7-1.5 1.5v0c0 .8.7 1.5 1.5 1.5h0c.8 0 1.5.7 1.5 1.5v0c0 .8-.7 1.5-1.5 1.5H6M12 21v-4.5c0-.8.7-1.5 1.5-1.5h0c.8 0 1.5.7 1.5 1.5V21M12 18h3M18 15v6h3M26 15h-2v6h2M26 18h-2" />
      <path d="m16 2 7 8 3-4s4 5 4 12-6 12-14 12S2 25 2 18 6 6 6 6l3 4 7-8z" />
    </g>
  </svg>
);

export default HotSale;
