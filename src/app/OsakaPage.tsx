
import React from "react";
import NavBar from "../components/NavBar";
import MikuLogo from "../components/MikuLogo";
import { Twitter, Facebook } from "lucide-react";

const OsakaPage = () => {
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
          <h1 className="text-2xl font-bold tracking-widest">OSAKA</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl text-cyan-400 mb-4">イベント情報</h2>
            <div className="bg-black bg-opacity-50 p-6 rounded">
              <p className="mb-4"><span className="font-bold">会場:</span> インテックス大阪</p>
              <p className="mb-4"><span className="font-bold">日程:</span> 2019年8月9日(金)、10日(土)、11日(日)</p>
              <p><span className="font-bold">時間:</span> 10:00〜17:00 (最終入場 16:30)</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl text-cyan-400 mb-4">アクセス</h2>
            <div className="bg-black bg-opacity-50 p-6 rounded">
              <p className="mb-2">〒559-0034 大阪府大阪市住之江区南港北1-5-102</p>
              <p className="mb-4">地下鉄中央線「コスモスクエア駅」より徒歩約5分</p>
              <a href="#" className="text-pink-400 hover:underline">詳しいアクセス情報 →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OsakaPage;
