import React from "react";

function NextIcon({width, height, color,mode}) {
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
        strokeWidth={mode ? "3": "1.5"}
        d={mode ? "M1.833 17.917L9.75 10 1.833 2.083" : "M9.5 18.25L15.75 12 9.5 5.75M23.25 12c0 6.213-5.037 11.25-11.25 11.25S.75 18.213.75 12 5.787.75 12 .75 23.25 5.787 23.25 12z"}
      ></path>
    </svg>
  );
}

export {NextIcon};