import React from "react";

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
              <p className="text-gray-200">The website has reopened with a refreshed design.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4 mt-1">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            </div>
            <div>
              <p className="text-gray-200">The main visual and support direction for Magical Mirai 2019 are now available.</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4 mt-1">
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            </div>
            <div>
              <p className="text-gray-200">The theme song and support member announcements have been published.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-right">
          <a href="#" className="text-cyan-400 hover:underline inline-flex items-center">
            View more
            <span className="ml-1">-&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default News;
