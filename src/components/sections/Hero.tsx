import React from 'react';

interface HeroProps { onOpenPrograms?: ()=> void }

export const Hero: React.FC<HeroProps> = ({ onOpenPrograms }) => (
  <section className="hero-gradient min-h-screen flex items-center pt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">IB Training</h1>
  <p className="text-xl md:text-2xl mb-8">&quot;Your Gateway To Be The Fittest Version Of Yourself&quot;</p>
      <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-4xl mx-auto">
        <span className="block mb-3">More than <span className="text-yellow-400 font-bold">1000+ clients</span> around the world had <span className="text-yellow-400 font-bold">controlled their lives</span> and <span className="text-yellow-400 font-bold">achieved their targets</span></span>
        <span className="block">Whatever your target and your current condition we are ready to give you the <span className="text-yellow-400 font-bold">guidance</span> to make the <span className="text-yellow-400 font-bold">magic happens</span></span>
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <button onClick={onOpenPrograms} className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 transform hover:scale-105">Check our programs</button>
      </div>
    </div>
  </section>
);
