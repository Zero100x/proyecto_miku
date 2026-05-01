import React from "react";

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
              <p className="text-pink-300">Live ticket official web lottery, second round</p>
              <p className="text-white">April 13, 2019 12:00 - May 13, 2019 23:59</p>
              <a href="#" className="text-cyan-400 hover:underline inline-flex items-center mt-1 text-sm">
                Apply here
                <span className="ml-1">-&gt;</span>
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4 mt-1">
              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
            </div>
            <div>
              <p className="text-pink-300">Exhibition tickets</p>
              <p className="text-white">April 13, 2019 12:00 - May 7, 2019 12:00</p>
              <a href="#" className="text-cyan-400 hover:underline inline-flex items-center mt-1 text-sm">
                Apply here
                <span className="ml-1">-&gt;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickUp;
