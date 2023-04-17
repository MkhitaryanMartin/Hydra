import React from "react";

function MessageIcon({width, height, color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "55"}
      height={height || "45"}
      fill="none"
      viewBox="0 0 55 45"
    >
      <path
        stroke={color || "#C0B7E8"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6"
        d="M3.918 4.335a2.7 2.7 0 011.915-.793h43.334a2.7 2.7 0 011.915.793m-47.164 0a2.7 2.7 0 00-.793 1.915v32.5a2.708 2.708 0 002.708 2.708h43.334a2.708 2.708 0 002.708-2.708V6.25a2.7 2.7 0 00-.793-1.915m-47.164 0L23.67 24.086a5.417 5.417 0 007.66 0L51.082 4.335"
      ></path>
    </svg>
  );
}

export {MessageIcon};