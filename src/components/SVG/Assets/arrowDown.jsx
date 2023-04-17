import React from "react";

function ArrowDownIcon({width, height, color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "28"}
      height={height || "16"}
      fill="none"
      viewBox="0 0 28 16"
    >
      <path
        stroke={color || "#433D60"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M1.5 2L14 14.5 26.5 2"
      ></path>
    </svg>
  );
}

export {ArrowDownIcon};