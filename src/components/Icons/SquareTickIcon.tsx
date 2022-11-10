import React from 'react';

type SquareTickIconType = {
  width?: string;
  height?: string;
};

export const SquareTickIcon: React.FC<SquareTickIconType> = ({ height = '20', width = '20' }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5013 18.3337H12.5013C16.668 18.3337 18.3346 16.667 18.3346 12.5003V7.50033C18.3346 3.33366 16.668 1.66699 12.5013 1.66699H7.5013C3.33464 1.66699 1.66797 3.33366 1.66797 7.50033V12.5003C1.66797 16.667 3.33464 18.3337 7.5013 18.3337Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.45703 9.99993L8.81536 12.3583L13.5404 7.6416"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
