import React from "react";
import { Twitter, Facebook } from "lucide-react";
import MikuLogo from "../components/MikuLogo";
import NavBar from "../components/NavBar";
import EventDetails from "../components/EventDetails";
import PickUp from "../components/PickUp";
import News from "../components/News";

const Index = () => {
  // Removed useState and language state
  const language = "JP"; // Using a constant instead

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
      
      {/* Content - Everything with higher z-index */}
      <div className="relative z-10">
        {/* Header */}
        <header className="relative w-full">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div>
              <a href="/">
                <img src="/miku.png" alt="Logo" className="h-8 hidden" />
                <MikuLogo className="h-8 w-auto" />
              </a>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-pink-400 transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  <span className="inline-block w-5 h-5 bg-white rounded-full overflow-hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>
                      <path d="M12 8v8M8 12h8"/>
                    </svg>
                  </span>
                </a>
              </div>
              <button 
                // Removed onClick handler that used setState
                className="bg-pink-600 text-white text-xs px-3 py-1 rounded-sm hover:bg-pink-500 transition-colors"
              >
                LANGUAGE
              </button>
            </div>
          </div>
          
          {/* Main Navigation */}
          <NavBar />
        </header>

        {/* Hero Section */}
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto relative">
            <div className="px-8 md:px-16">
              <div className="max-w-md backdrop-blur-sm bg-black/30 p-6 rounded-lg border border-cyan-400/20 shadow-lg">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  <span className="block text-white animate-glow">マジカル</span>
                  <span className="block text-miku-teal animate-glow">ミライ2019</span>
                </h1>
                <p className="tracking-widest text-pink-500 text-xl md:text-2xl font-bold mb-6">
                  HATSUNE MIKU · MAGICAL MIRAI
                </p>
                <p className="text-white/80 mb-4">
                  Experience the magic of Hatsune Miku's annual concert event, bringing together fans from around the world.
                </p>
                <button className="bg-gradient-to-r from-miku-teal to-cyan-500 hover:from-miku-teal hover:to-cyan-400 text-white py-2 px-6 rounded transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50">
                  DISCOVER MORE
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <EventDetails />

        {/* Pick Up Section */}
        <PickUp />

        {/* News Section */}
        <News />

        {/* Footer */}
        <footer className="py-4 px-6 text-xs text-center text-gray-400 border-t border-gray-800 backdrop-blur-sm bg-black/30">
          <p>Illustration by KKEJ</p>
          <p>© Crypton Future Media, INC. www.piapro.net All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;