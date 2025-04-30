
import React from 'react';

interface MikuLogoProps {
  className?: string;
}

const MikuLogo: React.FC<MikuLogoProps> = ({ className }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 240 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M20 10L50 10L30 20L60 20L40 30L70 30L20 40L40 40L10 50L60 50" 
        stroke="white" 
        strokeWidth="3"
      />
      <text x="80" y="30" fill="white" fontSize="24" fontWeight="bold">マジカル</text>
      <text x="80" y="50" fill="#ff00ff" fontSize="24" fontWeight="bold">ミライ2019</text>
    </svg>
  );
};

export default MikuLogo;
