export interface PackagePlan { id: string; filter: string; title: string; priceUSD: number; priceEGP: number; gradient: string; features: string[]; button: string; highlight?: string; border?: string }
export const packagePlans: PackagePlan[] = [
  { id: 'control', filter: 'control', title: 'Control', priceUSD: 40, priceEGP: 1000, gradient: 'from-gray-700 to-gray-900', features: ['برنامج تدريب مناسب لهدفك مشروح بالفيديوهات سواء في البيت أو الجيم', 'نظام غذائي مخصوص مبني علي هدفك ومستواك', 'خطة مكملات كاملة لو احتجت', 'متابعه كل ١٠ أيام'], button: 'Choose Control' },
  { id: 'meal', filter: 'meal', title: 'Nutrition Plan', priceUSD: 35, priceEGP: 800, gradient: 'from-green-600 to-teal-600', features: ['نظام غذائي متنوع مبني خصيصا لك بناءاً علي هدفك ومستواك ونظام حياتك', 'خطة مكملات وفيتامينات', 'متابعة يومية للرد علي الاستفسارات', 'أخذ قياسات كل ١٠ أيام'], button: 'Start Nutrition' },
  { id: 'contact', filter: 'contact', title: 'Control+', priceUSD: 65, priceEGP: 1600, gradient: 'primary', features: ['برنامج خاص بك بناءاً علي هدفك ومستواك سواء متمرن من البيت او الجيم (مشروح بالفيديوهات)', 'متابعه يومية لمراجعة تمرينك وتصحيح الاخطاء', 'الرد علي استفساراتك في أي وقت خلال اليوم'], button: 'Choose Plan', highlight: 'Popular' },
  { id: 'vip', filter: 'vip', title: 'VIP Control+', priceUSD: 130, priceEGP: 3500, gradient: 'from-purple-600 to-pink-600', features: ['برنامج خاص مبني بناءاً علي هدفك ومستواك', '12 تمرينة خلال الشهر مع الكوتش من خلال مكالمة فيديو', 'الرد علي استفساراتك في أي وقت خلال اليوم', 'نظام غذائي متنوع مبني خصيصا لك بناءاً علي هدفك ومستواك ونظام حياتك', 'خطة مكملات وفيتامينات'], button: 'Go VIP', border: 'border-4 border-yellow-400' },
  { id: 'vip-med', filter: 'vip', title: 'VIP Med Control+', priceUSD: 200, priceEGP: 5000, gradient: 'from-indigo-600 to-purple-700', features: ['كل مميزات VIP Control', 'البرنامج التدريبي والتغذية تحت إشراف ومراجعة اطباء متخصصين', 'متابعه خاصة من خلال دكتور علاج طبيعي لو في اي مشكلة او استفسار', 'استشارة ( مكالمة فيديو ) لو احتاج الامر مع الدكتور', 'متابعه علاجية مع دكتور في حالة وجود اصابة'], button: 'Get VIP Med', border: 'border-4 border-gradient-to-r from-yellow-400 to-orange-500', highlight: 'Medical Support' }
];
export const packageFilters = [
  { id: 'all', label: 'All Packages' },
  { id: 'control', label: 'Control Plans' },
  { id: 'meal', label: 'Nutrition Plans' },
  { id: 'contact', label: 'Training Plans' },
  { id: 'vip', label: 'VIP Services' }
];
