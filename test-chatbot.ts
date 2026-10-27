process.env.NODE_ENV = 'test';
import { findBestDeterministicAnswer, detectIntent, extractEntities } from './server';

console.log('====================================================');
console.log('RUNNING CHATBOT RETRIEVAL & INTENT REGRESSION TESTS');
console.log('====================================================\n');

let passedTests = 0;
let totalTests = 0;

function assert(condition: boolean, testName: string, failureDetails?: string) {
  totalTests++;
  if (condition) {
    console.log(`✅ [PASS] ${testName}`);
    passedTests++;
  } else {
    console.error(`❌ [FAIL] ${testName}`);
    if (failureDetails) {
      console.error(`   Details: ${failureDetails}`);
    }
  }
}

// ----------------------------------------------------
// 1. SPECIFIC REGRESSION TEST FOR ADMISSION DATES
// ----------------------------------------------------
console.log('--- 1. SPECIFIC REGRESSION TEST FOR ADMISSION DATES ---');
const primaryQuery = 'What are the 2026-27 admission dates?';
const primaryResult = findBestDeterministicAnswer(primaryQuery, 'en');

assert(
  primaryResult.intent === 'ADMISSION_SCHEDULE',
  'Primary Query Intent Classification',
  `Expected ADMISSION_SCHEDULE, got ${primaryResult.intent}`
);

const lowerText = primaryResult.text.toLowerCase();

// MUST FAIL IF ANSWER CONTAINS ONLY ELIGIBILITY INFO
const hasEligibilityKeywordsOnly =
  (lowerText.includes('35%') || lowerText.includes('bonafide') || lowerText.includes('secondary examination')) &&
  !lowerText.includes('20 may 2026') &&
  !lowerText.includes('25 june 2026');

assert(
  !hasEligibilityKeywordsOnly,
  'Does Not Return Only Eligibility Information',
  `Returned text appeared to be eligibility content: "${primaryResult.text.slice(0, 100)}..."`
);

assert(
  primaryResult.text.includes('Application/Registration Start') || primaryResult.text.includes('20 May 2026'),
  'Contains Verified Application Start Date',
  `Result text missing start date: "${primaryResult.text.slice(0, 150)}..."`
);

assert(
  primaryResult.text.includes('25 June 2026') || primaryResult.text.includes('Last Date'),
  'Contains Verified Application Last Date',
  `Result text missing last date`
);

assert(
  primaryResult.sources.some(s => s.url === 'https://dte.rajasthan.gov.in'),
  'Attaches Verified Official DTE Rajasthan Source URL',
  `Source URLs: ${JSON.stringify(primaryResult.sources)}`
);

// ----------------------------------------------------
// 2. TEST ALL ADMISSION SCHEDULE QUERY VARIATIONS
// ----------------------------------------------------
console.log('\n--- 2. ADMISSION SCHEDULE VARIATIONS TESTS ---');

const scheduleQueries = [
  "What are the 2026-27 admission dates?",
  "When does diploma admission start?",
  "When does admission begin?",
  "What is the last date for admission?",
  "What are the admission dates?",
  "2026-27 admission schedule",
  "admission kab start hoga?",
  "admission ki last date kya hai?",
  "2026-27 mein admission kab hai?",
  "प्रवेश की तारीख क्या है?",
  "प्रवेश कब शुरू होगा?",
  "प्रवेश की अंतिम तिथि क्या है?"
];

for (const q of scheduleQueries) {
  const intent = detectIntent(q);
  const res = findBestDeterministicAnswer(q, q.match(/[\u0900-\u097F]/) ? 'hi' : 'en');
  const text = res.text.toLowerCase();

  const isScheduleIntent = intent === 'ADMISSION_SCHEDULE';
  const hasDates = text.includes('2026') || text.includes('20 मई') || text.includes('25 जून') || text.includes('may') || text.includes('june') || text.includes('जुलाई');

  assert(
    isScheduleIntent && hasDates,
    `Schedule Query: "${q}"`,
    `Intent: ${intent}, Text sample: "${res.text.slice(0, 80).replace(/\n/g, ' ')}..."`
  );
}

// ----------------------------------------------------
// 3. INTENT SEPARATION & NON-DATE REGRESSION TESTS
// ----------------------------------------------------
console.log('\n--- 3. NON-DATE INTENT SEPARATION TESTS ---');

const nonDateTests = [
  {
    query: 'What are the eligibility criteria?',
    expectedIntent: 'ADMISSION_ELIGIBILITY',
    mustInclude: ['35%', '10th']
  },
  {
    query: '10th में कितने प्रतिशत चाहिए?',
    expectedIntent: 'ADMISSION_ELIGIBILITY',
    mustInclude: ['35%']
  },
  {
    query: 'What documents are required?',
    expectedIntent: 'ADMISSION_DOCUMENTS',
    mustInclude: ['Marksheet', 'Bonafide']
  },
  {
    query: 'How can I apply?',
    expectedIntent: 'ADMISSION_PROCESS',
    mustInclude: ['SSO']
  },
  {
    query: 'What is the admission fee?',
    expectedIntent: 'ADMISSION_FEES',
    mustInclude: ['6,500', 'Tuition']
  }
];

for (const test of nonDateTests) {
  const intent = detectIntent(test.query);
  const res = findBestDeterministicAnswer(test.query, 'en');

  const correctIntent = intent === test.expectedIntent;
  const matchesContent = test.mustInclude.some(inc => res.text.includes(inc) || res.text.toLowerCase().includes(inc.toLowerCase()));

  assert(
    correctIntent && matchesContent,
    `Non-Date Query: "${test.query}"`,
    `Expected Intent ${test.expectedIntent}, got ${intent}`
  );
}

// ----------------------------------------------------
// 4. SECTION 8 MANDATORY TEST CASES (1 to 14)
// ----------------------------------------------------
console.log('\n--- 4. SECTION 8 MANDATORY TEST CASES (1 to 14) ---');

// Case 1: Ask for a college's location
console.log('\n[Case 1] College Location');
const case1 = findBestDeterministicAnswer("Where is Government Polytechnic College, Kota located?", 'en');
assert(
  case1.intent === 'COLLEGE_LOCATION',
  'Case 1: Intent is COLLEGE_LOCATION',
  `Got: ${case1.intent}`
);
assert(
  case1.text.includes('DCM Road') && case1.text.includes('Kota'),
  'Case 1: Verified Kota address returned',
  `Text: ${case1.text.slice(0, 100)}`
);

// Case 2: Ask which courses a specific college offers
console.log('\n[Case 2] Courses Offered at Specific College');
const case2 = findBestDeterministicAnswer("Which courses are offered at Government Polytechnic College, Jodhpur?", 'en');
assert(
  case2.intent === 'COLLEGE_COURSES',
  'Case 2: Intent is COLLEGE_COURSES',
  `Got: ${case2.intent}`
);
assert(
  case2.text.includes('Civil Engineering') &&
  case2.text.includes('Petroleum Engineering') &&
  case2.text.includes('Automobile Engineering'),
  'Case 2: Verified Jodhpur branches returned',
  `Text: ${case2.text.slice(0, 150)}`
);

// Case 3: Ask for the duration of a particular course
console.log('\n[Case 3] Duration of a Course');
const case3 = findBestDeterministicAnswer("What is the duration of the Diploma in Mechanical Engineering course?", 'en');
assert(
  case3.intent === 'COURSE_DURATION',
  'Case 3: Intent is COURSE_DURATION',
  `Got: ${case3.intent}`
);
assert(
  case3.text.includes('3 Years (6 Semesters)') && case3.text.includes('Mechanical'),
  'Case 3: Verified 3-Year duration returned',
  `Text: ${case3.text.slice(0, 100)}`
);

// Case 4: Ask for eligibility for admission
console.log('\n[Case 4] Eligibility for Admission');
const case4 = findBestDeterministicAnswer("What is the eligibility for diploma admission in Rajasthan?", 'en');
assert(
  case4.intent === 'ADMISSION_ELIGIBILITY',
  'Case 4: Intent is ADMISSION_ELIGIBILITY',
  `Got: ${case4.intent}`
);
assert(
  case4.text.includes('10th') && case4.text.includes('35%') && case4.text.includes('Science'),
  'Case 4: Verified 10th pass 35% Science & Math rule',
  `Text: ${case4.text.slice(0, 100)}`
);

// Case 5: Ask for admission procedure
console.log('\n[Case 5] Admission Procedure');
const case5 = findBestDeterministicAnswer("What is the step by step admission procedure for polytechnic?", 'en');
assert(
  case5.intent === 'ADMISSION_PROCESS',
  'Case 5: Intent is ADMISSION_PROCESS',
  `Got: ${case5.intent}`
);
assert(
  case5.text.includes('SSO') && case5.text.includes('Choice Filling'),
  'Case 5: Verified SSO centralized admission procedure returned',
  `Text: ${case5.text.slice(0, 100)}`
);

// Case 6: Ask for course fee and academic session
console.log('\n[Case 6] Fee and Academic Session');
const case6 = findBestDeterministicAnswer("What is the fee for polytechnic diploma course for session 2026-27?", 'en');
assert(
  case6.intent === 'ADMISSION_FEES',
  'Case 6: Intent is ADMISSION_FEES',
  `Got: ${case6.intent}`
);
assert(
  case6.text.includes('2026–27') &&
  (case6.text.includes('6,500') || case6.text.includes('7,500')) &&
  case6.text.includes('100% Tuition Fee Exemption'),
  'Case 6: Verified fee structure and girls exemption returned',
  `Text: ${case6.text.slice(0, 150)}`
);

// Case 7: Ask for a scholarship's eligibility and deadline
console.log('\n[Case 7] Scholarship Eligibility and Deadline');
const case7 = findBestDeterministicAnswer("What is the eligibility and deadline for AICTE Pragati scholarship?", 'en');
assert(
  case7.intent === 'SCHOLARSHIP',
  'Case 7: Intent is SCHOLARSHIP',
  `Got: ${case7.intent}`
);
assert(
  case7.text.includes('Pragati') &&
  case7.text.includes('₹50,000') &&
  case7.text.includes('8,00,000') &&
  (case7.text.includes('October') || case7.text.includes('November')),
  'Case 7: Verified Pragati amount, income limit and deadline returned',
  `Text: ${case7.text.slice(0, 150)}`
);

// Case 8: Ask about an examination schedule
console.log('\n[Case 8] Examination Schedule');
const case8 = findBestDeterministicAnswer("When are the BTER semester examinations scheduled?", 'en');
assert(
  case8.intent === 'EXAM',
  'Case 8: Intent is EXAM',
  `Got: ${case8.intent}`
);
assert(
  case8.text.includes('10 December') &&
  case8.text.includes('15 April') &&
  case8.text.includes('75% attendance'),
  'Case 8: Verified BTER Odd/Even exam dates and attendance rule returned',
  `Text: ${case8.text.slice(0, 150)}`
);

// Case 9: Ask an unrelated question (out-of-scope)
console.log('\n[Case 9] Unrelated Question (Out of Scope)');
const case9 = findBestDeterministicAnswer("Can you give me a recipe for paneer butter masala?", 'en');
assert(
  case9.intent === 'OUT_OF_SCOPE',
  'Case 9: Intent is OUT_OF_SCOPE',
  `Got: ${case9.intent}`
);
assert(
  case9.text.includes('strictly bounded') || case9.text.includes('Technical Education'),
  'Case 9: Scope boundary guardrail active',
  `Text: ${case9.text.slice(0, 100)}`
);

// Case 10: Ask for information that does not exist in knowledge base
console.log('\n[Case 10] Non-existent Information in Knowledge Base');
const case10 = findBestDeterministicAnswer("What is the syllabus and cutoff rank for Aerospace Engineering at Government Polytechnic College, Jaisalmer?", 'en');
assert(
  case10.intent === 'UNVERIFIED_DATA',
  'Case 10: Intent is UNVERIFIED_DATA',
  `Got: ${case10.intent}`
);
assert(
  case10.text.includes("Sorry, I couldn't verify this information from the available DTEAssist data"),
  'Case 10: Exact mandatory missing-data statement returned without fabrication',
  `Text: ${case10.text.slice(0, 120)}`
);

// Case 11: Ask a question containing a misspelled college or course name
console.log('\n[Case 11] Misspelled College or Course Name (Fuzzy Matching)');
const case11 = findBestDeterministicAnswer("Tell me about compurter scienc course in Jaipr", 'en');
assert(
  case11.text.includes('Computer Science') &&
  (case11.text.includes('Jaipur') || case11.text.includes('GWPC') || case11.text.includes('Government Polytechnic')),
  'Case 11: Successfully fuzzy matched "compurter scienc" and "Jaipr"',
  `Text: ${case11.text.slice(0, 150)}`
);

// Case 12: Ask a follow-up such as "What about the fees?" after discussing a college
console.log('\n[Case 12] Follow-up Pronoun Context Resolution');
const historyContext = [
  { sender: 'user', text: 'Tell me about Government Polytechnic College, Jaipur' },
  { sender: 'assistant', text: 'Government Polytechnic College, Jaipur offers Computer Science, Civil, Mechanical, Electrical, Electronics Engineering.' }
];
const case12 = findBestDeterministicAnswer("What about its fees?", 'en', historyContext);
assert(
  case12.intent === 'ADMISSION_FEES',
  'Case 12: Intent is ADMISSION_FEES',
  `Got: ${case12.intent}`
);
assert(
  case12.text.includes('Government Polytechnic College, Jaipur') &&
  case12.text.includes('6,500') &&
  case12.text.includes('100% Tuition Fee Exemption'),
  'Case 12: Resolved "its fees" to Government Polytechnic College, Jaipur and provided fee details',
  `Text: ${case12.text.slice(0, 150)}`
);

// Case 13: Ask equivalent questions in English and Hindi
console.log('\n[Case 13] Equivalent English and Hindi Support');
const case13En = findBestDeterministicAnswer("What is the eligibility criteria for admission?", 'en');
const case13Hi = findBestDeterministicAnswer("पॉलिटेक्निक में प्रवेश के लिए क्या पात्रता है?", 'hi');
assert(
  case13En.text.includes('35%') && case13En.text.includes('10th'),
  'Case 13 (EN): English response contains verified 10th 35% rule',
  `Text: ${case13En.text.slice(0, 100)}`
);
assert(
  case13Hi.text.includes('35%') && case13Hi.text.includes('10वीं'),
  'Case 13 (HI): Hindi response contains identical 10th 35% rule in Devanagari',
  `Text: ${case13Hi.text.slice(0, 100)}`
);

// Case 14: Ask about information that may be outdated
console.log('\n[Case 14] Outdated Information Query');
const case14 = findBestDeterministicAnswer("Is the 2024-25 admission schedule still valid?", 'en');
assert(
  case14.intent === 'OUTDATED_SESSION',
  'Case 14: Intent is OUTDATED_SESSION',
  `Got: ${case14.intent}`
);
assert(
  case14.text.includes('Outdated Information Notice') &&
  case14.text.includes('no longer valid') &&
  case14.text.includes('2026–27'),
  'Case 14: Explicitly identified outdated session and provided active 2026-27 session dates',
  `Text: ${case14.text.slice(0, 150)}`
);

// ----------------------------------------------------
// SUMMARY
// ----------------------------------------------------
console.log('\n====================================================');
console.log(`TEST RESULTS: ${passedTests} / ${totalTests} PASSED`);
console.log('====================================================');

if (passedTests === totalTests) {
  process.exit(0);
} else {
  process.exit(1);
}
