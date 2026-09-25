import React, { useState, useEffect } from 'react';
import { Language, ChatMessage } from './types';
import { Header } from './components/Header';
import { NoticeTicker } from './components/NoticeTicker';
import { ChatbotSection } from './components/ChatbotSection';
import { CollegeExplorer } from './components/CollegeExplorer';
import { AdmissionGuide2026 } from './components/AdmissionGuide2026';
import { SourceSyncModal } from './components/SourceSyncModal';
import { Footer } from './components/Footer';
import {
  MessageSquare,
  Building2,
  Calendar,
  FileCheck,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { OFFICIAL_SOURCES_META } from './data/dteKnowledgeBase';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [activeTab, setActiveTab] = useState<'chat' | 'colleges' | 'admissions'>('chat');
  const [isSyncModalOpen, setIsSyncModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Initial welcome message in both languages
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'assistant',
      text:
        language === 'hi'
          ? `नमस्ते! मैं 'DTE असिस्ट' (DTE Assist) हूँ — 'DTE राजस्थान स्टूडेंट असिस्ट' पोर्टल पर तकनीकी शिक्षा निदेशालय (DTE), राजस्थान सरकार का आधिकारिक AI छात्र सहायक।\n\nसत्र 2026–27 हेतु मैं आपकी निम्नलिखित विषयों में सहायता कर सकता हूँ:\n• 10वीं के बाद 3-वर्षीय पॉलिटेक्निक डिप्लोमा प्रवेश (SSO पोर्टल पर केंद्रीकृत काउंसलिंग)\n• 12वीं (PCM) / ITI उत्तीर्ण छात्रों हेतु लेटरल एंट्री (LEEP 2nd Year)\n• राजस्थान के 44+ राजकीय पॉलिटेक्निक कॉलेजों की सीटें एवं शाखाएं\n• छात्राओं हेतु 100% ट्यूशन फीस माफी एवं TFW (ट्यूशन फीस वेवर) योजना\n• BTER सेमेस्टर परीक्षा नियम, बैक पेपर एवं पुनर्मूल्यांकन\n• आवश्यक दस्तावेज एवं जिला नोडल केंद्र सत्यापन\n\nआप हिंदी, अंग्रेजी अथवा आवाज़ (Microphone) द्वारा प्रश्न पूछ सकते हैं!`
          : `Greetings! I am "DTE Assist" — the official AI Student Assistance Chatbot for the Directorate of Technical Education (DTE), Government of Rajasthan, on the DTE Rajasthan Student Assist portal.\n\nFor Session 2026–27, I am here to assist you with:\n• Centralized Polytechnic Diploma admissions (via SSO Rajasthan portal without entrance exam)\n• Lateral Entry (LEEP) direct 2nd year admissions for 12th PCM / ITI candidates\n• Directory of 44+ Government Polytechnic Colleges with branches and intake\n• Fee concessions: 100% Tuition Fee Exemption for female students & 5% TFW supernumerary quota\n• BTER semester examination regulations, passing criteria, and revaluation\n• Mandatory documents checklist for Nodal Center verification\n\nYou can type your query in English/Hindi or use the Voice Microphone button!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      sources: [
        { title: 'Directorate of Technical Education, Rajasthan', url: OFFICIAL_SOURCES_META.dtePortal },
        { title: 'SSO Rajasthan Centralized Admissions', url: OFFICIAL_SOURCES_META.ssoPortal },
      ],
      suggestedFollowUps:
        language === 'hi'
          ? [
              'सत्र 2026-27 प्रवेश पात्रता एवं प्रक्रिया',
              'जयपुर और जोधपुर के राजकीय कॉलेज',
              'छात्राओं हेतु फीस में क्या छूट है?',
            ]
          : [
              'What is the 2026–27 Admission process?',
              'Show Government Colleges in Jaipur and Jodhpur',
              'What are fee concessions for girls and TFW?',
            ],
    },
  ]);

  // Update welcome message text when language toggles if it's the only message
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 'welcome-msg') {
        return [
          {
            ...prev[0],
            text:
              language === 'hi'
                ? `नमस्ते! मैं 'DTE असिस्ट' (DTE Assist) हूँ — 'DTE राजस्थान स्टूडेंट असिस्ट' पोर्टल पर तकनीकी शिक्षा निदेशालय (DTE), राजस्थान सरकार का आधिकारिक AI छात्र सहायक।\n\nसत्र 2026–27 हेतु मैं आपकी निम्नलिखित विषयों में सहायता कर सकता हूँ:\n• 10वीं के बाद 3-वर्षीय पॉलिटेक्निक डिप्लोमा प्रवेश (SSO पोर्टल पर केंद्रीकृत काउंसलिंग)\n• 12वीं (PCM) / ITI उत्तीर्ण छात्रों हेतु लेटरल एंट्री (LEEP 2nd Year)\n• राजस्थान के 44+ राजकीय पॉलिटेक्निक कॉलेजों की सीटें एवं शाखाएं\n• छात्राओं हेतु 100% ट्यूशन फीस माफी एवं TFW (ट्यूशन फीस वेवर) योजना\n• BTER सेमेस्टर परीक्षा नियम, बैक पेपर एवं पुनर्मूल्यांकन\n• आवश्यक दस्तावेज एवं जिला नोडल केंद्र सत्यापन\n\nआप हिंदी, अंग्रेजी अथवा आवाज़ (Microphone) द्वारा प्रश्न पूछ सकते हैं!`
                : `Greetings! I am "DTE Assist" — the official AI Student Assistance Chatbot for the Directorate of Technical Education (DTE), Government of Rajasthan, on the DTE Rajasthan Student Assist portal.\n\nFor Session 2026–27, I am here to assist you with:\n• Centralized Polytechnic Diploma admissions (via SSO Rajasthan portal without entrance exam)\n• Lateral Entry (LEEP) direct 2nd year admissions for 12th PCM / ITI candidates\n• Directory of 44+ Government Polytechnic Colleges with branches and intake\n• Fee concessions: 100% Tuition Fee Exemption for female students & 5% TFW supernumerary quota\n• BTER semester examination regulations, passing criteria, and revaluation\n• Mandatory documents checklist for Nodal Center verification\n\nYou can type your query in English/Hindi or use the Voice Microphone button!`,
            suggestedFollowUps:
              language === 'hi'
                ? [
                    'सत्र 2026-27 प्रवेश पात्रता एवं प्रक्रिया',
                    'जयपुर और जोधपुर के राजकीय कॉलेज',
                    'छात्राओं हेतु फीस में क्या छूट है?',
                  ]
                : [
                    'What is the 2026–27 Admission process?',
                    'Show Government Colleges in Jaipur and Jodhpur',
                    'What are fee concessions for girls and TFW?',
                  ],
          },
        ];
      }
      return prev;
    });
  }, [language]);

  const handleSendMessage = async (queryText: string) => {
    if (!queryText.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: queryText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const history = messages
        .filter((m) => m.id !== 'welcome-msg')
        .slice(-6)
        .map((m) => ({ sender: m.sender, text: m.text }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: queryText,
          language,
          conversationHistory: history,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to fetch response');
      }

      const data = await res.json();

      const assistantMsg: ChatMessage = {
        id: `asst-${Date.now()}`,
        sender: 'assistant',
        text: data.answer || data.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sources: data.sources || [
          { title: 'DTE Rajasthan Official Portal', url: OFFICIAL_SOURCES_META.dtePortal },
        ],
        isDeterministicFallback: Boolean(data.isDeterministicFallback),
        confidence: data.confidence,
        suggestedFollowUps: data.suggestedFollowUps,
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.warn('Chat error, inserting fallback message:', err);
      const fallbackMsg: ChatMessage = {
        id: `asst-${Date.now()}`,
        sender: 'assistant',
        text:
          language === 'hi'
            ? `राजस्थान तकनीकी शिक्षा विभाग (सत्र 2026-27):\n• 10वीं उत्तीर्ण छात्र 35% न्यूनतम अंकों के साथ 3-वर्षीय पॉलिटेक्निक डिप्लोमा में सीधे मेरिट से प्रवेश ले सकते हैं।\n• ऑनलाइन काउंसलिंग SSO पोर्टल (sso.rajasthan.gov.in) पर आयोजित की जाती है।\n• छात्राओं हेतु 100% ट्यूशन फीस माफ है।\n• किसी भी सहायता हेतु DTE जोधपुर हेल्पलाइन 0291-2434395 पर संपर्क करें।`
            : `Department of Technical Education, Rajasthan (Session 2026–27):\n• 10th pass candidates with min 35% marks are eligible for 3-Year Polytechnic Engineering Diploma via centralized merit-based counseling.\n• Online choice filling takes place on SSO Rajasthan (sso.rajasthan.gov.in).\n• Female candidates receive 100% tuition fee waiver in Government Polytechnic colleges.\n• For official queries, contact DTE Jodhpur at 0291-2434395.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isDeterministicFallback: true,
        sources: [
          { title: 'DTE Rajasthan Jodhpur', url: OFFICIAL_SOURCES_META.dtePortal },
        ],
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickQuery = (
    query: string,
    targetTab: 'chat' | 'admissions' | 'colleges' = 'chat'
  ) => {
    setActiveTab(targetTab);
    if (targetTab === 'chat') {
      handleSendMessage(query);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'welcome-msg',
        sender: 'assistant',
        text:
          language === 'hi'
            ? 'बातचीत रीसेट कर दी गई है। DTE असिस्ट से राजस्थान तकनीकी शिक्षा, 2026-27 प्रवेश अथवा BTER परीक्षा संबंधी प्रश्न पूछें।'
            : 'Conversation reset. Ask DTE Assist your questions regarding Rajasthan Technical Education, 2026–27 admissions, or BTER examinations.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sources: [
          { title: 'Directorate of Technical Education, Rajasthan', url: OFFICIAL_SOURCES_META.dtePortal },
        ],
      },
    ]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100/70 font-sans text-slate-900 selection:bg-amber-200">
      {/* Official Header */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        onOpenSync={() => setIsSyncModalOpen(true)}
        onQuickQuery={handleQuickQuery}
      />

      {/* Breaking / Active Notification Ticker */}
      <NoticeTicker
        language={language}
        onSelectNoticeQuery={handleQuickQuery}
        onNavigateTab={(tab) => setActiveTab(tab)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6">
        {/* Navigation Tabs Bar */}
        <div className="bg-white rounded-2xl p-1.5 border border-slate-200 shadow-xs mb-6 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 min-w-max">
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'chat'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>{language === 'hi' ? 'DTE असिस्ट AI चैटबॉट' : 'DTE Assist AI'}</span>
            </button>

            <button
              onClick={() => setActiveTab('colleges')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'colleges'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>{language === 'hi' ? 'राजकीय कॉलेज निर्देशिका (44+)' : 'Govt Colleges Directory'}</span>
            </button>

            <button
              onClick={() => setActiveTab('admissions')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'admissions'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>{language === 'hi' ? 'सत्र 2026–27 प्रवेश एवं फीस' : '2026–27 Admissions & Fees'}</span>
            </button>
          </div>
        </div>

        {/* Tab 1: AI Chatbot Section */}
        {activeTab === 'chat' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main Chat Frame */}
            <div className="lg:col-span-8">
              <ChatbotSection
                language={language}
                messages={messages}
                isLoading={isLoading}
                onSendMessage={handleSendMessage}
                onClearChat={handleClearChat}
                onQuickQuery={handleQuickQuery}
              />
            </div>

            {/* Sidebar Quick Card */}
            <div className="lg:col-span-4 space-y-4">
              {/* Admission Quick Links */}
              <div className="bg-gradient-to-br from-amber-600 to-amber-800 text-white rounded-2xl p-5 shadow-xs space-y-3">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-200" />
                  <h3 className="font-bold text-sm">
                    {language === 'hi' ? '2026–27 प्रमुख लाभ एवं योजनाएं' : 'Session 2026–27 Key Schemes'}
                  </h3>
                </div>
                <ul className="text-xs space-y-2 text-amber-100">
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-300 font-bold">✓</span>
                    <span>{language === 'hi' ? 'राजकीय कॉलेजों में बालिकाओं हेतु 100% ट्यूशन फीस मुक्ति' : '100% Tuition Fee Exemption for all girls in Govt Colleges'}</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-300 font-bold">✓</span>
                    <span>{language === 'hi' ? 'TFW कोटा: 8 लाख से कम आय पर 5% अतिरिक्त सीटें' : 'TFW Scheme: 5% extra seats for family income < 8 LPA'}</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-amber-300 font-bold">✓</span>
                    <span>{language === 'hi' ? '12वीं PCM / 2-वर्षीय ITI हेतु सीधा द्वितीय वर्ष (LEEP) प्रवेश' : 'Direct 2nd Year (LEEP) for 12th PCM / ITI students'}</span>
                  </li>
                </ul>

                <button
                  onClick={() => setActiveTab('admissions')}
                  className="w-full py-2 bg-slate-950 hover:bg-slate-900 text-amber-300 rounded-xl text-xs font-bold transition-colors cursor-pointer mt-2"
                >
                  {language === 'hi' ? 'विस्तृत प्रवेश मार्गदर्शिका देखें' : 'View Full Admission Guide'}
                </button>
              </div>

              {/* Direct Helpline Box */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs">
                <h4 className="font-bold text-xs text-slate-800 uppercase tracking-wider mb-2">
                  {language === 'hi' ? 'आधिकारिक संपर्क एवं हेल्पलाइन' : 'Official Helpdesk'}
                </h4>
                <div className="space-y-2 text-xs text-slate-600">
                  <p>
                    <strong className="text-slate-800">DTE Admissions:</strong> 0291-2434395
                  </p>
                  <p>
                    <strong className="text-slate-800">BTER Jodhpur Exams:</strong> 0291-2430440
                  </p>
                  <p>
                    <strong className="text-slate-800">Email:</strong> dte_raj@yahoo.com
                  </p>
                  <p className="text-[11px] text-slate-500 pt-1">
                    कार्य दिवसों में प्रातः 10:00 से सायं 5:00 बजे तक।
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Colleges Explorer */}
        {activeTab === 'colleges' && (
          <CollegeExplorer language={language} onAskAboutCollege={handleQuickQuery} />
        )}

        {/* Tab 3: Admission Guide 2026-27 */}
        {activeTab === 'admissions' && (
          <AdmissionGuide2026 language={language} onAskSarthi={handleQuickQuery} />
        )}
      </main>

      {/* Official Source Sync Modal */}
      <SourceSyncModal
        language={language}
        isOpen={isSyncModalOpen}
        onClose={() => setIsSyncModalOpen(false)}
      />

      {/* Official Footer */}
      <Footer language={language} />
    </div>
  );
}
