import React from "react";

const Container = ({ 
  children, 
  className = "",
  maxWidth = "7xl", // Options: "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "full"
  padding = true, // Default padding on/off
  centerContent = false // Center align content
}) => {
  
  const maxWidthClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
    "3xl": "max-w-7xl",
    "4xl": "max-w-[1400px]",
    "5xl": "max-w-[1500px]",
    "6xl": "max-w-[1600px]",
    "7xl": "max-w-[1700px]",
    full: "max-w-full"
  };

  return (
    <div 
      className={`
        ${maxWidthClasses[maxWidth]} 
        mx-auto 
        ${padding ? " px-2 sm:px-6 md:px-12" : ""} 
        ${centerContent ? "flex flex-col items-center justify-center" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;