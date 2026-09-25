import React, { useState, useMemo } from 'react';
import { College, Language } from '../types';
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  GraduationCap,
  Users,
  Home,
  ExternalLink,
  Search,
  Filter,
  Sparkles,
} from 'lucide-react';
import { DTE_COLLEGES } from '../data/dteKnowledgeBase';

interface CollegeExplorerProps {
  language: Language;
  onAskAboutCollege: (collegeName: string) => void;
}

export const CollegeExplorer: React.FC<CollegeExplorerProps> = ({
  language,
  onAskAboutCollege,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [selectedBranch, setSelectedBranch] = useState('All');
  const [onlyWithHostel, setOnlyWithHostel] = useState(false);

  // Extract unique districts and branches
  const districts = useMemo(() => {
    const list = Array.from(new Set(DTE_COLLEGES.map((c) => c.district))).sort();
    return ['All', ...list];
  }, []);

  const allBranches = useMemo(() => {
    const branchSet = new Set<string>();
    DTE_COLLEGES.forEach((c) => c.branches.forEach((b) => branchSet.add(b)));
    return ['All', ...Array.from(branchSet).sort()];
  }, []);

  const filteredColleges = useMemo(() => {
    return DTE_COLLEGES.filter((col) => {
      const matchesSearch =
        col.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        col.nameHindi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        col.code.includes(searchQuery) ||
        col.branches.some((b) =>
          b.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesDistrict =
        selectedDistrict === 'All' || col.district === selectedDistrict;

      const matchesBranch =
        selectedBranch === 'All' || col.branches.includes(selectedBranch);

      const matchesHostel = !onlyWithHostel || col.hostelAvailable;

      return matchesSearch && matchesDistrict && matchesBranch && matchesHostel;
    });
  }, [searchQuery, selectedDistrict, selectedBranch, onlyWithHostel]);

  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="bg-gradient-to-r from-amber-900 via-slate-900 to-amber-950 text-white rounded-2xl p-6 shadow-sm border border-amber-800/40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-2">
            <Building2 className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'राजस्थान राजकीय पॉलिटेक्निक निर्देशिका' : 'Rajasthan Polytechnic Directory'}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            {language === 'hi'
              ? 'राजकीय एवं अनुदानित पॉलिटेक्निक कॉलेज (सत्र 2026–27)'
              : 'Government & Aided Polytechnic Colleges (Session 2026–27)'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
            {language === 'hi'
              ? 'राजस्थान के सभी जिलों में स्थित तकनीकी शिक्षा विभाग से संबद्ध पॉलिटेक्निक संस्थानों, सीटों, शाखाओं एवं हॉस्टल सुविधाओं की विस्तृत सूची।'
              : 'Explore all affiliated Government Polytechnic institutions across Rajasthan with verified branch intake, hostel availability, and direct contact details.'}
          </p>
        </div>
      </div>

      {/* Filters & Search Controls */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search box */}
          <div className="flex-1 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                language === 'hi'
                  ? 'कॉलेज का नाम, कोड, शहर अथवा शाखा खोजें...'
                  : 'Search by college name, code, district, or engineering branch...'
              }
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:border-amber-600 focus:outline-none"
            />
          </div>

          {/* District selector */}
          <div className="w-full md:w-48">
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:border-amber-600 focus:outline-none text-slate-700"
            >
              {districts.map((d) => (
                <option key={d} value={d}>
                  {d === 'All'
                    ? language === 'hi'
                      ? 'सभी जिले (All Districts)'
                      : 'All Districts'
                    : d}
                </option>
              ))}
            </select>
          </div>

          {/* Branch selector */}
          <div className="w-full md:w-56">
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:border-amber-600 focus:outline-none text-slate-700"
            >
              {allBranches.map((b) => (
                <option key={b} value={b}>
                  {b === 'All'
                    ? language === 'hi'
                      ? 'सभी शाखाएं (All Branches)'
                      : 'All Branches'
                    : b}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Hostel Toggle & Quick stats */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 text-xs">
          <label className="inline-flex items-center gap-2 cursor-pointer font-medium text-slate-700">
            <input
              type="checkbox"
              checked={onlyWithHostel}
              onChange={(e) => setOnlyWithHostel(e.target.checked)}
              className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500 border-slate-300"
            />
            <span>{language === 'hi' ? 'केवल हॉस्टल सुविधा वाले कॉलेज' : 'Only colleges with Hostel facility'}</span>
          </label>

          <span className="text-slate-500 font-semibold">
            {language === 'hi'
              ? `कुल कॉलेज: ${filteredColleges.length}`
              : `Showing ${filteredColleges.length} Colleges`}
          </span>
        </div>
      </div>

      {/* College Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredColleges.map((col) => (
          <div
            key={col.id}
            className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-amber-500/80 transition-all flex flex-col justify-between"
          >
            <div>
              {/* College Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                      Code: {col.code}
                    </span>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      Est. {col.established}
                    </span>
                    {col.hostelAvailable ? (
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 flex items-center gap-1">
                        <Home className="w-3 h-3" /> Hostel
                      </span>
                    ) : (
                      <span className="text-[11px] text-slate-400">No Hostel</span>
                    )}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base leading-snug">
                    {language === 'hi' ? col.nameHindi : col.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" />
                    <span>
                      {language === 'hi' ? col.districtHindi : col.district}, Rajasthan
                    </span>
                  </div>
                </div>

                <div className="text-right flex-shrink-0">
                  <div className="text-xs font-semibold text-slate-500">
                    {language === 'hi' ? 'वार्षिक सीटें' : 'Sanctioned Intake'}
                  </div>
                  <div className="text-lg font-black text-amber-700">
                    {col.intake}
                  </div>
                </div>
              </div>

              {/* Branches Offered */}
              <div className="mt-4">
                <div className="text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-slate-500" />
                  <span>{language === 'hi' ? 'उपलब्ध डिप्लोमा शाखाएं:' : 'Offered Branches:'}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {col.branches.map((br, bIdx) => (
                    <span
                      key={bIdx}
                      className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {br}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                  <a href={`tel:${col.contact}`} className="hover:underline">
                    {col.contact}
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                  <a href={`mailto:${col.email}`} className="hover:underline truncate">
                    {col.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
              <span className="text-[11px] text-slate-500">
                {col.address}
              </span>
              <button
                onClick={() =>
                  onAskAboutCollege(
                    language === 'hi'
                      ? `${col.nameHindi} में प्रवेश, हॉस्टल और कट-ऑफ के बारे में जानकारी दें`
                      : `Give me details about ${col.name} regarding admission, hostel, and cutoff`
                  )
                }
                className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 transition-colors flex-shrink-0 cursor-pointer"
              >
                <Sparkles className="w-3 h-3 text-amber-600" />
                <span>{language === 'hi' ? 'DTE असिस्ट से पूछें' : 'Ask DTE Assist'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredColleges.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
          <Building2 className="w-10 h-10 text-slate-400 mx-auto mb-2" />
          <h3 className="font-bold text-slate-700">
            {language === 'hi' ? 'कोई कॉलेज नहीं मिला' : 'No Colleges Match Your Filter'}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            {language === 'hi'
              ? 'कृपया खोज मानदंड अथवा जिला बदलकर पुनः प्रयास करें।'
              : 'Please adjust your search terms or filters.'}
          </p>
        </div>
      )}
    </div>
  );
};
