export interface StorySlideCard { 
  id: string; 
  name: string; 
  arabicName: string; 
  age: string; 
  country: string; 
  countryArabic: string;
  gradient: string; 
  progressWidth: number; 
  tags: string[]; 
  summary: string; 
  mainAchievement: string;
  motivationalQuote: string;
  motivationalQuoteArabic: string;
  rating: number;
  avatar?: string; 
  profileType?: 'img' | 'initials'; 
  initials?: string;
  profileColor: string;
  gender?: 'male' | 'female';
  // New fields for enhanced stories
  beforeAfterImage?: string;
  journey?: {
    arabic: string;
    english: string;
  };
  transformation?: {
    arabic: string;
    english: string;
  };
  achievements?: {
    weightLoss?: string;
    pushUps?: string;
    pullUps?: string;
    specialSkills?: string[];
  };
  achievementQuote?: {
    arabic: string;
    english: string;
  };
  inspirationalQuote?: {
    arabic: string;
    english: string;
  };
}

export const storySlides: StorySlideCard[][] = [
  // Slide 1 - Reem, Yamen, Taif
  [
    { 
      id: 'reem', 
      name: 'Reem', 
      arabicName: 'ريم', 
      age: '44', 
      country: 'Sudan', 
      countryArabic: 'السودان',
      gradient: 'from-pink-50 to-rose-50', 
      progressWidth: 100, 
      tags: ['Fat Loss', 'Calisthenics', 'Nutrition', 'Mindset'], 
      summary: 'From weight loss attempt to committed calisthenics athlete',
      mainAchievement: '73kg ➜ 51kg (-22kg) | 7 Pull-ups | 10 HSPU | 50 Push-ups',
      motivationalQuote: '"من ربة منزل لـ لاعبة كاليستنكس محترفة"',
      motivationalQuoteArabic: '"From a housewife to a professional calisthenics athlete"',
      rating: 5,
      profileType: 'img', 
      avatar: '/assets/images/reem-profile.jpeg',
      profileColor: 'from-pink-500 to-rose-500',
      gender: 'female',
      beforeAfterImage: '/assets/images/ريم.PNG',
      journey: {
        arabic: 'ريم بدئت رياضه بعد سن الـ ٤٠، كان كل هدفها انها تخس كام كيلو عشان تبقى قادرة تتحرك في البيت وتأدي مهمها اليومية بشكل أفضل. بعد شهرين ونزول ٨ كيلو رأيها اتغير تماماً وقررت تكمل كلاعبة كاليستنكس، وده ساعدها تحقق أهداف كتير داخل وخارج اللعبة.',
        english: 'Reem started training after age 40. Her initial goal was to drop a few kilos to move better at home. After two months and -8kg, her perspective flipped and she decided to continue as a calisthenics athlete, which helped her achieve many goals in and out of the sport.'
      },
      transformation: {
        arabic: 'ريم حياتها اتحولت حرفياً من أم بتتحرك بالعافية في البيت وبتشتكي من وجع مفاصلها وأسفل ضهرها، لامرأة ناجحة بتشتغل شغلنتين في اليوم وكمان بتهتم ببيتها، وكل ده بفضل التزامها بالتمرين والدايت.',
        english: 'Reem literally transformed from a mom who could barely move and suffered joint and lower back pain to a successful woman working two jobs while caring for her home, thanks to disciplined training and nutrition.'
      },
      achievements: {
        weightLoss: '73kg ➜ 51kg (-22kg, with muscle gain)',
        pushUps: '50 reps (unbroken)',
        pullUps: '7 reps (excellent form)',
        specialSkills: ['10 Handstand Push-ups ✓']
      },
      achievementQuote: {
        arabic: 'ريم أول ست عندي تقدر تجيب أكتر من ٥٠ عدة ضغط وأكتر من ٥ عدات عقله، وكمان تجيب هاندستاند بوش أب. والطموحات بتكبر كل مرة بنحقق فيها هدف.',
        english: 'Reem is the first woman I coached who can do 50+ push-ups, 5+ pull-ups, and handstand push-ups. Our ambitions grow with every goal achieved.'
      },
      inspirationalQuote: {
        arabic: '"من ربة منزل لـ لاعبة كاليستنكس محترفة"',
        english: '"From housewife to professional calisthenics athlete"'
      }
    },
    { 
      id: 'yamen', 
      name: 'Yamen', 
      arabicName: 'يامن', 
      age: '15', 
      country: 'Sudan', 
      countryArabic: 'السودان',
      gradient: 'from-blue-50 to-cyan-50', 
      progressWidth: 98, 
      tags: ['Calisthenics', 'Nutrition'], 
      summary: 'From a boy with a dream to a competing champion',
      mainAchievement: '-12kg Fat | +6kg Muscle | 30 Pull-ups | 8 MU',
      motivationalQuote: '"من طفل عنده حلم لبطل ينافس وعايش حلمه"',
      motivationalQuoteArabic: '"From a child with a dream to a champion competing and living his dream"',
      rating: 5,
      profileType: 'img',
      avatar: '/assets/images/yamen-profile.png',
      initials: 'يا',
      profileColor: 'from-blue-500 to-cyan-500',
      gender: 'male',
      beforeAfterImage: '/assets/images/يامن .PNG',
      journey: {
        arabic: 'يامن أول طفل شفنا في عينه قوة وإرادة حقيقية مختلفة عن شكل جسمه والبداية. بدأ وهو مش قادر يعمل عدة ضغط ولا يتعلق على العقلة بسبب وزنه، ومع الوقت مابقاش في حاجة توقفه بفضل الله. كان مستني أي تحدي عشان يثبت لنفسه قدراته.',
        english: 'From day one, we saw real willpower in Yamen’s eyes, unlike his starting physique. He began unable to do a single push-up or hang on a bar, but over time nothing could stop him. He embraced every challenge to prove his limitless potential.'
      },
      transformation: {
        arabic: 'تحول من شاب بيعاني من وزنه للاعب ينافس في بطولات. بقى مثال ملهم لكل الأطفال في سنه إن القرار والالتزام هم الفاصل بين طفل وبطل.',
        english: 'He transformed from a boy struggling with his weight to a competitor in championships—proof to kids his age that decisions and consistency separate children from champions.'
      },
      achievements: {
        weightLoss: '-12kg Fat | +6kg Muscle',
        pushUps: '125 reps',
        pullUps: '30 reps',
        specialSkills: ['8 Muscle-ups ✓', 'Handstand ✓', 'Planche ✓', 'Back lever ✓', 'Dragon flag ✓', 'Handstand walking ✓']
      },
      achievementQuote: {
        arabic: 'يامن مش بس ملتزم بالتمرين والتغذية، ده كان بيدور على التحدي ويواجهه. عشان كده شارك مع الكوتش في بطولات وكمان نافس.',
        english: 'Yamen didn’t just follow the program—he sought out challenges and faced them. He competed alongside his coach in championships.'
      },
      inspirationalQuote: {
        arabic: '"انت تكبر لما تقرر، مش بس لما تكبر في العمر"',
        english: '"You grow when you decide to, not just when you age"'
      }
    },
    { 
      id: 'taif', 
      name: 'Taif', 
      arabicName: 'طيف', 
      age: '23', 
      country: 'Sudan', 
      countryArabic: 'السودان',
      gradient: 'from-green-50 to-teal-50', 
      progressWidth: 92, 
      tags: ['Crossfit', 'Nutrition'], 
      summary: 'CrossFit athlete focused on performance over aesthetics',
      mainAchievement: 'CrossFit Progression & Consistency',
      motivationalQuote: '"لما يكون هدفك تغيير حياتك مش بس شكل جسمك"',
      motivationalQuoteArabic: '"When your goal is to change your life, not just your body shape"',
      rating: 5,
      profileType: 'img',
      avatar: '/assets/images/taif-profile.png',
      gender: 'female',
      initials: 'طي',
      profileColor: 'from-green-500 to-teal-500',
      beforeAfterImage: '/assets/images/طيف .PNG',
      journey: {
        arabic: 'طيف لاعبة كروس فيت مع كوتش نانسي. بدئت كروس فيت لأنها حاباها، وقدرت تحقق إنجازات كتير أكبر من مجرد التغيير الرهيب في شكل جسمها.',
        english: 'Taif is a CrossFit athlete coached by Nancy. She started CrossFit out of passion and achieved far more than just a body transformation.'
      },
      transformation: {
        arabic: 'حطت أهداف كتير في اللعبة وحققتها. طموحها بيزيد كل مرة تكسر وزن جديد في الويتلِفتنج أو عدد جديد في الجيمناستكس أو تتعلم تكنيك جديد.',
        english: 'She set many goals and achieved them. Her ambition grows each time she breaks a new weight in lifting, a new rep target in gymnastics, or learns a new technique.'
      },
      achievements: {
        weightLoss: 'Body recomposition',
        pushUps: 'Performance-focused',
        pullUps: 'Gymnastics capacity',
        specialSkills: ['Weightlifting PRs ✓', 'Gymnastics skills ✓']
      },
      achievementQuote: {
        arabic: 'دي النتيجة الطبيعية لما تكون بتلعب رياضة عشان تغير حياتك مش بس شكل جسمك.',
        english: 'This is the natural result when you play sport to change your life, not just your body.'
      },
      inspirationalQuote: {
        arabic: '"الطموح عندها مش بيقف"',
        english: '"Her ambition never stops"'
      }
    }
  ],
  
  // Slide 2 - Amgad, Mostafa, Lama
  [
    { 
      id: 'amgad', 
      name: 'Amgad', 
      arabicName: 'أمجد', 
      age: '22', 
      country: 'Saudi Arabia', 
      countryArabic: 'السعودية',
      gradient: 'from-orange-50 to-red-50', 
      progressWidth: 88, 
      tags: ['Bodybuilding', 'Nutrition'], 
      summary: 'Bodybuilding transformation to ideal composition',
      mainAchievement: 'Lean Mass 40kg | Fat 9kg',
      motivationalQuote: '"كل اللي طلبه انه يتحول تماماً.. وده اللي حصل"',
      motivationalQuoteArabic: '"He asked for a complete transformation... and that’s what happened"',
      rating: 5,
      profileType: 'img',
      avatar: '/assets/images/amgad-profile.jpg',
      initials: 'أم',
      profileColor: 'from-orange-500 to-red-500',
      gender: 'male',
      beforeAfterImage: '/assets/images/امجد اليمني .PNG',
      journey: {
        arabic: 'قبل ما يبدء معانا كان بيتمرن ومقدرش يوصل لهدفه مع أي كوتش تاني، فقرر يكمل لوحده لحد ما تواصل معانا. طلبه الوحيد: يتحول تماماً.',
        english: 'Before joining us, Amjad trained but couldn’t reach his goal with any coach, so he continued alone until he contacted us. His only ask: a complete transformation.'
      },
      transformation: {
        arabic: 'وصل لـ ٤٠ كيلو عضل و٩ كيلو دهون فقط – رضا تام عن شكل جسمه كلاعب جيم، وده حاجة شبه مستحيلة لكن تحقق بفضل الله ثم التزامه.',
        english: 'He reached 40kg lean mass and only 9kg fat—complete satisfaction with his physique as a gym athlete. Hard to achieve, but done with God’s grace and his commitment.'
      },
      achievements: {
        weightLoss: 'Lean mass 40kg | Fat 9kg',
        pushUps: 'Strength-focused',
        pullUps: 'Strength-focused',
        specialSkills: ['Gym hypertrophy ✓', 'Targeted nutrition ✓']
      },
      achievementQuote: {
        arabic: 'متضيعش وقتك على خطط تدريبية مش متفصلة ليك. لازم كوتش يهتم بكل التفاصيل ويبني خطة خاصة توصلك لهدفك أسرع.',
        english: 'Don’t waste time on generic plans. You need a coach who cares about details and builds a plan tailored to reach your goal fast.'
      },
      inspirationalQuote: {
        arabic: '"الخطة الصح + الالتزام = نتيجة"',
        english: '"Right plan + commitment = results"'
      }
    },
    { 
      id: 'mostafa', 
      name: 'Mostafa', 
      arabicName: 'مصطفى', 
      age: '24', 
      country: 'Saudi Arabia', 
      countryArabic: 'السعودية',
      gradient: 'from-indigo-50 to-purple-50', 
      progressWidth: 90, 
      tags: ['Fat Loss', 'Nutrition'], 
      summary: 'Addressed stubborn lower-body fat, reached satisfaction in 5 months',
      mainAchievement: 'More than -20kg Fat (5 months)',
      motivationalQuote: '"مشكلته كانت الدهون بتتخزن أسفل الجسم.. حلّها كان خطة خاصة ليه"',
      motivationalQuoteArabic: '"His fat stored in the lower body; the solution was a plan tailored to him"',
      rating: 5,
      profileType: 'img',
      avatar: '/assets/images/mustafa-profile.jpg',
      initials: 'مص',
      profileColor: 'from-indigo-500 to-purple-500',
      gender: 'male',
      beforeAfterImage: '/assets/images/مصطفى حمادي .PNG',
      journey: {
        arabic: 'الدهون كانت بتتخزن في الجزء السفلي من جسمه، وكان بيخس من فوق لكن تحت لا – وده سبب له إحباط. بدأنا سوا، وفي ٥ شهور وصل لمرحلة الرضا التام عن شكل جسمه، وقرر يكمل لبناء العضلات.',
        english: 'His fat stored in the lower body—he would lose from the upper body but not the lower, which was frustrating. Together we reached full satisfaction in 5 months, then continued to build muscle.'
      },
      transformation: {
        arabic: 'تحول جسدي ونفسي بفضل خطة مخصصة تناسب طبيعة جسمه وحياته – عشان كده النتيجة كانت سريعة وواقعية.',
        english: 'A physical and mental transformation through a plan tailored to his body type and lifestyle—fast and realistic results.'
      },
      achievements: {
        weightLoss: 'More than -20kg Fat (5 months)',
        pushUps: 'High work capacity',
        pullUps: 'Improved back strength',
        specialSkills: ['Targeted lower-body fat loss ✓', 'Body transformation ✓']
      },
      achievementQuote: {
        arabic: '… مهما كانت مشكلتك هتلاقي حلها عندنا لأننا بنبني البرامج حسب احتياج كل شخص وطبيعة جسمه وحياته.',
        english: 'Whatever your challenge, we build programs for your needs, body, and lifestyle—there’s a solution.'
      },
      inspirationalQuote: {
        arabic: '"الخطة الخاصة هي أسرع طريق للهدف"',
        english: '"A tailored plan is the fastest path to your goal"'
      }
    },
    { 
      id: 'lama', 
      name: 'Lama', 
      arabicName: 'لمى', 
      age: '22', 
      country: 'Sudan', 
      countryArabic: 'السودان',
      gradient: 'from-pink-50 to-rose-50', 
      progressWidth: 93, 
      tags: ['Crossfit', 'Gymnastics', 'Nutrition'], 
      summary: 'From aesthetic goals to a CrossFit athlete ready to compete',
      mainAchievement: '85kg ➜ 70kg (-15kg) | Competition-ready',
      motivationalQuote: '"خلي دايمًا اللي بيحركك إرادتك في التغيير مش الشغف"',
      motivationalQuoteArabic: '"Let your will to change drive you, not fleeting passion"',
      rating: 5,
      profileType: 'img',
      avatar: '/assets/images/lama-profile.png',
      initials: 'لم',
      profileColor: 'from-pink-500 to-rose-500',
      gender: 'female',
      beforeAfterImage: '/assets/images/لمى .PNG',
      journey: {
        arabic: 'بدئت كروس فيت مع كوتش نانسي، هدفها كان تخس وتغير شكل جسمها. مع الوقت اندمجت في التمرين وحبّت اللعبة، فاتابعت تغذية عشان تطور أسرع وتعمل نتايج أسرع.',
        english: 'She started CrossFit with Coach Nancy to lose weight and change her body. Over time she fell in love with the sport, added nutrition coaching, and accelerated results.'
      },
      transformation: {
        arabic: 'إرادتها بقت أقوى من أي انعدام شغف مؤقت بسبب الدراسة. التزامها بالتمرين والدايت ما توقفش، وطموحها بقى المنافسة.',
        english: 'Her willpower outlasted any temporary lack of passion from studying. She stayed consistent with training and diet—now set on competing.'
      },
      achievements: {
        weightLoss: '85kg ➜ 70kg (-15kg)',
        pushUps: 'CrossFit capacity',
        pullUps: 'Gymnastics basics',
        specialSkills: ['Competition ready ✓']
      },
      achievementQuote: {
        arabic: '… خليك دايمًا بتحركك إرادتك في التغيير، لأن الشغف بيتغير بانشغالك – الالتزام هو الدليل إنك ماشي في الطريق الصح.',
        english: 'Let willpower move you—passion fluctuates with life. Consistency proves you’re on the right track.'
      },
      inspirationalQuote: {
        arabic: '"الإرادة أقوى من الشغف"',
        english: '"Willpower beats passion"'
      }
    }
  ],
  
  // Slide 3 - Ibrahim, Shahab, Rana
  [
    { 
      id: 'ibrahim', 
      name: 'Ibrahim', 
      arabicName: 'إبراهيم', 
      age: '32', 
      country: 'Saudi Arabia', 
      countryArabic: 'السعودية',
      gradient: 'from-green-50 to-emerald-50', 
      progressWidth: 100, 
      tags: ['Bodybuilding', 'Nutrition'], 
      summary: '“Before and after” that he called a masterpiece',
      mainAchievement: 'Fat loss 8.8kg + Muscle gain',
      motivationalQuote: '"قبل وبعد تحفة فنية"',
      motivationalQuoteArabic: '"Before and after – a masterpiece"',
      rating: 5,
      profileType: 'img',
      avatar: '/assets/images/ibrahem-profile.png',
      initials: 'إب',
      profileColor: 'from-green-500 to-emerald-500',
      gender: 'male',
      beforeAfterImage: '/assets/images/ابراهيم مدخلي .PNG',
      journey: {
        arabic: 'ابراهيم طول فترة المتابعة مكانش بيعاني غير من حاجة واحدة: كل اللي يشوفه يسأله مين مدربك؟ نتايج سريعة وقوية بفضل الالتزام الكامل بالتفاصيل.',
        english: 'Throughout the process, people kept asking Ibrahim: who’s your coach? Rapid, strong results thanks to full commitment to every detail.'
      },
      transformation: {
        arabic: 'نزول دهون ٨.٨ كيلو مع زيادة كتلة العضل في نفس الوقت – التزام نادر بين لاعبي الجيم ونتيجة مبهره.',
        english: 'Lost 8.8kg of fat while gaining muscle—rare commitment among gym-goers and an impressive outcome.'
      },
      achievements: {
        weightLoss: 'Fat -8.8kg | Muscle gain',
        pushUps: 'High capacity',
        pullUps: 'Strong back',
        specialSkills: ['Masterpiece before/after ✓']
      },
      achievementQuote: {
        arabic: 'الرحلة طويلة.. بس بإصرارك والتزامك تقدر توصل.',
        english: 'The journey is long, but with determination and consistency, you’ll get there.'
      },
      inspirationalQuote: {
        arabic: '"التفاصيل بتصنع الفرق"',
        english: '"Details make the difference"'
      }
    },
    { 
      id: 'shahab', 
      name: 'Shahab', 
      arabicName: 'شهاب', 
      age: '28', 
      country: 'Egypt', 
      countryArabic: 'مصر',
      gradient: 'from-blue-50 to-indigo-50', 
      progressWidth: 100, 
      tags: ['Calisthenics', 'Home Training', 'Nutrition'], 
      summary: 'Home calisthenics to dream physique, no gym required',
      mainAchievement: '40 Pull-ups | 30 Free HSPU | First Planche',
      motivationalQuote: '"أنا عمري مهعمل الفورمة اللي أنا عايزها من غير منزل جيم"',
      motivationalQuoteArabic: '"I’ll never get the physique I want without a gym"',
      rating: 5,
      profileType: 'img',
      avatar: '/assets/images/shehab-profile.png',
      gender: 'male',
      initials: 'شه',
      profileColor: 'from-blue-500 to-indigo-500',
      beforeAfterImage: '/assets/images/شهاب بويكا .PNG',
      journey: {
        arabic: 'أول ما بدأ كان مقتنع إنه مش هيعمل الفورمة اللي عايزها إلا في الجيم. قررنا نثبت العكس من البيت – ومع التزامه بالرغم من ساعات الشغل الطويلة، النتائج سبقت التوقعات.',
        english: 'At first he believed only a gym could get him the physique he wanted. We proved the opposite from home—despite long work hours, his commitment delivered beyond expectations.'
      },
      transformation: {
        arabic: 'في ٤ شهور وصل لفورمة جسمه، وجاب ٤٠ عدة عقلة و٣٠ عدة ضغط وهو واقف على إيده، وحقق البلانش لأول مرة بعد سنين محاولة.',
        english: 'In 4 months he reached his desired physique, hit 40 pull-ups, 30 free handstand push-ups, and achieved his first planche after years of trying.'
      },
      achievements: {
        weightLoss: 'Home training mastery',
        pushUps: '30 Free HSPU',
        pullUps: '40 reps',
        specialSkills: ['Planche ✓', 'Advanced calisthenics ✓']
      },
      achievementQuote: {
        arabic: 'تحول شهاب في ٤ شهور بس غير وجهة نظر ناس كتير في تمرين البيت – الفورمة مش محتاجة أدوات، محتاجة التزام.',
        english: 'Shahab’s 4-month transformation changed minds about home training—the physique needs consistency more than equipment.'
      },
      inspirationalQuote: {
        arabic: '"الإصرار أهم من الأدوات"',
        english: '"Determination beats equipment"'
      }
    },
    // { 
    //   id: 'rana', 
    //   name: 'Rana', 
    //   arabicName: 'رنا', 
    //   age: '23', 
    //   country: 'Egypt', 
    //   countryArabic: 'مصر',
    //   gradient: 'from-purple-50 to-pink-50', 
    //   progressWidth: 100, 
    //   tags: ['Health Recovery', 'Multi-Sport'], 
    //   summary: 'Hard Worker | Multiple Classes Daily',
    //   mainAchievement: 'Insulin Resistance → Transformation',
    //   motivationalQuote: '"من مقاومة الأنسولين إلى تحول مذهل"',
    //   motivationalQuoteArabic: 'Overcome insulin resistance through dedication - multiple training classes daily!',
    //   rating: 5,
    //   profileType: 'img',
    //   avatar: '/assets/images/rana-profile.png', 
    //   initials: 'رن',
    //   profileColor: 'from-purple-500 to-pink-500',
    //   gender: 'female',
    //   beforeAfterImage: '/assets/images/رنا محمد .PNG',
    //   journey: {
    //     arabic: '"رنا بدأت رحلتها لعلاج مقاومة الأنسولين وتحسين صحتها العامة. من خلال الالتزام بعدة حصص تدريبية يومياً ونظام غذائي صحي، تمكنت من التغلب على هذه المشكلة الصحية."',
    //     english: '"Rana started her journey to treat insulin resistance and improve her overall health. Through commitment to multiple daily training sessions and a healthy diet, she overcame this health problem."'
    //   },
    //   transformation: {
    //     arabic: '"تحول رنا كان معجزة طبية ورياضية. تمكنت من عكس مقاومة الأنسولين وتحويل جسمها لآلة رياضية قوية. أصبحت مثالاً للشباب الذين يعانون من مشاكل صحية مشابهة."',
    //     english: '"Rana\'s transformation was a medical and athletic miracle. She managed to reverse insulin resistance and transform her body into a strong athletic machine. She became an example for young people suffering from similar health problems."'
    //   },
    //   achievements: {
    //     weightLoss: 'Insulin resistance reversal',
    //     pushUps: '45+ reps',
    //     pullUps: '8+ reps',
    //     specialSkills: ['Multiple sports mastery ✓', 'Health recovery ✓']
    //   },
    //   achievementQuote: {
    //     arabic: '"رنا أثبتت أن التمرين والنظام الغذائي الصحيح يمكن أن يعالج مشاكل صحية معقدة. جهدها ومثابرتها ألهمت الكثيرين للبدء في رحلة الشفاء."',
    //     english: '"Rana proved that exercise and proper diet can treat complex health problems. Her effort and perseverance inspired many to start their healing journey."'
    //   },
    //   inspirationalQuote: {
    //     arabic: '"الصحة الحقيقية تبدأ بقرار واحد والمثابرة عليه كل يوم"',
    //     english: '"True health starts with one decision and persevering with it every day!"'
    //   }
    // }
  ],
  
  // Slide 4 - Jalila, Al-Hosary, Ziad
  [
    // { 
    //   id: 'jalila', 
    //   name: 'Galila', 
    //   arabicName: 'جليلة', 
    //   age: '22', 
    //   country: 'Sudan', 
    //   countryArabic: 'السودان',
    //   gradient: 'from-amber-50 to-yellow-50', 
    //   progressWidth: 87, 
    //   tags: ['Crossfit', 'Nutrition'], 
    //   summary: 'Body recomposition inspiring her entire family',
    //   mainAchievement: 'Body Recomposition',
    //   motivationalQuote: '"قدرت تلهم جزء كبير من عيلتها بسبب الفرق الكبير جدا اللي حصلها في شكل جسمها واللي يعتبر واحد من افضل التحولات في اي بي ترينينج"',
    //   motivationalQuoteArabic: '"She was able to inspire a large part of her family because of the very big difference that happened to her body shape, which is considered one of the best transformations in IB Training"',
    //   rating: 5,
    //   profileType: 'img',
    //   avatar: '/assets/images/galila-profile.png', 
    //   initials: 'جل',
    //   profileColor: 'from-amber-500 to-yellow-500',
    //   gender: 'female',
    //   beforeAfterImage: '/assets/images/جليلة .PNG',
    //   journey: {
    //     arabic: '"جليلة بدأت رحلتها كمبتدئة تخاف من رفع الأوزان. من خلال التدريب التدريجي والدعم المستمر، تمكنت من بناء قوة جسدية ونفسية مذهلة وأصبحت رمزاً للقوة النسائية."',
    //     english: '"Jalila started her journey as a beginner afraid of lifting weights. Through progressive training and continuous support, she built amazing physical and mental strength and became a symbol of female empowerment."'
    //   },
    //   transformation: {
    //     arabic: '"تحول جليلة كان أكثر من مجرد تغيير جسدي، بل كان تحولاً في الثقة بالنفس والقوة الداخلية. أثبتت أن النساء يمكن أن يكن قويات ومتمكنات في أي عمر."',
    //     english: '"Jalila\'s transformation was more than just physical change, it was a transformation in self-confidence and inner strength. She proved that women can be strong and empowered at any age."'
    //   },
    //   achievements: {
    //     weightLoss: 'Body recomposition',
    //     pushUps: '30+ reps',
    //     pullUps: '5+ reps',
    //     specialSkills: ['Family inspiration ✓', 'Best transformations ✓']
    //   },
    //   achievementQuote: {
    //     arabic: '"جليلة أثبتت أن القوة الحقيقية تأتي من الداخل وتنعكس على الخارج. تحولها ألهم العديد من النساء للبدء في رحلة تمكين أنفسهن."',
    //     english: '"Jalila proved that true strength comes from within and reflects outward. Her transformation inspired many women to start their journey of self-empowerment."'
    //   },
    //   inspirationalQuote: {
    //     arabic: '"عندما تؤمن المرأة بقوتها، لا يوجد حدود لما يمكنها تحقيقه"',
    //     english: '"When a woman believes in her strength, there are no limits to what she can achieve!"'
    //   }
    // },
    { 
      id: 'alhosary', 
      name: 'Elhossary', 
      arabicName: 'الحصري', 
      age: '25', 
      country: 'Egypt', 
      countryArabic: 'مصر',
      gradient: 'from-teal-50 to-green-50', 
      progressWidth: 92, 
      tags: ['Home Training', 'Calisthenics', 'Nutrition'], 
      summary: 'From gym-goer to home calisthenics with ideal physique',
      mainAchievement: 'Hypertrophy + Endurance + Bodyweight mastery',
      motivationalQuote: '"سواء من البيت أو الجيم المهم خطة مناسبة والتزام"',
      motivationalQuoteArabic: '"Home or gym—what matters is a tailored plan and consistency"',
      rating: 5,
      profileType: 'img', 
      initials: 'img',
      avatar: '/assets/images/hossary-profile.png',
      profileColor: 'from-teal-500 to-green-500',
      gender: 'male',
      beforeAfterImage: undefined,
      journey: {
        arabic: 'لاعب جيم سابقاً، ومع الشغل مابقاش عنده وقت للجيم. قرر يبدأ مع كوتش إبراهيم تدريب من البيت (كاليستنكس) عشان يحافظ على صحته، واتفاجئ إن تمرين البيت قدر يبنيله فورمة الجسم اللي عايزها وكمان طاقته ونَفَسه بقى أحسن.',
        english: 'A former gym-goer who ran out of time for the gym due to work. He started home calisthenics with Coach Ibrahim to stay healthy—and was surprised home training built the physique he wanted while boosting endurance and breathing.'
      },
      transformation: {
        arabic: 'تحول ملحوظ في الضخامة العضلية، قوة التحمل وتحسن النفس، وأداء تمارين وزن الجسم بسهولة. المتابعة الغذائية سرعت النتائج ووصل للفورمة خلال ٤ شهور فقط.',
        english: 'Noticeable hypertrophy, endurance and breathing gains, and easy bodyweight performance. Nutrition follow-up accelerated results—reached his physique in just 4 months.'
      },
      achievements: {
        weightLoss: 'Body recomposition (home training)',
        pushUps: 'High endurance capacity',
        pullUps: 'Solid pulling strength',
        specialSkills: ['Bodyweight mastery ✓', 'Endurance & breathing ✓']
      },
      achievementQuote: {
        arabic: '… سواء من البيت أو الجيم، وجود كوتش فاهم يسمعك ويبني لك أنظمة مناسبة ويشجعك كفيل يوصلك لهدفك.',
        english: 'Home or gym—having a coach who listens, tailors your plan, and supports you will get you to your goal.'
      },
      inspirationalQuote: {
        arabic: '"الخطة المناسبة + التزام = فورمة"',
        english: '"Tailored plan + consistency = physique"'
      }
    },
    { 
      id: 'ziad', 
      name: 'Ziad', 
      arabicName: 'زياد', 
      age: '20', 
      country: 'Egypt', 
      countryArabic: 'مصر',
      gradient: 'from-red-50 to-pink-50', 
      progressWidth: 89, 
      tags: ['Calisthenics', 'Nutrition'], 
  summary: 'Reached ideal body shape and learned to self-coach',
  mainAchievement: 'Body Recomposition | Self-training',
  motivationalQuote: '"حسيت بفرق كبير في نفسيتي وطاقة اليوم من الدايت"',
  motivationalQuoteArabic: '"Felt a huge difference in my mood and daily energy from the diet"',
      rating: 5,
      profileType: 'img', 
      initials: 'زي',
      profileColor: 'from-red-500 to-pink-500',
      beforeAfterImage: '/assets/images/زياد .PNG',
      avatar: '/assets/images/ziad-profile.png',
      gender: 'male',
      journey: {
        arabic: '"والله يا كوتش بدون مبالغة ربنا يباركلك، حسيت بفرق كبير في نفسيتي عشان مكنتش مهتم بأكلي. لما عملتلي الدايت بقيت حاسس بباور طول اليوم دا غير فرق جسمي وعداتي في العقلة والضغط والمتوازي والجري. دلوقتي بتمرن على مهارات اللعبة: جبت المصل أب ومكمل لحد ما أتعلم الفرونت والبلانش."',
        english: 'Coach, honestly, the diet gave me consistent energy and changed my mood. My physique and reps in pull-ups, push-ups, dips, and running improved. Now I’m training calisthenics skills: I got the muscle-up and I’m pursuing front lever and planche.'
      },
      transformation: {
        arabic: 'بسبب المتابعة المستمرة والرد على كل استفساراته، بقى فاهم طبيعة جسمه وعارف المناسب ليه—وده خلاه قادر يكمل لوحده.',
        english: 'With ongoing follow-ups and answers to every question, he learned his body and what fits him—now he can continue by himself.'
      },
      achievements: {
        weightLoss: 'Body recomposition success',
        pushUps: 'Higher reps and endurance',
        pullUps: '22+ reps',
        specialSkills: ['Muscle-up ✓', 'Self-training mastery ✓', 'Home training ✓']
      },
      achievementQuote: {
        arabic: 'مع الوقت هتتعلم تبقى فاهم جسمك وتعرف المناسب ليك—حتى لو مش هدفك الاحتراف تقدر تمرن نفسك وتظبط أكلك بنفسك.',
        english: 'Over time you’ll learn your body and what suits you—even if you don’t want to go pro, you’ll be able to train and manage your nutrition yourself.'
      },
      inspirationalQuote: {
        arabic: '"التعلم بالممارسة + متابعة = استقلالية"',
        english: '"Practice + follow-up = independence"'
      }
    }
  ],
  
  // Slide 5 - Azza, Nora, Plus one more
  [
    { 
      id: 'azza', 
      name: 'Azza', 
      arabicName: 'عزة', 
      age: '56', 
      country: 'Egypt', 
      countryArabic: 'مصر',
      gradient: 'from-violet-50 to-purple-50', 
      progressWidth: 94, 
      tags: ['Fat Loss', 'Cross Training', 'Calisthenics', 'Nutrition'], 
      summary: 'Proving age is just a number with calisthenics',
      mainAchievement: '-11kg | 30 Push-ups | 2 Pull-ups',
      motivationalQuote: '"هتفهم قد ايه الرياضة هتصغرك في السن"',
      motivationalQuoteArabic: '"You’ll see how sport literally makes you younger"',
      rating: 5,
      profileType: 'img',
      avatar: '/assets/images/azza-profile.png', 
      initials: 'عز',
      profileColor: 'from-violet-500 to-purple-500',
      gender: 'female',
      beforeAfterImage: '/assets/images/عزة.PNG',
      journey: {
        arabic: 'عزة بدأت بهدف الخسسان بس، ومكنتش متوقعة انها تعمل عقلة يومًا. بعد ما خسّت ١١ كيلو قررت تكمل في الكاليستنكس عشان تكتشف جسمها يقدر يوصل لفين. اتحداك تشوف حد في سنها يجيب ٣٠ عدة ضغط وعدتين عقلة متواصل.',
        english: 'Azza started wanting only to lose weight and never expected to do a pull-up. After losing 11kg she chose calisthenics to see how far she could go. It’s rare to see her age hitting 30 push-ups and 2 consecutive pull-ups.'
      },
      transformation: {
        arabic: 'الرياضة صغّرتها في السن—السن مجرد رقم، ومدام عقلك صدق الهدف جسمك هيحققه.',
        english: 'Sport made her feel younger—age is just a number, and when the mind believes, the body achieves.'
      },
      achievements: {
        weightLoss: '-11kg',
        pushUps: '30 reps',
        pullUps: '2 reps',
        specialSkills: ['Age-defying calisthenics ✓']
      },
      achievementQuote: {
        arabic: 'كل اللي هتحتاجه كوتش يرسم الطريق ونتايج تحمسك تكمل وحد يشجعك يلتزم ويتابعك دايمًا.',
        english: 'You need a coach to map the way, results that motivate you, and someone who keeps you accountable.'
      },
      inspirationalQuote: {
        arabic: '"السن مجرد رقم"',
        english: '"Age is just a number"'
      }
    },
    { 
      id: 'omar', 
      name: 'Omar Elhosary', 
      arabicName: 'عمر الحصري', 
      age: '33.5', 
      country: 'Egypt', 
      countryArabic: 'مصر',
      gradient: 'from-emerald-50 to-green-50', 
      progressWidth: 100, 
      tags: ['Nutrition', 'Crossfit', 'Calisthenics', 'Gym'], 
      summary: 'From hobbyist to ambitious CrossFit & Calisthenics athlete',
      mainAchievement: '+15kg (72 ➜ 87kg) at ~7% BF | 25 Pull-ups | 10 MU | +40kg x5 pull-ups | DL 215kg | SQ 180kg',
      motivationalQuote: '"من ممارس لهواية" ➜ "لاعب جاهز للمنافسة"',
      motivationalQuoteArabic: '"From casual practitioner to a competitor-ready athlete"',
      rating: 5,
      profileType: 'img', 
      avatar: '/assets/images/omar-elhossary-profile.png',
      profileColor: 'from-emerald-500 to-green-500',
      gender: 'male',
      beforeAfterImage: '/assets/images/omar-elhossary.png',
      journey: {
        arabic: 'عمر بدأ رياضة بعد الـ٣٠ وكان بيتمرن جيم وكروس فت قبل ما يبدأ معانا. هدفه يحسن شكل جسمه وصحته—خصوصًا لأنه كان بيشتكي من ألم أسفل الضهر والركبة—لكن النتائج كانت بطيئة وده خلاه غير منتظم. أول ما بدأ معانا حطينا أهداف واضحة وخطط تخدمها وشجعناه يستمر. مع كل إنجاز كان الطموح والثقة بيزيدوا لحد ما وصل للنجاح ده ولسه مستمر.',
        english: 'Omar started training after 30, doing gym and CrossFit before joining us. He wanted to improve body shape and health (with lower back and knee pain), but progress was slow. We set clear goals, built plans for them, and encouraged consistency. Each achievement grew his ambition and confidence—he reached this success and keeps going.'
      },
      transformation: {
        arabic: 'تحول من موظف شاب بيحاول يحسن صحته إلى لاعب كروس فت وكاليستنكس نشيط وطموح وجاهز للمنافسة.',
        english: 'He transformed from an employee trying to get healthier into an active, ambitious CrossFit and calisthenics athlete ready to compete.'
      },
      achievements: {
        weightLoss: '+15kg gain (72 ➜ 87kg) at ~7% BF',
        pushUps: undefined,
        pullUps: '25 reps | +40kg x5',
        specialSkills: ['10 Muscle-ups ✓', 'Deadlift 215kg ✓', 'Squat 180kg ✓']
      },
      achievementQuote: {
        arabic: 'من عدتين عقلة بالعافية لأداء ممتاز: ٢٥ عدة عقلة، ١٠ ماصل أب، وخمس عدات عقلة بوزن ٤٠ كيلو.',
        english: 'From barely 2 pull-ups to excellent performance: 25 pull-ups, 10 muscle-ups, and 5 reps of +40kg weighted pull-ups.'
      },
      inspirationalQuote: {
        arabic: '"مهما بدأت متأخر أو فشلت قبل كده—مع الخطة الصح والفريق الصح هتوصل لأهداف ما كنتش تتخيلها"',
        english: '"No matter how late you start or how much you failed— with the right plan and the right team, you’ll reach goals you never imagined"'
      }
    }
  ]
];
