import React, { useState } from 'react';
import { packagePlans, packageFilters } from '../../data/packages';

interface PackagesProps {
  onOpenRegistration?: () => void;
}

export const Packages: React.FC<PackagesProps> = ({ onOpenRegistration }) => {
  const [filter, setFilter] = useState('all');

  // Helper function to get icon based on package type
  const getPackageIcon = (id: string) => {
    switch (id) {
      case 'control': return 'fas fa-dumbbell';
      case 'meal': return 'fas fa-utensils';
      case 'contact': return 'fas fa-crown';
      case 'vip': return 'fas fa-gem';
      case 'vip-med': return 'fas fa-user-md';
      default: return 'fas fa-star';
    }
  };

  // Helper function to get gradient classes
  const getGradientClasses = (gradient: string) => {
    if (gradient === 'primary') return 'bg-primary';
    if (gradient.startsWith('from-')) return `bg-gradient-to-br ${gradient}`;
    return gradient;
  };

  // Filter packages based on selected filter
  const filteredPackages = filter === 'all' 
    ? packagePlans 
    : packagePlans.filter(pkg => pkg.filter === filter);

  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Training Packages</h2>
          <p className="ar text-center text-lg text-gray-600 max-w-2xl mx-auto">
            الباقات - اختر الباقة المثالية التي تناسب أهدافك وجدولك الزمني
          </p>
        </div>
        
        {/* Package Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {packageFilters.map((filterItem) => (
              <button 
                key={filterItem.id}
                className={`package-filter px-6 py-2 rounded-full ${filter === filterItem.id ? 'active bg-primary text-white' : 'bg-white text-gray-600 border hover:bg-gray-50'}`}
                data-filter={filterItem.id}
                onClick={() => setFilter(filterItem.id)}
              >
                {filterItem.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div 
              key={pkg.id}
              className={`package-item ${pkg.filter} ${getGradientClasses(pkg.gradient)} rounded-xl shadow-lg p-6 card-hover text-white relative flex flex-col h-full ${pkg.border || ''}`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                    {pkg.highlight}
                  </span>
                </div>
              )}
              <div className="text-center flex-grow">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${getPackageIcon(pkg.id)} text-2xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold mb-2">{pkg.title}</h3>
                <div className="text-2xl font-bold mb-2">
                  ${pkg.priceUSD}<span className="text-sm opacity-80">/month</span>
                </div>
                <div className="text-sm opacity-90 mb-4">{pkg.priceEGP} EGP</div>
                <ul className="text-left space-y-1 mb-6 text-xs leading-relaxed">
                  {pkg.features.map((feature, index) => (
                    <li key={`${pkg.id}-feature-${index}`} className="flex items-start justify-end text-right">
                      {feature}
                      <i className="fas fa-check text-green-300 mx-2 mt-0.5"></i>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={onOpenRegistration}
                  className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 backdrop-blur-sm"
                >
                  {pkg.button}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Package Comparison */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="subtitle text-2xl font-bold text-center text-gray-900 mb-8">Compare All Packages</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Features</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-700">Control</th>
                  <th className="text-center py-3 px-4 font-semibold text-green-600">Nutrition</th>
                  <th className="text-center py-3 px-4 font-semibold text-primary">Control+</th>
                  <th className="text-center py-3 px-4 font-semibold text-purple-600">VIP</th>
                  <th className="text-center py-3 px-4 font-semibold text-indigo-600">VIP Med</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Custom Training Program</td>
                  <td className="text-center py-3 px-4"><i className="fas fa-check text-green-500"></i></td>
                  <td className="text-center py-3 px-4"><i className="fas fa-times text-red-500"></i></td>
                  <td className="text-center py-3 px-4"><i className="fas fa-check text-green-500"></i></td>
                  <td className="text-center py-3 px-4"><i className="fas fa-check text-green-500"></i></td>
                  <td className="text-center py-3 px-4"><i className="fas fa-check text-green-500"></i></td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Nutrition Plan</td>
                  <td className="text-center py-3 px-4"><i className="fas fa-check text-green-500"></i></td>
                  <td className="text-center py-3 px-4"><i className="fas fa-check text-green-500"></i></td>
                  <td className="text-center py-3 px-4"><i className="fas fa-check text-green-500"></i></td>
                  <td className="text-center py-3 px-4"><i className="fas fa-check text-green-500"></i></td>
                  <td className="text-center py-3 px-4"><i className="fas fa-check text-green-500"></i></td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Daily Follow-up</td>
                  <td className="text-center py-3 px-4"><i className="fas fa-times text-red-500"></i></td>
                  <td className="text-center py-3 px-4"><i className="fas fa-check text-green-500"></i></td>
                  <td className="text-center py-3 px-4"><i className="fas fa-check text-green-500"></i></td>
                  <td className="text-center py-3 px-4"><i className="fas fa-check text-green-500"></i></td>
                  <td className="text-center py-3 px-4"><i className="fas fa-check text-green-500"></i></td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Video Call Sessions</td>
                  <td className="text-center py-3 px-4"><i className="fas fa-times text-red-500"></i></td>
                  <td className="text-center py-3 px-4"><i className="fas fa-times text-red-500"></i></td>
                  <td className="text-center py-3 px-4"><i className="fas fa-times text-red-500"></i></td>
                  <td className="text-center py-3 px-4"><i className="fas fa-check text-green-500"></i></td>
                  <td className="text-center py-3 px-4"><i className="fas fa-check text-green-500"></i></td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Medical Support</td>
                  <td className="text-center py-3 px-4"><i className="fas fa-times text-red-500"></i></td>
                  <td className="text-center py-3 px-4"><i className="fas fa-times text-red-500"></i></td>
                  <td className="text-center py-3 px-4"><i className="fas fa-times text-red-500"></i></td>
                  <td className="text-center py-3 px-4"><i className="fas fa-times text-red-500"></i></td>
                  <td className="text-center py-3 px-4"><i className="fas fa-check text-green-500"></i></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Price (USD/month)</td>
                  <td className="text-center py-3 px-4 font-bold">$40</td>
                  <td className="text-center py-3 px-4 font-bold">$35</td>
                  <td className="text-center py-3 px-4 font-bold">$65</td>
                  <td className="text-center py-3 px-4 font-bold">$130</td>
                  <td className="text-center py-3 px-4 font-bold">$200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
