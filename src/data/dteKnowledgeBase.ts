import { College, CircularDocument, KnowledgeItem } from '../types';

export const OFFICIAL_SOURCES_META = {
  authority: "Directorate of Technical Education (DTE), Government of Rajasthan",
  authorityHindi: "तकनीकी शिक्षा निदेशालय, राजस्थान सरकार",
  address: "W-6, Residency Road, Jodhpur - 342032, Rajasthan",
  board: "Board of Technical Education Rajasthan (BTER), Jodhpur",
  boardHindi: "तकनीकी शिक्षा मंडल राजस्थान (BTER), जोधपुर",
  admissionsHelpline: "0291-2434395 / 0291-2636572",
  examinationHelpline: "0291-2430440",
  email: "dte_raj@yahoo.com / bter.jodhpur@rajasthan.gov.in",
  ssoPortal: "https://sso.rajasthan.gov.in",
  dtePortal: "https://dte.rajasthan.gov.in",
  bterPortal: "https://bter.rajasthan.gov.in",
  htePortal: "https://hte.rajasthan.gov.in",
  currentSession: "2026-27"
};

export const DTE_COLLEGES: College[] = [
  {
    id: "gpc-jaipur",
    name: "Government Polytechnic College, Jaipur",
    nameHindi: "राजकीय पॉलिटेक्निक कॉलेज, जयपुर",
    code: "001",
    district: "Jaipur",
    districtHindi: "जयपुर",
    type: "Government",
    established: 1957,
    branches: ["Computer Science & Engineering", "Civil Engineering", "Mechanical Engineering", "Electrical Engineering", "Electronics Engineering"],
    intake: 360,
    hostelAvailable: true,
    address: "Residency Road, Jodhpur / Khasa Kothi Circle, Jaipur",
    contact: "0141-2200389",
    email: "gpc.jaipur@rajasthan.gov.in",
    website: "https://hte.rajasthan.gov.in/college/gpcjaipur"
  },
  {
    id: "gpc-jodhpur",
    name: "Government Polytechnic College, Jodhpur",
    nameHindi: "राजकीय पॉलिटेक्निक कॉलेज, जोधपुर",
    code: "002",
    district: "Jodhpur",
    districtHindi: "जोधपुर",
    type: "Government",
    established: 1958,
    branches: ["Civil Engineering", "Mechanical Engineering", "Electrical Engineering", "Automobile Engineering", "Petroleum Engineering"],
    intake: 320,
    hostelAvailable: true,
    address: "Residency Road, Jodhpur - 342032",
    contact: "0291-2434271",
    email: "gpc.jodhpur@rajasthan.gov.in",
    website: "https://hte.rajasthan.gov.in/college/gpcjodhpur"
  },
  {
    id: "gpc-kota",
    name: "Government Polytechnic College, Kota",
    nameHindi: "राजकीय पॉलिटेक्निक कॉलेज, कोटा",
    code: "003",
    district: "Kota",
    districtHindi: "कोटा",
    type: "Government",
    established: 1960,
    branches: ["Chemical Engineering", "Computer Science", "Instrumentation Engineering", "Electrical Engineering", "Mechanical Engineering"],
    intake: 300,
    hostelAvailable: true,
    address: "DCM Road, Aerodrome Circle, Kota",
    contact: "0744-2423376",
    email: "gpc.kota@rajasthan.gov.in",
    website: "https://hte.rajasthan.gov.in/college/gpckota"
  },
  {
    id: "gpc-ajmer",
    name: "Government Polytechnic College, Ajmer",
    nameHindi: "राजकीय पॉलिटेक्निक कॉलेज, अजमेर",
    code: "004",
    district: "Ajmer",
    districtHindi: "अजमेर",
    type: "Government",
    established: 1958,
    branches: ["Civil Engineering", "Electrical Engineering", "Mechanical Engineering", "Computer Science"],
    intake: 240,
    hostelAvailable: true,
    address: "Makhupura, Nasirabad Road, Ajmer",
    contact: "0145-2690249",
    email: "gpc.ajmer@rajasthan.gov.in"
  },
  {
    id: "gpc-bikaner",
    name: "Government Polytechnic College, Bikaner",
    nameHindi: "राजकीय पॉलिटेक्निक कॉलेज, बीकानेर",
    code: "005",
    district: "Bikaner",
    districtHindi: "बीकानेर",
    type: "Government",
    established: 1962,
    branches: ["Civil Engineering", "Mechanical Engineering", "Electrical Engineering", "Chemical (Ceramic) Technology"],
    intake: 260,
    hostelAvailable: true,
    address: "Near Karni Singh Stadium, Bikaner",
    contact: "0151-2242135",
    email: "gpc.bikaner@rajasthan.gov.in"
  },
  {
    id: "gpc-udaipur",
    name: "Government Polytechnic College, Udaipur",
    nameHindi: "राजकीय पॉलिटेक्निक कॉलेज, उदयपुर",
    code: "006",
    district: "Udaipur",
    districtHindi: "उदयपुर",
    type: "Government",
    established: 1958,
    branches: ["Mining Engineering", "Civil Engineering", "Electrical Engineering", "Mechanical Engineering"],
    intake: 280,
    hostelAvailable: true,
    address: "Pratap Nagar, Udaipur",
    contact: "0294-2490023",
    email: "gpc.udaipur@rajasthan.gov.in"
  },
  {
    id: "gwpc-jaipur",
    name: "Government Women's Polytechnic College, Jaipur",
    nameHindi: "राजकीय महिला पॉलिटेक्निक कॉलेज, जयपुर",
    code: "007",
    district: "Jaipur",
    districtHindi: "जयपुर",
    type: "Government",
    established: 1985,
    branches: ["Architectural Assistantship", "Modern Office Practice", "Textile Design", "Beauty Culture & Cosmetology", "Computer Engineering"],
    intake: 240,
    hostelAvailable: true,
    address: "Gandhi Nagar, JLN Marg, Jaipur",
    contact: "0141-2706596",
    email: "gwpc.jaipur@rajasthan.gov.in"
  },
  {
    id: "gwpc-bikaner",
    name: "Government Women's Polytechnic College, Bikaner",
    nameHindi: "राजकीय महिला पॉलिटेक्निक कॉलेज, बीकानेर",
    code: "008",
    district: "Bikaner",
    districtHindi: "बीकानेर",
    type: "Government",
    established: 1988,
    branches: ["Costume Design & Dress Making", "Modern Office Practice", "Beauty Culture", "Computer Engineering"],
    intake: 180,
    hostelAvailable: true,
    address: "Civil Lines, Bikaner",
    contact: "0151-2226241",
    email: "gwpc.bikaner@rajasthan.gov.in"
  },
  {
    id: "gpc-alwar",
    name: "Government Polytechnic College, Alwar",
    nameHindi: "राजकीय पॉलिटेक्निक कॉलेज, अलवर",
    code: "009",
    district: "Alwar",
    districtHindi: "अलवर",
    type: "Government",
    established: 1960,
    branches: ["Mechanical Engineering", "Electrical Engineering", "Automobile Engineering", "Civil Engineering"],
    intake: 240,
    hostelAvailable: true,
    address: "MIA Extn, Alwar",
    contact: "0144-2881267",
    email: "gpc.alwar@rajasthan.gov.in"
  },
  {
    id: "gpc-bhilwara",
    name: "Government Polytechnic College, Bhilwara",
    nameHindi: "राजकीय पॉलिटेक्निक कॉलेज, भीलवाड़ा",
    code: "010",
    district: "Bhilwara",
    districtHindi: "भीलवाड़ा",
    type: "Government",
    established: 1988,
    branches: ["Textile Technology", "Textile Chemistry", "Mechanical Engineering", "Electrical Engineering"],
    intake: 200,
    hostelAvailable: true,
    address: "Pur Road, Bhilwara",
    contact: "01482-240836",
    email: "gpc.bhilwara@rajasthan.gov.in"
  },
  {
    id: "gpc-pali",
    name: "Government Polytechnic College, Pali",
    nameHindi: "राजकीय पॉलिटेक्निक कॉलेज, पाली",
    code: "011",
    district: "Pali",
    districtHindi: "पाली",
    type: "Government",
    established: 1996,
    branches: ["Civil Engineering", "Electrical Engineering", "Textile Design"],
    intake: 180,
    hostelAvailable: false,
    address: "Sumerpur Road, Pali",
    contact: "02932-280455",
    email: "gpc.pali@rajasthan.gov.in"
  },
  {
    id: "gpc-sikar",
    name: "Government Polytechnic College, Sikar",
    nameHindi: "राजकीय पॉलिटेक्निक कॉलेज, सीकर",
    code: "012",
    district: "Sikar",
    districtHindi: "सीकर",
    type: "Government",
    established: 1998,
    branches: ["Civil Engineering", "Electrical Engineering", "Mechanical Engineering", "Computer Science"],
    intake: 220,
    hostelAvailable: true,
    address: "Bajor, Sikar",
    contact: "01572-271501",
    email: "gpc.sikar@rajasthan.gov.in"
  },
  {
    id: "gpc-chittorgarh",
    name: "Government Polytechnic College, Chittorgarh",
    nameHindi: "राजकीय पॉलिटेक्निक कॉलेज, चित्तौड़गढ़",
    code: "013",
    district: "Chittorgarh",
    districtHindi: "चित्तौड़गढ़",
    type: "Government",
    established: 2002,
    branches: ["Civil Engineering", "Mechanical Engineering", "Electrical Engineering"],
    intake: 180,
    hostelAvailable: true,
    address: "Kapasan Road, Senthi, Chittorgarh",
    contact: "01472-241578",
    email: "gpc.chittor@rajasthan.gov.in"
  },
  {
    id: "gpc-bharatpur",
    name: "Government Polytechnic College, Bharatpur",
    nameHindi: "राजकीय पॉलिटेक्निक कॉलेज, भरतपुर",
    code: "014",
    district: "Bharatpur",
    districtHindi: "भरतपुर",
    type: "Government",
    established: 2004,
    branches: ["Civil Engineering", "Electrical Engineering", "Mechanical Engineering", "Computer Engineering"],
    intake: 210,
    hostelAvailable: true,
    address: "Kumher Road, Bharatpur",
    contact: "05644-222380",
    email: "gpc.bharatpur@rajasthan.gov.in"
  }
];

export const KNOWLEDGE_BASE_ITEMS: KnowledgeItem[] = [
  {
    id: "adm-schedule-dates",
    category: "Admissions",
    categoryHindi: "प्रवेश समय-सारणी",
    question: "What are the official 2026-27 Polytechnic admission dates and schedule in Rajasthan?",
    questionHindi: "राजस्थान पॉलिटेक्निक प्रवेश सत्र 2026-27 की आधिकारिक तिथियां और समय-सारणी क्या है?",
    answer: "For the 2026–27 admission session, the verified schedule is:\n\n• Application/Registration Start: 20 May 2026\n• Application Last Date: 25 June 2026\n• Counselling/Admission Process: Choice Filling from 13 July to 20 July 2026 (Round-1 Seat Allotment on 24 July 2026)\n• Document Verification: 26 June to 05 July 2026 (Nodal Centers)\n• Reporting/Joining: 25 July to 31 July 2026 (Allotted College)\n\nSource:\nhttps://dte.rajasthan.gov.in (Official Circular DTE/Polyt/Adm/2026-27/0182)\n\nNote: This is the official schedule for First Year 3-Year Diploma Admissions. If you are inquiring about Lateral Entry (2nd Year Direct) or Non-Engineering Diploma, please specify.",
    answerHindi: "सत्र 2026–27 पॉलिटेक्निक प्रवेश हेतु सत्यापनीय समय-सारणी:\n\n• आवेदन/पंजीकरण प्रारंभ: 20 मई 2026\n• आवेदन करने की अंतिम तिथि: 25 जून 2026\n• काउंसलिंग प्रक्रिया / चॉइस फिलिंग: 13 जुलाई से 20 जुलाई 2026 (प्रथम आवंटन: 24 जुलाई 2026)\n• दस्तावेज सत्यापन: 26 जून से 05 जुलाई 2026 (नोडल केंद्र पर)\n• कॉलेज रिपोर्टिंग/ज्वाइनिंग: 25 जुलाई से 31 जुलाई 2026\n\nस्रोत:\nhttps://dte.rajasthan.gov.in (अधिसूचना क्रमांक DTE/Polyt/Adm/2026-27/0182)\n\nनोट: यह समय-सारणी प्रथम वर्ष (3-वर्षीय) डिप्लोमा प्रवेश हेतु है। यदि आप लेटरल एंट्री (द्वितीय वर्ष) या नॉन-इंजीनियरिंग डिप्लोमा की जानकारी चाहते हैं तो कृपया स्पष्ट करें।",
    keywords: ["admission dates", "schedule", "dates", "last date", "start date", "when does admission start", "admission kab hai", "pravesh tithi", "kab shuru hoga", "antim tithi", "important dates", "timeline", "counseling schedule", "2026-27 dates", "registration date", "reporting date"],
    officialSource: "Directorate of Technical Education (DTE), Rajasthan (Notification DTE/Polyt/Adm/2026-27/0182)",
    sourceUrl: "https://dte.rajasthan.gov.in",
    session: "2026-27"
  },
  {
    id: "adm-eligibility-10th",
    category: "Admissions",
    categoryHindi: "प्रवेश",
    question: "What is the eligibility criteria for admission into 3-year Polytechnic Diploma in Rajasthan (Session 2026–27)?",
    questionHindi: "राजस्थान में 3 वर्षीय पॉलिटेक्निक डिप्लोमा (सत्र 2026-27) में प्रवेश हेतु पात्रता क्या है?",
    answer: "For admission into 1st Year (3-Year Engineering Diploma) in Session 2026–27:\n1. The candidate must have passed 10th Standard (Secondary Examination) from Board of Secondary Education Rajasthan (RBSE) or any recognized equivalent Board with Science and Mathematics subjects.\n2. Minimum Qualifying Marks: At least 35% aggregate marks in Class 10th.\n3. Domicile Requirement: Candidate should be a bonafide resident of Rajasthan (special provisions for wards of central/state government employees posted in Rajasthan).\n4. Age Limit: There is no upper or lower age restriction as per AICTE and DTE Rajasthan norms.\n5. Admission Mode: Merit-based centralized counseling based on 10th marks (No entrance exam).",
    answerHindi: "सत्र 2026-27 में प्रथम वर्ष (3 वर्षीय इंजीनियरिंग डिप्लोमा) में प्रवेश हेतु पात्रता नियम:\n1. अभ्यर्थी ने माध्यमिक शिक्षा बोर्ड राजस्थान (RBSE) अथवा किसी समकक्ष मान्यता प्राप्त बोर्ड से विज्ञान एवं गणित विषयों के साथ 10वीं कक्षा उत्तीर्ण की हो।\n2. न्यूनतम अंक: 10वीं में कुल न्यूनतम 35% अंक आवश्यक हैं।\n3. मूल निवास: अभ्यर्थी राजस्थान का मूल निवासी (Bonafide Resident) होना चाहिए (राजस्थान में पदस्थापित केंद्र/राज्य कर्मचारियों के आश्रितों हेतु विशेष छूट उपलब्ध)।\n4. आयु सीमा: AICTE एवं तकनीकी शिक्षा निदेशालय के नियमानुसार कोई न्यूनतम या अधिकतम आयु सीमा नहीं है।\n5. प्रवेश प्रक्रिया: 10वीं बोर्ड के अंकों के आधार पर मेरिट आधारित केंद्रीकृत ऑनलाइन काउंसलिंग (कोई प्रवेश परीक्षा नहीं)।",
    keywords: ["eligibility", "qualification", "10th", "admission criteria", "qualifying marks", "patrata", "diploma first year", "2026-27 eligibility"],
    officialSource: "DTE Rajasthan Admission Brochure 2026-27, Section 3.1",
    sourceUrl: "https://dte.rajasthan.gov.in/admissions-2026",
    session: "2026-27"
  },
  {
    id: "adm-lateral-entry-leep",
    category: "Lateral Entry",
    categoryHindi: "लेटरल एंट्री (द्वितीय वर्ष)",
    question: "Who is eligible for Lateral Entry (Direct 2nd Year) Polytechnic admission (LEEP)?",
    questionHindi: "पॉलिटेक्निक द्वितीय वर्ष में सीधे प्रवेश (लेटरल एंट्री) के लिए कौन पात्र है?",
    answer: "Eligibility for Direct 2nd Year (Lateral Entry) Admission 2026–27:\n1. Passed 12th Science with Mathematics (PCM) or 12th Vocational/Technical subject from RBSE/CBSE or recognized board.\nOR\n2. Passed 10th + 2 Years ITI (NCVT/SCVT) in appropriate engineering trades.\n3. Minimum Qualifying Marks: Passed with at least 35% marks.\n4. Available Seats: 10% supernumerary seats in 2nd year over and above sanctioned intake, plus vacant 1st year seats.\n5. Application: Through SSO Rajasthan centralized lateral entry counseling.",
    answerHindi: "लेटरल एंट्री (द्वितीय वर्ष में सीधा प्रवेश) 2026-27 के नियम:\n1. RBSE/CBSE या मान्यता प्राप्त बोर्ड से 12वीं विज्ञान गणित (PCM) अथवा वोकेशनल/तकनीकी विषय से उत्तीर्ण।\nअथवा\n2. 10वीं के उपरांत संबंधित इंजीनियरिंग ट्रेड में 2 वर्षीय ITI (NCVT/SCVT) उत्तीर्ण।\n3. न्यूनतम अंक: कम से कम 35% अंकों के साथ उत्तीर्ण।\n4. उपलब्ध सीटें: कुल स्वीकृत सीटों का 10% सुपरन्यूमरेरी कोटा + प्रथम वर्ष की रिक्त सीटें।\n5. आवेदन: SSO राजस्थान पोर्टल के माध्यम से केंद्रीकृत ऑनलाइन काउंसलिंग।",
    keywords: ["lateral entry", "2nd year direct", "iti to polytechnic", "12th pcm", "leep", "dwitiya varsh"],
    officialSource: "BTER & DTE Lateral Entry Notification 2026/Polyt/LE-04",
    sourceUrl: "https://dte.rajasthan.gov.in/lateral-entry",
    session: "2026-27"
  },
  {
    id: "adm-fees-structure",
    category: "Fees",
    categoryHindi: "शुल्क विवरण",
    question: "What is the fee structure in Government Polytechnic Colleges of Rajasthan?",
    questionHindi: "राजस्थान के राजकीय पॉलिटेक्निक कॉलेजों में फीस संरचना क्या है?",
    answer: "Annual Fee Structure in Rajasthan Government Polytechnic Colleges (Session 2026–27):\n1. General / OBC / EWS Male Students: Approx. ₹6,500 to ₹7,500 per year (Tuition Fee: ₹4,000 + Development Fee: ₹1,500 + Caution Money: ₹1,000 refundable + Exam/Board Fee).\n2. Female (Girls) Candidates: 100% Tuition Fee Exemption in all Government Colleges! Total payable is only approx. ₹2,500 to ₹3,000 (Development & Student Activity fee).\n3. SC / ST Candidates: Full Tuition Fee Waiver provided under State Government guidelines.\n4. Tuition Fee Waiver (TFW) Scheme: Selected students pay ₹0 Tuition fee (only nominal institute fee around ₹2,000).\n5. Hostel Fee (if allotted): ₹2,400 to ₹3,600 per year + Mess charges on actual sharing basis.",
    answerHindi: "राजकीय पॉलिटेक्निक कॉलेजों की वार्षिक फीस संरचना (सत्र 2026-27):\n1. सामान्य / OBC / EWS छात्र (बालक): लगभग ₹6,500 से ₹7,500 प्रति वर्ष (ट्यूशन फीस: ₹4,000 + विकास शुल्क: ₹1,500 + कॉशन मनी: ₹1,000 रिफंडेबल + परीक्षा शुल्क)।\n2. छात्राएं (बालिकाएं): सभी राजकीय संस्थानों में 100% ट्यूशन फीस पूर्णतः माफ! केवल विकास एवं गतिविधि शुल्क लगभग ₹2,500 से ₹3,000 देय।\n3. अनुसूचित जाति (SC) एवं अनुसूचित जनजाति (ST): राज्य सरकार के नियमानुसार ट्यूशन फीस से पूर्ण छूट।\n4. ट्यूशन फीस माफी (TFW) योजना: चयनित विद्यार्थियों हेतु शिक्षण शुल्क शून्य (केवल ₹2,000 संस्थान शुल्क)।\n5. हॉस्टल फीस (उपलब्धता पर): ₹2,400 से ₹3,600 प्रति वर्ष + भोजन खर्च वास्तविक आधार पर।",
    keywords: ["fees", "cost", "annual fee", "girls fee exemption", "hostel fee", "tfw", "shulk"],
    officialSource: "Finance Division, Technical Education Directorate Notification Fin/Pol/2026/89",
    sourceUrl: "https://dte.rajasthan.gov.in/fee-structure",
    session: "2026-27"
  },
  {
    id: "adm-tfw-scheme",
    category: "Scholarships",
    categoryHindi: "छात्रवृत्ति एवं छूट",
    question: "What is the Tuition Fee Waiver (TFW) Scheme in Rajasthan Polytechnic Admissions?",
    questionHindi: "राजस्थान पॉलिटेक्निक प्रवेश में ट्यूशन फीस वेवर (TFW) योजना क्या है?",
    answer: "Tuition Fee Waiver (TFW) Scheme (AICTE & DTE Rajasthan Norms):\n1. Purpose: Financial assistance to meritorious students from economically weaker sections.\n2. Quota: 5% supernumerary seats in every branch over and above sanctioned intake.\n3. Eligibility: Annual family income from all sources must be less than ₹8,00,000 (8 Lakhs per annum).\n4. Required Document: Valid Income Certificate issued by Tehsildar / Competent Authority (Form 'I' as per Rajasthan Revenue guidelines).\n5. Benefit: 100% Tuition Fee is waived off for all 3 years of the diploma course.\n6. How to Apply: Must select 'Yes' for TFW option during online choice filling on SSO Rajasthan and upload income proof.",
    answerHindi: "ट्यूशन फीस माफी योजना (TFW):\n1. उद्देश्य: आर्थिक रूप से कमजोर प्रतिभावान विद्यार्थियों को तकनीकी शिक्षा हेतु वित्तीय सहायता।\n2. कोटा: प्रत्येक शाखा में स्वीकृत सीटों के अतिरिक्त 5% सुपरन्यूमरेरी सीटें आरक्षित।\n3. पात्रता: परिवार की समस्त स्रोतों से कुल वार्षिक आय ₹8,00,000 (8 लाख रु.) से कम होनी चाहिए।\n4. आवश्यक दस्तावेज: तहसीलदार/सक्षम प्राधिकारी द्वारा जारी वैध आय प्रमाण पत्र।\n5. लाभ: 3 वर्षों के संपूर्ण डिप्लोमा पाठ्यक्रम में 100% शिक्षण शुल्क (Tuition Fee) पूरी तरह माफ।\n6. आवेदन का तरीका: SSO राजस्थान पर ऑनलाइन विकल्प भरते समय 'TFW' विकल्प में 'हाँ' चुनें तथा आय प्रमाण पत्र अपलोड करें।",
    keywords: ["tfw", "tuition fee waiver", "income certificate", "8 lakh", "shulk mukti"],
    officialSource: "AICTE Guidelines & DTE Rajasthan Centralized Counseling Order 2026",
    sourceUrl: "https://dte.rajasthan.gov.in/tfw-scheme",
    session: "2026-27"
  },
  {
    id: "adm-reservation-policy",
    category: "Admissions",
    categoryHindi: "आरक्षण",
    question: "What are the reservation categories and percentages for Rajasthan Polytechnic Admissions 2026–27?",
    questionHindi: "राजस्थान पॉलिटेक्निक प्रवेश 2026-27 के लिए आरक्षण की क्या श्रेणियां और प्रतिशत हैं?",
    answer: "Rajasthan State Reservation Policy for Polytechnic Admissions 2026–27:\n• Scheduled Castes (SC): 16%\n• Scheduled Tribes (ST): 12% (In Scheduled Tribal Areas/TSP, 45% for ST and 5% for SC as per TSP area rules)\n• Other Backward Classes - Non Creamy Layer (OBC-NCL): 21%\n• Most Backward Classes (MBC): 5%\n• Economically Weaker Sections (EWS): 10%\n• Horizontal Reservation across categories:\n  - Women Candidates: 33% seats reserved across all categories\n  - Persons with Benchmark Disabilities (PwD): 5%\n  - Wards of Defence / Ex-Servicemen: 3% to 5%\n  - Kashmiri Migrants / KM: 1 supernumerary seat per branch\n  - TFW (Tuition Fee Waiver): 5% supernumerary seats.",
    answerHindi: "राजस्थान पॉलिटेक्निक प्रवेश 2026-27 हेतु आरक्षण नियम:\n• अनुसूचित जाति (SC): 16%\n• अनुसूचित जनजाति (ST): 12% (अनुसूचित जनजाति क्षेत्र TSP में 45% ST तथा 5% SC हेतु आरक्षित)\n• अन्य पिछड़ा वर्ग - गैर मलाईदार परत (OBC-NCL): 21%\n• अति पिछड़ा वर्ग (MBC): 5%\n• आर्थिक रूप से कमजोर वर्ग (EWS): 10%\n• क्षैतिज (Horizontal) आरक्षण:\n  - महिला अभ्यर्थी: सभी श्रेणियों में 33% सीटें आरक्षित\n  - दिव्यांग जन (PwD): 5%\n  - रक्षा कार्मिक एवं पूर्व सैनिकों के आश्रित: 3% से 5%\n  - कश्मीरी विस्थापित (KM): प्रति शाखा 1 सुपरन्यूमरेरी सीट\n  - ट्यूशन फीस वेवर (TFW): 5% अतिरिक्त सीटें।",
    keywords: ["reservation", "sc", "st", "obc", "ews", "mbc", "tsp", "women reservation", "33 percent", "arakshan"],
    officialSource: "Department of Personnel, Govt of Rajasthan & DTE Order 2026/Res-11",
    sourceUrl: "https://dte.rajasthan.gov.in/reservation-rules",
    session: "2026-27"
  },
  {
    id: "adm-required-documents",
    category: "Documents",
    categoryHindi: "आवश्यक दस्तावेज",
    question: "Which documents are required during Rajasthan Polytechnic Admission and Reporting?",
    questionHindi: "राजस्थान पॉलिटेक्निक प्रवेश एवं नोडल सेंटर रिपोर्टिंग के समय कौन-से दस्तावेज अनिवार्य हैं?",
    answer: "Mandatory Documents Checklist for Document Verification and College Reporting:\n1. 10th Class Mark Sheet and Passing Certificate (Original + 3 Self-attested copies)\n2. 12th / ITI Marksheet (Mandatory only for Lateral Entry applicants)\n3. Rajasthan Bonafide / Domicile Certificate (मूल निवास प्रमाण पत्र)\n4. Category Certificate (SC/ST/OBC-NCL/MBC/EWS). Note: OBC-NCL certificate should be valid within 1 year or with notarized Form-F affidavit.\n5. Annual Income Certificate (Mandatory for TFW applicants, issued by Tehsildar)\n6. Transfer Certificate (TC) and Character Certificate (CC) from last attended school/college\n7. Migration Certificate (if coming from board other than RBSE)\n8. Aadhaar Card / Jan Aadhaar Card\n9. Medical Fitness Certificate (Issued by registered MBBS doctor)\n10. 6 Passport-size recent color photographs\n11. Anti-Ragging Affidavit (by student and parent on non-judicial stamp / online portal).",
    answerHindi: "दस्तावेज सत्यापन एवं कॉलेज रिपोर्टिंग हेतु अनिवार्य चेकलिस्ट:\n1. 10वीं कक्षा की मूल अंकतालिका एवं प्रमाण पत्र (मूल + 3 स्व-प्रमाणित प्रतियां)\n2. 12वीं / ITI अंकतालिका (केवल लेटरल एंट्री अभ्यर्थियों हेतु अनिवार्य)\n3. राजस्थान मूल निवास प्रमाण पत्र (Bonafide Certificate)\n4. जाति प्रमाण पत्र (SC/ST/OBC-NCL/MBC/EWS)। ध्यान दें: OBC-NCL प्रमाण पत्र 1 वर्ष से पुराना न हो या प्रारूप 'एफ' शपथ पत्र संलग्न हो।\n5. आय प्रमाण पत्र (TFW अभ्यर्थियों हेतु अनिवार्य, तहसीलदार द्वारा सत्यापित)\n6. स्थानांतरण प्रमाण पत्र (TC) एवं चरित्र प्रमाण पत्र (CC)\n7. माइग्रेशन प्रमाण पत्र (यदि RBSE के अतिरिक्त अन्य बोर्ड से हों)\n8. आधार कार्ड / जन आधार कार्ड\n9. मेडिकल फिटनेस प्रमाण पत्र (पंजीकृत MBBS चिकित्सक द्वारा जारी)\n10. 6 पासपोर्ट साइज नवीनतम रंगीन फोटो\n11. एंटी-रैगिंग शपथ पत्र (छात्र एवं अभिभावक द्वारा)।",
    keywords: ["documents", "checklist", "verification", "marksheet", "caste certificate", "bonafide", "dastavej"],
    officialSource: "DTE Admission Verification Guidelines 2026, Annexure-B",
    sourceUrl: "https://dte.rajasthan.gov.in/documents-checklist",
    session: "2026-27"
  },
  {
    id: "acad-branch-change",
    category: "Transfers",
    categoryHindi: "स्थानांतरण एवं शाखा परिवर्तन",
    question: "Can a student change their engineering branch or college in 2nd year?",
    questionHindi: "क्या छात्र द्वितीय वर्ष में अपनी इंजीनियरिंग शाखा या कॉलेज बदल सकते हैं?",
    answer: "Rules for Branch Change and College Transfer in 2nd Year (Session 2026–27):\n1. Eligibility: Branch change is permissible ONLY at the beginning of the 3rd Semester (2nd Year).\n2. Academic Criteria: The student must have passed both 1st and 2nd Semesters in the first attempt without any back papers and secured minimum 60% aggregate marks.\n3. Vacancy Dependent: Branch change is subject to availability of vacant seats within the sanctioned intake of that specific branch.\n4. Merit-based: If applicants exceed vacancies, selection is strictly by 1st year BTER CGPA/Percentage.\n5. Restriction: TFW students cannot change to non-TFW seats if it compromises fee waiver rules, and change is NOT permitted after 3rd semester.",
    answerHindi: "द्वितीय वर्ष में शाखा परिवर्तन एवं कॉलेज ट्रांसफर के आधिकारिक नियम:\n1. समय: शाखा परिवर्तन की अनुमति केवल तृतीय सेमेस्टर (द्वितीय वर्ष के प्रारंभ) में दी जाती है।\n2. शैक्षणिक योग्यता: छात्र ने प्रथम एवं द्वितीय सेमेस्टर बिना किसी बैक के प्रथम प्रयास में उत्तीर्ण किया हो तथा कम से कम 60% कुल अंक प्राप्त किए हों।\n3. सीटों की उपलब्धता: शाखा परिवर्तन उस शाखा में स्वीकृत संख्या के भीतर रिक्त सीटों की उपलब्धता पर निर्भर करता है।\n4. मेरिट आधारित: यदि आवेदन रिक्तियों से अधिक हों, तो चयन पूर्णतः BTER प्रथम वर्ष के अंकों/मेरिट पर होता है।\n5. प्रतिबंध: TFW कोटे के छात्र सामान्य सीट पर शाखा परिवर्तन नहीं कर सकते यदि इससे छूट नियम प्रभावित होते हों, तथा 3rd सेमेस्टर के बाद कोई परिवर्तन मान्य नहीं होता।",
    keywords: ["branch change", "college transfer", "second year transfer", "shakha parivartan", "bter rules"],
    officialSource: "BTER Academic Regulations Ordinance 12-B",
    sourceUrl: "https://bter.rajasthan.gov.in/regulations",
    session: "2026-27"
  },
  {
    id: "acad-bter-exams",
    category: "Examinations",
    categoryHindi: "परीक्षा प्रणाली",
    question: "How does the examination and grading system of BTER (Board of Technical Education Rajasthan) work?",
    questionHindi: "तकनीकी शिक्षा मंडल राजस्थान (BTER) की परीक्षा एवं मूल्यांकन प्रणाली कैसे काम करती है?",
    answer: "BTER Examination & Evaluation System:\n1. Pattern: Semester Pattern (Odd Semesters: 1st, 3rd, 5th conducted in Nov-Dec; Even Semesters: 2nd, 4th, 6th conducted in April-May).\n2. Marks Split: Each subject carries 100 Marks (70 Marks External End-Term Theory Exam + 30 Marks Internal Sessional Assessment).\n3. Passing Criteria: Minimum 33% marks in external theory exam, 40% in practical/sessionals, and 40% overall aggregate per subject.\n4. Carry Over / Back Paper: A student having back papers in 1st year can be promoted to 2nd year as per BTER carry-over rules, provided they do not exceed maximum permissible back subjects (usually not more than 4 back papers).\n5. Revaluation & Scrutiny: Online application opens within 15 days of result declaration via SSO Rajasthan / BTER portal.",
    answerHindi: "BTER परीक्षा एवं मूल्यांकन व्यवस्था:\n1. परीक्षा प्रारूप: सेमेस्टर प्रणाली (विषम सेमेस्टर: 1st, 3rd, 5th नवंबर-दिसंबर में; सम सेमेस्टर: 2nd, 4th, 6th अप्रैल-मई में आयोजित)।\n2. अंक विभाजन: प्रत्येक विषय 100 अंकों का (70 अंक बाह्य सैद्धांतिक परीक्षा + 30 अंक आंतरिक सेशनल/प्रैक्टिकल)।\n3. उत्तीर्ण प्रतिशत: बाह्य लिखित परीक्षा में न्यूनतम 33%, प्रैक्टिकल/सेशनल में 40% तथा विषय में कुल 40% अंक अनिवार्य।\n4. बैक पेपर/कैरी ओवर नियम: BTER नियमानुसार अधिकतम 4 बैक पेपर होने की स्थिति में छात्र को अगली कक्षा में प्रोन्नत (Carry-Over) किया जाता है।\n5. पुनर्मूल्यांकन (Revaluation): परीक्षा परिणाम घोषित होने के 15 दिनों के भीतर SSO राजस्थान/BTER पोर्टल के माध्यम से ऑनलाइन आवेदन किया जा सकता है।",
    keywords: ["exam", "bter", "marks", "passing marks", "back paper", "semester exam", "pariksha", "revaluation"],
    officialSource: "Board of Technical Education Rajasthan Examination By-Laws 2026",
    sourceUrl: "https://bter.rajasthan.gov.in/exam-ordinance",
    session: "2026-27"
  },
  {
    id: "sch-rajasthan-schemes",
    category: "Scholarships",
    categoryHindi: "छात्रवृत्ति",
    question: "Which government scholarships are available for Polytechnic students in Rajasthan?",
    questionHindi: "राजस्थान में पॉलिटेक्निक छात्रों के लिए कौन-सी सरकारी छात्रवृत्तियां उपलब्ध हैं?",
    answer: "Key Scholarship Schemes for Rajasthan Polytechnic Students:\n1. Post Matric Scholarship (Social Justice & Empowerment Dept - SJED): 100% fee reimbursement + monthly maintenance allowance for SC, ST, OBC, MBC, EWS students applying via SJED portal.\n2. Mukhyamantri Sarvjan Uchtar Shiksha Yojana: Financial stipend for students scoring 60%+ in 10th/12th from low-income families.\n3. AICTE Pragati Scholarship for Girls: ₹50,000 per year for female students admitted into AICTE approved polytechnic institutions (max 2 girls per family, income < 8 LPA).\n4. AICTE Saksham Scholarship: ₹50,000 per year for differently-abled students (disability > 40%).\n5. Devnarayan Gurukul / Chhatravritti Yojana: For girl students belonging to MBC categories (Gurjar, Raika, Gadariya, Banjara).\n6. How to Apply: Through SSO Rajasthan (sso.rajasthan.gov.in) using Scholarship Portal (SJE).",
    answerHindi: "राजस्थान पॉलिटेक्निक छात्रों हेतु प्रमुख छात्रवृत्ति योजनाएं:\n1. उत्तर मैट्रिक छात्रवृत्ति (सामाजिक न्याय एवं अधिकारिता विभाग - SJE): SC, ST, OBC, MBC, EWS छात्रों को 100% शुल्क पुनर्भरण + मासिक निर्वाह भत्ता।\n2. मुख्यमंत्री सर्वजन उच्चतर शिक्षा योजना: 10वीं/12वीं में 60% से अधिक अंक प्राप्त करने वाले अल्प आय वर्ग के छात्रों हेतु आर्थिक सहायता।\n3. AICTE प्रगति छात्रवृत्ति (केवल छात्राओं हेतु): AICTE अनुमोदित पॉलिटेक्निक में प्रवेशित बालिकाओं को ₹50,000 प्रति वर्ष (परिवार की वार्षिक आय 8 लाख से कम)।\n4. AICTE सक्षम छात्रवृत्ति: 40% या अधिक दिव्यांगता वाले विशेष योग्यजन विद्यार्थियों हेतु ₹50,000 प्रति वर्ष।\n5. देवनारायण छात्रा स्कूटी एवं प्रोत्साहन योजना: MBC वर्ग (गुर्जर, रैबारी, गाडोलिया लुहार आदि) की छात्राओं हेतु।\n6. आवेदन प्रक्रिया: SSO राजस्थान (sso.rajasthan.gov.in) के SJE स्कॉलरशिप पोर्टल द्वारा जन आधार कार्ड से ऑनलाइन आवेदन।",
    keywords: ["scholarship", "chhatravritti", "post matric", "sje", "pragati scholarship", "devnarayan", "mukhyamantri"],
    officialSource: "Social Justice Dept & DTE Rajasthan Scholarship Circular 2026/SJE/91",
    sourceUrl: "https://sjms.rajasthan.gov.in",
    session: "2026-27"
  },
  {
    id: "adm-sso-application-steps",
    category: "Admissions",
    categoryHindi: "प्रवेश प्रक्रिया",
    question: "How do I apply online for Rajasthan Polytechnic Admissions 2026–27 using SSO ID?",
    questionHindi: "SSO ID के माध्यम से राजस्थान पॉलिटेक्निक प्रवेश 2026-27 के लिए ऑनलाइन आवेदन कैसे करें?",
    answer: "Step-by-step Online Application Process for 2026–27:\nStep 1: Visit https://sso.rajasthan.gov.in and log in with your SSO ID (or register new using Jan Aadhaar/Google).\nStep 2: Under Citizen Apps (G2C), search and click on 'DTE Admissions' or 'Technical Education Portal'.\nStep 3: Select 'Polytechnic Engineering First Year Admission 2026–27' or 'Lateral Entry 2026–27'.\nStep 4: Fill Personal, Domicile, Category, and 10th Educational marks.\nStep 5: Upload scanned copies of 10th Marksheet, Photo, Signature, Bonafide, and Caste/Income Certificate (if applicable).\nStep 6: Pay the non-refundable registration cum counseling fee (₹300) via Net Banking/Debit Card/UPI/E-Mitra.\nStep 7: Choice Filling: Select preferred Government Polytechnic Colleges and Branches in order of priority.\nStep 8: Lock choices before deadline and take a printout of the Application Form for Nodal Center verification.",
    answerHindi: "SSO ID द्वारा 2026-27 ऑनलाइन आवेदन की चरणबद्ध प्रक्रिया:\nचरण 1: https://sso.rajasthan.gov.in पर जाएं तथा अपनी SSO ID से लॉगिन करें (या जन आधार/गूगल से नई बनाएं)।\nचरण 2: Citizen Apps (G2C) में 'DTE Admissions' अथवा 'तकनीकी शिक्षा पोर्टल' खोजें।\nचरण 3: 'Polytechnic Engineering First Year Admission 2026–27' अथवा 'Lateral Entry 2026–27' लिंक का चयन करें।\nचरण 4: व्यक्तिगत विवरण, मूल निवास, श्रेणी तथा 10वीं के प्राप्तांक दर्ज करें।\nचरण 5: 10वीं की अंकतालिका, फोटो, हस्ताक्षर, मूल निवास व जाति/आय प्रमाण पत्र की स्कैन प्रति अपलोड करें।\nचरण 6: ऑनलाइन काउंसलिंग/पंजीकरण शुल्क (₹300) नेट बैंकिंग/UPI/ई-मित्र द्वारा जमा करें।\nचरण 7: कॉलेज एवं शाखा चयन (Choice Filling): अपनी प्राथमिकता के अनुसार राजकीय पॉलिटेक्निक कॉलेज एवं शाखाएं चुनें।\nचरण 8: अंतिम तिथि से पूर्व चॉइस लॉक करें तथा भरे हुए फॉर्म का प्रिंटआउट सुरक्षित रखें।",
    keywords: ["how to apply", "sso id", "step by step", "registration process", "choice filling", "aavedan kaise kare"],
    officialSource: "Centralized Admission Committee Manual 2026-27",
    sourceUrl: "https://dte.rajasthan.gov.in/how-to-apply",
    session: "2026-27"
  }
];

export const OFFICIAL_CIRCULARS: CircularDocument[] = [
  {
    id: "dte-adm-notif-2026-01",
    circularNo: "DTE/Polyt/Adm/2026-27/0182",
    title: "Official Notification: Centralized Online Counseling for Polytechnic Diploma Admissions Session 2026–27",
    titleHindi: "आधिकारिक अधिसूचना: सत्र 2026-27 हेतु पॉलिटेक्निक डिप्लोमा केंद्रीकृत ऑनलाइन काउंसलिंग कार्यक्रम",
    date: "2026-05-15",
    session: "2026-27",
    category: "Admissions",
    summary: "Directorate of Technical Education, Jodhpur invites online applications for admission into 1st Year (3-Year) and 2nd Year Lateral Entry Diploma in Government and Private Polytechnic Colleges.",
    summaryHindi: "तकनीकी शिक्षा निदेशालय, जोधपुर द्वारा राजकीय एवं निजी पॉलिटेक्निक कॉलेजों में प्रथम वर्ष (3-वर्षीय) एवं द्वितीय वर्ष लेटरल एंट्री हेतु ऑनलाइन आवेदन आमंत्रित किए गए हैं।",
    fullContent: `GOVERNMENT OF RAJASTHAN
DIRECTORATE OF TECHNICAL EDUCATION, RAJASTHAN, JODHPUR
W-6, Residency Road, Jodhpur - 342032

Notification No: DTE/Polyt/Adm/2026-27/0182
Date: 15-05-2026

SUBJECT: CENTRALIZED ADMISSION FOR POLYTECHNIC ENGINEERING DIPLOMA COURSES (SESSION 2026–27)

Online applications through SSO Portal (https://sso.rajasthan.gov.in) are hereby invited from eligible candidates who are Bonafide Residents of Rajasthan for admission to 1st Year 3-Year Diploma and 2nd Year (Lateral Entry) Diploma Engineering courses in all Government, Government-Aided, and Private Polytechnic Colleges affiliated with Board of Technical Education Rajasthan (BTER).

1. ELIGIBILITY:
(A) First Year: Passed Secondary (10th) from RBSE/CBSE with Science & Maths with minimum 35% marks.
(B) Lateral Entry: Passed 12th (Physics, Chemistry, Maths) OR 10th + 2-year ITI in relevant trade with minimum 35% marks.

2. IMPORTANT SCHEDULE (SESSION 2026–27):
• Commencement of Online Registration on SSO: 20 May 2026
• Last Date for Online Form Submission & Fee Payment: 25 June 2026
• Online Document Verification at Nodal Centers: 26 June to 05 July 2026
• Publication of Provisional Merit List: 08 July 2026
• Redressal of Objections & Final Merit List: 12 July 2026
• Online Choice Filling & Locking: 13 July to 20 July 2026
• Round-1 Seat Allotment Result: 24 July 2026
• Reporting and Fee Deposit at Allotted College: 25 July to 31 July 2026
• Round-2 Upward Movement & Allotment: 05 August 2026
• Commencement of Academic Classes: 10 August 2026

3. REGISTRATION FEE:
A non-refundable fee of ₹300 (Rupees Three Hundred only) payable through E-Mitra / Online Payment Gateway.

4. CONCESSIONS & WAIVERS:
• Tuition Fee Waiver (TFW) scheme: 5% supernumerary seats for parental income < 8 LPA.
• Girl students: 100% Tuition Fee Exemption in all Government Polytechnic Colleges.

Helpline: 0291-2434395, 0291-2636572 | Email: dte_raj@yahoo.com
Director, Technical Education, Rajasthan, Jodhpur`,
    keyDates: [
      { event: "Online Registration Starts", date: "20 May 2026" },
      { event: "Registration & Fee Deadline", date: "25 June 2026" },
      { event: "Provisional Merit List", date: "08 July 2026" },
      { event: "Final Merit List", date: "12 July 2026" },
      { event: "Choice Filling Closes", date: "20 July 2026" },
      { event: "Round-1 Allotment", date: "24 July 2026" },
      { event: "College Reporting", date: "25 - 31 July 2026" },
      { event: "Classes Start", date: "10 August 2026" }
    ],
    isVerified: true
  },
  {
    id: "bter-exam-ordinance-2026",
    circularNo: "BTER/Exam/Curriculum/2026/412",
    title: "BTER Academic Calendar and Semester Examination Schedule for Session 2026–27",
    titleHindi: "BTER शैक्षणिक कैलेंडर एवं सेमेस्टर परीक्षा समय-सारणी सत्र 2026-27",
    date: "2026-06-10",
    session: "2026-27",
    category: "Examinations",
    summary: "Board of Technical Education Rajasthan announces the semester exam dates, mid-term assessment deadlines, and practical examination windows for diploma students.",
    summaryHindi: "तकनीकी शिक्षा मंडल राजस्थान द्वारा डिप्लोमा छात्रों हेतु सेमेस्टर परीक्षाएं, मिड-टर्म मूल्यांकन एवं प्रैक्टिकल परीक्षा तिथियों की घोषणा।",
    fullContent: `BOARD OF TECHNICAL EDUCATION RAJASTHAN (BTER)
W-6 Residency Road, Jodhpur - 342032

Notification No: BTER/Exam/Curriculum/2026/412
Date: 10-06-2026

ACADEMIC CALENDAR & EXAMINATION SCHEDULE (2026–27)

It is hereby notified for information to all Principals of Government and Private Polytechnic Colleges:

1. ODD SEMESTER (1st, 3rd, 5th Semester):
• Teaching Commences: 10 August 2026
• 1st Mid-Term Tests: 20–25 September 2026
• 2nd Mid-Term Tests: 05–10 November 2026
• End of Teaching: 25 November 2026
• Practical / Sessional Examinations: 28 November to 06 December 2026
• BTER Theory Examinations: 10 December to 28 December 2026
• Winter Vacation: 29 December 2026 to 05 January 2027

2. EVEN SEMESTER (2nd, 4th, 6th Semester):
• Teaching Commences: 06 January 2027
• Theory Examinations: 15 April to 05 May 2027

3. MANDATORY ATTENDANCE: Minimum 75% attendance is mandatory to appear in board examinations.
Secretary, BTER Jodhpur`,
    keyDates: [
      { event: "Odd Semester Start", date: "10 August 2026" },
      { event: "1st Mid-Term Test", date: "20-25 Sept 2026" },
      { event: "Odd Sem Theory Exams", date: "10-28 Dec 2026" },
      { event: "Even Sem Teaching Starts", date: "06 Jan 2027" },
      { event: "Even Sem Exams", date: "15 Apr - 05 May 2027" }
    ],
    isVerified: true
  },
  {
    id: "dte-sch-tfw-guideline-2026",
    circularNo: "DTE/TFW-Sch/2026/78",
    title: "Guidelines for Tuition Fee Waiver (TFW) and Zero-Tuition Scheme for Female Students",
    titleHindi: "ट्यूशन फीस वेवर (TFW) एवं छात्राओं हेतु शून्य शिक्षण शुल्क योजना संबंधी दिशा-निर्देश",
    date: "2026-05-18",
    session: "2026-27",
    category: "Scholarships",
    summary: "Detailed criteria and verification norms for 5% TFW supernumerary seats and complete tuition fee exemption for female students in Rajasthan Government Polytechnic Colleges.",
    summaryHindi: "राजकीय पॉलिटेक्निक कॉलेजों में 5% TFW सुपरन्यूमरेरी सीटों एवं बालिकाओं हेतु शत-प्रतिशत ट्यूशन फीस माफी के प्रमाणीकरण नियम।",
    fullContent: `DIRECTORATE OF TECHNICAL EDUCATION, RAJASTHAN
W-6 Residency Road, Jodhpur

Office Order: DTE/TFW-Sch/2026/78
Dated: 18-05-2026

SUBJECT: COMPREHENSIVE GUIDELINES FOR TUITION FEE CONCESSIONS (SESSION 2026–27)

In continuation to state government education upliftment policy:
1. GIRL STUDENTS CONCESSION:
Every female candidate admitted to Government Polytechnic Colleges in Rajasthan shall enjoy 100% exemption from Tuition Fee for all 3 years. Only development & exam fees will be applicable.

2. TUITION FEE WAIVER (TFW) SEATS:
• Up to 5% supernumerary seats in every branch over and above AICTE approved intake.
• Available to both male and female candidates whose annual parental income does not exceed ₹8,00,000/-.
• Income certificate must be issued in prescribed Rajasthan Government Revenue Performa 'I' by Tehsildar / Executive Magistrate.

3. SC/ST POST-MATRIC REIMBURSEMENT:
All eligible SC/ST students can claim full reimbursement of college fee and hostel allowance through Social Justice and Empowerment Portal (SJED/SSO).
Joint Director (Academics), DTE Rajasthan`,
    keyDates: [
      { event: "Income Certificate Validity Check", date: "Before Document Verification" },
      { event: "TFW Seat Allocation", date: "Along with Round-1 Allotment" }
    ],
    isVerified: true
  }
];
