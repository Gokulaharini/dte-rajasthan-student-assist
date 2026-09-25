import React, { useState } from 'react';
import { Language } from '../types';
import {
  Bell,
  ExternalLink,
  FileText,
  Calendar,
  Building2,
  Sparkles,
  X,
  ChevronRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Globe,
  HelpCircle,
  Info
} from 'lucide-react';

export interface NoticeItem {
  id: string;
  badge: string;
  text: string;
  url: string;
  urlLabel: string;
  query: string;
  targetTab?: 'chat' | 'admissions' | 'colleges';
  circularNo: string;
  date: string;
  authority: string;
  summary: string;
  keyPoints: string[];
}

interface NoticeTickerProps {
  language: Language;
  onSelectNoticeQuery: (query: string, targetTab?: 'chat' | 'admissions' | 'colleges') => void;
  onNavigateTab?: (tab: 'chat' | 'colleges' | 'admissions') => void;
}

export const NoticeTicker: React.FC<NoticeTickerProps> = ({
  language,
  onSelectNoticeQuery,
  onNavigateTab
}) => {
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);
  const [showPortalLinks, setShowPortalLinks] = useState(false);

  const notices: NoticeItem[] = [
    {
      id: 'counseling-2026',
      badge: language === 'hi' ? 'सत्र 2026–27' : 'Session 2026–27',
      text:
        language === 'hi'
          ? 'केंद्रीकृत पॉलिटेक्निक डिप्लोमा ऑनलाइन काउंसलिंग पोर्टल SSO राजस्थान पर सक्रिय। 10वीं उत्तीर्ण छात्र आवेदन करें।'
          : 'Centralized Polytechnic Diploma Online Counseling Portal is active on SSO Rajasthan. 10th pass eligible.',
      url: 'https://sso.rajasthan.gov.in',
      urlLabel: 'sso.rajasthan.gov.in',
      query:
        language === 'hi'
          ? 'पॉलिटेक्निक 2026-27 केंद्रीकृत काउंसलिंग की अंतिम तिथि, मेरिट सूची और प्रक्रिया क्या है?'
          : 'What is the schedule, merit list, and process for 2026-27 centralized polytechnic counseling?',
      targetTab: 'admissions',
      circularNo: 'DTE/Raj/Adm/2026-27/Counseling/F.1',
      date: 'May 2026',
      authority:
        language === 'hi'
          ? 'तकनीकी शिक्षा निदेशालय (DTE), राजस्थान, जोधपुर'
          : 'Directorate of Technical Education (DTE), Rajasthan, Jodhpur',
      summary:
        language === 'hi'
          ? 'राजस्थान के सभी 44+ राजकीय पॉलिटेक्निक कॉलेजों में प्रथम वर्ष इंजीनियरिंग डिप्लोमा प्रवेश हेतु केंद्रीकृत ऑनलाइन काउंसलिंग SSO पोर्टल पर उपलब्ध है।'
          : 'Centralized online counseling for 1st Year Engineering Diploma admissions across all 44+ Government Polytechnic Colleges is active via SSO Rajasthan.',
      keyPoints:
        language === 'hi'
          ? [
              'पात्रता: 10वीं कक्षा न्यूनतम 35% अंकों के साथ उत्तीर्ण (गणित व विज्ञान अनिवार्य विषय)।',
              'प्रवेश का आधार: 10वीं बोर्ड परीक्षा प्राप्तांकों की राज्य स्तरीय मेरिट (कोई प्रवेश परीक्षा नहीं)।',
              'आवेदन माध्यम: केवल राजस्थान SSO पोर्टल (Citizen App -> DTE Admission) द्वारा।',
              'पंजीकरण शुल्क: ₹300 (सामान्य/OBC) तथा ₹150 (SC/ST)।'
            ]
          : [
              'Eligibility: Class 10th pass with min 35% aggregate marks (Maths & Science mandatory).',
              'Admission Criteria: Direct 10th board marks merit ranking (No separate entrance test).',
              'Mode of Application: Exclusively via Rajasthan SSO Portal (Citizen App -> DTE Admission).',
              'Registration Fee: ₹300 (General/OBC) and ₹150 (SC/ST candidates).'
            ]
    },
    {
      id: 'girls-fee-waiver',
      badge: language === 'hi' ? 'छात्राओं हेतु छूट' : 'Girls Concession',
      text:
        language === 'hi'
          ? 'राजकीय पॉलिटेक्निक कॉलेजों में प्रवेशित सभी छात्राओं हेतु 100% ट्यूशन फीस पूर्णतः माफ।'
          : '100% Tuition Fee Exemption for all female candidates in Government Polytechnic Colleges.',
      url: 'https://dte.rajasthan.gov.in',
      urlLabel: 'dte.rajasthan.gov.in',
      query:
        language === 'hi'
          ? 'छात्राओं के लिए राजस्थान पॉलिटेक्निक में 100% फीस छूट के क्या आधिकारिक नियम हैं?'
          : 'What are the official rules for 100% tuition fee waiver for female candidates in Rajasthan polytechnics?',
      targetTab: 'admissions',
      circularNo: 'Govt/Raj/DTE/Order/Fee-Exemption/Girls/2026',
      date: 'April 2026',
      authority:
        language === 'hi'
          ? 'तकनीकी शिक्षा विभाग, राजस्थान सरकार'
          : 'Technical Education Department, Govt. of Rajasthan',
      summary:
        language === 'hi'
          ? 'महिला सशक्तिकरण एवं तकनीकी शिक्षा को बढ़ावा देने के उद्देश्य से राजस्थान के सभी राजकीय पॉलिटेक्निक संस्थानों में छात्राओं से ट्यूशन फीस नहीं ली जाती है।'
          : 'Under the Govt of Rajasthan women empowerment policy, female students admitted to Government Polytechnic Colleges pay zero tuition fee.',
      keyPoints:
        language === 'hi'
          ? [
              'ट्यूशन फीस: ₹0 (पूर्णतः 100% छूट सभी 3 वर्षों के लिए लागू)।',
              'केवल मामूली कॉशन मनी एवं विकास शुल्क (लगभग ₹1,500 - ₹2,500 प्रति वर्ष) देय है।',
              'यह छूट राजस्थान की सभी मूल निवासी छात्राओं पर बिना आय सीमा के लागू है।'
            ]
          : [
              'Tuition Fee: ₹0 (100% waiver applied automatically across all 3 years).',
              'Only nominal refundable caution money and student development fund (~₹1,500 - ₹2,500/year) applies.',
              'Applies to all bonafide female residents of Rajasthan regardless of family income.'
            ]
    },
    {
      id: 'tfw-quota',
      badge: language === 'hi' ? 'TFW कोटा' : 'TFW Scheme',
      text:
        language === 'hi'
          ? '8 लाख से कम वार्षिक आय वाले परिवारों के छात्रों हेतु 5% सुपरन्यूमरेरी ट्यूशन फीस वेवर सीटें। आय प्रमाण पत्र अनिवार्य।'
          : '5% Supernumerary Tuition Fee Waiver (TFW) seats for family income < 8 LPA. Tehsildar income certificate required.',
      url: 'https://dte.rajasthan.gov.in',
      urlLabel: 'dte.rajasthan.gov.in',
      query:
        language === 'hi'
          ? 'TFW (ट्यूशन फीस वेवर) योजना के तहत आवेदन कैसे करें और कौन-से दस्तावेज चाहिए?'
          : 'How to apply under Tuition Fee Waiver (TFW) scheme and what documents are required?',
      targetTab: 'admissions',
      circularNo: 'AICTE/DTE-Raj/TFW-Quota/2026-27/Norms',
      date: 'May 2026',
      authority:
        language === 'hi'
          ? 'अखिल भारतीय तकनीकी शिक्षा परिषद (AICTE) एवं DTE राजस्थान'
          : 'AICTE New Delhi & DTE Rajasthan',
      summary:
        language === 'hi'
          ? 'आर्थिक रूप से कमजोर मेधावी छात्रों के लिए प्रत्येक अनुमोदित ब्रांच में स्वीकृत सीटों के अतिरिक्त 5% सुपरन्यूमरेरी TFW सीटें उपलब्ध हैं।'
          : '5% extra supernumerary seats in every branch for economically weaker meritorious students whose family income is below ₹8.00 Lakh per annum.',
      keyPoints:
        language === 'hi'
          ? [
              'पारिवारिक आय सीमा: सभी स्रोतों से ₹8.00 लाख प्रति वर्ष से कम।',
              'सक्षम अधिकारी (तहसीलदार / कार्यकारी मजिस्ट्रेट) द्वारा जारी डिजिटल आय प्रमाण पत्र अनिवार्य।',
              'काउंसलिंग फॉर्म भरते समय TFW विकल्प को "YES" चुनना अनिवार्य है।',
              'चयनित छात्र को संपूर्ण 3 वर्षों तक कोई ट्यूशन फीस नहीं देनी होती।'
            ]
          : [
              'Income Ceiling: Less than ₹8.00 Lakh per annum from all verifiable sources.',
              'Income Certificate issued by Tehsildar / Executive Magistrate is mandatory.',
              'Candidate must select "YES" for TFW category in the online counseling form.',
              'Tuition fee waived for the entire 3-year diploma duration.'
            ]
    },
    {
      id: 'leep-lateral-entry',
      badge: language === 'hi' ? 'लेटरल एंट्री (LEEP)' : 'Lateral Entry',
      text:
        language === 'hi'
          ? '12वीं PCM अथवा 2-वर्षीय ITI उत्तीर्ण छात्र द्वितीय वर्ष में सीधे प्रवेश हेतु आवेदन कर सकते हैं।'
          : '12th PCM or 2-Year ITI pass holders can apply directly for 2nd Year Diploma admissions.',
      url: 'https://bter.rajasthan.gov.in',
      urlLabel: 'bter.rajasthan.gov.in',
      query:
        language === 'hi'
          ? 'लेटरल एंट्री (LEEP) द्वितीय वर्ष पॉलिटेक्निक प्रवेश के नियम, पात्रता और शाखा आवंटन'
          : 'Rules, eligibility, and branch allocation for Lateral Entry (LEEP) direct 2nd year diploma',
      targetTab: 'admissions',
      circularNo: 'BTER/LEEP-LateralEntry/2026-27/09',
      date: 'May 2026',
      authority:
        language === 'hi'
          ? 'प्राविधिक शिक्षा मण्डल (BTER), राजस्थान, जोधपुर'
          : 'Board of Technical Education Rajasthan (BTER), Jodhpur',
      summary:
        language === 'hi'
          ? '12वीं विज्ञान (गणित) अथवा 2-वर्षीय NCVT/SCVT मान्यता प्राप्त ITI उत्तीर्ण विद्यार्थियों को सीधे डिप्लोमा तृतीय सेमेस्टर में प्रवेश दिया जाता है।'
          : 'Direct lateral admission into 3rd Semester (2nd Year) of 3-Year Engineering Diploma for 12th Science (PCM) or 2-Year ITI graduates.',
      keyPoints:
        language === 'hi'
          ? [
              'शैक्षणिक योग्यता: 12वीं PCM (न्यूनतम 45% अंक) अथवा 2-वर्षीय ITI उत्तीर्ण।',
              'कोर्स अवधि: सीधे द्वितीय वर्ष में प्रवेश, अतः डिप्लोमा केवल 2 वर्ष में पूर्ण।',
              'सीट आरक्षण: कुल स्वीकृत सीटों का 10% लेटरल एंट्री हेतु आरक्षित होता है।'
            ]
          : [
              'Qualification: 12th PCM (minimum 45% marks) or 2-Year approved ITI certificate.',
              'Duration: Completes diploma in 2 years instead of 3 years.',
              'Seat Reservation: 10% supernumerary seats reserved for lateral entry candidates.'
            ]
    },
    {
      id: 'scholarship-portal',
      badge: language === 'hi' ? 'छात्रवृत्ति पोर्टल' : 'Scholarships',
      text:
        language === 'hi'
          ? 'उत्तर मैट्रिक छात्रवृत्ति (SJED) एवं AICTE प्रगति/सक्षम योजना हेतु आवेदन प्रारंभ। पोर्टल पर लिंक देखें।'
          : 'Post-Matric Scholarship (SJED) & AICTE Pragati/Saksham schemes open. View portal links.',
      url: 'https://hte.rajasthan.gov.in',
      urlLabel: 'hte.rajasthan.gov.in',
      query:
        language === 'hi'
          ? 'पॉलिटेक्निक छात्रों हेतु राजस्थान उत्तर मैट्रिक छात्रवृत्ति एवं AICTE प्रगति योजना के नियम क्या हैं?'
          : 'What are the rules and amounts for Rajasthan Post-Matric Scholarship and AICTE Pragati for polytechnic students?',
      targetTab: 'admissions',
      circularNo: 'HTE/Scholarships/2026-27/Portal-Open',
      date: 'June 2026',
      authority:
        language === 'hi'
          ? 'उच्च एवं तकनीकी शिक्षा (HTE) एवं सामाजिक न्याय विभाग'
          : 'Higher & Technical Education (HTE) & SJED Rajasthan',
      summary:
        language === 'hi'
          ? 'राजस्थान के राजकीय पॉलिटेक्निक छात्रों के लिए सामाजिक न्याय अधिकारिता विभाग एवं AICTE की विभिन्न छात्रवृत्तियां उपलब्ध हैं।'
          : 'Multiple scholarships covering full academic expenses and monthly stipends are available for polytechnic students.',
      keyPoints:
        language === 'hi'
          ? [
              'उत्तर मैट्रिक छात्रवृत्ति: SC/ST/SBC/BPL छात्रों हेतु 100% शुल्क पुनर्भरण एवं निर्वाह भत्ता।',
              'AICTE प्रगति छात्रवृत्ति: बालिकाओं हेतु ₹50,000 प्रति वर्ष प्रोत्साहन राशि।',
              'आवेदन माध्यम: SSO राजस्थान (Scholarship Portal) द्वारा।'
            ]
          : [
              'Post-Matric Scheme: 100% non-refundable fees reimbursed + monthly maintenance for SC/ST/SBC/BPL.',
              'AICTE Pragati Scheme: ₹50,000 per year support exclusively for female students.',
              'Application Mode: SSO Rajasthan Portal (SJED Scholarship app).'
            ]
    }
  ];

  const officialPortals = [
    {
      name: language === 'hi' ? 'राजस्थान SSO प्रवेश पोर्टल' : 'Rajasthan SSO Admission Portal',
      url: 'https://sso.rajasthan.gov.in',
      desc: language === 'hi' ? 'काउंसलिंग एवं ऑनलाइन आवेदन' : 'Counseling & Online Application'
    },
    {
      name: language === 'hi' ? 'तकनीकी शिक्षा निदेशालय (DTE)' : 'Directorate of Technical Education (DTE)',
      url: 'https://dte.rajasthan.gov.in',
      desc: language === 'hi' ? 'आधिकारिक नीति, नियम व कॉलेज सूची' : 'Official Policies, Norms & Colleges'
    },
    {
      name: language === 'hi' ? 'प्राविधिक शिक्षा मण्डल (BTER)' : 'Board of Technical Education (BTER)',
      url: 'https://bter.rajasthan.gov.in',
      desc: language === 'hi' ? 'परीक्षा समय-सारणी, परिणाम व अंकतालिका' : 'Exam Time Table, Results & Marks'
    },
    {
      name: language === 'hi' ? 'उच्च व तकनीकी शिक्षा पोर्टल (HTE)' : 'Higher & Tech Education Portal (HTE)',
      url: 'https://hte.rajasthan.gov.in',
      desc: language === 'hi' ? 'छात्रवृत्ति व वित्तीय सहायता' : 'Scholarships & Financial Aid'
    }
  ];

  return (
    <>
      {/* Ticker Bar Container */}
      <div className="bg-amber-50/95 border-b border-amber-200/90 py-2 px-4 sm:px-6 shadow-2xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center gap-2 text-xs">
          {/* Ticker Label & Quick Links Toggle */}
          <div className="flex items-center justify-between sm:justify-start gap-2.5 font-bold text-amber-950 flex-shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center shadow-xs">
                <Bell className="w-3 h-3 animate-bounce" />
              </span>
              <span className="uppercase tracking-wider font-extrabold text-[11px] sm:text-xs text-amber-900">
                {language === 'hi' ? 'आधिकारिक सूचनाएं (2026–27):' : 'OFFICIAL NOTICES (2026–27):'}
              </span>
            </div>

            {/* Quick Portals dropdown toggle */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowPortalLinks(!showPortalLinks)}
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-200/70 hover:bg-amber-300 text-amber-900 rounded-md font-semibold text-[11px] transition-colors cursor-pointer border border-amber-300/80"
                title="View verified Rajasthan Government portal links"
              >
                <Globe className="w-3 h-3 text-amber-800" />
                <span>{language === 'hi' ? 'सरकारी पोर्टल ↗' : 'Govt Portals ↗'}</span>
              </button>

              {/* Dropdown Menu for Official Portals */}
              {showPortalLinks && (
                <div className="absolute left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-200 p-2 z-50 animate-in fade-in zoom-in-95">
                  <div className="flex items-center justify-between px-2 py-1.5 border-b border-slate-100 text-xs font-bold text-slate-800">
                    <span>{language === 'hi' ? 'आधिकारिक सरकारी वेबसाइट्स' : 'Verified Official Portals'}</span>
                    <button
                      type="button"
                      onClick={() => setShowPortalLinks(false)}
                      className="text-slate-400 hover:text-slate-700 p-0.5 rounded cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="space-y-1 mt-1">
                    {officialPortals.map((portal, idx) => (
                      <a
                        key={idx}
                        href={portal.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-2.5 py-2 rounded-lg hover:bg-amber-50 border border-transparent hover:border-amber-200 transition-all text-left group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-slate-900 group-hover:text-amber-800 text-xs">
                            {portal.name}
                          </span>
                          <ExternalLink className="w-3 h-3 text-amber-600 opacity-70 group-hover:opacity-100" />
                        </div>
                        <span className="text-[10px] text-slate-500 block truncate">{portal.desc}</span>
                        <span className="text-[10px] font-mono text-emerald-700 font-medium">
                          {portal.url.replace('https://', '')}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Scrolling Notices Track */}
          <div className="flex-1 overflow-x-auto no-scrollbar flex items-center gap-3 py-0.5">
            {notices.map((n) => (
              <div
                key={n.id}
                className="inline-flex items-center gap-2 whitespace-nowrap bg-white hover:bg-amber-50/90 border border-amber-200 rounded-full pl-2.5 pr-2 py-1 text-slate-800 transition-all shadow-2xs group flex-shrink-0"
              >
                {/* Notice Badge */}
                <button
                  type="button"
                  onClick={() => setSelectedNotice(n)}
                  className="cursor-pointer"
                  title="Click to view official circular details"
                >
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-amber-600 text-white group-hover:bg-amber-700 transition-colors shadow-2xs">
                    {n.badge}
                  </span>
                </button>

                {/* Notice Headline (opens details modal) */}
                <button
                  type="button"
                  onClick={() => setSelectedNotice(n)}
                  className="hover:text-amber-950 font-medium text-left cursor-pointer transition-colors max-w-xs sm:max-w-md md:max-w-none truncate"
                  title="Click to view full official notification"
                >
                  {n.text}
                </button>

                {/* Direct Working Official Link Button */}
                <a
                  href={n.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100/90 hover:bg-amber-200 text-amber-900 font-bold text-[10px] transition-colors border border-amber-300/80 cursor-pointer flex-shrink-0"
                  title={`Open official website: ${n.url}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>{n.urlLabel}</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>

                {/* Quick AI Ask Button */}
                <button
                  type="button"
                  onClick={() => onSelectNoticeQuery(n.query, n.targetTab)}
                  className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-amber-700 text-[10px] font-semibold transition-colors cursor-pointer border border-slate-200 flex-shrink-0"
                  title="Ask AI Chatbot about this notice"
                >
                  <Sparkles className="w-2.5 h-2.5 text-amber-600" />
                  <span>{language === 'hi' ? 'पूछें' : 'Ask'}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Official Notice Details Modal */}
      {selectedNotice && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in"
          onClick={() => setSelectedNotice(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white p-4 sm:p-5 flex items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-white/20 rounded text-[11px] font-bold uppercase tracking-wider backdrop-blur-xs">
                    {selectedNotice.badge}
                  </span>
                  <span className="text-xs text-amber-100 flex items-center gap-1 font-mono">
                    <Calendar className="w-3 h-3" />
                    {selectedNotice.date}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold leading-tight">
                  {selectedNotice.text}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedNotice(null)}
                className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-700">
              {/* Issuing Authority & Circular No */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-1.5">
                <div className="flex items-center gap-2 text-slate-900 font-semibold">
                  <Building2 className="w-4 h-4 text-amber-600" />
                  <span>{selectedNotice.authority}</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 font-mono">
                  <span>Ref: {selectedNotice.circularNo}</span>
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {language === 'hi' ? 'सत्यापित सरकारी आदेश' : 'Verified Official Order'}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                  <Info className="w-3.5 h-3.5 text-amber-600" />
                  {language === 'hi' ? 'विवरण एवं मुख्य प्रावधान:' : 'Summary & Key Provisions:'}
                </h4>
                <p className="text-slate-700 leading-relaxed bg-amber-50/50 p-3 rounded-lg border border-amber-100">
                  {selectedNotice.summary}
                </p>
              </div>

              {/* Key points checklist */}
              <div>
                <h4 className="font-bold text-slate-900 mb-2 text-xs uppercase tracking-wider">
                  {language === 'hi' ? 'छात्रों हेतु आवश्यक दिशा-निर्देश:' : 'Essential Guidelines for Students:'}
                </h4>
                <ul className="space-y-2">
                  {selectedNotice.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Official Source Link Card */}
              <div className="border border-emerald-200 bg-emerald-50/60 rounded-xl p-3 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-xs font-bold text-emerald-900">
                    {language === 'hi' ? 'आधिकारिक स्रोत एवं पोर्टल लिंक:' : 'Official Source & Portal Link:'}
                  </div>
                  <div className="text-xs text-emerald-800 font-mono truncate">{selectedNotice.url}</div>
                </div>
                <a
                  href={selectedNotice.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-xs flex-shrink-0 cursor-pointer"
                >
                  <span>{language === 'hi' ? 'वेबसाइट खोलें' : 'Open Portal'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="bg-slate-50 border-t border-slate-200 p-4 flex flex-wrap items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => setSelectedNotice(null)}
                className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-200 text-xs font-semibold transition-colors cursor-pointer"
              >
                {language === 'hi' ? 'बंद करें' : 'Close'}
              </button>

              <div className="flex items-center gap-2">
                {selectedNotice.targetTab && onNavigateTab && (
                  <button
                    type="button"
                    onClick={() => {
                      onNavigateTab(selectedNotice.targetTab!);
                      setSelectedNotice(null);
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
                  >
                    <span>
                      {language === 'hi' ? 'संबंधित सेक्शन देखें' : 'View Section'}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => {
                    onSelectNoticeQuery(selectedNotice.query, 'chat');
                    setSelectedNotice(null);
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>
                    {language === 'hi' ? 'DTE असिस्ट से प्रश्न पूछें' : 'Ask DTE Assist'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
