import { findBestDeterministicAnswer, detectIntent } from './server';

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
// 1. REGRESSION TEST FOR "What are the 2026-27 admission dates?"
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
