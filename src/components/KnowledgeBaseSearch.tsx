import React, { useState, useMemo } from 'react';
import { KnowledgeItem, Language } from '../types';
import {
  Search,
  BookOpen,
  Filter,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Sparkles,
  HelpCircle,
  ShieldCheck,
} from 'lucide-react';
import { KNOWLEDGE_BASE_ITEMS } from '../data/dteKnowledgeBase';

interface KnowledgeBaseSearchProps {
  language: Language;
  onAskSarthi: (query: string) => void;
}

export const KnowledgeBaseSearch: React.FC<KnowledgeBaseSearchProps> = ({
  language,
  onAskSarthi,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedId, setExpandedId] = useState<string | null>(
    KNOWLEDGE_BASE_ITEMS[0]?.id || null
  );

  const categories = useMemo(() => {
    const list = Array.from(new Set(KNOWLEDGE_BASE_ITEMS.map((k) => k.category)));
    return ['All', ...list];
  }, []);

  const filteredItems = useMemo(() => {
    return KNOWLEDGE_BASE_ITEMS.filter((item) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        item.question.toLowerCase().includes(q) ||
        item.questionHindi.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.answerHindi.toLowerCase().includes(q) ||
        item.keywords.some((k) => k.toLowerCase().includes(q));

      const matchesCat =
        selectedCategory === 'All' || item.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-amber-950 text-white rounded-2xl p-6 border border-slate-700 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'आधिकारिक ज्ञानकोष एवं प्रश्नोत्तरी' : 'Official Knowledge Hub & FAQ'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            {language === 'hi'
              ? 'राजस्थान तकनीकी शिक्षा आधिकारिक ज्ञान भंडार (2026–27)'
              : 'DTE Rajasthan Grounded Knowledge Repository'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
            {language === 'hi'
              ? 'प्रवेश, शुल्क संरचना, छात्रवृत्ति, BTER परीक्षा मूल्यांकन, लेटरल एंट्री एवं शाखा परिवर्तन से संबंधित आधिकारिक नियमों का व्यवस्थित संग्रह।'
              : 'Structured knowledge base with verifiable citations directly referencing Directorate of Technical Education and Board of Technical Education Rajasthan circulars.'}
          </p>
        </div>
      </div>

      {/* Search & Category Filter */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                language === 'hi'
                  ? 'प्रश्न अथवा कीवर्ड खोजें (जैसे: फीस, TFW, बैक पेपर, लेटरल एंट्री)...'
                  : 'Search by topic, keyword, or rule (e.g., fee, TFW, back paper, lateral entry)...'
              }
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:border-amber-600 focus:outline-none"
            />
          </div>

          <div className="w-full sm:w-56">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:border-amber-600 focus:outline-none text-slate-700"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c === 'All'
                    ? language === 'hi'
                      ? 'सभी श्रेणियां (All Categories)'
                      : 'All Categories'
                    : c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick category pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-3 py-1 rounded-full font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-600 text-white font-bold'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredItems.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all"
            >
              <button
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                      {language === 'hi' ? item.categoryHindi : item.category}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Session {item.session}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {language === 'hi' ? item.questionHindi : item.question}
                  </h3>
                </div>

                <div className="text-slate-400 mt-1 flex-shrink-0">
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-amber-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              {isExpanded && (
                <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-slate-100 bg-slate-50/40 text-xs sm:text-sm text-slate-800 space-y-4">
                  <div className="whitespace-pre-line leading-relaxed">
                    {language === 'hi' ? item.answerHindi : item.answer}
                  </div>

                  {/* Official Citation Card */}
                  <div className="pt-3 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2 text-slate-600">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span className="font-medium">{item.officialSource}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={item.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-600 hover:text-amber-800 transition-colors font-semibold"
                      >
                        <span>Official Gazette</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <button
                        onClick={() =>
                          onAskSarthi(
                            language === 'hi'
                              ? `${item.questionHindi} के बारे में मुझे और विस्तार से बताएं`
                              : `Explain more details regarding: ${item.question}`
                          )
                        }
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold transition-colors cursor-pointer text-xs"
                      >
                        <Sparkles className="w-3 h-3" />
                        <span>{language === 'hi' ? 'DTE असिस्ट से पूछें' : 'Ask DTE Assist'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-2" />
            <h3 className="font-bold text-slate-700">
              {language === 'hi' ? 'कोई प्रश्न नहीं मिला' : 'No Knowledge Items Found'}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              {language === 'hi'
                ? 'कृपया अन्य कीवर्ड से खोजें अथवा चैटबॉट में सीधा प्रश्न पूछें।'
                : 'Try different search keywords or ask the AI Chatbot directly.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
