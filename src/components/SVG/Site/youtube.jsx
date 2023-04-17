import React from "react";

function YoutubeIcon({width,height,color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "32"}
      height={height || "32"}
      fill="none"
      viewBox="0 0 32 32"
    >
      <path fill="#C0B7E8" d="M18.6 16l-4.2-2.4v4.8l4.2-2.4z"></path>
      <path
        fill={color || "#C0B7E8"}
        fillRule="evenodd"
        d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16zm22.2-5.3c.7.2 1.2.7 1.4 1.4.4 1.3.4 3.9.4 3.9s0 2.6-.3 3.9c-.2.7-.7 1.2-1.4 1.4-1.3.3-6.3.3-6.3.3s-5.1 0-6.3-.3c-.7-.2-1.2-.7-1.4-1.4C8 18.6 8 16 8 16s0-2.6.2-3.9c.2-.7.7-1.2 1.4-1.4 1.3-.3 6.3-.3 6.3-.3s5.1 0 6.3.3z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export {YoutubeIcon};