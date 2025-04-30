
import React from 'react';

const News: React.FC = () => {
  return (
    <section className="py-10 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl text-gray-200 tracking-widest font-bold mb-8">
          NEWS
        </h2>
        
        <div className="mb-4">
          <p className="text-gray-300">2019. 4. 19</p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4 mt-1">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            </div>
            <div>
              <p className="text-gray-200">WEBサイト、リニューアルOPEN！</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4 mt-1">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            </div>
            <div>
              <p className="text-gray-200">初音ミク「マジカルミライ 2019」のメインビジュアル＆応援ディレクションの展示を公開！</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4 mt-1">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            </div>
            <div>
              <p className="text-gray-200">初音ミク「マジカルミライ 2019」テーマソング制作決定およびサポートメンバー「Rin」起用のアップル！</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-right">
          <a href="#" className="text-cyan-400 hover:underline inline-flex items-center">
            もっと見る 
            <span className="ml-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;
