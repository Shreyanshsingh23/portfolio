export const personalInfo = {
  name: "Shreyansh Singh Gautam",
  title: "Software Engineer | Competitive Programmer",
  location: "Bengaluru, Karnataka, India",
  email: "shreyanshrewa@gmail.com",
  phone: "+91 8357832260",
  linkedin: "https://www.linkedin.com/in/shreyanshsingh23",
  github: "https://github.com/shreyanshsingh23",
  twitter: "https://x.com/ShreyanshSing23",
  codeforces: "https://codeforces.com/profile/shreyanshsingh23",
  codechef: "https://www.codechef.com/users/shreyanshsingh23",
  intro: "Computer Science student at BITS Pilani with a passion for AI/ML and competitive programming. Currently building AI solutions as SWE Intern @Maximem AI.",
};

export const skills = {
  languages: ["Python", "Go", "Java", "JavaScript", "C++", "Flutter", "SQL"],
  specializations: ["AI/ML", "Backend", "Competitive Programming", "LangChain/LangGraph"],
};

export const experiences = [
  {
    company: "Maximem AI",
    role: "Software Engineering Intern",
    duration: "July 2025 - Ongoing",
    highlights: [
      "Built AI memory ingestion/orchestration using LangGraph with checkpointing, state management, and rate limiting",
      "Implemented WhatsApp ingestion via Neonize: webhooks, events, media handling, and resilient retry pipeline",
      "Automated Google integrations with Composio: Gmail webhooks, Calendar sync, OAuth2 flows",
    ],
    tech: ["Python", "Go", "LangGraph", "Redis", "PostgreSQL", "Docker"],
    location: "Bengaluru, India",
  },
  {
    company: "GradeSense (AI Grading Platform)",
    role: "Software Engineering Intern",
    duration: "June 2025 - July 2025",
    highlights: [
      "Built AI extraction pipeline for handwritten answers using pdf2image and Pillow",
      "Designed rubric-driven grading service with dynamic weights and scalable batch processing",
      "Delivered FastAPI APIs with JWT auth, role-based access control, and MongoDB schemas",
    ],
    tech: ["Python", "FastAPI", "MongoDB", "Pydantic", "Pillow"],
    location: "Bengaluru, India",
  },
];

export const achievements = [
  {
    metric: "1657",
    label: "Codeforces Max Rating",
    badge: "Expert",
    color: "blue",
  },
  {
    metric: "97",
    label: "AIR (Codeforces Round 1040)",
    badge: "All India Rank",
    color: "purple",
  },
  {
    metric: "17",
    label: "World Rank (CodeChef Starters 166)",
    badge: "Global",
    color: "green",
  },
];

export const projects = [
  {
    title: "Air Canvas",
    description: "Real-time webcam hand-tracking drawing app using MediaPipe and OpenCV with responsive Tkinter GUI. Features gesture controls, multi-color drawing, and persistent canvas.",
    tech: ["Python", "OpenCV", "MediaPipe", "Tkinter"],
    github: "https://github.com/shreyanshsingh23",
    featured: true,
  },
];

export const education = {
  institution: "Birla Institute of Technology and Science, Pilani",
  degree: "Bachelors in Computer Science",
  duration: "August 2024 - July 2028",
  cgpa: "8.5",
};

export const extracurriculars = {
  role: "Core Member",
  organization: "NlogN - The Competitive Programming Club",
  description: "Organized 5+ programming contests (AlgoBee, CodeQuest) with 2,000+ participants nationwide. Conducted CP sessions and workshops.",
};
