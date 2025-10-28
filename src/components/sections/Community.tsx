import React from 'react';

export const Community: React.FC = () => (
  <section id="community" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">IB Training Community</h2>
      <p className="text-sm text-center text-gray-500 mt-4 italic ar">للوصول لأفضل نسخة من نفسك صحيا وتفاجأ بجسم متناسق وقوي</p>
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-5xl mx-auto mt-8">
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed ar" dir="rtl">
          في مجتمع مليان ابطال بيشاركوك نفس الهدف وبيحكوا قصص نجاحهم ورحلتهم خطوة بخطوة عشان يشجعوك تتحكم وتوصل انت كمان لقصتك الخاصه اللي هتلهم بيها غيرك
        </p>
      </div>

      {/* App Download Section */}
      <div className="mt-12 flex flex-col items-center">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Download the IB Training App</h3>
        <div className="flex flex-row gap-2 sm:gap-4">
          <a
            href="https://apps.apple.com/eg/app/ib-training/id6751325113"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-44 h-16 sm:w-80 sm:h-28 hover:bg-gray-100 transition font-bold text-base sm:text-2xl"
            aria-label="Download on the App Store"
          >
            <img src="/assets/images/app-store.webp" alt="Download on the App Store" className="h-12 sm:h-20 w-auto" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.ibtraining.codebase"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-44 h-16 sm:w-80 sm:h-28 hover:bg-gray-100 transition font-bold text-base sm:text-2xl"
            aria-label="Download on Google Play"
          >
            <img src="/assets/images/google-play.webp" alt="Download on Google Play" className="h-12 sm:h-20 w-auto" />
          </a>
        </div>
      </div>
    </div>
  </section>
);
