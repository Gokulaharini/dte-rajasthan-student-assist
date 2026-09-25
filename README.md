# DTE Rajasthan Student Assist

### AI-Powered Student Assistance System for the Department of Technical Education, Government of Rajasthan

**DTE Rajasthan Student Assist** is a bilingual English/Hindi web application designed to help students access information related to the **Department of Technical Education (DTE), Government of Rajasthan**.

The application follows an **information-first and source-grounded approach**, where official Rajasthan government information is treated as the factual source of truth. Google Gemini is used as an AI understanding and response layer where configured.

---

## 🌐 Live Application

**Live Website:** [DTE Rajasthan Student Assist](https://rajasthan-dte-assist.vercel.app/)

**GitHub Repository:** [Gokulaharini/dte-rajasthan-student-assist](https://github.com/Gokulaharini/dte-rajasthan-student-assist)

**Local Development:** `http://localhost:3000`

---

## 📌 Project Information

| Item | Details |
|---|---|
| Website Name | DTE Rajasthan Student Assist |
| Hindi Name | DTE राजस्थान स्टूडेंट असिस्ट |
| Chatbot | DTE Assist / DTE असिस्ट |
| Academic Session | 2026–27 |
| Domain | Artificial Intelligence / NLP / Web Development |
| Target Users | Students, Diploma Applicants, Parents |
| Deployment | Vercel |

---

## 🎯 Project Objectives

- Provide students with a conversational interface for DTE Rajasthan information.
- Support English, Hindi, and Hinglish queries.
- Provide information related to admissions, colleges, fees, scholarships, examinations, and student services.
- Prefer verified official Rajasthan Government sources.
- Reduce the need to manually search multiple government websites and documents.
- Correctly distinguish admission dates, eligibility, documents, fees, and admission procedures.
- Prioritize the applicable **2026–27 academic session**.
- Provide official source references for verification.
- Avoid fabricated government information.
- Provide deterministic fallback responses when AI or network services are unavailable.

---

## ✨ Key Features

### 🤖 DTE Assist AI Chatbot

Students can ask natural-language questions such as:

- What are the 2026–27 admission dates?
- What are the eligibility criteria?
- What documents are required?
- How can I apply?
- What is the admission fee?
- Which government polytechnic colleges are available?
- What scholarships are available?
- When does diploma admission start?
- admission kab start hoga?
- 2026–27 में प्रवेश कब शुरू होगा?

---

### 🌐 Bilingual Support

The chatbot supports:

- English
- Hindi
- Hinglish-style queries

Example:

**English**

> What are the 2026–27 admission dates?

**Hindi**

> 2026–27 में प्रवेश कब शुरू होगा?

---

### 📅 2026–27 Admissions

The application focuses on the current academic session and provides information related to:

- Admission schedules
- Eligibility
- Required documents
- Admission process
- Admission fees
- First-year admissions
- Lateral entry / LEEP
- Engineering diploma admissions
- Non-engineering diploma admissions

---

### 🏫 Government Polytechnic Colleges

The application provides information related to Government Polytechnic Colleges under the Department of Technical Education, Rajasthan.

---

### 💰 Fees and Concessions

The system provides relevant information about:

- Admission fees
- Course-related fees
- Fee concessions
- Official fee-related information

---

### 🎓 Scholarships and Student Services

The knowledge base covers areas such as:

- Scholarships
- Fee concessions
- Student services
- Transfer
- Branch change
- Attendance
- Student insurance

---

### 📝 Examination Information

The chatbot includes information related to:

- BTER examinations
- Examination rules
- Results
- Examination-related student services

---

### 🔊 Voice Input

The application supports browser-based voice input where supported.

Expected language configurations include:

- `en-IN`
- `hi-IN`

Voice recognition depends on the browser and device.

---

## 🧠 How DTE Assist Works

```text
Student Query
      │
      ▼
Language Detection
      │
      ▼
Query Normalization
      │
      ▼
Scope Guard
      │
      ▼
Intent Detection
      │
      ▼
Entity Extraction
      │
      ▼
Knowledge Retrieval
      │
      ▼
Confidence Evaluation
      │
      ▼
Verified Content
      │
      ▼
Gemini / Deterministic Response
      │
      ▼
Official Source Citation
      │
      ▼
Final Answer
