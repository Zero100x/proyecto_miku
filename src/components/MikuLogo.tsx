import React from "react";
import Image from "next/image"; // Importa el componente Image

const MikuLogo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/Mikulogo.png" // Ruta a tu logo (debe estar en la carpeta /public)
      alt="Magical Mirai Logo"
      width={100} // Ancho obligatorio (ajusta según necesites)
      height={40} // Alto obligatorio (proporcional al ancho)
      className={className || "h-8 w-auto"}
      priority // Opcional: si es un logo crítico para el LCP
    />
  );
};

export default MikuLogo;