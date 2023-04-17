import React from "react";

function HydraText({width, height, color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "76"}
      height={height || "46"}
      fill="none"
      viewBox="0 0 76 46"
    >
      <path
        fill="url(#paint0_linear_1_10)"
        d="M0 0h2.32v27.405h6.93V0h2.322v46H9.25V29.713H2.32V46H0V0z"
      ></path>
      <path
        fill="url(#paint1_linear_1_10)"
        d="M28.733 0L22.98 29.713V46h-2.321V29.713L14.873 0h2.125l4.838 24.772L26.64 0h2.092z"
      ></path>
      <path
        fill="url(#paint2_linear_1_10)"
        d="M38.997 46h-6.963V0h6.93c2.583 0 4.61 2.048 4.61 4.584v36.8C43.605 43.887 41.546 46 38.996 46zM34.355 2.308v41.384h4.61c1.241 0 2.32-1.04 2.32-2.308v-36.8c0-1.236-1.046-2.308-2.32-2.308h-4.61v.032z"
      ></path>
      <path
        fill="url(#paint3_linear_1_10)"
        d="M58.806 46H56.42l-4.086-16.287h-2.779V46h-2.32V0h6.93c2.582 0 4.608 2.048 4.608 4.584v20.513c0 2.308-1.798 4.258-4.086 4.518L58.806 46zm-9.25-18.595h4.608c1.242 0 2.321-1.04 2.321-2.308V4.584c0-1.236-1.046-2.308-2.32-2.308h-4.61v25.129z"
      ></path>
      <path
        fill="url(#paint4_linear_1_10)"
        d="M65.801 29.713L64.2 46h-2.093L66.75 0h4.61l4.608 46h-2.092l-1.602-16.287h-6.472zm3.694-27.405h-.915l-2.517 25.097h5.949L69.495 2.308z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_1_10"
          x1="5.786"
          x2="5.786"
          y1="0"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C0B7E8"></stop>
          <stop offset="1" stopColor="#8176AF"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_10"
          x1="21.803"
          x2="21.803"
          y1="0"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C0B7E8"></stop>
          <stop offset="1" stopColor="#8176AF"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear_1_10"
          x1="37.804"
          x2="37.804"
          y1="0"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C0B7E8"></stop>
          <stop offset="1" stopColor="#8176AF"></stop>
        </linearGradient>
        <linearGradient
          id="paint3_linear_1_10"
          x1="53.02"
          x2="53.02"
          y1="0"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C0B7E8"></stop>
          <stop offset="1" stopColor="#8176AF"></stop>
        </linearGradient>
        <linearGradient
          id="paint4_linear_1_10"
          x1="69.037"
          x2="69.037"
          y1="0"
          y2="46"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C0B7E8"></stop>
          <stop offset="1" stopColor="#8176AF"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export {HydraText};