import Image from 'next/image';
import React from "react";
import { Twitter, Facebook } from "lucide-react";
import MikuLogo from "../components/MikuLogo";
import EventDetails from "../components/EventDetails";
import PickUp from "../components/PickUp";
import News from "../components/News";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0a14] text-white overflow-x-hidden relative">
      {/* Background Image with Gradient Overlay */}
      <div className="fixed inset-0 z-0">

      <Image
    src="/miku.png"
    alt="Hatsune Miku Background"
    fill
    priority
    quality={100}
    className="object-cover" 
  />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-[#0a0a14]/70 to-transparent" />
      </div>
      
      {/* Simplified Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <MikuLogo className="h-10 w-auto" />
          
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <a href="#" className="hover:text-pink-400 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                <Facebook size={18} />
              </a>
            </div>
            <button className="bg-pink-600 text-white text-xs px-3 py-1 rounded-sm hover:bg-pink-500 transition-colors">
              LANGUAGE
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-16">
        {/* Hero Section */}
        <section className="container mx-auto py-16 md:py-24 px-8 md:px-16">
          <div className="max-w-md backdrop-blur-sm bg-black/30 p-6 rounded-lg border border-cyan-400/20 shadow-lg">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="block text-white animate-glow">マジカル</span>
              <span className="block text-cyan-400 animate-glow">ミライ2019</span>
            </h1>
            <p className="tracking-widest text-pink-500 text-xl md:text-2xl font-bold mb-6">
              HATSUNE MIKU · MAGICAL MIRAI
            </p>
            <p className="text-white/80 mb-4">
              Experience the magic of Hatsune Miku annual concert event.
            </p>
            <button className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-white py-2 px-6 rounded transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50">
              DISCOVER MORE
            </button>
          </div>
        </section>

        {/* Page Sections */}
        <EventDetails />
        <PickUp />
        <News />

        {/* Footer */}
        <footer className="py-4 px-6 text-xs text-center text-gray-400 border-t border-gray-800 backdrop-blur-sm bg-black/30 mt-12">
          <p>Illustration by KKEJ</p>
          <p>© Crypton Future Media, INC. www.piapro.net All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;