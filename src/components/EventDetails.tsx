
import React from 'react';

const EventDetails: React.FC = () => {
  return (
    <section className="py-10 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-8 md:mb-0">
            <div className="bg-gradient-to-r from-pink-600 to-pink-500 px-4 py-2 inline-block">
              <h2 className="text-2xl font-bold tracking-widest">OSAKA</h2>
            </div>
            <div className="mt-2 pl-2 border-l-4 border-pink-600">
              <p className="font-mono text-xl text-pink-400">8.9 - 10 - 11</p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
            <div className="bg-gradient-to-r from-pink-600 to-pink-500 px-4 py-2 inline-block">
              <h2 className="text-2xl font-bold tracking-widest">TOKYO</h2>
            </div>
            <div className="mt-2 pl-2 border-l-4 border-pink-600">
              <p className="font-mono text-xl text-pink-400">8.30 - 31 - 9.1</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 flex space-x-4">
          <a href="#" className="bg-blue-600 text-white px-6 py-1 rounded-sm text-sm hover:bg-blue-700 transition-colors">
            FACEBOOK
          </a>
          <a href="#" className="bg-blue-400 text-white px-6 py-1 rounded-sm text-sm hover:bg-blue-500 transition-colors">
            TWITTER
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
