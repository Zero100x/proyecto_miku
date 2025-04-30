import React from "react";
import { Twitter, Facebook } from "lucide-react";
import MikuLogo from "../components/MikuLogo";
import NavBar from "../components/NavBar";
import EventDetails from "../components/EventDetails";
import PickUp from "../components/PickUp";
import News from "../components/News";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0a14] text-white overflow-x-hidden relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/miku.png" 
          alt="Hatsune Miku Background" 
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-[#0a0a14]/70 to-transparent"></div>
      </div>
      
      {/* Header Structure */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md">
        {/* Top Row - Logos and Language */}
        <div className="container mx-auto px-4 py-3 flex justify-between items-center border-b border-cyan-500/20">
          <div className="flex items-center gap-4">
            <MikuLogo className="h-10 w-auto" />
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
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
        
        {/* NavBar - Second Row */}
        <NavBar />
      </header>

      {/* Main Content */}
      <div className="relative z-10 pt-24"> {/* Añadido pt-24 para espacio bajo el header fijo */}
        {/* Hero Section */}
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto relative">
            <div className="px-8 md:px-16">
              <div className="max-w-md backdrop-blur-sm bg-black/30 p-6 rounded-lg border border-cyan-400/20 shadow-lg">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  <span className="block text-white animate-glow">マジカル</span>
                  <span className="block text-cyan-400 animate-glow">ミライ2019</span>
                </h1>
                <p className="tracking-widest text-pink-500 text-xl md:text-2xl font-bold mb-6">
                  HATSUNE MIKU · MAGICAL MIRAI
                </p>
                <p className="text-white/80 mb-4">
                  Experience the magic of Hatsune Miku's annual concert event, bringing together fans from around the world.
                </p>
                <button className="bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-white py-2 px-6 rounded transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50">
                  DISCOVER MORE
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Other Sections */}
        <EventDetails />
        <PickUp />
        <News />

        {/* Footer */}
        <footer className="py-4 px-6 text-xs text-center text-gray-400 border-t border-gray-800 backdrop-blur-sm bg-black/30 mt-12">
          <p>Illustration by KKEJ</p>
          <p>© Crypton Future Media, INC. www.piapro.net All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;