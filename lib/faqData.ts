// FAQ data for the chatbot assistant
export interface FAQItem {
  keywords: string[];
  question: string;
  answer: string;
  category: string;
}

export const faqData: FAQItem[] = [
  // About Afner
  {
    keywords: ["who", "about", "introduce", "yourself", "afner"],
    question: "Who is Afner Sirait?",
    answer: "Afner Sirait is a Data & DevOps Engineer with 3+ years of experience in data architecture, ETL pipelines, analytics, and DevOps. He is an Engineering graduate from Universitas Gadjah Mada and currently works as an AI & Data Analyst at Feedloop.ai.",
    category: "about"
  },
  {
    keywords: ["education", "university", "degree", "study", "school"],
    question: "What is Afner's educational background?",
    answer: "Afner is an Engineering graduate from Universitas Gadjah Mada (UGM), one of Indonesia's top universities.",
    category: "about"
  },
  {
    keywords: ["work", "job", "company", "employer", "position"],
    question: "Where does Afner work?",
    answer: "Afner currently works as an AI & Data Analyst at Feedloop.ai, where he focuses on solving problems and creating impactful data solutions.",
    category: "about"
  },
  
  // Skills & Expertise
  {
    keywords: ["skills", "expertise", "technology", "tech stack", "tools"],
    question: "What are Afner's technical skills?",
    answer: "Afner specializes in:\n• Data Engineering & ETL pipelines\n• Data Architecture & Analytics\n• DevOps & Cloud Infrastructure\n• Python, SQL, and data processing tools\n• Kubernetes, Docker, CI/CD\n• Next.js, React, TypeScript for web development",
    category: "skills"
  },
  {
    keywords: ["programming", "languages", "code", "coding"],
    question: "What programming languages does Afner know?",
    answer: "Afner is proficient in Python, SQL, JavaScript/TypeScript, and has experience with various data processing and web development technologies.",
    category: "skills"
  },
  {
    keywords: ["devops", "cloud", "kubernetes", "docker"],
    question: "What DevOps skills does Afner have?",
    answer: "Afner has strong DevOps skills including Kubernetes orchestration, Docker containerization, CI/CD pipelines with GitHub Actions, infrastructure as code, and cloud platform management.",
    category: "skills"
  },
  
  // Experience
  {
    keywords: ["experience", "years", "how long", "career"],
    question: "How much experience does Afner have?",
    answer: "Afner has 3+ years of professional experience in data engineering, data analysis, and DevOps roles.",
    category: "experience"
  },
  {
    keywords: ["projects", "portfolio", "work samples", "built"],
    question: "What projects has Afner worked on?",
    answer: "You can view Afner's portfolio projects in the Portfolio section of this website. His work includes data pipelines, analytics dashboards, web applications, and DevOps infrastructure projects.",
    category: "experience"
  },
  
  // Contact & Availability
  {
    keywords: ["contact", "email", "reach", "get in touch", "message"],
    question: "How can I contact Afner?",
    answer: "You can contact Afner via:\n• Email: afnersirait@gmail.com\n• LinkedIn: linkedin.com/in/afnersirait\n• GitHub: github.com/afnersirait\n• Or use the contact form on this website!",
    category: "contact"
  },
  {
    keywords: ["hire", "available", "freelance", "opportunities", "job"],
    question: "Is Afner available for opportunities?",
    answer: "Please reach out via email at afnersirait@gmail.com or through the contact form to discuss potential opportunities and availability.",
    category: "contact"
  },
  {
    keywords: ["resume", "cv", "download"],
    question: "Can I download Afner's resume?",
    answer: "Yes! You can download Afner's resume by clicking the 'Download Resume' button in the Hero section or Resume section of this website.",
    category: "contact"
  },
  
  // Website & Portfolio
  {
    keywords: ["website", "portfolio", "built", "made", "created"],
    question: "What is this website built with?",
    answer: "This website is built with Next.js 14, TypeScript, TailwindCSS, and deployed using Docker and Kubernetes. It features a modern, responsive design with dark mode support.",
    category: "website"
  },
  {
    keywords: ["sections", "navigate", "find", "where"],
    question: "What sections are on this website?",
    answer: "The website has the following sections:\n• Home - Introduction\n• About - Background and skills\n• Resume - Work experience and education\n• Portfolio - Project showcase\n• Contact - Get in touch",
    category: "website"
  },
  
  // General
  {
    keywords: ["hello", "hi", "hey", "greetings"],
    question: "Hello!",
    answer: "Hi there! 👋 I'm Afner's assistant. I can help answer questions about Afner's background, skills, experience, and how to get in touch. What would you like to know?",
    category: "general"
  },
  {
    keywords: ["help", "what can you do", "assist"],
    question: "What can you help me with?",
    answer: "I can help you with:\n• Information about Afner's background and education\n• Details about his technical skills and expertise\n• His work experience and projects\n• How to contact him\n• Information about this website\n\nJust ask me anything!",
    category: "general"
  },
  {
    keywords: ["thank", "thanks", "appreciate"],
    question: "Thank you!",
    answer: "You're welcome! Feel free to ask if you have any other questions about Afner. Have a great day! 😊",
    category: "general"
  }
];

// Function to find matching FAQ
export function findMatchingFAQ(userMessage: string): FAQItem | null {
  const message = userMessage.toLowerCase();
  
  // Find the best matching FAQ based on keyword matches
  let bestMatch: FAQItem | null = null;
  let maxMatches = 0;
  
  for (const faq of faqData) {
    const matches = faq.keywords.filter(keyword => 
      message.includes(keyword.toLowerCase())
    ).length;
    
    if (matches > maxMatches) {
      maxMatches = matches;
      bestMatch = faq;
    }
  }
  
  // Return match if at least one keyword matched
  return maxMatches > 0 ? bestMatch : null;
}

// Default response when no FAQ matches
export const defaultResponse = {
  question: "I'm not sure about that",
  answer: "I'm sorry, I don't have specific information about that. You can:\n• Try rephrasing your question\n• Contact Afner directly at afnersirait@gmail.com\n• Use the contact form on this website\n\nI can help with questions about Afner's background, skills, experience, and contact information.",
  category: "general"
};
