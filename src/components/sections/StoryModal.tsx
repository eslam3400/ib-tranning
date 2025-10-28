import React from 'react';
import { storySlides, StorySlideCard } from '../../data/stories';

interface StoryModalProps { storyId: string | null; onClose: ()=> void }

const allStories: StorySlideCard[] = storySlides.flat();

export const StoryModal: React.FC<StoryModalProps> = ({ storyId, onClose }) => {
  if(!storyId) return null;
  const story = allStories.find(s => s.id === storyId);
  if(!story) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={e=> e.stopPropagation()}>
        {/* Header */}
        <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center z-10 rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-900">
            {story.name}&apos;s Success Story - <span className="ar">قصة نجاح {story.arabicName}</span>
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-3xl font-light">×</button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Before & After Progress Section */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Before & After Progress - <span className="ar">التقدم قبل وبعد</span>
                </h3>
                {story.beforeAfterImage ? (
                  <div className="relative">
                    <img 
                      src={story.beforeAfterImage} 
                      alt={`${story.name} before and after progress`}
                      className={`w-full rounded-lg shadow-md ${story.gender === 'female' ? 'female-image-blur' : ''}`}
                    />
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      <span className="ar">قبل</span>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      <span className="ar">بعد</span>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">Progress images coming soon</span>
                  </div>
                )}
              </div>

              {/* Achievements Section */}
              {story.achievements && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Achievements - <span className="ar">الإنجازات</span>
                  </h3>
                  <div className="space-y-3">
                    {story.achievements.weightLoss && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Weight Loss:</span>
                        <span className="font-semibold text-pink-600">{story.achievements.weightLoss}</span>
                      </div>
                    )}
                    {story.achievements.pushUps && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Push-ups:</span>
                        <span className="font-semibold text-green-600">{story.achievements.pushUps}</span>
                      </div>
                    )}
                    {story.achievements.pullUps && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Pull-ups:</span>
                        <span className="font-semibold text-green-600">{story.achievements.pullUps}</span>
                      </div>
                    )}
                    {story.achievements.specialSkills && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Special Skills:</span>
                        <span className="font-semibold text-purple-600">
                          {story.achievements.specialSkills.join(', ')}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Profile Section */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  {story.profileType === 'img' && story.avatar ? (
                    <img 
                      src={story.avatar} 
                      alt={story.name}
                      className={`w-full h-full object-cover ${story.gender === 'female' ? 'female-image-blur' : ''}`}
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-r ${story.profileColor} flex items-center justify-center text-white font-bold text-sm`}>
                      {story.initials || story.name[0]}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {story.name} - <span className="ar">{story.arabicName}</span>
                  </h3>
                  <p className="text-gray-600">{story.age} years, {story.country} | <span className="ar">{story.countryArabic}</span></p>
                  <div className="flex items-center mt-1">
                    {[...Array(story.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">★</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Journey Section */}
              {story.journey && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {story.gender === 'female' ? 'Her Journey' : 'His Journey'} - <span className="ar">{story.gender === 'female' ? 'رحلتها' : 'رحلته'}</span>
                  </h3>
                  <div className="space-y-3">
                    <blockquote className="border-l-4 border-pink-300 pl-4 bg-pink-50 py-3 rounded-r-lg">
                      <p className="text-sm text-gray-700 ar italic">{story.journey.arabic}</p>
                    </blockquote>
                    <p className="text-sm text-gray-600 italic">{story.journey.english}</p>
                  </div>
                </div>
              )}

              {/* Transformation Section */}
              {story.transformation && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Transformation - <span className="ar">التحول</span>
                  </h3>
                  <div className="space-y-3">
                    <blockquote className="border-l-4 border-blue-300 pl-4 bg-blue-50 py-3 rounded-r-lg">
                      <p className="text-sm text-gray-700 ar italic">{story.transformation.arabic}</p>
                    </blockquote>
                    <p className="text-sm text-gray-600 italic">{story.transformation.english}</p>
                  </div>
                </div>
              )}

              {/* Achievement Quote */}
              {story.achievementQuote && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Achievement - <span className="ar">الإنجاز</span>
                  </h3>
                  <div className="space-y-3">
                    <blockquote className="border-l-4 border-green-300 pl-4 bg-green-50 py-3 rounded-r-lg">
                      <p className="text-sm text-gray-700 ar italic">{story.achievementQuote.arabic}</p>
                    </blockquote>
                    <p className="text-sm text-gray-600 italic">{story.achievementQuote.english}</p>
                  </div>
                </div>
              )}

              {/* Inspirational Quote */}
              {story.inspirationalQuote && (
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg border border-pink-200">
                  <blockquote className="text-center">
                    <p className="text-base font-medium text-pink-700 ar mb-2">
                      &ldquo;{story.inspirationalQuote.arabic}&rdquo;
                    </p>
                    <p className="text-sm text-pink-600 italic">
                      &ldquo;{story.inspirationalQuote.english}&rdquo;
                    </p>
                  </blockquote>
                </div>
              )}

              {/* Tags */}
              <div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {story.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: tag === 'Fat Loss' ? '#fecaca' :
                                      tag === 'Calisthenics' ? '#a78bfa' :
                                      tag === 'Nutrition' ? '#86efac' :
                                      tag === 'Mindset' ? '#fde68a' : '#e5e7eb',
                        color: tag === 'Fat Loss' ? '#991b1b' :
                               tag === 'Calisthenics' ? '#581c87' :
                               tag === 'Nutrition' ? '#166534' :
                               tag === 'Mindset' ? '#92400e' : '#374151'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
