export type Language = 'en' | 'hi';

export interface SourceReference {
  title: string;
  url?: string;
  sourceDoc?: string;
  updatedDate?: string;
  category?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  text: string;
  textHindi?: string;
  timestamp: string;
  sources?: SourceReference[];
  intent?: string;
  confidence?: number;
  isDeterministicFallback?: boolean;
  warnings?: string[];
  suggestedFollowUps?: string[];
  isClarification?: boolean;
  isOutdated?: boolean;
  category?: 'COLLEGE_INFO' | 'COURSE_INFO' | 'ADMISSION' | 'FEES_SCHOLARSHIPS' | 'EXAMS_SERVICES' | 'OUT_OF_SCOPE' | 'UNVERIFIED' | 'GENERAL';
}

export interface Course {
  id: string;
  name: string;
  nameHindi: string;
  code?: string;
  duration: string;
  durationHindi: string;
  eligibility: string;
  eligibilityHindi: string;
  type: 'Engineering' | 'Non-Engineering';
  overview: string;
  overviewHindi: string;
  offeringColleges: string[];
}

export interface StudentService {
  id: string;
  name: string;
  nameHindi: string;
  category: 'Admissions' | 'Examinations' | 'Welfare' | 'Verification' | 'Hostel' | 'Grievance';
  description: string;
  descriptionHindi: string;
  procedure: string;
  procedureHindi: string;
  portalOrOffice: string;
  helpline?: string;
  session?: string;
}

export interface College {
  id: string;
  name: string;
  nameHindi: string;
  code: string;
  district: string;
  districtHindi: string;
  type: 'Government' | 'Government-Aided' | 'Autonomous';
  established: number;
  branches: string[];
  intake: number;
  hostelAvailable: boolean;
  address: string;
  contact: string;
  email: string;
  website?: string;
}

export interface CircularDocument {
  id: string;
  circularNo: string;
  title: string;
  titleHindi: string;
  date: string;
  session: string;
  category: 'Admissions' | 'Examinations' | 'Scholarships' | 'General' | 'Transfer' | 'Curriculum';
  summary: string;
  summaryHindi: string;
  fullContent: string;
  keyDates?: { event: string; date: string }[];
  downloadUrl?: string;
  isVerified: boolean;
}

export interface KnowledgeItem {
  id: string;
  category: string;
  categoryHindi: string;
  question: string;
  questionHindi: string;
  answer: string;
  answerHindi: string;
  keywords: string[];
  officialSource: string;
  sourceUrl: string;
  session: string;
}

export interface DocumentExtractionResult {
  title: string;
  circularNo: string;
  issuingAuthority: string;
  issueDate: string;
  academicSession: string;
  targetAudience: string;
  keyDeadlines: { event: string; date: string }[];
  eligibilityConditions: string[];
  requiredDocuments: string[];
  actionStepsForStudents: string[];
  feeDetails?: string;
  officialHelpline?: string;
  summaryHindi: string;
  confidenceScore: number;
  extractedVia: 'gemini' | 'rule-based-fallback';
}

export interface SourceRefreshStatus {
  lastSyncTime: string;
  status: 'synced' | 'updating' | 'warning';
  activeCircularsCount: number;
  verifiedPortals: {
    portalName: string;
    url: string;
    status: 'ONLINE' | 'ACTIVE';
    lastPing: string;
  }[];
  latestUpdateDigest: string;
}
