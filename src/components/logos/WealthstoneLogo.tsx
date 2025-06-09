import React from 'react';

interface WealthstoneLogoProps {
  variant?: 'rectangular' | 'square';
  className?: string;
  width?: number;
  height?: number;
}

const WealthstoneLogo: React.FC<WealthstoneLogoProps> = ({ 
  variant = 'rectangular', 
  className = '',
  width,
  height 
}) => {
  if (variant === 'square') {
    return (
      <svg 
        width={width || 40} 
        height={height || 40} 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 60 60"
      >
        {/* Square outline */}
        <rect 
          x="5" 
          y="5" 
          width="50" 
          height="50" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          fill="none"
          className="stroke-accent-gold"
        />
        
        {/* "WS" inside the square */}
        <text 
          x="12" 
          y="42" 
          fontFamily="Inter, sans-serif" 
          fontSize="28" 
          fill="currentColor"
          fontWeight="bold"
          className="fill-accent-gold"
        >
          W
        </text>
        <text 
          x="28" 
          y="42" 
          fontFamily="Inter, sans-serif" 
          fontSize="28" 
          fill="currentColor"
          fontWeight="bold"
          className="fill-accent-gold"
        >
          S
        </text>
      </svg>
    );
  }

  // Rectangular variant
  return (
    <svg 
      width={width || 160} 
      height={height || 40} 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 300 60"
    >
      {/* Square outline */}
      <rect 
        x="5" 
        y="10" 
        width="40" 
        height="40" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
        className="stroke-accent-gold"
      />

      {/* "WS" inside the square */}
      <text 
        x="13" 
        y="37" 
        fontFamily="Inter, sans-serif" 
        fontSize="20" 
        fill="currentColor"
        fontWeight="bold"
        className="fill-accent-gold"
      >
        W
      </text>
      <text 
        x="25" 
        y="37" 
        fontFamily="Inter, sans-serif" 
        fontSize="20" 
        fill="currentColor"
        fontWeight="bold"
        className="fill-accent-gold"
      >
        S
      </text>

      {/* "WEALTH" text */}
      <text 
        x="55" 
        y="28" 
        fontFamily="Inter, sans-serif" 
        fontSize="16" 
        fill="currentColor"
        fontWeight="bold"
        className="fill-text-primary"
      >
        WEALTH
      </text>
      
      {/* "STONE" text */}
      <text 
        x="55" 
        y="45" 
        fontFamily="Inter, sans-serif" 
        fontSize="16" 
        fill="currentColor"
        fontWeight="bold"
        className="fill-text-primary"
      >
        STONE
      </text>
    </svg>
  );
};

export default WealthstoneLogo;