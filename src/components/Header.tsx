import React from 'react';
import { Language } from '../types';
import { Phone, Mail, Globe, RefreshCw, Sparkles, Building2, HelpCircle } from 'lucide-react';
import { OFFICIAL_SOURCES_META } from '../data/dteKnowledgeBase';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenSync: () => void;
  onQuickQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  onOpenSync,
  onQuickQuery,
}) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
      {/* Top Gov Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {language === 'hi' ? 'सत्र 2026–27 आधिकारिक पोर्टल' : 'Official Portal Session 2026–27'}
            </span>
            <span className="text-slate-400 hidden sm:inline">|</span>
            <span className="hidden md:inline text-slate-300">
              {language === 'hi'
                ? 'तकनीकी शिक्षा निदेशालय, जोधपुर एवं BTER'
                : 'Directorate of Technical Education, Jodhpur & BTER'}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:02912434395"
              className="flex items-center gap-1 hover:text-white transition-colors"
              title="DTE Admission Helpline"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Helpline:</span> 0291-2434395
            </a>
            <a
              href="mailto:dte_raj@yahoo.com"
              className="hidden lg:flex items-center gap-1 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              dte_raj@yahoo.com
            </a>
            <button
              onClick={onOpenSync}
              className="flex items-center gap-1 bg-slate-800 hover:bg-slate-700 px-2 py-0.5 rounded text-slate-200 transition-colors cursor-pointer"
              title="Official Source Verification"
            >
              <RefreshCw className="w-3 h-3 text-cyan-400" />
              <span className="hidden sm:inline">{language === 'hi' ? 'स्रोत स्थिति' : 'Sources Status'}</span>
            </button>
            
            {/* Language Switcher */}
            <div className="inline-flex rounded-md border border-slate-700 overflow-hidden bg-slate-800">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-0.5 text-xs font-semibold transition-colors cursor-pointer ${
                  language === 'en'
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                English
              </button>
              <button
                onClick={() => onLanguageChange('hi')}
                className={`px-2.5 py-0.5 text-xs font-semibold transition-colors cursor-pointer ${
                  language === 'hi'
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                हिन्दी
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Masthead */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Emblem & Branding */}
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 text-white p-2.5 flex flex-col items-center justify-center shadow-md border border-amber-500/30 flex-shrink-0">
              <div className="text-center font-bold text-[10px] uppercase tracking-tighter leading-tight text-amber-200">
                GOVT OF RAJ
              </div>
              <div className="w-6 h-6 my-0.5 border-2 border-amber-300 rounded-full flex items-center justify-center">
                <span className="text-xs font-black">★</span>
              </div>
              <div className="text-[8px] font-semibold tracking-widest text-white">DTE</div>
            </div>

            <div>
              <div className="text-xs sm:text-sm font-semibold text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
                <span>{language === 'hi' ? 'राजस्थान सरकार' : 'GOVERNMENT OF RAJASTHAN'}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                <span>{language === 'hi' ? 'तकनीकी शिक्षा विभाग' : 'DEPARTMENT OF TECHNICAL EDUCATION'}</span>
              </div>
              <h1 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                <span>{language === 'hi' ? 'DTE राजस्थान स्टूडेंट असिस्ट' : 'DTE Rajasthan Student Assist'}</span>
              </h1>
              <p className="text-xs text-slate-600">
                {language === 'hi'
                  ? 'पॉलिटेक्निक प्रवेश, राजकीय कॉलेज, BTER परीक्षा, छात्रवृत्ति एवं प्रशासनिक सूचना प्रणाली (सत्र 2026–27)'
                  : 'Bilingual AI-Powered Student Assistance System for Admissions, Government Colleges, BTER & Scholarships'}
              </p>
            </div>
          </div>

          {/* Quick Action Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://sso.rajasthan.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>SSO Portal Login</span>
            </a>
            <a
              href="https://dte.rajasthan.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-colors"
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>dte.rajasthan.gov.in</span>
            </a>
            <button
              onClick={() => onQuickQuery(language === 'hi' ? "2026-27 पॉलिटेक्निक प्रवेश प्रक्रिया समझाइए" : "Explain Polytechnic 2026-27 admission process")}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold shadow-xs transition-colors cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'DTE असिस्ट से पूछें' : 'DTE Assist'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
