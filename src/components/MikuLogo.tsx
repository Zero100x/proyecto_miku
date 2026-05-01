import Image from "next/image";
import React from "react";

const MikuLogo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/MikuLogo.png"
      alt="Magical Mirai Logo"
      width={100}
      height={40}
      className={className || "h-8 w-auto"}
      priority
    />
  );
};

export default MikuLogo;
