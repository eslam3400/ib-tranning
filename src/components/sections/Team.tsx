import React from 'react';

export interface TeamMember { 
  id: string; 
  name: string; 
  role: string; 
  img?: string; 
  color?: string; 
  description: string;
  instagramUrl?: string;
  facebookUrl?: string;
  initials?: string;
}

const members: TeamMember[] = [
  { 
    id: 'ibrahem', 
    name: 'Ibrahem Essa', 
    role: 'Founder & Calisthenics Expert', 
    img: '/assets/images/ibrahim2.PNG', 
    description: '10+ years of experience in calisthenics, bodybuilding, and mindset coaching. Providing comprehensive training programs for all levels.',
    instagramUrl: 'https://www.instagram.com/ibrahemessa_',
    facebookUrl: 'https://www.facebook.com/share/19BvNpDV6w/'
  },
  { 
    id: 'nancy', 
    name: 'Nancy Khaled', 
    role: 'Head Coach of Ladies Only', 
    color: 'bg-pink-600', 
    // initials: 'NK',
    img: '/assets/images/nancy.PNG',
    description: '5+ years CrossFit athlete and coach. 2nd fittest Arab women u21 2024. Specialized in fat loss, shaping, and Olympic lifting.',
    instagramUrl: 'https://www.instagram.com/_nancykhaled',
    facebookUrl: 'https://www.facebook.com/share/1JTZ2urQDu/'
  },
  { 
    id: 'emad', 
    name: 'Dr. Emad Eldeen', 
    role: 'Physical Therapy Expert', 
    color: 'bg-blue-600',
    initials: 'DE',
    img: '/assets/images/emad.PNG',
    description: 'Teaching assistant in pediatric physical therapy at Pharos University. 10,000+ hours of clinical experience with multiple certifications.',
    instagramUrl: 'https://www.instagram.com/emad_eldeen_pt'
  }
];

interface TeamProps { onOpenMember?: (id: string) => void }

export const Team: React.FC<TeamProps> = ({ onOpenMember }) => (
  <section id="team" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
        <p className="text-sm text-center text-gray-500 mt-4 italic ar">مدربون خبراء مكرسون لرحلة تحولك</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Team Member 1 - Ibrahem Essa */}
        <div 
          className="bg-white rounded-xl shadow-lg overflow-hidden card-hover cursor-pointer" 
          onClick={() => onOpenMember?.('ibrahem')}
        >
          <div 
            className="h-64 bg-cover bg-center" 
            style={{ backgroundImage: "url('/assets/images/ibrahim2.PNG')" }}
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Ibrahem Essa</h3>
            <p className="text-primary font-semibold mb-4">Founder & Calisthenics Expert</p>
            <p className="text-gray-600 mb-6">
              10+ years of experience in calisthenics, bodybuilding, and mindset coaching. Providing comprehensive training programs for all levels.
            </p>
            <div className="flex justify-center space-x-4 mb-4">
              <a 
                href="https://www.instagram.com/ibrahemessa_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition duration-300" 
                onClick={(e) => e.stopPropagation()}
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a 
                href="https://www.facebook.com/share/19BvNpDV6w/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition duration-300" 
                onClick={(e) => e.stopPropagation()}
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Team Member 2 - Nancy */}
        <div 
          className="bg-white rounded-xl shadow-lg overflow-hidden card-hover cursor-pointer" 
          onClick={() => onOpenMember?.('nancy')}
        >
          <div 
            className="h-64 bg-cover bg-center" 
            style={{ backgroundImage: "url('/assets/images/nancy.PNG')" }}
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Nancy Khaled</h3>
            <p className="text-pink-600 font-semibold mb-4">Head Coach of Ladies Only</p>
            <p className="text-gray-600 mb-6">
              5+ years CrossFit athlete and coach. 2nd fittest Arab women u21 2024. Specialized in fat loss, shaping, and Olympic lifting.
            </p>
            <div className="flex justify-center space-x-4 mb-4">
              <a 
                href="https://www.instagram.com/_nancykhaled" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-600 transition duration-300" 
                onClick={(e) => e.stopPropagation()}
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a 
                href="https://www.facebook.com/share/1JTZ2urQDu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-600 transition duration-300" 
                onClick={(e) => e.stopPropagation()}
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Team Member 3 - Dr. Emad */}
        <div 
          className="bg-white rounded-xl shadow-lg overflow-hidden card-hover cursor-pointer" 
          onClick={() => onOpenMember?.('emad')}
        >
          <div 
            className="h-64 bg-cover bg-center" 
            style={{ backgroundImage: "url('/assets/images/emad.PNG')" }}
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Emad Eldeen</h3>
            <p className="text-blue-600 font-semibold mb-4">Physical Therapy Expert</p>
            <p className="text-gray-600 mb-6">
              Teaching assistant in pediatric physical therapy at Pharos University. 10,000+ hours of clinical experience with multiple certifications.
            </p>
            <div className="flex justify-center space-x-4 mb-4">
              <a 
                href="https://www.instagram.com/emad_eldeen_pt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition duration-300" 
                onClick={(e) => e.stopPropagation()}
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export { members };
