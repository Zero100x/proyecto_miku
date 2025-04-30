import React from "react";

const MikuLogo = ({ className }: { className?: string }) => {
  return (
    <img
      src="/Mikulogo.png" // Ruta a tu nuevo logo
      alt="Magical Mirai Logo"
      className={className || "h-8 w-auto"}
    />
  );
};

export default MikuLogo;