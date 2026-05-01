import { Facebook, Twitter } from "lucide-react";
import Link from "next/link";
import MikuLogo from "./MikuLogo";
import { routes } from "@/lib/miku-content";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-400/20 bg-[#070814]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label="Inicio">
          <MikuLogo className="h-10 w-auto" />
        </Link>

        <nav className="order-3 flex w-full gap-2 overflow-x-auto text-xs font-semibold uppercase tracking-[0.2em] text-white/70 md:order-2 md:w-auto">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="whitespace-nowrap border border-white/10 px-3 py-2 transition hover:border-cyan-300/70 hover:text-cyan-200"
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="order-2 flex items-center gap-3 md:order-3">
          <a href="#" className="text-white/70 transition hover:text-pink-300" aria-label="Twitter">
            <Twitter size={18} />
          </a>
          <a href="#" className="text-white/70 transition hover:text-pink-300" aria-label="Facebook">
            <Facebook size={18} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
