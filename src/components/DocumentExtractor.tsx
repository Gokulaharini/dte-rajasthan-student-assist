import React, { useState } from 'react';
import { CircularDocument, DocumentExtractionResult, Language } from '../types';
import {
  FileText,
  Upload,
  Sparkles,
  CheckCircle,
  Calendar,
  AlertTriangle,
  HelpCircle,
  Clock,
  Layers,
  FileCheck2,
  Phone,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { OFFICIAL_CIRCULARS } from '../data/dteKnowledgeBase';

interface DocumentExtractorProps {
  language: Language;
  onAskSarthi: (query: string) => void;
}

export const DocumentExtractor: React.FC<DocumentExtractorProps> = ({
  language,
  onAskSarthi,
}) => {
  const [selectedSampleId, setSelectedSampleId] = useState<string>('dte-adm-notif-2026-01');
  const [documentInput, setDocumentInput] = useState<string>(
    OFFICIAL_CIRCULARS[0].fullContent
  );
  const [isExtracting, setIsExtracting] = useState<boolean>(false);
  const [extractionResult, setExtractionResult] =
    useState<DocumentExtractionResult | null>(null);
  const [uploadFileName, setUploadFileName] = useState<string>('');

  const handleSelectSample = (circular: CircularDocument) => {
    setSelectedSampleId(circular.id);
    setDocumentInput(circular.fullContent);
    setUploadFileName('');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadFileName(file.name);
    setSelectedSampleId('custom');

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      setDocumentInput(text);
    };
    reader.readAsText(file);
  };

  const handleExtract = async () => {
    if (!documentInput.trim()) return;

    setIsExtracting(true);
    try {
      const res = await fetch('/api/extract-doc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          documentText: documentInput,
          documentTitle: uploadFileName || 'Official Rajasthan Circular',
        }),
      });

      if (!res.ok) {
        throw new Error('Extraction request failed');
      }

      const data: DocumentExtractionResult = await res.json();
      setExtractionResult(data);
    } catch (err) {
      console.warn('Document extraction error:', err);
    } finally {
      setIsExtracting(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-amber-950 to-slate-900 text-white rounded-2xl p-6 border border-amber-800/40 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-2">
            <FileText className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'दस्तावेज एवं परिपत्र निष्कर्षण' : 'Circular & Document Extraction'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            {language === 'hi'
              ? 'आधिकारिक परिपत्र एवं अधिसूचना विश्लेषक'
              : 'Official DTE/BTER Circular & Document Extractor'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
            {language === 'hi'
              ? 'DTE राजस्थान अथवा BTER द्वारा जारी किसी भी आधिकारिक आदेश, अधिसूचना या प्रवेश दिशा-निर्देश को अपलोड अथवा पेस्ट करें। AI तुरंत महत्वपूर्ण तिथियां, पात्रता, आवश्यक दस्तावेज और छात्र कार्रवाई बिंदु निकाल कर देगा।'
              : 'Upload or paste any DTE Rajasthan or BTER official notification/gazette. Gemini AI extracts structured key deadlines, eligibility criteria, required documents, and action steps for students.'}
          </p>
        </div>
      </div>

      {/* Main Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: Input & Samples */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            {/* Sample Selector */}
            <div>
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                {language === 'hi' ? 'नमूना आधिकारिक परिपत्र चुनें:' : 'Select Sample Official Circular:'}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {OFFICIAL_CIRCULARS.map((circ) => (
                  <button
                    key={circ.id}
                    onClick={() => handleSelectSample(circ)}
                    className={`text-left p-2.5 rounded-xl border text-xs transition-all cursor-pointer ${
                      selectedSampleId === circ.id
                        ? 'border-amber-600 bg-amber-50/80 text-amber-950 font-bold'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="font-semibold truncate">
                      {circ.category}
                    </div>
                    <div className="text-[10px] text-slate-500 truncate">
                      {circ.circularNo}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Document Textarea */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-bold text-slate-700">
                  {language === 'hi' ? 'परिपत्र का पाठ (Text) अथवा सामग्री:' : 'Circular Content / Paste Gazette Text:'}
                </label>
                {uploadFileName && (
                  <span className="text-[11px] text-emerald-700 font-semibold truncate max-w-[200px]">
                    Uploaded: {uploadFileName}
                  </span>
                )}
              </div>
              <textarea
                rows={9}
                value={documentInput}
                onChange={(e) => {
                  setDocumentInput(e.target.value);
                  setSelectedSampleId('custom');
                }}
                placeholder={
                  language === 'hi'
                    ? 'यहाँ सरकारी परिपत्र अथवा अधिसूचना का पाठ पेस्ट करें...'
                    : 'Paste the official gazette, circular text, or order here...'
                }
                className="w-full text-xs font-mono p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-amber-600 focus:outline-none text-slate-800 resize-none leading-relaxed"
              />
            </div>

            {/* Upload & Action Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
              <label className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors cursor-pointer">
                <Upload className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'दस्तावेज अपलोड (.txt, .html)' : 'Upload File (.txt, .html)'}</span>
                <input
                  type="file"
                  accept=".txt,.html,.md,.json"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>

              <button
                onClick={handleExtract}
                disabled={isExtracting || !documentInput.trim()}
                className={`inline-flex items-center gap-2 text-xs font-bold px-5 py-2.5 rounded-xl transition-all cursor-pointer ${
                  isExtracting || !documentInput.trim()
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-amber-600 hover:bg-amber-700 text-white shadow-sm'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>
                  {isExtracting
                    ? language === 'hi'
                      ? 'विश्लेषण जारी...'
                      : 'Extracting Details...'
                    : language === 'hi'
                    ? 'AI द्वारा विश्लेषण एवं निष्कर्ष निकालें'
                    : 'Analyze & Extract Key Points'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Extraction Results Card */}
        <div className="lg:col-span-6 space-y-4">
          {extractionResult ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-5">
              {/* Header */}
              <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
                      {extractionResult.extractedVia === 'gemini' ? 'Gemini 3.8 Flash' : 'Rule-Engine'}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                      Session: {extractionResult.academicSession}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base leading-snug">
                    {extractionResult.title}
                  </h3>
                  <div className="text-xs text-slate-500 mt-1">
                    Circular No: <span className="font-mono text-slate-700">{extractionResult.circularNo}</span> • Date: {extractionResult.issueDate}
                  </div>
                </div>
              </div>

              {/* Hindi Summary */}
              {extractionResult.summaryHindi && (
                <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3 text-xs text-amber-950 leading-relaxed">
                  <div className="font-bold mb-1 flex items-center gap-1 text-amber-900">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>हिंदी सारांश (Hindi Summary):</span>
                  </div>
                  {extractionResult.summaryHindi}
                </div>
              )}

              {/* Key Deadlines */}
              {extractionResult.keyDeadlines && extractionResult.keyDeadlines.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>{language === 'hi' ? 'महत्वपूर्ण समय-सीमा एवं तिथियां:' : 'Key Deadlines & Dates:'}</span>
                  </h4>
                  <div className="space-y-1.5">
                    {extractionResult.keyDeadlines.map((dl, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-center justify-between text-xs p-2 rounded-lg bg-slate-50 border border-slate-200"
                      >
                        <span className="font-medium text-slate-700">{dl.event}</span>
                        <span className="font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                          {dl.date}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Steps For Students */}
              {extractionResult.actionStepsForStudents && (
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{language === 'hi' ? 'छात्रों हेतु अनिवार्य कदम:' : 'Action Steps For Students:'}</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {extractionResult.actionStepsForStudents.map((step, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                          {sIdx + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Required Documents */}
              {extractionResult.requiredDocuments && extractionResult.requiredDocuments.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <FileCheck2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>{language === 'hi' ? 'संलग्न किए जाने वाले दस्तावेज:' : 'Required Documents to Prepare:'}</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {extractionResult.requiredDocuments.map((doc, docIdx) => (
                      <span
                        key={docIdx}
                        className="text-xs px-2.5 py-1 rounded-lg bg-blue-50 text-blue-800 border border-blue-200"
                      >
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Clarification Button */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500">
                  Confidence: {Math.round(extractionResult.confidenceScore * 100)}%
                </span>
                <button
                  onClick={() =>
                    onAskSarthi(
                      `Please clarify circular ${extractionResult.circularNo} titled "${extractionResult.title}" and explain what I should do next.`
                    )
                  }
                  className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-800 cursor-pointer"
                >
                  <span>{language === 'hi' ? 'DTE असिस्ट से स्पष्टीकरण लें' : 'Clarify with DTE Assist'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-8 text-center flex flex-col items-center justify-center h-full min-h-[360px]">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-3">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm">
                {language === 'hi' ? 'निष्कर्षण परिणाम यहाँ प्रदर्शित होंगे' : 'Extraction Results Will Appear Here'}
              </h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm">
                {language === 'hi'
                  ? 'बाईं ओर परिपत्र चुनें अथवा अपना आदेश टेक्स्ट पेस्ट कर "AI द्वारा विश्लेषण" बटन दबाएं।'
                  : 'Select an official circular on the left or paste custom order text and click "Analyze & Extract Key Points".'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
