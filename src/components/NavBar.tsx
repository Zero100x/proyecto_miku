"use client"; // Necesario porque usamos usePathname (un hook de React)
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar: React.FC = () => {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path;
  };
  
  return (
    <nav className="bg-black/60 backdrop-blur-md border-t border-b border-cyan-500/20">
      <div className="container mx-auto">
        <ul className="flex justify-center space-x-8 md:space-x-16 py-3 text-sm md:text-base">
          <li>
            <Link 
              href="/" 
              className={`transition-colors font-medium tracking-wider ${
                isActive('/') 
                  ? 'text-cyan-400' 
                  : 'text-white hover:text-pink-400'
              }`}
            >
              INFO
            </Link>
          </li>
          <li>
            <Link 
              href="/osaka" 
              className={`transition-colors font-medium tracking-wider ${
                isActive('/osaka') 
                  ? 'text-cyan-400' 
                  : 'text-white hover:text-pink-400'
              }`}
            >
              OSAKA
            </Link>
          </li>
          <li>
            <Link 
              href="/tokyo" 
              className={`transition-colors font-medium tracking-wider ${
                isActive('/tokyo') 
                  ? 'text-cyan-400' 
                  : 'text-white hover:text-pink-400'
              }`}
            >
              TOKYO
            </Link>
          </li>
          <li>
            <Link 
              href="/special" 
              className={`transition-colors font-medium tracking-wider ${
                isActive('/special') 
                  ? 'text-cyan-400' 
                  : 'text-white hover:text-pink-400'
              }`}
            >
              SPECIAL
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;