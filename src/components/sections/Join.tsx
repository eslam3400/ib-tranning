import React from 'react';

const steps = [
  { 
    n: 1, 
    title: 'Make The Decision', 
    titleAr: 'Make The Decision',
    icon: 'check-circle', 
    desc: 'اول خطوة تاخد قرار حقيقي بانك تطور صحتك وشكل جسمك .', 
    color: 'from-blue-500 to-blue-600' 
  },
  { 
    n: 2, 
    title: 'Choose Your Program', 
    titleAr: 'Choose Your Program',
    icon: 'dumbbell', 
    desc: 'اختار البرنامج المناسب ليك ولهدفك او استشير الكوتش .', 
    color: 'from-green-500 to-green-600' 
  },
  { 
    n: 3, 
    title: 'Choose Your Package', 
    titleAr: 'Choose Your Package',
    icon: 'box', 
    desc: 'اختار الباقة المناسبه لك وسيتم التواصل معك خلال اليوم لمعرفة طرق الدفع', 
    color: 'from-purple-500 to-purple-600' 
  },
  { 
    n: 4, 
    title: 'Application Access', 
    titleAr: 'Application Access',
    icon: 'mobile-alt', 
    desc: 'بعد الدفع بيتم ارسال اليك الحساب الخاص بك في تطبيقنا ib training\n\nواللي بمجرد متفتحه بتلاقي فيه كل الاسئلة الضرورية اللي من خلال اجاباتك عليها بيتم بناء خططك التدريبية والتغذوية .', 
    color: 'from-orange-500 to-orange-600' 
  },
  { 
    n: 5, 
    title: 'Start Your Journey', 
    titleAr: 'Start Your Journey',
    icon: 'rocket', 
    desc: 'بعد يومين بتظهر الخطط التدريبية بتاعتك علي التطبيق وبنبدء رحلتك الخاصة ومتابعتك يوم بيوم .', 
    color: 'from-red-500 to-red-600' 
  }
];

export const Join: React.FC = () => (
  <section id="join" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How To Join IB Training</h2>
        <p className="text-xl text-gray-700 mb-6 ar max-w-4xl mx-auto leading-relaxed">
          قبل متاخد قرار انك تنضملنا .. لازم تكون عارف اننا مش عايزين مشتركين ، احنا عايزين ابطال نشاركهم قصة نجاحهم .
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
        {steps.slice(0, 3).map(StepCard)}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {steps.slice(3).map(StepCard)}
      </div>
    </div>
  </section>
);

function StepCard(s: {n: number; title: string; titleAr: string; icon: string; desc: string; color: string}) {
  return (
    <div key={s.n} className="text-center">
      <div className="relative mb-6 w-20 h-20 mx-auto">
        <div className={`w-20 h-20 bg-gradient-to-r ${s.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
          <span className="text-2xl font-bold text-white">{s.n}</span>
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
          <i className={`fas fa-${s.icon} text-white text-sm`}></i>
        </div>
      </div>
      
      <h3 className="text-xl text-center font-bold text-gray-900 mb-3 ar">
        {s.titleAr}
      </h3>
      
      <p className="text-gray-600 mb-4 text-sm ar whitespace-pre-line">
        {s.desc}
      </p>
    </div>
  );
}
