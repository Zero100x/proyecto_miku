
import React from 'react';

const PickUp: React.FC = () => {
  return (
    <section className="backdrop-blur-sm bg-transparent p-6 rounded-lg border border-cyan-400/20 shadow-lg">
      <div className="container mx-auto">
        <h2 className="text-3xl text-pink-400 tracking-widest font-bold mb-8">
          PICK UP
        </h2>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4 mt-1">
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            </div>
            <div>
              <p className="text-pink-300">【ライブチケット】 オフィシャルWEB抽選先行受付（二次)</p>
              <p className="text-white">2019年4月13日（土）12:00 〜5月13日（月）23:59</p>
              <a href="#" className="text-cyan-400 hover:underline inline-flex items-center mt-1 text-sm">
                お申し込みはこちら 
                <span className="ml-1">→</span>
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4 mt-1">
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            </div>
            <div>
              <p className="text-pink-300">【展示チケット】</p>
              <p className="text-white">2019年4月13日（土）12:00 〜5月7日（火）12:00</p>
              <a href="#" className="text-cyan-400 hover:underline inline-flex items-center mt-1 text-sm">
                お申し込みはこちら 
                <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickUp;
