import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Technology = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // GSAP animations for scroll-triggered effects
    const cards = cardsRef.current;
    
    cards.forEach((card, index) => {
      gsap.fromTo(card, 
        { 
          opacity: 0, 
          y: 100,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="technology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Advanced Heat Exchanger Technology
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            SwirlX delivers cutting-edge heat exchanger solutions that maximize efficiency 
            while minimizing environmental impact across industrial applications.
          </motion.p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Efficiency */}
          <motion.div 
            ref={el => cardsRef.current[0] = el}
            className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            transition={{ duration: 0.3 }}
          >
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
          </motion.div>

          {/* Emissions */}
          <motion.div 
            ref={el => cardsRef.current[1] = el}
            className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-xl shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6 mx-auto"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </motion.div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Low Emissions</h3>
            <p className="text-gray-600 text-center">
              Innovative design reduces CO2 emissions by up to 40% compared to 
              traditional heat exchanger systems.
            </p>
          </motion.div>

          {/* Global Reach */}
          <motion.div 
            ref={el => cardsRef.current[2] = el}
            className="bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-xl shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            transition={{ duration: 0.3 }}
          >
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
          </motion.div>
        </div>

        {/* Technical Specifications */}
        <motion.div 
          className="bg-gray-50 rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Technical Specifications
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "95%", label: "Heat Transfer Efficiency", color: "text-blue-600" },
              { value: "40%", label: "Emissions Reduction", color: "text-green-600" },
              { value: "25+", label: "Countries Served", color: "text-purple-600" },
              { value: "24/7", label: "Support Available", color: "text-orange-600" }
            ].map((spec, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className={`text-3xl font-bold ${spec.color} mb-2`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {spec.value}
                </motion.div>
                <div className="text-gray-600">{spec.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology; 