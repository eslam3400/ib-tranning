import React from 'react';

interface WhyProps {
  onOpenRegistration?: () => void;
}

export const Why: React.FC<WhyProps> = ({ onOpenRegistration }) => (
  <section id="why" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why IB Training?</h2>
        <p className="ar text-sm text-gray-500 italic text-center">
          تعالى نعرف السبب اللي بيخلي اي بي ترينينج الاختيار الأمثل لرحلتك للوصل لأفضل نسخة من نفسك
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <i className="fas fa-dumbbell text-white"></i>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customized Training Programs</h3>
              <p className="text-gray-600 leading-relaxed ar text-center" dir="rtl">
                يتم بناء البرامج بالكامل خصيصاً لك حسب نوع الرياضة ومستواك وهدفك مع مراعاة تقدمك المستمر والتعديلات اللازمة لكل مرحلة
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <i className="fas fa-apple-alt text-white"></i>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Nutrition Plans</h3>
              <p className="text-gray-600 leading-relaxed text-center ar" dir="rtl">
                يتم بناء النظام الغذائي بناءاً علي هدفك وحالتك الحالية ( جسمانياً - مدياً ) ومستوى نشاطك خلال اليوم ( شغل - تمرين - مهمات يومية )
                ويتم تقسيم الاكل حسب الكميات اللي تقدر تاكلها في الوجبه الوحده وعدد الوجبات خلال اليوم وتوقيت الوجبات حسب احتياجك المختلف للاكل خلال الانشطة المختلفه .. كل ده عشان نساعدك توصل لاحسن نسخه من نفسك
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <i className="fas fa-user-friends text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Coaching & Support</h3>
              <p className="text-gray-600 leading-relaxed text-center ar" dir="rtl">
                الكوتش بيراجع كل تمارينك ويقيم اداءك ويعدل عليك بفيديوهات شرح مبسطة ده غير ان برنامجك بيكون مشروح بالكامل بالفيديوهات قبل متبدء
                الكوتش بيتابع معاك يوم بيوم عشان يشجعك ويرد علي اسئلتك ويقيم نتائجك خلال البرنامج ويغيرلك البرامج لو احتجت لده ويحتفل معاك بانجازاتك
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <i className="fas fa-heart text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">IB Training Application & Community</h3>
              <p className="text-gray-600 leading-relaxed text-center ar" dir="rtl">
                تجربة تدريب مختلفه تماما من خلال تطبيق بيقدملك كل اللي محتاجه من ( فيديوهات شرح لتمرينك - نماذج استبيانية تحط فيها مقاساتك وتطورك في الاوزان او العدات - مجتمع او شات جماعي تشارك فيه وتتكلم عن تمرينك والتحديات اللي بتوجهك مع باقي مجتمع اي بي تريننج )
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 max-w-4xl mx-auto text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience the IB Training Difference?</h3>
          <p className="mb-6 text-lg text-white/90">Join hundreds of satisfied members who have transformed their lives with our proven approach.</p>
          <button
            onClick={onOpenRegistration}
            className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Start Your Journey Today
          </button>
        </div>
      </div>
    </div>
  </section>
);
