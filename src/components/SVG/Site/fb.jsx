import React from "react";

function FbIcon({width,height,color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "32"}
      height={height || "32"}
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        fill={color || "#C0B7E8"}
        fillRule="evenodd"
        d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16zm16-8c4.4 0 8 3.6 8 8 0 4-2.9 7.4-6.9 8v-5.7H19l.4-2.3h-2.2v-1.5c0-.6.3-1.2 1.3-1.2h1v-2s-.9-.2-1.8-.2c-1.8 0-3 1.1-3 3.1V16h-2v2.3h2v5.6C10.9 23.3 8 20 8 16c0-4.4 3.6-8 8-8z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export  {FbIcon};