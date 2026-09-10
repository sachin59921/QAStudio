export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  type: string;
  description?: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  focus?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  category: 'cloud' | 'ai' | 'general';
  highlight?: string;
}

export const PROFILE_DATA = {
  name: "Sachin Kumar Pal",
  title: "Software QA Engineer",
  tagline: "Manual & API Testing (Postman) | Web & Mobile Applications | Agile/Scrum | Frontend-Savvy QA (React.js)",
  location: "Haveli, Curti, Ponda, Goa, India",
  email: "sachinpal59921@gmail.com",
  phone: "+91 7841018112",
  phoneDisplay: "7841018112",
  linkedin: "https://www.linkedin.com/in/sachinkumarpal0103",
  linkedinUsername: "sachinkumarpal0103",
  portfolio: "https://sachinpal-portfolio.netlify.app/",
  portfolioDisplay: "sachinpal-portfolio.netlify.app",
  availability: "Actively seeking QA Engineer, QA Tester, and Software QA Analyst roles (On-site, Hybrid, or Remote)",
  
  philosophy: "Great software isn't just built — it's proven.",
  summary: "I'm a Software QA Engineer who makes sure products work the way users expect, so quality issues are caught before they ever reach real people. At SJ Innovation, I design and execute functional, regression, and API test cases across web and mobile applications — validating releases, tracking defects through their full lifecycle, and partnering with developers to resolve them fast. What sets me apart is my frontend background (HTML, CSS, JavaScript, React.js). I don't just report bugs — I speak the developers' language, which means clearer defect reports, quicker fixes, and fewer back-and-forth cycles.",
  mindsetQuote: "When I'm not testing, I'm chasing detail in other ways — I won 2nd Prize at a state-level intercollegiate short film competition. Quality, it turns out, is a mindset.",

  metrics: [
    { label: "Manual Test Cases", value: "120+", detail: "Executed across multi-tier web applications with 100% coverage" },
    { label: "Defects Caught Early", value: "30+", detail: "Critical UI/UX & functional defects intercepted before release" },
    { label: "Defects Resolved", value: "50+", detail: "Logged, tracked, and closed through complete defect lifecycle" },
    { label: "Sprint Scope Coverage", value: "100%", detail: "Maintained rigorous test documentation aligned with sprint goals" },
  ],

  coreOfferings: [
    {
      title: "Manual Testing & Test Case Design",
      desc: "Creating detailed test matrices, boundary value analyses, and exhaustive user workflows for web & mobile apps.",
      icon: "CheckCircle2"
    },
    {
      title: "API Testing with Postman",
      desc: "Validating REST endpoints, status codes, payload structures, and integration boundaries prior to UI consumption.",
      icon: "Network"
    },
    {
      title: "Bug Tracking & Defect Lifecycle",
      desc: "Logging reproducible bug tickets with console logs, network payloads, and pinpointing frontend state issues.",
      icon: "Bug"
    },
    {
      title: "Functional & Regression Testing",
      desc: "Executing comprehensive smoke, sanity, and regression passes to ensure zero regressions across release cycles.",
      icon: "ShieldAlert"
    },
    {
      title: "Agile/Scrum Ceremonies",
      desc: "Active participation in sprint planning, daily stand-ups, backlog grooming, and sprint retrospectives as embedded QA.",
      icon: "Users"
    },
    {
      title: "Frontend-Savvy Analysis (React.js)",
      desc: "Speaking developer language using HTML, CSS, JavaScript & React knowledge to bridge the gap between QA and Dev.",
      icon: "Code2"
    }
  ],

  skillCategories: [
    {
      category: "QA & Testing Specialties",
      skills: [
        "Manual Testing",
        "API Testing (Postman)",
        "QA Engineering",
        "Black Box Testing",
        "Smoke & Sanity Testing",
        "User Acceptance Testing (UAT)",
        "Functional Testing",
        "Regression Testing",
        "Test Case Design & Matrix",
        "Test Plan Documentation",
        "Defect Lifecycle Management"
      ]
    },
    {
      category: "Frontend & Technical Literacy",
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5 & CSS3",
        "Web Applications",
        "Mobile App Testing",
        "Browser DevTools & Network Inspections",
        "DOM & UI Component Debugging",
        "Responsive & Cross-Browser Validation"
      ]
    },
    {
      category: "Tools & Methodologies",
      skills: [
        "Postman (API Collections & Tests)",
        "Agile / Scrum Methodologies",
        "Sprint Planning & Stand-ups",
        "Bug Tracking Systems",
        "Cross-functional Collaboration",
        "Git Fundamentals",
        "Defect Reporting & Triage"
      ]
    },
    {
      category: "Cloud & Emerging Tech",
      skills: [
        "Google Cloud Computing Foundations",
        "Cloud Speech API",
        "App Engine",
        "Generative AI Concepts",
        "Gemini & Streamlit Apps"
      ]
    }
  ],

  experiences: [
    {
      id: "sj-innovation",
      role: "Software QA Engineer Intern",
      company: "SJ Innovation LLC",
      location: "Verna, Goa",
      period: "January 2025 - May 2025",
      duration: "5 months",
      type: "Internship",
      achievements: [
        "Executed 120+ manual test cases across multiple web applications, identifying 30+ UI/UX and functional defects — a significant share of which were caught before reaching end users.",
        "Designed and maintained test plans, test case documentation, and test scripts aligned to sprint requirements, ensuring 100% sprint-scope coverage.",
        "Logged, tracked, and closed 50+ defects through a structured bug lifecycle, working directly with developers to drive faster resolution and lower regression risk.",
        "Performed regression and functional testing across release cycles, validating bug fixes and confirming release readiness — helping reduce repeat issues and post-release defects.",
        "Conducted API testing using Postman on endpoints, verifying request/response behavior and improving endpoint reliability — catching integration bugs before they impacted the frontend.",
        "Participated in Agile/Scrum ceremonies (sprint planning, daily stand-ups, retrospectives) as an embedded QA resource, contributing to successful sprints and faster cross-team alignment."
      ],
      technologies: ["Postman", "Manual Testing", "Regression Testing", "API Testing", "Agile/Scrum", "Test Plans", "Bug Lifecycle", "Web Applications"]
    },
    {
      id: "enigmasoft",
      role: "Web Development Intern",
      company: "EnigmaSoft Technologies",
      location: "Panaji, Goa",
      period: "December 2022 - December 2022",
      duration: "1 month",
      type: "Internship",
      description: "At Enigmasoft Technology Company, I gained hands-on experience with web development projects, conducting research, testing website applications, and assisting with project management tasks. This internship helped me develop my skills in programming, project management, communication, and teamwork, and provided me with the knowledge needed to succeed in the technology industry.",
      achievements: [
        "Conducted research and functional website application testing, identifying usability friction points.",
        "Gained direct exposure to frontend coding and codebase structure, creating a strong foundation for technical QA testing.",
        "Collaborated with project managers and developers to assist with sprint deliverables and milestone tracking."
      ],
      technologies: ["Web Development", "Website Testing", "HTML/CSS", "JavaScript", "Project Management", "Team Collaboration"]
    }
  ],

  education: [
    {
      id: "edu-mca",
      degree: "Master of Computer Applications (MCA)",
      institution: "Goa University - Goa Business School",
      location: "Goa, India",
      period: "July 2023 - May 2025",
      focus: "Advanced Software Engineering, Systems Architecture, Quality Methodologies, and Database Systems"
    },
    {
      id: "edu-bca",
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Goa Multi Faculty College",
      location: "Piliem, Goa, India",
      period: "April 2020 - May 2023",
      focus: "Information Technology, Software Development, Web Technologies, Database Management"
    },
    {
      id: "edu-hssc",
      degree: "Higher Secondary School Certificate (HSSC)",
      institution: "The Kamakshi Education Society's Higher Secondary School of Arts Commerce and Science",
      location: "Curti, Ponda, Goa",
      period: "June 2018 - March 2020",
      focus: "Commerce Stream — Quantitative Analysis & Business Fundamentals"
    },
    {
      id: "edu-highschool",
      degree: "High School Secondary Education",
      institution: "M.E.F's Fatima High School",
      location: "Ponda, Goa",
      period: "June 2008 - March 2018",
      focus: "Foundational Academics, Science, Mathematics & Language"
    }
  ],

  certifications: [
    {
      id: "cert-speech",
      name: "Cloud Speech API: 3 Ways",
      issuer: "Google Cloud",
      category: "cloud",
      highlight: "Speech-to-text API integration, audio payload handling, and cloud services"
    },
    {
      id: "cert-cloud-genai",
      name: "Google Cloud Computing Foundations & Generative AI",
      issuer: "Google Cloud",
      category: "ai",
      highlight: "Cloud infrastructure fundamentals, AI prompt patterns, and architecture"
    },
    {
      id: "cert-infoaid",
      name: "Infoaidtech Certification",
      issuer: "Infoaidtech",
      category: "general",
      highlight: "Technical evaluation, software practices, and industry training"
    },
    {
      id: "cert-genai-gemini",
      name: "Develop GenAI Apps with Gemini and Streamlit",
      issuer: "Google Cloud / Community",
      category: "ai",
      highlight: "Building interactive LLM-backed interfaces with Gemini models"
    },
    {
      id: "cert-appengine",
      name: "App Engine: 3 Ways",
      issuer: "Google Cloud",
      category: "cloud",
      highlight: "Serverless web application deployment, scaling, and endpoint testing"
    }
  ],

  honors: [
    {
      title: "2nd Prize – State Level Intercollegiate Short Film Making Competition",
      significance: "Demonstrates precision, keen observational ability, storytelling, and an eye for micro-details — qualities that directly power thorough QA and defect analysis."
    }
  ],

  sampleBugReport: {
    id: "DEF-104",
    title: "Checkout Modal: Submitting without CVV freezes UI in pending state instead of showing inline validation",
    severity: "High",
    priority: "P1",
    environment: "Staging (Chrome 124.0, macOS 14.4 & Pixel 7 Android 14)",
    testType: "Functional / Negative Testing",
    stepsToReproduce: [
      "Navigate to cart with 1+ item and proceed to payment step.",
      "Select 'Credit Card' method and enter valid 16-digit card and expiration date.",
      "Leave the CVV input empty.",
      "Click 'Complete Order' button."
    ],
    expectedResult: "Form validation should block submission immediately, display red error boundary on CVV input: 'Security code is required', and keep button enabled.",
    actualResult: "Button enters disabled 'Processing...' state with spinner, no validation message is shown, and the user cannot retry without refreshing the page.",
    devInsight: "Frontend state `isSubmitting` is set to `true` before form schema validation runs. In `PaymentForm.tsx`, `handleSubmit()` lacks a catch branch before dispatching the Redux action.",
    apiPayloadSnippet: "POST /api/v1/orders/checkout\nStatus: 422 Unprocessable Entity\nBody: { 'error': 'VALIDATION_FAILED', 'field': 'cvv', 'message': 'CVV code cannot be blank' }"
  }
};
