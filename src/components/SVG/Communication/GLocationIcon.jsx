import React from "react";

function GLocationIcon({width, height, color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "42"}
      height={height || "63"}
      fill="none"
      viewBox="0 0 42 63"
    >
      <path
        fill={color || "#C0B7E8"}
        fillRule="evenodd"
        d="M21 .833c11.276 0 20.417 9.141 20.417 20.417 0 3.41-.834 6.622-2.313 9.448L21 62.083 3.315 31.46A20.3 20.3 0 01.583 21.25C.583 9.974 9.724.833 21 .833zm0 5.834c-8.054 0-14.583 6.529-14.583 14.583 0 2.316.534 4.538 1.545 6.544l.49.895L21 50.417l12.637-21.88a14.465 14.465 0 001.946-7.287c0-8.054-6.529-14.583-14.583-14.583zm0 5.833A8.75 8.75 0 1121 30a8.75 8.75 0 010-17.5zm0 5.833a2.917 2.917 0 100 5.834 2.917 2.917 0 000-5.834z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export {GLocationIcon};