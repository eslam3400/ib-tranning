import React from 'react';
import { members } from './Team';

interface TeamModalProps { 
  memberId: string | null; 
  onClose: () => void; 
}

const teamDetails = {
  ibrahem: {
    fullTitle: 'The Founder | Calisthenics Athlete | Mindset Expert',
    sections: [
      {
        title: 'Experience & Expertise',
        content: `With over 10 years of experience in calisthenics and bodybuilding, Ibrahem has helped transform the lives of 2000+ clients worldwide. His expertise spans across movement patterns, strength development, and most importantly, mindset transformation.`
      },
      {
        title: 'Training Philosophy',
        content: `Ibrahem believes that true transformation happens when physical training meets mental conditioning. His approach combines progressive calisthenics movements with mindset coaching to create lasting change in his clients' lives.`
      },
      {
        title: 'Achievements & Certifications',
        content: `Founder of IB Training community, certified in multiple fitness disciplines, and recognized for his innovative approach to bodyweight training and client transformation.`
      }
    ]
  },
  nancy: {
    fullTitle: 'Head Coach of Ladies Only - "The Fighter"',
    sections: [
      {
        title: 'Athletic Background',
        content: `Nancy is a dedicated CrossFit athlete with 5+ years of competitive experience. She achieved the remarkable milestone of becoming the 2nd fittest Arab woman under 21 in 2024, showcasing her exceptional athletic abilities.`
      },
      {
        title: 'Specializations',
        content: `Nancy specializes in fat loss programs, body shaping, and Olympic lifting techniques. Her expertise in working with female clients makes her an invaluable asset to the IB Training team.`
      },
      {
        title: 'Coaching Philosophy',
        content: `Nancy focuses on empowering women through fitness, helping them build confidence while achieving their physical goals. Her approach combines technical excellence with emotional support.`
      },
      {
        title: 'Training Focus',
        content: `Her programs are specifically designed for women, incorporating functional movements, strength training, and conditioning to help clients achieve sustainable results.`
      }
    ]
  },
  emad: {
    fullTitle: 'Physical Therapy Expert',
    sections: [
      {
        title: 'Professional Background',
        content: `Dr. Emad Eldeen serves as a teaching assistant in pediatric physical therapy at Pharos University, bringing academic excellence to practical application in fitness and rehabilitation.`
      },
      {
        title: 'Clinical Experience',
        content: `With over 10,000 hours of clinical experience, Dr. Emad has worked with diverse populations, from children to adults, helping them overcome physical limitations and achieve optimal movement patterns.`
      },
      {
        title: 'Certifications & Expertise',
        content: `Dr. Emad holds multiple certifications in physical therapy and rehabilitation. His expertise ensures that all IB Training programs are safe, effective, and tailored to individual physical capabilities.`
      },
      {
        title: 'Role in IB Training',
        content: `As the physical therapy expert, Dr. Emad ensures that all training programs are biomechanically sound and helps clients with injury prevention and rehabilitation protocols.`
      }
    ]
  }
};

export const TeamModal: React.FC<TeamModalProps> = ({ memberId, onClose }) => {
  if (!memberId) return null;
  
  const member = members.find(m => m.id === memberId);
  const details = teamDetails[memberId as keyof typeof teamDetails];
  
  if (!member || !details) return null;

  return (
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="modal-content bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 bg-white p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">{member.name}</h2>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              {member.img ? (
                <div 
                  className="w-32 h-32 bg-cover bg-center rounded-full mx-auto mb-6 border-4 border-primary shadow-lg" 
                  style={{ backgroundImage: `url('${member.img}')` }}
                />
              ) : (
                <div className={`w-32 h-32 ${member.color} rounded-full mx-auto mb-6 border-4 ${member.id === 'nancy' ? 'border-pink-600' : 'border-blue-600'} shadow-lg flex items-center justify-center`}>
                  <span className="text-4xl text-white font-bold">{member.initials}</span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className={`${member.id === 'nancy' ? 'text-pink-600' : member.id === 'emad' ? 'text-blue-600' : 'text-primary'} font-semibold mb-4`}>
                  {details.fullTitle}
                </p>
                <div className="flex justify-center space-x-4">
                  {member.instagramUrl && (
                    <a 
                      href={member.instagramUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${member.id === 'nancy' ? 'text-gray-400 hover:text-pink-600' : member.id === 'emad' ? 'text-gray-400 hover:text-blue-600' : 'text-gray-400 hover:text-primary'} transition duration-300`}
                    >
                      <i className="fab fa-instagram text-xl"></i>
                    </a>
                  )}
                  {member.facebookUrl && (
                    <a 
                      href={member.facebookUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${member.id === 'nancy' ? 'text-gray-400 hover:text-pink-600' : 'text-gray-400 hover:text-primary'} transition duration-300`}
                    >
                      <i className="fab fa-facebook text-xl"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="space-y-6">
                {details.sections.map((section, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{section.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{section.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
