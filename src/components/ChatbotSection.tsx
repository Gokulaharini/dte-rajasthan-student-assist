import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, Language, SourceReference } from '../types';
import {
  Send,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Copy,
  Check,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  ExternalLink,
  Download,
  AlertTriangle,
  BookOpen,
  ArrowRight,
  ArrowDown,
  HelpCircle,
} from 'lucide-react';
import { useVoice } from '../hooks/useVoice';

interface ChatbotSectionProps {
  language: Language;
  messages: ChatMessage[];
  isLoading: boolean;
  onSendMessage: (text: string) => void;
  onClearChat: () => void;
  onQuickQuery: (query: string) => void;
}

export const ChatbotSection: React.FC<ChatbotSectionProps> = ({
  language,
  messages,
  isLoading,
  onSendMessage,
  onClearChat,
  onQuickQuery,
}) => {
  const [inputText, setInputText] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const isUserScrolledUpRef = useRef<boolean>(false);
  const [showJumpToBottom, setShowJumpToBottom] = useState<boolean>(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const {
    isListening,
    transcript,
    setTranscript,
    speechSupported,
    startListening,
    stopListening,
    speakText,
    stopSpeaking,
    ttsSpeaking,
    activeSpeechId,
  } = useVoice(language);

  // Sync speech recognition transcript into input box
  useEffect(() => {
    if (transcript) {
      setInputText(transcript);
    }
  }, [transcript]);

  // Track user scroll position in the container
  const handleContainerScroll = () => {
    const el = chatContainerRef.current;
    if (!el) return;
    const threshold = 90; // px from bottom
    const distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    const isUp = distanceFromBottom > threshold;
    isUserScrolledUpRef.current = isUp;
    if (!isUp) {
      setShowJumpToBottom(false);
    }
  };

  // Dedicated container-only scroll to bottom (NEVER scrolls window/page/footer)
  const scrollToBottom = (behavior: ScrollBehavior = 'smooth') => {
    const el = chatContainerRef.current;
    if (!el) return;
    el.scrollTo({
      top: el.scrollHeight,
      behavior,
    });
    isUserScrolledUpRef.current = false;
    setShowJumpToBottom(false);
  };

  // Auto scroll to latest message inside the chat container ONLY
  useEffect(() => {
    const el = chatContainerRef.current;
    if (!el) return;

    const lastMessage = messages[messages.length - 1];
    const isUserMessage = lastMessage?.sender === 'user';

    // If the user just asked a question, always scroll container to bottom
    if (isUserMessage) {
      isUserScrolledUpRef.current = false;
      setShowJumpToBottom(false);
      el.scrollTo({
        top: el.scrollHeight,
        behavior: 'smooth',
      });
      return;
    }

    // For assistant messages and loading state updates:
    // If user is already near the bottom, scroll container to show the response
    if (!isUserScrolledUpRef.current) {
      el.scrollTo({
        top: el.scrollHeight,
        behavior: 'smooth',
      });
      setShowJumpToBottom(false);
    } else {
      // If user has scrolled upward to read older messages, DO NOT forcibly pull them down
      setShowJumpToBottom(true);
    }
  }, [messages, isLoading]);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    if (isListening) {
      stopListening();
    }
    stopSpeaking();

    const query = inputText.trim();
    setInputText('');
    setTranscript('');
    isUserScrolledUpRef.current = false;
    setShowJumpToBottom(false);
    onSendMessage(query);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const exportConversation = () => {
    const textContent = messages
      .map(
        (m) =>
          `[${m.timestamp}] ${m.sender === 'user' ? 'Student' : 'DTE Assist (DTE Rajasthan Student Assist)'}:\n${
            m.text
          }\n`
      )
      .join('\n----------------------------------------\n\n');

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `DTE-Assist-Conversation-${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const quickPrompts = [
    {
      en: 'What is the 2026–27 Admission eligibility and process?',
      hi: 'सत्र 2026-27 प्रवेश पात्रता एवं प्रक्रिया क्या है?',
    },
    {
      en: 'What are the Government Polytechnic Colleges in Jaipur and Jodhpur?',
      hi: 'जयपुर और जोधपुर के राजकीय पॉलिटेक्निक कॉलेज कौन से हैं?',
    },
    {
      en: 'Fee structure for Boys, Girls, and TFW Scheme?',
      hi: 'बालक, बालिकाओं एवं TFW योजना हेतु फीस विवरण?',
    },
    {
      en: 'Who is eligible for Lateral Entry (LEEP) 2nd Year admission?',
      hi: 'द्वितीय वर्ष लेटरल एंट्री (LEEP) में कौन पात्र है?',
    },
    {
      en: 'Which documents are required at Nodal Center for verification?',
      hi: 'नोडल सेंटर पर दस्तावेज सत्यापन हेतु कौन से प्रमाण पत्र चाहिए?',
    },
    {
      en: 'Explain 33% Women and Category Reservation rules.',
      hi: 'महिला 33% एवं श्रेणीवार आरक्षण के नियम समझाइए।',
    },
  ];

  return (
    <div className="flex flex-col h-[740px] max-h-[85vh] bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden relative">
      {/* Chat Sub-Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white px-4 sm:px-6 py-3 flex items-center justify-between border-b border-slate-700">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 font-black flex items-center justify-center text-xs shadow-sm font-sans tracking-tight">
            DTE
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-sm sm:text-base text-white tracking-wide">
                {language === 'hi' ? 'DTE असिस्ट AI' : 'DTE Assist AI'}
              </h2>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                {language === 'hi' ? 'सत्यापित सरकारी स्रोत' : 'Govt Grounded'}
              </span>
            </div>
            <p className="text-[11px] text-slate-300">
              {language === 'hi'
                ? 'DTE राजस्थान स्टूडेंट असिस्ट पोर्टल • सत्र 2026–27'
                : 'DTE Rajasthan Student Assist Portal • Session 2026–27'}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={exportConversation}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            title={language === 'hi' ? 'बातचीत डाउनलोड करें' : 'Export Chat Transcript'}
          >
            <Download className="w-4 h-4" />
          </button>
          <button
            onClick={onClearChat}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            title={language === 'hi' ? 'बातचीत रीसेट करें' : 'Clear Chat'}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Hallucination / Scope Safeguard Info Strip */}
      <div className="bg-emerald-50 border-b border-emerald-200/60 px-4 py-2 text-[11px] text-emerald-900 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-700 flex-shrink-0" />
          <span>
            {language === 'hi'
              ? 'सुरक्षा एवं प्रामाणिकता: सभी उत्तर राजस्थान DTE, BTER और SSO आधिकारिक नियमावली द्वारा संचालित हैं।'
              : 'Accuracy & Scope Guard: Responses strictly verified against DTE Rajasthan gazette and BTER circulars.'}
          </span>
        </div>
        <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-200/70 px-2 py-0.5 rounded">
          BTER Ordinance 2026
        </span>
      </div>

      {/* Message Stream */}
      <div
        ref={chatContainerRef}
        onScroll={handleContainerScroll}
        className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/50"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex flex-col ${
              message.sender === 'user' ? 'items-end' : 'items-start'
            }`}
          >
            <div
              className={`max-w-[92%] sm:max-w-[80%] rounded-2xl p-4 text-sm shadow-xs ${
                message.sender === 'user'
                  ? 'bg-amber-600 text-white rounded-br-xs'
                  : 'bg-white text-slate-800 border border-slate-200 rounded-bl-xs'
              }`}
            >
              {/* Header inside assistant message */}
              {message.sender === 'assistant' && (
                <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5 font-semibold text-amber-900">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    <span>{language === 'hi' ? 'DTE असिस्ट' : 'DTE Assist'}</span>
                    {message.isDeterministicFallback ? (
                      <span className="text-[10px] bg-blue-50 text-blue-700 border border-blue-200 px-1.5 py-0.2 rounded font-normal">
                        DTE Rule Engine
                      </span>
                    ) : (
                      <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-1.5 py-0.2 rounded font-normal flex items-center gap-0.5">
                        <Sparkles className="w-2.5 h-2.5" /> Gemini 3.8
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() =>
                        speakText(message.id, message.text, language)
                      }
                      className={`p-1 rounded hover:bg-slate-100 transition-colors ${
                        ttsSpeaking && activeSpeechId === message.id
                          ? 'text-amber-600 bg-amber-50 font-bold'
                          : 'text-slate-400 hover:text-slate-700'
                      }`}
                      title={
                        ttsSpeaking && activeSpeechId === message.id
                          ? 'Stop voice read'
                          : 'Read aloud (Voice)'
                      }
                    >
                      {ttsSpeaking && activeSpeechId === message.id ? (
                        <VolumeX className="w-3.5 h-3.5 animate-pulse" />
                      ) : (
                        <Volume2 className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <button
                      onClick={() => handleCopy(message.id, message.text)}
                      className="p-1 text-slate-400 hover:text-slate-700 rounded hover:bg-slate-100 transition-colors"
                      title="Copy response"
                    >
                      {copiedId === message.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Message Content */}
              <div className="whitespace-pre-line leading-relaxed font-sans">
                {message.text}
              </div>

              {/* Official Sources Citation Section */}
              {message.sources && message.sources.length > 0 && (
                <div className="mt-3 pt-2.5 border-t border-slate-100 text-xs">
                  <div className="font-semibold text-slate-600 mb-1 flex items-center gap-1">
                    <BookOpen className="w-3 h-3 text-amber-700" />
                    <span>{language === 'hi' ? 'आधिकारिक संदर्भ:' : 'Official Citations:'}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {message.sources.map((src, sIdx) => (
                      <a
                        key={sIdx}
                        href={src.url || 'https://dte.rajasthan.gov.in'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-900 border border-slate-200 transition-colors text-[11px]"
                      >
                        <span>{src.title}</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Suggested Follow-Ups */}
              {message.suggestedFollowUps && message.suggestedFollowUps.length > 0 && (
                <div className="mt-3 pt-2 border-t border-slate-100/80">
                  <div className="text-[11px] font-semibold text-slate-500 mb-1.5">
                    {language === 'hi' ? 'संबंधित प्रश्न:' : 'Suggested follow-ups:'}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {message.suggestedFollowUps.map((su, suIdx) => (
                      <button
                        key={suIdx}
                        onClick={() => onQuickQuery(su)}
                        className="text-[11px] px-2.5 py-1 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 transition-all flex items-center gap-1 text-left cursor-pointer"
                      >
                        <span>{su}</span>
                        <ArrowRight className="w-2.5 h-2.5 text-amber-600" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <span className="text-[10px] text-slate-400 mt-1 px-2">
              {message.timestamp}
            </span>
          </div>
        ))}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex items-start gap-2">
            <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-xs p-4 shadow-xs max-w-sm">
              <div className="flex items-center gap-2 text-xs text-amber-800 font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5 animate-spin text-amber-600" />
                <span>
                  {language === 'hi'
                    ? 'DTE असिस्ट आधिकारिक डेटाबेस से खोज रहा है...'
                    : 'DTE Assist consulting official gazette...'}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-600 animate-bounce"></span>
                <span
                  className="w-2 h-2 rounded-full bg-amber-600 animate-bounce"
                  style={{ animationDelay: '0.2s' }}
                ></span>
                <span
                  className="w-2 h-2 rounded-full bg-amber-600 animate-bounce"
                  style={{ animationDelay: '0.4s' }}
                ></span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Jump to Latest Button when User Scrolled Up */}
      {showJumpToBottom && (
        <div className="absolute bottom-24 sm:bottom-22 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
          <button
            type="button"
            onClick={() => scrollToBottom('smooth')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/95 hover:bg-slate-950 text-white text-xs font-semibold shadow-lg border border-slate-700 backdrop-blur-xs transition-all cursor-pointer hover:scale-105 active:scale-95 animate-fade-in"
          >
            <ArrowDown className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
            <span>
              {language === 'hi'
                ? 'नया उत्तर आया है • नीचे जाएं'
                : 'New response • Jump to latest'}
            </span>
          </button>
        </div>
      )}

      {/* Suggested Quick Prompts Bar */}
      <div className="border-t border-slate-200 bg-white px-4 py-2">
        <div className="text-[11px] font-bold text-slate-500 mb-1 flex items-center gap-1">
          <HelpCircle className="w-3 h-3 text-amber-600" />
          <span>{language === 'hi' ? 'त्वरित विषय चयन:' : 'Quick Topic Queries:'}</span>
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {quickPrompts.map((qp, qIdx) => (
            <button
              key={qIdx}
              onClick={() => onQuickQuery(language === 'hi' ? qp.hi : qp.en)}
              className="text-xs whitespace-nowrap bg-slate-100 hover:bg-amber-100 hover:text-amber-950 text-slate-700 px-3 py-1 rounded-full border border-slate-200 transition-colors flex-shrink-0 cursor-pointer"
            >
              {language === 'hi' ? qp.hi : qp.en}
            </button>
          ))}
        </div>
      </div>

      {/* Live Audio Listening Bar */}
      {isListening && (
        <div className="bg-amber-500 text-slate-950 px-4 py-2 flex items-center justify-between text-xs font-semibold animate-pulse">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
            <span>
              {language === 'hi'
                ? 'सुन रहा हूँ... बोलिए (हिंदी या अंग्रेजी)'
                : 'Listening... Speak now (Hindi or English)'}
            </span>
          </div>
          <button
            onClick={stopListening}
            className="bg-slate-950 text-white px-2.5 py-0.5 rounded text-[11px] hover:bg-slate-800"
          >
            {language === 'hi' ? 'पूर्ण करें' : 'Done'}
          </button>
        </div>
      )}

      {/* Input Box Form */}
      <form
        onSubmit={handleSubmit}
        className="p-3 bg-white border-t border-slate-200 flex items-end gap-2"
      >
        <div className="flex-1 relative rounded-xl border border-slate-300 focus-within:border-amber-600 focus-within:ring-2 focus-within:ring-amber-500/20 bg-slate-50/50">
          <textarea
            ref={inputRef}
            rows={2}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={
              language === 'hi'
                ? 'राजस्थान DTE, BTER परीक्षा, पॉलिटेक्निक 2026-27 प्रवेश या फीस संबंधी प्रश्न पूछें...'
                : 'Ask questions about Rajasthan DTE, BTER exams, 2026-27 admissions, or fees...'
            }
            className="w-full resize-none p-2.5 text-sm bg-transparent outline-none placeholder:text-slate-400 text-slate-800"
          />
        </div>

        {/* Speech Recognition Mic Button */}
        {speechSupported && (
          <button
            type="button"
            onClick={isListening ? stopListening : startListening}
            className={`p-3 rounded-xl transition-all cursor-pointer flex-shrink-0 ${
              isListening
                ? 'bg-red-600 text-white ring-4 ring-red-400/30'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
            title={
              language === 'hi'
                ? isListening
                  ? 'माइक बंद करें'
                  : 'बोलकर पूछें (आवाज़ इनपुट)'
                : isListening
                ? 'Stop listening'
                : 'Voice input (Speak in Hindi or English)'
            }
          >
            {isListening ? (
              <MicOff className="w-5 h-5" />
            ) : (
              <Mic className="w-5 h-5 text-amber-600" />
            )}
          </button>
        )}

        {/* Send Button */}
        <button
          type="submit"
          disabled={!inputText.trim() || isLoading}
          className={`p-3 rounded-xl transition-all flex-shrink-0 cursor-pointer ${
            !inputText.trim() || isLoading
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
              : 'bg-amber-600 hover:bg-amber-700 text-white shadow-sm'
          }`}
          title="Send query"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};
