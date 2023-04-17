import React from "react";

function PrevIcon({width, height, color,mode}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "24"}
      height={height || "24"}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color || "#fff"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={mode ? "3":"1.5"}
        d={mode ? "M10.167 17.917L2.25 10l7.917-7.917":"M14.5 18.25L8.25 12l6.25-6.25M.75 12c0 6.213 5.037 11.25 11.25 11.25S23.25 18.213 23.25 12 18.213.75 12 .75.75 5.787.75 12z"}
      ></path>
    </svg>
  );
}

export {PrevIcon};