import React from "react";

function ArrowRightLongIcon({width, height, color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "228"}
      height={height || "100"}
      fill="none"
      viewBox="0 0 228 100"
    >
      <path
        stroke={color || "#C0B7E8"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M198.833 50h-41.666m41.666 0l-16.666 16.667M198.833 50l-16.666-16.667"
      ></path>
      <path stroke={color || "#C0B7E8"} strokeWidth="3" d="M157.5 50H0"></path>
    </svg>
  );
}

export {ArrowRightLongIcon};
