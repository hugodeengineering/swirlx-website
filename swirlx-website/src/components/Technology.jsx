import React from "react";

const Technology = () => {
  return (
    <section id="technology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced Heat Exchanger Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SwirlX TPMS delivers cutting-edge heat exchanger solutions that maximize efficiency 
            while minimizing environmental impact across industrial applications.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Efficiency */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">High Efficiency</h3>
            <p className="text-gray-600 text-center">
              Advanced thermal design achieving up to 95% heat transfer efficiency, 
              significantly reducing energy consumption and operational costs.
            </p>
          </div>

          {/* Emissions */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Low Emissions</h3>
            <p className="text-gray-600 text-center">
              Innovative design reduces CO2 emissions by up to 40% compared to 
              traditional heat exchanger systems.
            </p>
          </div>

          {/* Global Reach */}
          <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Global Reach</h3>
            <p className="text-gray-600 text-center">
              Deployed across 25+ countries, serving diverse industries from 
              power generation to chemical processing.
            </p>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Heat Transfer Efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
              <div className="text-gray-600">Emissions Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology; 