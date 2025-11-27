// app/i18n/LanguageContext.tsx
"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "uz";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations.en) => string;
}

const translations = {
  en: {
    // Hero
    welcomeToFuture: "Welcome to Future",
    createTomorrow: "Create Tomorrow",
    withAI: "With AI",
    heroDescription: "Build transformative AI solutions powered by cutting-edge technology. Compete for 500,000,000 UZS and showcase your innovation to industry experts.",
    startBuilding: "Start Building",
    learnMore: "Learn More",
    prizePool: "Prize Pool",
    expectedTeams: "Expected",
    eventDate: "Event Date",
    prizeAmount: "500M UZS",
    teamsCount: "50+ Teams",
    eventMonth: "Dec 2025",

    // Footer
    footerTagline: "Building tomorrow's AI solutions today.",
    quickLinks: "Quick Links",
    about: "About",
    participants: "Participants",
    resources: "Resources",
    documentation: "Documentation",
    tutorials: "Tutorials",
    apiDocs: "API Docs",
    support: "Support",
    contact: "Contact",
    email: "Email",
    phone: "Phone",
    allRightsReserved: "© 2025 AI500 Hackathon. All rights reserved.",

    // WhyUs
    whyUsTitle: "Why We Are the Ones to Solve This",
    whyUsSubtitle: "No foreign team and no fresh graduate can understand and solve this problem faster or more correctly than we can.",
    pdpUniversity: "PDP University and PDP Academy",
    pdpUniversityDesc: "We are both graduates of PDP Academy and current students of PDP University – trained exactly on the technologies and problems of the Uzbek market.",
    localExpertise: "Deep Local Platform Expertise",
    localExpertiseDesc: "For more than one year we have been deeply studying and integrating local platforms: Didox, 1C, Payme, Uzcard, soliq.uz, my.gov.uz – we know how real data looks in Uzbekistan.",
    provenTrack: "Proven Track Record",
    provenTrackDesc: "We have already built and delivered custom tech solutions for Uzbek companies and personally faced the same client-loss and data-compliance problems that businesses complain about every day.",
    culturalUnderstanding: "Local & Cultural Understanding",
    culturalUnderstandingDesc: "We live in Tashkent, speak the same language as our clients (literally and culturally), and understand salary days, Ramadan patterns, and why a client from Ferghana cancels differently.",
    longTermPartnership: "Long-term Partnership",
    longTermPartnershipDesc: "Two friends building together since academy days: one masters AI and local infrastructure, the other knows business processes and how Uzbek directors make decisions.",
    juryQuote: '"Perfect length, zero exaggeration, and sounds exactly like two serious PDP guys the Agrobank jury will trust."',

    // Contact
    getInTouch: "Get in Touch",
    contactSubtitle: "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    name: "Name",
    yourName: "Your name",
    yourEmail: "your@email.com",
    message: "Message",
    yourMessage: "Your message...",
    sendMessage: "Send Message",
    messageSent: "Message Sent!",
    thankYou: "Thank you! We'll get back to you soon.",
    followUs: "Follow Us",
    location: "Location",
    tashkentUzbekistan: "Tashkent, Uzbekistan",

    // HowWeSolve
    technicalArchitecture: "Technical Architecture",
    howWeSolveIt: "How We Solve It",
    howWeSolveSubtitle: "Short, one-screen version – updated with our real tech choices",
    acceptAnyData: "We accept ANY data format",
    acceptAnyDataDesc: "1C, Didox, Payme, Excel, Google Sheets, your own database – our system automatically reads and unifies everything for perfect user experience.",
    fullyLocal: "100% local & compliant",
    fullyLocalDesc: "All data stays in Uzbekistan (Tashkent data centers) – fully ZRU-547 ready from day one.",
    ownAIModel: "We train our own AI model",
    ownAIModelDesc: "Fine-tuned open-source models (Llama-3 8B/70B, Mistral 7B, Gemma-2) on real Uzbek transaction + message data with NVIDIA A100/H100 clusters in Tashkent.",
    unbreakableBackend: "Backend that never breaks",
    unbreakableBackendDesc: "Java Spring Boot API + PostgreSQL – rock-solid, works with every Uzbek system, handles millions of rows without problems.",
    managerScreen: "Simple morning screen for the manager",
    managerScreenDesc: "Beautiful graphs (churn risk, money saved, best actions) with 'Do these 5 things today' list – one click to send discount, message, or installment.",
    techStackFlow: "Our Tech Stack Flow",
    techStackDesc: "Everything built for speed, scale, and Uzbekistan reality.",
    liveDemoReady: "Live Demo Ready",
    liveMVPTitle: "Live MVP with real graphs and predictions – ready to show on 13 December",
    liveMVPDesc: "See our working product with real data processing, AI predictions, and beautiful dashboards – exactly what Uzbek businesses need to stop client churn.",
    viewLiveDemo: "View Live Demo",
    integrationGuide: "Integration Guide",
    rockSolidBackend: "Rock-Solid Backend",
    rockSolidBackendDesc: "Java Spring Boot + PostgreSQL handling millions of transactions",
    localAITraining: "Local AI Training",
    localAITrainingDesc: "NVIDIA A100/H100 clusters in Tashkent data centers",
    fullyCompliant: "100% Compliant",
    fullyCompliantDesc: "ZRU-547 ready, all data stays in Uzbekistan",
    localGPUTraining: "Local GPU Training",

    // ProblemSolution
    innovationChallenge: "Innovation Challenge",
    localAIStopsChurn: "Local AI that stops client churn and grows revenue in Uzbekistan",
    dataSovereignty: "Solving Uzbekistan's data sovereignty challenge with 100% local AI infrastructure",
    theProblem: "The Problem",
    ourSolution: "Our Solution",
    problemSummary: "Companies are losing revenue due to data sovereignty laws and limited human capacity",
    solutionSummary: "With us, companies keep more clients and earn more from the ones they already have.",
    juryNote: "Short, true today, and exactly what the Agrobank jury wants to hear.",

    // Roadmap
    developmentJourney: "Development Journey",
    ourRoadmap: "Our Roadmap",
    currentStage: "Current Stage: Prototype / Preparing MVP",
    asOfNov2025: "As of 27 November 2025",
    roadmapDesc: "We are not just talking about the idea – we are already building it right now. See you on 13 December with a working product.",
    inProgress: "In Progress",
    transformRetention: "Ready to Transform Customer Retention in Uzbekistan?",
    followJourney: "Follow Our Journey",
    saveTheDate: "Save the Date: Dec 13",

    // Roadmap timeline items
    finalIdeaSubmission: "Final idea preparation & submission",
    activeMVPDevelopment: "Active MVP development",
    officialPresentation: "Official AI500 Hackathon presentation",
    publicLaunch: "Public launch (if we win)",
    fiftyClients: "50 paying SMB clients",
    certificationPilot: "Certification + first bank pilot",
    twoHundredClients: "200+ clients across Uzbekistan",
    marketLeader: "Leader in customer-retention AI",

    // TeamSection
    mindsBehind: "The Minds Behind Auralife",
    meetOurTeam: "Meet Our Team",
    teamSubtitle: "Two passionate developers united by a vision to transform Uzbekistan's AI landscape",
    unitedByInnovation: "United by Innovation",
    teamVision: "Together, we're building the future of AI in Uzbekistan - combining technical excellence with deep understanding of local challenges to create solutions that truly make a difference.",
  },
  uz: {
    // Hero
    welcomeToFuture: "Kelajakka xush kelibsiz",
    createTomorrow: "Ertangi kunni yarating",
    withAI: "Sun'iy intellekt bilan",
    heroDescription: "Eng zamonaviy texnologiyalar bilan kuchaytirilgan o‘zgartiruvchi AI yechimlar yarating. 500 000 000 so‘m mukofot uchun kurashing va innovatsiyalaringizni sanoat mutaxassislariga namoyish eting.",
    startBuilding: "Boshlash",
    learnMore: "Ko‘proq bilish",
    prizePool: "Mukofot jamg‘armasi",
    expectedTeams: "Kutilmoqda",
    eventDate: "Tadbir sanasi",
    prizeAmount: "500 mln so‘m",
    teamsCount: "50+ jamoa",
    eventMonth: "Dekabr 2025",

    // Footer
    footerTagline: "Bugun ertangi kunning AI yechimlarini qurmoqdamiz.",
    quickLinks: "Tezkor havolalar",
    about: "Biz haqimizda",
    participants: "Ishtirokchilar",
    resources: "Resurslar",
    documentation: "Hujjatlar",
    tutorials: "Qo‘llanmalar",
    apiDocs: "API hujjatlari",
    support: "Qo‘llab-quvvatlash",
    contact: "Aloqa",
    email: "Elektron pochta",
    phone: "Telefon",
    allRightsReserved: "© 2025 AI500 Hackathon. Barcha huquqlar himoyalangan.",

    // WhyUs
    whyUsTitle: "Nega bu muammoni biz hal qilishimiz kerak",
    whyUsSubtitle: "Hech qanday xorijiy jamoa va yangi bitiruvchi bizdan tezroq va to‘g‘riroq tushuna olmaydi va hal qila olmaydi.",
    pdpUniversity: "PDP Universiteti va PDP Akademiyasi",
    pdpUniversityDesc: "Biz PDP Akademiyasi bitiruvchilari va PDP Universitetining hozirgi talabalarimiz – O‘zbek bozoridagi texnologiyalar va muammolar bo‘yicha to‘liq tayyorlanganmiz.",
    localExpertise: "Mahalliy platformalar bo‘yicha chuqur tajriba",
    localExpertiseDesc: "Bir yildan ko‘proq vaqt davomida Didox, 1C, Payme, Uzcard, soliq.uz, my.gov.uz kabi mahalliy platformalarni chuqur o‘rganib, integratsiya qildik – O‘zbekistonda haqiqiy ma’lumotlar qanday ko‘rinishini bilamiz.",
    provenTrack: "Ishonchli tajriba",
    provenTrackDesc: "O‘zbek kompaniyalari uchun maxsus texnologik yechimlar yaratdik va mijoz yo‘qotish va ma’lumotlar muvofiqligi muammolarini shaxsan boshdan kechirdik.",
    culturalUnderstanding: "Mahalliy va madaniy tushuncha",
    culturalUnderstandingDesc: "Toshkentda yashaymiz, mijozlar bilan bir tilda gaplashamiz (tom ma’noda va madaniy jihatdan), maosh kunlari, Ramazon va Navro‘z odatlarini, Farg‘onalik mijozning nima uchun boshqacha bekor qilishini tushunamiz.",
    longTermPartnership: "Uzoq muddatli hamkorlik",
    longTermPartnershipDesc: "Akademiya davridan beri birga qurayotgan ikki do‘st: biri AI va mahalliy infratuzilmani, ikkinchisi biznes jarayonlari va o‘zbek direktorlari qanday qaror qabul qilishini biladi.",
    juryQuote: '"Mukammal uzunlik, hech qanday mubolag‘a yo‘q, va aynan Agrobank hakamlar hay’ati ishonadigan ikki jiddiy PDP yigitlari kabi eshitiladi."',

    // Contact
    getInTouch: "Bog‘lanish",
    contactSubtitle: "Savollaringiz bormi? Sizdan xabar kutamiz. Xabar yuboring – imkon qadar tez javob beramiz.",
    name: "Ism",
    yourName: "Ismingiz",
    yourEmail: "emailingiz@example.com",
    message: "Xabar",
    yourMessage: "Xabaringiz...",
    sendMessage: "Xabar yuborish",
    messageSent: "Xabar yuborildi!",
    thankYou: "Rahmat! Tez orada javob beramiz.",
    followUs: "Bizni kuzating",
    location: "Manzil",
    tashkentUzbekistan: "Toshkent, O‘zbekiston",

    // HowWeSolve
    technicalArchitecture: "Texnik arxitektura",
    howWeSolveIt: "Bu muammoni qanday hal qilamiz",
    howWeSolveSubtitle: "Qisqa, bir ekranli versiya – haqiqiy texnologik tanlovlarimiz bilan yangilangan",
    acceptAnyData: "HAR QANDAY ma’lumot formatini qabul qilamiz",
    acceptAnyDataDesc: "1C, Didox, Payme, Excel, Google Sheets, o‘z bazangiz – tizimimiz hammasini avtomatik o‘qiydi va birlashtiradi.",
    fullyLocal: "100% mahalliy va qonuniy",
    fullyLocalDesc: "Barcha ma’lumotlar O‘zbekistonda (Toshkent markazlari) saqlanadi – birinchi kundan ZRU-547 talablariga to‘liq mos.",
    ownAIModel: "O‘z AI modelimizni o‘qitamiz",
    ownAIModelDesc: "Llama-3 8B/70B, Mistral 7B, Gemma-2 kabi ochiq modellarini haqiqiy o‘zbek tranzaksiyalari va xabarlarida Toshkentdagi NVIDIA A100/H100 klasterlarida moslashtiramiz.",
    unbreakableBackend: "Hech qachon buzilmaydigan backend",
    unbreakableBackendDesc: "Java Spring Boot API + PostgreSQL – temirdek mustahkam, har qanday o‘zbek tizimi bilan ishlaydi, millionlab qatorlarni muammosiz boshqaradi.",
    managerScreen: "Manager uchun oddiy ertalab ekrani",
    managerScreenDesc: "Chiroyli grafiklari (chiqib ketish xavfi, tejab qolgan pul, eng yaxshi harakatlar) va “Bugun shu 5 ishni qiling” ro‘yxati – chegirma, xabar yoki muddatli to‘lovni bir marta bosishda yuborish.",
    techStackFlow: "Bizning texnologik stekimiz",
    techStackDesc: "Tezlik, masshtab va O‘zbekiston haqiqati uchun qurilgan.",
    liveDemoReady: "Jonli Demo Tayyor",
    liveMVPTitle: "Haqiqiy grafiklari va bashoratlari bilan jonli MVP – 13 dekabrda ko‘rsatishga tayyor",
    liveMVPDesc: "Haqiqiy ma’lumotlar bilan ishlaydigan, AI bashoratlari va chiroyli dashboardlari bilan mahsulotimizni ko‘ring – aynan o‘zbek bizneslari mijoz yo‘qotmaslik uchun kerak bo‘lgan narsa.",
    viewLiveDemo: "Jonli Demoni ko‘rish",
    integrationGuide: "Integratsiya bo‘yicha qo‘llanma",
    rockSolidBackend: "Temirdek mustahkam backend",
    rockSolidBackendDesc: "Java Spring Boot + PostgreSQL millionlab tranzaksiyalarni boshqaradi",
    localAITraining: "Mahalliy AI o‘qitish",
    localAITrainingDesc: "Toshkentdagi NVIDIA A100/H100 klasterlari",
    fullyCompliant: "100% qonuniy",
    fullyCompliantDesc: "ZRU-547 talablariga to‘liq mos, barcha ma’lumotlar O‘zbekistonda qoladi",
    localGPUTraining: "Mahalliy GPU o‘qitish",

    // ProblemSolution
    innovationChallenge: "Innovatsion chaqiriq",
    localAIStopsChurn: "Mijoz yo‘qotishni to‘xtatadigan va daromadni oshiradigan mahalliy AI",
    dataSovereignty: "O‘zbekistonning ma’lumotlar suvereniteti muammosini 100% mahalliy AI bilan hal qilish",
    theProblem: "Muammo",
    ourSolution: "Bizning yechimimiz",
    problemSummary: "Ma’lumotlar suvereniteti qonunlari va cheklangan inson resurslari tufayli kompaniyalar daromad yo‘qotmoqda",
    solutionSummary: "Biz bilan kompaniyalar ko‘proq mijoz saqlab qoladi va mavjud mijozlardan ko‘proq daromad oladi.",
    juryNote: "Qisqa, bugun haqiqat, va aynan Agrobank hakamlar hay’ati eshitishni xohlaydigan narsa.",

    // Roadmap
    developmentJourney: "Rivojlanish yo‘li",
    ourRoadmap: "Bizning yo‘l xaritasi",
    currentStage: "Hozirgi bosqich: Prototip / MVP tayyorlash",
    asOfNov2025: "2025-yil 27-noyabr holatiga ko‘ra",
    roadmapDesc: "Biz faqat g‘oya haqida gapirmayapmiz – hozir shu mahsulotni qurmoqdamiz. 13-dekabrda ishlaydigan mahsulot bilan uchrashamiz.",
    inProgress: "Jarayonda",
    transformRetention: "O‘zbekistonda mijozlar saqlab qolishni o‘zgartirishga tayyormisiz?",
    followJourney: "Yo‘limizni kuzatib boring",
    saveTheDate: "Sanani belgilang: 13-dekabr",

    // Roadmap timeline items
    finalIdeaSubmission: "Yakuniy g‘oya tayyorlash va topshirish",
    activeMVPDevelopment: "Faol MVP ishlab chiqish",
    officialPresentation: "Rasmiy AI500 Hackathon taqdimoti",
    publicLaunch: "Ommaviy ishga tushirish (agar g‘olib bo‘lsak)",
    fiftyClients: "50 ta to‘lovchi SMB mijoz",
    certificationPilot: "Sertifikatlash + birinchi bank piloti",
    twoHundredClients: "O‘zbekiston bo‘ylab 200+ mijoz",
    marketLeader: "Mijozlarni saqlash bo‘yicha AI yetakchisi",

    // TeamSection
    mindsBehind: "Auralife ortidagi aql-idrok",
    meetOurTeam: "Bizning jamoa bilan tanishing",
    teamSubtitle: "O‘zbekistonning AI landshaftini o‘zgartirish vizyoniga ega ikki ishtiyoqli dasturchi",
    unitedByInnovation: "Innovatsiya bilan birlashganmiz",
    teamVision: "Birgalikda O‘zbekiston uchun AI kelajagini qurmoqdamiz – texnik mukammallik va mahalliy muammolarni chuqur tushunishni birlashtirib, haqiqatan ham farq qiladigan yechimlar yaratamiz.",
  },
} as const;

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null;
    if (saved && (saved === "en" || saved === "uz")) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
  };

  const t = (key: keyof typeof translations.en): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};