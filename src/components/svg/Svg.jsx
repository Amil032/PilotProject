import React from "react";

export const Svg = ({ name, color, style, onClick }) => {
  switch (name) {
    case "location":
      return (
        <svg
          onClick={onClick}
          fill={color}
          version="1.1"
          id="Capa_1"
          width="15px"
          height="15px"
          viewBox="0 0 395.71 395.71"
        >
          <g>
            <path
              d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
               c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
               C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
               c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
            />
          </g>
        </svg>
      );
    case "edit":
      return (
        <svg
          width="15px"
          height="15px"
          viewBox="0 0 24 24"
          fill={color}
          onClick={onClick}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill={color}
            fill-rule="evenodd"
          >
            <g
              id="Dribbble-Light-Preview"
              transform="translate(-59.000000, -400.000000)"
              fill={color}
            >
              <g id="icons" transform="translate(56.000000, 160.000000)">
                <path
                  d="M3,260 L24,260 L24,258.010742 L3,258.010742 L3,260 Z M13.3341,254.032226 L9.3,254.032226 L9.3,249.950269 L19.63095,240 L24,244.115775 L13.3341,254.032226 Z"
                  id="edit_fill-[#1480]"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      );
    case "delete":
      return (
        <svg
          fill={color}
          onClick={onClick}
          width="15px"
          height="15px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z" />
        </svg>
      );
  }
};
