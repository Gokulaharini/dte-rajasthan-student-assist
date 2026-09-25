import React from 'react';
import { Language } from '../types';
import { Building2, Phone, Mail, MapPin, ExternalLink, ShieldAlert } from 'lucide-react';
import { OFFICIAL_SOURCES_META } from '../data/dteKnowledgeBase';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 text-xs border-t border-slate-800 mt-12">
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Authority & Address */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-amber-600 text-white font-bold flex items-center justify-center text-xs">
                DTE
              </div>
              <div className="font-bold text-white text-sm">
                {language === 'hi'
                  ? 'तकनीकी शिक्षा निदेशालय'
                  : 'Directorate of Technical Education'}
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed mb-3">
              {language === 'hi'
                ? 'राजस्थान सरकार के तकनीकी शिक्षा विभाग के अधीन राज्य के सभी राजकीय, अनुदानित एवं निजी पॉलिटेक्निक संस्थानों का सर्वोच्च प्रशासनिक निकाय।'
                : 'Apex administrative directorate under Department of Technical Education, Government of Rajasthan, regulating diploma engineering education across the state.'}
            </p>
            <div className="space-y-1.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>{OFFICIAL_SOURCES_META.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>{OFFICIAL_SOURCES_META.admissionsHelpline}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>{OFFICIAL_SOURCES_META.email}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Important Portals */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3 text-xs border-b border-slate-800 pb-1">
              {language === 'hi' ? 'महत्वपूर्ण सरकारी पोर्टल' : 'Official State Portals'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://sso.rajasthan.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>Single Sign-On (SSO Rajasthan)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://dte.rajasthan.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>DTE Rajasthan Official Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://bter.rajasthan.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>Board of Technical Education (BTER)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://hte.rajasthan.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>Higher & Technical Education (HTE)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://jansoochna.rajasthan.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors flex items-center justify-between"
                >
                  <span>Jan Soochna Portal 2026</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Student Services */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3 text-xs border-b border-slate-800 pb-1">
              {language === 'hi' ? 'विद्यार्थी सेवाएं एवं योजनाएं' : 'Student Schemes & Services'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-amber-400 cursor-pointer">
                {language === 'hi' ? '• 100% बालिका ट्यूशन फीस मुक्ति योजना' : '• 100% Girls Tuition Fee Exemption'}
              </li>
              <li className="hover:text-amber-400 cursor-pointer">
                {language === 'hi' ? '• ट्यूशन फीस वेवर (TFW) 5% सुपरन्यूमरेरी सीट' : '• Tuition Fee Waiver (TFW) 5% Quota'}
              </li>
              <li className="hover:text-amber-400 cursor-pointer">
                {language === 'hi' ? '• लेटरल एंट्री (LEEP) द्वितीय वर्ष प्रवेश' : '• Lateral Entry (LEEP 2nd Year)'}
              </li>
              <li className="hover:text-amber-400 cursor-pointer">
                {language === 'hi' ? '• उत्तर मैट्रिक छात्रवृत्ति (SJE पोर्टल)' : '• Post-Matric Scholarship (SJE)'}
              </li>
              <li className="hover:text-amber-400 cursor-pointer">
                {language === 'hi' ? '• BTER सेमेस्टर परीक्षा एवं पुनर्मूल्यांकन' : '• BTER Semester Exams & Revaluation'}
              </li>
            </ul>
          </div>

          {/* Col 4: Anti-Ragging & Scope Disclaimer */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3 text-xs border-b border-slate-800 pb-1">
              {language === 'hi' ? 'सत्यनिष्ठा एवं रैगिंग निषेध' : 'Anti-Ragging & Compliance'}
            </h4>
            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700/80 text-xs text-slate-300 space-y-2">
              <div className="font-bold text-amber-400 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Zero Tolerance to Ragging</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-400">
                {language === 'hi'
                  ? 'सभी पॉलिटेक्निक परिसरों में रैगिंग पूर्णतः दंडनीय अपराध है। राष्ट्रीय एंटी-रैगिंग हेल्पलाइन: 1800-180-5522।'
                  : 'Ragging is strictly prohibited in all Rajasthan technical institutions. 24x7 National Toll-free Anti-Ragging Helpline: 1800-180-5522.'}
              </p>
            </div>
            <div className="mt-3 text-[11px] text-slate-400">
              CM Helpline / Rajasthan Sampark: <span className="text-white font-bold">181</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © 2026 Directorate of Technical Education, Government of Rajasthan. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>DTE Rajasthan Student Assist v2.4 (Session 2026–27)</span>
            <span>•</span>
            <span className="text-amber-500 font-semibold">Grounded on Official DTE Gazette</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
