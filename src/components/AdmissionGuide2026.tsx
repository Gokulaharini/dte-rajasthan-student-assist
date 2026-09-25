import React, { useState } from 'react';
import { Language } from '../types';
import {
  Calendar,
  CheckCircle2,
  FileCheck,
  Award,
  Users,
  CreditCard,
  AlertCircle,
  HelpCircle,
  Sparkles,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

interface AdmissionGuideProps {
  language: Language;
  onAskSarthi: (query: string) => void;
}

export const AdmissionGuide2026: React.FC<AdmissionGuideProps> = ({
  language,
  onAskSarthi,
}) => {
  const [selectedStudentType, setSelectedStudentType] = useState<'male' | 'female' | 'tfw' | 'scst'>('male');
  const [userTenthPercent, setUserTenthPercent] = useState<number>(65);

  const stages = [
    {
      step: '1',
      title: language === 'hi' ? 'SSO आईडी से ऑनलाइन पंजीकरण' : 'Online Registration on SSO Portal',
      dates: '20 May – 25 June 2026',
      desc: language === 'hi'
        ? 'sso.rajasthan.gov.in पर लॉगिन कर DTE Admissions ऐप में 10वीं अंकतालिका व प्रमाण पत्र अपलोड कर ₹300 शुल्क जमा करें।'
        : 'Log in to sso.rajasthan.gov.in, select DTE Admissions app, upload 10th marksheet, category certificates, and pay ₹300 fee.',
      badge: 'Step 1'
    },
    {
      step: '2',
      title: language === 'hi' ? 'नोडल केंद्र पर ऑनलाइन दस्तावेज सत्यापन' : 'Document Verification at Nodal Centers',
      dates: '26 June – 05 July 2026',
      desc: language === 'hi'
        ? 'संबंधित जिला राजकीय पॉलिटेक्निक कॉलेज (नोडल केंद्र) द्वारा आपके अपलोड किए गए दस्तावेजों का सत्यापन।'
        : 'Online scrutiny of uploaded marksheets, Bonafide, Caste, and Income certificates by District Nodal Colleges.',
      badge: 'Step 2'
    },
    {
      step: '3',
      title: language === 'hi' ? 'प्रोविजनल एवं फाइनल मेरिट सूची' : 'Provisional & Final Merit List',
      dates: '08 July & 12 July 2026',
      desc: language === 'hi'
        ? '10वीं कक्षा के प्रतिशत अंकों के आधार पर राज्य स्तरीय मेरिट लिस्ट जारी होगी। आपत्तियों का निस्तारण किया जाएगा।'
        : 'State-level merit ranks calculated purely on 10th Board aggregate marks. Objections submitted online.',
      badge: 'Step 3'
    },
    {
      step: '4',
      title: language === 'hi' ? 'ऑनलाइन चॉइस फिलिंग एवं लॉकिंग' : 'Online Choice Filling & Locking',
      dates: '13 July – 20 July 2026',
      desc: language === 'hi'
        ? 'अपनी पसंद के अनुसार राजकीय कॉलेज एवं इंजीनियरिंग शाखाओं का चयन कर प्राथमिकता क्रम लॉक करें।'
        : 'Fill desired combinations of Government Colleges and branches in order of priority. Lock choices.',
      badge: 'Step 4'
    },
    {
      step: '5',
      title: language === 'hi' ? 'सीट आवंटन (राउंड 1 एवं राउंड 2)' : 'Seat Allotment Rounds & Upward Movement',
      dates: '24 July & 05 August 2026',
      desc: language === 'hi'
        ? 'आवंटन पत्र डाउनलोड कर निर्धारित तिथि तक कॉलेज में मूल दस्तावेजों एवं फीस के साथ रिपोर्टिंग करें।'
        : 'Download allotment letter and report to the allotted institute with originals and fee payment.',
      badge: 'Step 5'
    },
    {
      step: '6',
      title: language === 'hi' ? 'कक्षाओं का प्रारंभ (सत्र 2026–27)' : 'Academic Classes Start',
      dates: '10 August 2026',
      desc: language === 'hi'
        ? 'BTER शैक्षणिक कैलेंडर 2026-27 के अनुसार नियमित कक्षाएं एवं ओरिएंटेशन प्रारंभ।'
        : 'Regular academic classes and student orientation commence as per official BTER academic calendar.',
      badge: 'Step 6'
    }
  ];

  const reservationQuotas = [
    { category: 'SC (Scheduled Castes)', quota: '16%', details: 'Valid Rajasthan SC Caste Certificate required' },
    { category: 'ST (Scheduled Tribes)', quota: '12%', details: 'In TSP Area, 45% for ST and 5% for SC apply' },
    { category: 'OBC-NCL (Other Backward Classes)', quota: '21%', details: 'Certificate must be issued within 1 year or with Form-F' },
    { category: 'MBC (Most Backward Classes)', quota: '5%', details: 'Gurjar, Raika, Banjara, Gadariya, Gadolia Luhar' },
    { category: 'EWS (Economically Weaker Section)', quota: '10%', details: 'Income < 8 LPA valid certificate from competent authority' },
    { category: 'Women Candidates (Horizontal)', quota: '33%', details: 'Applicable horizontally across all social categories' },
    { category: 'Persons with Benchmark Disabilities (PwD)', quota: '5%', details: 'Minimum 40% disability certified by medical board' },
    { category: 'TFW (Tuition Fee Waiver)', quota: '5% Supernumerary', details: 'Over & above sanctioned intake for income < 8 LPA' },
  ];

  const calculateFees = () => {
    switch (selectedStudentType) {
      case 'female':
        return {
          tuition: '₹0 (100% Exempt)',
          development: '₹1,500',
          caution: '₹1,000 (Refundable)',
          exam: '₹1,000',
          total: '₹3,500 / year',
          benefitNote: language === 'hi' ? 'राजस्थान सरकार द्वारा छात्राओं हेतु शिक्षण शुल्क पूर्णतः माफ!' : '100% Tuition Fee Waived for female students in all Government Colleges!'
        };
      case 'tfw':
        return {
          tuition: '₹0 (TFW Supernumerary)',
          development: '₹1,500',
          caution: '₹1,000 (Refundable)',
          exam: '₹1,000',
          total: '₹3,500 / year',
          benefitNote: language === 'hi' ? 'TFW सुपरन्यूमरेरी सीट पर ट्यूशन फीस शून्य।' : 'Zero tuition fee on TFW seat allocation.'
        };
      case 'scst':
        return {
          tuition: '₹0 (Govt Reimbursement)',
          development: '₹1,500',
          caution: '₹1,000',
          exam: '₹1,000',
          total: '₹3,500 (100% claimable via Post-Matric)',
          benefitNote: language === 'hi' ? 'उत्तर मैट्रिक छात्रवृत्ति (SJE) पोर्टल द्वारा 100% शुल्क पुनर्भरण।' : '100% fee reimbursed through Social Justice Department Post-Matric Scholarship.'
        };
      default:
        return {
          tuition: '₹4,000',
          development: '₹1,500',
          caution: '₹1,000 (Refundable)',
          exam: '₹1,000',
          total: '₹7,500 / year',
          benefitNote: language === 'hi' ? 'राजकीय सामान्य दर (किफायती उच्च गुणवत्ता तकनीकी शिक्षा)।' : 'Affordable state subsidized standard fee.'
        };
    }
  };

  const feeData = calculateFees();

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white rounded-2xl p-6 border border-amber-800/40 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
              {language === 'hi' ? 'सत्र 2026–27 आधिकारिक प्रवेश मार्गदर्शिका' : 'Official Session 2026–27 Admission Guide'}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold mt-2">
              {language === 'hi'
                ? 'राजस्थान पॉलिटेक्निक डिप्लोमा प्रवेश प्रक्रिया एवं समय-सारणी'
                : 'Rajasthan Polytechnic Diploma Centralized Admission Roadmap'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              {language === 'hi'
                ? '10वीं बोर्ड के अंकों के आधार पर पारदर्शी मेरिट प्रणाली, आरक्षण कोटा, शुल्क विवरण और छात्रवृत्ति दिशा-निर्देश।'
                : 'Merit-based admission roadmap without entrance exam, reservation distribution, fee concessions, and verification checklist.'}
            </p>
          </div>

          <button
            onClick={() => onAskSarthi(language === 'hi' ? "मुझे 2026-27 पॉलिटेक्निक प्रवेश में मेरिट और कॉलेज चयन की रणनीति बताएं" : "Tell me how merit ranking and college choice filling works for 2026-27")}
            className="inline-flex items-center gap-2 text-xs font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 px-4 py-2.5 rounded-xl shadow-xs transition-colors flex-shrink-0 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>{language === 'hi' ? 'काउंसलिंग सहायता लें' : 'Counseling Advice'}</span>
          </button>
        </div>
      </div>

      {/* Step by Step Timeline */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-amber-600" />
            <h3 className="font-bold text-slate-900 text-base sm:text-lg">
              {language === 'hi' ? 'प्रवेश चरण एवं आधिकारिक तिथियां (2026–27)' : 'Admission Stages & Key Dates (2026–27)'}
            </h3>
          </div>
          <span className="text-xs font-medium text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
            DTE Verified
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stages.map((st, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-amber-400 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                    {st.badge}
                  </span>
                  <span className="text-xs font-bold text-slate-700">{st.dates}</span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">{st.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-200 flex items-center justify-between text-xs text-amber-800 font-semibold">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  {language === 'hi' ? 'ऑनलाइन प्रक्रिया' : 'Online Mode'}
                </span>
                <button
                  onClick={() => onAskSarthi(`Tell me more about ${st.title} dates and requirements`)}
                  className="hover:underline flex items-center gap-0.5 text-amber-700 text-[11px]"
                >
                  <span>{language === 'hi' ? 'विवरण' : 'Details'}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Two Column Section: Fee Estimator & Reservation Policy */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Fee Estimator */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="w-5 h-5 text-amber-600" />
              <h3 className="font-bold text-slate-900 text-base">
                {language === 'hi' ? 'वार्षिक फीस गणक (सत्र 2026–27)' : 'Annual Fee Estimator (2026–27)'}
              </h3>
            </div>

            <div className="text-xs text-slate-600 mb-3">
              {language === 'hi' ? 'अपनी श्रेणी का चयन करें:' : 'Select your applicant category:'}
            </div>

            {/* Category Selector Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              <button
                onClick={() => setSelectedStudentType('male')}
                className={`text-xs py-2 px-2 rounded-xl font-bold transition-all text-center cursor-pointer border ${
                  selectedStudentType === 'male'
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                }`}
              >
                {language === 'hi' ? 'छात्र (सामान्य/OBC)' : 'Boys (Gen/OBC)'}
              </button>
              <button
                onClick={() => setSelectedStudentType('female')}
                className={`text-xs py-2 px-2 rounded-xl font-bold transition-all text-center cursor-pointer border ${
                  selectedStudentType === 'female'
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                }`}
              >
                {language === 'hi' ? 'छात्राएं (100% छूट)' : 'Girls (100% Free)'}
              </button>
              <button
                onClick={() => setSelectedStudentType('tfw')}
                className={`text-xs py-2 px-2 rounded-xl font-bold transition-all text-center cursor-pointer border ${
                  selectedStudentType === 'tfw'
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                }`}
              >
                {language === 'hi' ? 'TFW (आय < 8 लाख)' : 'TFW Scheme'}
              </button>
              <button
                onClick={() => setSelectedStudentType('scst')}
                className={`text-xs py-2 px-2 rounded-xl font-bold transition-all text-center cursor-pointer border ${
                  selectedStudentType === 'scst'
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                }`}
              >
                {language === 'hi' ? 'SC / ST' : 'SC / ST'}
              </button>
            </div>

            {/* Fee Breakdown Card */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-600">{language === 'hi' ? 'शिक्षण शुल्क (Tuition Fee):' : 'Tuition Fee:'}</span>
                <span className="font-bold text-slate-900">{feeData.tuition}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-600">{language === 'hi' ? 'विकास शुल्क (Development Fee):' : 'Development Fee:'}</span>
                <span className="font-semibold text-slate-900">{feeData.development}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-600">{language === 'hi' ? 'कॉशन मनी (वापसी योग्य):' : 'Caution Money (Refundable):'}</span>
                <span className="font-semibold text-slate-900">{feeData.caution}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-600">{language === 'hi' ? 'परीक्षा शुल्क (BTER):' : 'BTER Exam Fee:'}</span>
                <span className="font-semibold text-slate-900">{feeData.exam}</span>
              </div>
              <div className="flex justify-between pt-2 text-sm font-extrabold text-amber-900">
                <span>{language === 'hi' ? 'कुल अनुमानित वार्षिक शुल्क:' : 'Total Payable Per Year:'}</span>
                <span className="text-base text-amber-700">{feeData.total}</span>
              </div>
            </div>

            <div className="mt-3 text-xs bg-amber-50 border border-amber-200 rounded-lg p-2.5 text-amber-950 font-medium">
              💡 {feeData.benefitNote}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-500">
              {language === 'hi' ? 'हॉस्टल शुल्क: ₹2,400–₹3,600 / वर्ष' : 'Hostel Fee: ₹2,400–₹3,600 / year'}
            </span>
            <button
              onClick={() => onAskSarthi(language === 'hi' ? "पॉलिटेक्निक में हॉस्टल और मेस का खर्च कितना आता है?" : "How much does polytechnic hostel and mess cost?")}
              className="text-amber-700 font-bold hover:underline"
            >
              {language === 'hi' ? 'हॉस्टल फीस नियम' : 'Hostel Details'}
            </button>
          </div>
        </div>

        {/* State Reservation Policy */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-amber-600" />
              <h3 className="font-bold text-slate-900 text-base">
                {language === 'hi' ? 'राजस्थान आरक्षण नीति (पॉलिटेक्निक 2026–27)' : 'Rajasthan State Reservation Policy'}
              </h3>
            </div>
            <p className="text-xs text-slate-600 mb-3">
              {language === 'hi'
                ? 'कार्मिक विभाग एवं DTE राजस्थान के नवीनतम नियमों के अनुसार आरक्षण प्रतिशत:'
                : 'Statutory seat reservation across all Government Polytechnic colleges:'}
            </p>

            <div className="divide-y divide-slate-100 text-xs">
              {reservationQuotas.map((rq, rIdx) => (
                <div key={rIdx} className="py-2 flex items-center justify-between gap-2">
                  <div>
                    <span className="font-semibold text-slate-800">{rq.category}</span>
                    <div className="text-[11px] text-slate-500">{rq.details}</div>
                  </div>
                  <span className="font-extrabold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 flex-shrink-0">
                    {rq.quota}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-500">
              {language === 'hi' ? '33% महिला क्षैतिज आरक्षण सभी वर्गों में देय' : '33% Women Horizontal Reservation'}
            </span>
            <button
              onClick={() => onAskSarthi(language === 'hi' ? "राजस्थान TSP क्षेत्र के पॉलिटेक्निक आरक्षण नियम क्या हैं?" : "What are the polytechnic reservation rules for TSP areas in Rajasthan?")}
              className="text-amber-700 font-bold hover:underline"
            >
              {language === 'hi' ? 'TSP नियम' : 'TSP Rules'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
