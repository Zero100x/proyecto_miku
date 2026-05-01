import Image from "next/image";

const PageBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <Image
        src="/miku.png"
        alt="Hatsune Miku stage background"
        fill
        priority
        quality={100}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(34,211,238,0.32),transparent_34%),linear-gradient(180deg,rgba(5,7,22,0.68),#070814_82%)]" />
    </div>
  );
};

export default PageBackground;
