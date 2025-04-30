"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar: React.FC = () => {
  const pathname = usePathname();
  
  const isActive = (path: string) => pathname === path;
  
  return (
    <nav className="bg-black/80 backdrop-blur-md border-t border-b border-cyan-500/20">
      <div className="container mx-auto">
        <table className="w-full border-collapse">
          <tbody>
            <tr>
              {[
                { href: "/", text: "INFO" },
                { href: "/osaka", text: "OSAKA" },
                { href: "/tokyo", text: "TOKYO" },
                { href: "/special", text: "SPECIAL" }
              ].map((item, index) => (
                <td 
                  key={item.href}
                  className={`border-r border-cyan-500/20 ${index === 3 ? 'border-r-0' : ''}`}
                >
                  <Link
                    href={item.href}
                    className={`block w-full text-center py-4 text-lg font-bold uppercase tracking-wider ${
                      isActive(item.href) 
                        ? 'text-cyan-400' 
                        : 'text-white hover:text-pink-400'
                    }`}
                  >
                    {item.text}
                  </Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </nav>
  );
};

export default NavBar;