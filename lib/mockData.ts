export interface Server {
  id: string;
  name: string;
  url: string;
}



export interface Anime {
  id: string;
  title: string;
  poster: string;
  coverImage: string;
  description: string;
  genres: string[];
  totalEpisodes: number;
  episodes:Server[];
}

export const mockAnimeData: Anime[] = [
  {
    id: '1168',
    title: 'Naruto',
    poster: 'https://w1.anime4up.rest/wp-content/uploads/2020/05/SFDGJ_004.png',
    coverImage: 'https://photos.tf1.fr/1920/1080/merged-cover-showpage-naruto-cf3aba-fcabf4-838baa-0@1x.jpg',
    description: 'القصة تتحدث عن النينجا المراهق ناروتو أوزوماكي الذي وجد نفسه منبوذًا من قبل سكان قريته بسبب الكيوبي الذي بداخله، لذلك وضع نصب عينيه أن ينال لقب الهوكاجي وهو اللقب الذي يُطلق على قائد القرية وأقوى نينجا فيها، لينال احترام واعتراف الجميع.',
    genres: ['قوة خارقة', 'مغامرات', 'فنون قتالية', 'كوميدي','أكشن'],
    totalEpisodes: 220,
    episodes : [],
  },
  {
    id: '1348',
    title: 'Death Note',
    poster: 'https://w1.anime4up.rest/wp-content/uploads/2019/06/Ashampoo_Snap_2019.06.24_18h40m52s_003_.png',
    coverImage: 'https://a.storyblok.com/f/178900/640x414/96bdb54ffa/9ad8556129a7f0a7ed37a3f0a5614b191579792149_full.jpg/m/640x414',
    description: '(لايت ياغامي) طالب موهوب و عبقري , لكنه يشعر بالملل و الرتابة من حياته التي يعيشها , في أحد الأيام عثر على دفتر مذكرات معنون بــ  “مذكرة الموت ” كان قد سقط من عالم الشينيجامي و تقول التعليمات المدونة على المذكرة بأنه بمجرد كتابة اسم الشخص و طريقة الوفاة فإن حادثة الموت ستقع وفق التفاصيل التي يدونها على الصفحات؟!.',
    genres: [
  "غموض",
  "بوليسي",
  "نفسي",
  "خارق للطبيعة",
  "إثارة",
  "شياطين"
],
    totalEpisodes: 37,
    episodes : [],
  },
  {
    id: '1150',
    title: 'Jujutsu Kaisen',
    poster: 'https://w1.anime4up.rest/wp-content/uploads/2020/09/54F52J524JLKSDF548.png',
    coverImage: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/01/mixcollage-05-jan-2025-09-55-am-9793.jpg?q=49&fit=crop&w=825&dpr=2',
    description: 'القصة تتحدث عن إيتادوري يوجي و هو فتى عبقري ذو بنية جسدية قوية ويتسكع مع نادي الظواهر الخارقة في المدرسة. ذات يوم تتغير حياة يوجي بعد وفاة جده ومقابلته لميغومي فوشيغورو الذي أخبره بأنه يمتلك غرضًا ملعونًا، عندها تتوالى المصائب على يوجي.',
    genres: [
  "أكشن",
  "رعب",
  "شياطين",
  "خارق للطبيعة",
  "مدرسي",
  "شونين"
],
    totalEpisodes: 24,
    episodes : [],
   
  },
  {
    id: '916',
    title: 'Fullmetal Alchemist: Brotherhood',
    poster: 'https://w1.anime4up.rest/wp-content/uploads/2022/03/Ashampoo_Snap_2022.03.15_13h00m29s_002_.png',
    coverImage: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2025/04/demon-slayer-and-fullmetal-alchemist-cover-image.jpg?w=1200&h=675&fit=crop',
    description: ' ألفونس و أدوارد أمهما إثر مرض عضال.. عندها يقومان بإستخدام قوة الخيمياء المحرمة لإرجاع روح أمهما. تفشل تلك العملية حيث يفقد الأخ الأكبر إدوارد رجله اليسرى بينما يتخلى أخوه الأصغر عن روحه كي يقوم بحماية أخوه كنتيجة حتمية لإستخدامها شيئاً محرماً. يُضحي إدوارد بيده اليمنى حتى لا ينتقل أخوه لعالم لا عودة منه ويقسم حينها بأن يحصل على حجر الفلاسفة حتى يستطيعا العودة لسابق عهدهما ويحافظ على روح أخيه حتى لو أضطر لأن يكون مجرد حالة خيميائه تقوم بإستخدامها الأبحاث العسكرية.',
    genres: [
  "أكشن",
  "عسكري",
  "مغامرات",
  "كوميدي",
  "دراما",
  "سحر",
  "خيال",
  "شونين"
],
    totalEpisodes: 64,
    episodes : [],
  },
  {
    id: '2',
    title: 'Aishiteru Game wo Owarasetai',
    poster: 'https://w1.anime4up.rest/wp-content/uploads/2026/04/Ashampoo_Snap_2026.04.14_12h20m42s_008_.png',
    coverImage: 'https://nami.news/wordpress/wp-content/uploads/2025/06/Aishiteru-Game-o-Owarasetai-Manga-cover-1-1-e1749734501641.jpg',
    description:"قصة انمي Aishiteru Game wo Owarasetai تدور في الصف السادس، ابتكر الصديقان منذ الطفولة يوكيا أساغي وميكو ساكورا لعبة هدفها إحراج الآخر، حيث يتناوبان على قول “أحبك”. وبعد أربع سنوات، وحتى مع دخولهما المرحلة الثانوية، لا يزالان مستمرين في هذه اللعبة، محاولين التفوق على بعضهما والفوز. لكن مع مرور الوقت، تبدأ مشاعر حقيقية بالنمو في قلبيهما، وتكتسب عبارة “أحبك” معنى أعمق من مجرد لعبة. ومع كل يوم، تزداد رغبتهما في أن يصبحا أكثر من مجرد صديقين… ومع ذلك، يتردد كلاهما في اتخاذ الخطوة الأولى، خوفًا مما قد يحدث عندما تنتهي اللعبة أخيرًا.",
    genres: [
  "مدرسي",
  "رومانسي",
  "كوميدي"
],
    totalEpisodes: 12,
    episodes : [],
  },
  {
    id: '1458',
    title: 'Black Clover',
    poster: 'https://w1.anime4up.rest/wp-content/uploads/2021/01/45DFG44FHJ52SFG8FSDG.png',
    coverImage: 'https://a.storyblok.com/f/178900/2500x1406/20c0029781/black-clover-new.png/m/1200x0/filters:quality(95)format(webp)',
    description:"قصة انمي Black Clover تدور حول أستا ويونو الذين تم التخلي عنهما معا في نفس الكنيسة وكانا لا ينفصلان منذ ذلك الحين. وباعتبارهم أطفالا، وعدوا بأنهم سيتنافسون مع بعضهم البعض لمعرفة من سيصبح الإمبراطور المقبل ماجوس. ومع ذلك، عندما كبرا، أصبحت بعض الاختلافات بينهما واضحة. كان يونو عبقريا مع السحر، مع قوة وسيطرة مذهلين، في حين أن أستا لا يمكنه استخدام السحر على الإطلاق، وحاول تعويض عن نقصه من خلال التدريب جسديا.ومع انطلاق بطولة “جريمويري” ستبدأ الرحلة المليئة بالمغامرات والأكشن.",
    genres: [
  "شونين",
  " فنتازيا",
  "سحر","كوميدي",'أكشن'
],
    totalEpisodes: 23,
    episodes : [],
  }
];
