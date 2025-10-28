import React from 'react';
import { programs } from '../../data/programs';

export const Programs: React.FC = () => (
  <section id="programs" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
        <p className="text-sm text-center text-gray-500 mt-4 italic ar">استكشف مجموعتنا المتنوعة من البرامج لتحقيق أهدافك الرياضية.</p>
      </div>
      <ProgramGrid />
    </div>
  </section>
);

const ProgramGrid: React.FC = () => (
  <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
    {programs.map(p => (
      <div key={p.title} className="bg-white rounded-xl shadow-lg card-hover border border-gray-100 flex-shrink-0 w-full sm:w-80 max-w-sm overflow-hidden">
        <div className={`h-48 bg-gradient-to-br ${p.color} relative`}>
          <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
          <p className="text-gray-600 mb-4 text-sm ar">{p.desc}</p>
        </div>
      </div>
    ))}
  </div>
);
