import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About SwirlX TPMS
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2010, SwirlX TPMS has been at the forefront of heat exchanger 
              innovation, developing sustainable solutions for the world's most demanding 
              industrial applications.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our mission is to revolutionize thermal management through cutting-edge 
              technology that not only improves efficiency but also contributes to a 
              more sustainable future for generations to come.
            </p>
            
            {/* Key Facts */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600">13+</div>
                <div className="text-sm text-gray-600">Years of Innovation</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-purple-600">50+</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-orange-600">15+</div>
                <div className="text-sm text-gray-600">Patents Filed</div>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h3>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">Innovation at the core of everything we do</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">Commitment to environmental sustainability</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">Excellence in customer service and support</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
              <div className="text-center">
                <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Global Impact</h3>
                <p className="text-blue-100 mb-6">
                  Our heat exchangers are powering industries across the globe, 
                  from renewable energy plants to advanced manufacturing facilities.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">Europe</div>
                    <div className="text-sm text-blue-200">12 Countries</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Asia</div>
                    <div className="text-sm text-blue-200">8 Countries</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Americas</div>
                    <div className="text-sm text-blue-200">5 Countries</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-400 rounded-full opacity-80 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 