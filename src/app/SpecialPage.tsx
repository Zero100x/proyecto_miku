
import React from "react";
import NavBar from "../components/NavBar";
import MikuLogo from "../components/MikuLogo";
import { Twitter, Facebook } from "lucide-react";

const SpecialPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a14] text-white">
      <header className="relative w-full">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div>
            <a href="/">
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
            <button className="bg-pink-600 text-white text-xs px-3 py-1 rounded-sm">
              LANGUAGE
            </button>
          </div>
        </div>
        
        <NavBar />
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-pink-600 to-pink-500 px-4 py-2 inline-block mb-8">
          <h1 className="text-2xl font-bold tracking-widest">SPECIAL</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-black bg-opacity-50 p-6 rounded">
            <h2 className="text-xl text-cyan-400 mb-4">メインビジュアル</h2>
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <img 
                src="/lovable-uploads/376d69e6-a9b5-44a9-9881-9682ccf1ff51.png" 
                alt="Hatsune Miku Visual" 
                className="object-cover rounded"
              />
            </div>
            <p className="text-sm text-gray-300">Illustration by KKEJ</p>
          </div>
          
          <div className="bg-black bg-opacity-50 p-6 rounded">
            <h2 className="text-xl text-cyan-400 mb-4">テーマソング</h2>
            <p className="mb-4">初音ミク「マジカルミライ 2019」テーマソング</p>
            <p className="text-lg font-bold text-pink-400 mb-2">「ネクストネスト」</p>
            <p className="mb-4">作詞・作曲：Mitchie M</p>
            <a href="#" className="text-pink-400 hover:underline block mb-4">試聴する →</a>
          </div>
        </div>
        
        <div className="bg-black bg-opacity-50 p-6 rounded">
          <h2 className="text-xl text-cyan-400 mb-4">グッズ情報</h2>
          <p className="mb-6">マジカルミライ 2019の会場で販売されるグッズ情報は随時更新されます。</p>
          <a href="#" className="text-pink-400 hover:underline">グッズ一覧ページへ →</a>
        </div>
      </div>
    </div>
  );
};

export default SpecialPage;
