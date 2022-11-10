import React from 'react';

type LogoutIconType = {
  width?: string;
  height?: string;
};

export const LogoutIcon: React.FC<LogoutIconType> = ({ height = '16', width = '16' }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.93359 5.04016C6.14026 2.64016 7.37359 1.66016 10.0736 1.66016H10.1603C13.1403 1.66016 14.3336 2.85349 14.3336 5.83349V10.1802C14.3336 13.1602 13.1403 14.3535 10.1603 14.3535H10.0736C7.39359 14.3535 6.16026 13.3868 5.94026 11.0268"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M10.0007 8H2.41406" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M3.9013 5.7666L1.66797 7.99994L3.9013 10.2333"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
