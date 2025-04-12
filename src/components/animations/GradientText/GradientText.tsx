import React from "react";
import "./GradientText.css";

interface IGradientText {
  children: React.ReactNode,
  colors: string[],
  animationSpeed: number,
  showBorder?: boolean,
  className?: string,
}

export default function GradientText({
  children,
  className = "",
  colors = [], // Default colors
  animationSpeed = 8, // Default animation speed in seconds
  showBorder = false, // Default overlay visibility
}: IGradientText) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
      <div className="text-content" style={gradientStyle}>{children}</div>
    </div>
  );
}
