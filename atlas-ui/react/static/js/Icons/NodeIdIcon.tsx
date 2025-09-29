// atlas-ui/react/static/js/Icons/NodeIdIcon.tsx

import React from "react";

interface NodeIdIconProps {
  size?: number;
  color?: string;
  className?: string;
}

const NodeIdIcon: React.FC<NodeIdIconProps> = ({ size = 24, color = "currentColor", className = "" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className}>
      <g fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
        <path d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524"></path>
        <path d="m3.528 7.294l8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 21v-9"></path>
      </g>
    </svg>
  );
};

export default NodeIdIcon;
