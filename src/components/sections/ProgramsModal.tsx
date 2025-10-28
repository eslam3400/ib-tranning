import React from 'react';
import { programs } from '../../data/programs';

interface ProgramsModalProps { open:boolean; onClose: ()=> void }
export const ProgramsModal: React.FC<ProgramsModalProps> = ({ open, onClose }) => {
  if(!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Programs</h2>
          <button onClick={onClose} aria-label="Close programs" className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
        </div>
        <div className="p-8 pt-4">
          <p className="text-sm text-center text-gray-500 mb-8 italic ar">استكشف مجموعتنا المتنوعة من البرامج لتحقيق أهدافك الرياضية.</p>
          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {programs.map(p => (
              <div key={p.title} className="bg-white rounded-xl shadow-lg card-hover border border-gray-100 flex-shrink-0 w-full sm:w-80 max-w-sm overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${p.color} relative`}>
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm ar">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
