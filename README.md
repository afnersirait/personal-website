# Afner Sirait - Personal Portfolio Website

Hey there! 👋 I'm Afner Sirait, an AI & Data Analyst at Feedloop.ai. This is my personal portfolio website where I showcase my journey in data engineering, DevOps, and analytics. Feel free to explore and reach out if you'd like to connect!

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=flat-square&logo=tailwindcss)
![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react)

## 🚀 What's Inside

I built this portfolio to be more than just a static resume - it's a fully interactive experience that showcases my technical capabilities:

### **Key Highlights**
- � **Modern Design**: Professional UI with beautiful gradient effects and animations
- � **Mobile-First**: Works perfectly on any device - phone, tablet, or desktop
- ⚡ **Lightning Fast**: Built with Next.js 14 for optimal performance
- 🤖 **AI-Powered Chat**: Integrated Google Gemini AI to answer questions about my background
- 🌓 **Dark Mode**: Toggle between light and dark themes
- 📄 **Interactive Resume**: Downloadable CV with detailed work experience and skills
- 🎭 **Smooth Animations**: Entrance animations and hover effects for better UX
- � **SEO Ready**: Optimized for search engines and social media sharing

## 📋 What You'll Find

The website is organized into several sections to give you a complete picture of who I am and what I do:

- **🏠 Home**: Introduction with my profile, current role, and quick links to my work
- **👤 About**: My background, journey in tech, and core competencies in data engineering and DevOps
- **📄 Resume**: Detailed work experience at Deloitte and Feedloop, education from UGM, technical skills, certifications, and languages
- **💼 Portfolio**: Showcase of projects I've worked on (coming soon with real projects!)
- **📧 Contact**: Multiple ways to reach me - email, phone, or through the contact form
- **🤖 AI Chat Assistant**: A smart chatbot powered by Google Gemini that can answer questions about my experience, skills, and background

## 🛠️ Tech Stack

I chose these technologies based on my experience and their industry relevance:

**Frontend:**
- **Next.js 14** - React framework with App Router for optimal performance
- **TypeScript** - Type safety and better developer experience
- **TailwindCSS** - Utility-first CSS for rapid UI development
- **Lucide React** - Beautiful, consistent icons
- **shadcn/ui** - High-quality, accessible UI components

**AI Integration:**
- **Google Gemini AI** - Free AI API for the intelligent chat assistant
- **Custom API Routes** - Next.js API routes for backend logic

**DevOps & Deployment:**
- **Docker** - Containerization for consistent deployments
- **Kubernetes** - Orchestration with auto-scaling capabilities
- **GitHub Actions** - CI/CD pipeline automation
- **Vercel** - Primary hosting platform (also K8s-ready)

## 🚀 Running Locally

Want to run this project on your machine? Here's how:

### **Prerequisites**
- Node.js 18 or higher
- npm or yarn
- Git

### **Setup**

```bash
# Clone the repository
git clone https://github.com/afnersirait/personal-website.git
cd personal-website

# Install dependencies
npm install

# Set up environment variables (for AI chat)
# Create .env.local and add:
# GOOGLE_API_KEY=your_gemini_api_key_here

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### **Available Commands**

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

For detailed setup instructions, check out the [AI_CHAT_SETUP.md](AI_CHAT_SETUP.md) guide.

## 📂 Project Structure

```
personal-website/
├── app/                    # Next.js 14 App Router
│   ├── api/chat/          # AI chat API endpoint
│   ├── globals.css        # Global styles & animations
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── Hero.tsx          # Landing section
│   ├── About.tsx         # About me section
│   ├── Resume.tsx        # Work experience & education
│   ├── Portfolio.tsx     # Projects showcase
│   ├── Contact.tsx       # Contact form
│   ├── ChatAssistant.tsx # AI chatbot
│   └── ...
├── lib/                  # Utilities
│   ├── faqData.ts       # Chat FAQ data
│   └── utils.ts         # Helper functions
├── public/              # Static assets
│   ├── images/         # Profile pictures
│   └── resume/         # Resume PDF
└── guideline/          # Documentation
```

## 🚀 Deployment

This site is currently deployed on Vercel, but I've also set it up to work with Docker and Kubernetes for more complex deployment scenarios.

### **Vercel (Current)**

The easiest way to deploy this is through Vercel:

```bash
# Push to GitHub
git push origin main

# Connect to Vercel
# Visit vercel.com and import the repository
# It will auto-deploy on every push
```

### **Docker & Kubernetes**

For production-grade deployments, I've included Docker and Kubernetes configurations:

```bash
# Build Docker image
docker build -t personal-website .

# Run with Docker
docker run -p 3000:3000 personal-website

# Deploy to Kubernetes
kubectl apply -f k8s/
```

The K8s setup includes auto-scaling, health checks, and ingress configuration. Check out the [guideline](guideline/) folder for detailed deployment guides.

## 🎯 Key Features I'm Proud Of

- **AI Chat Integration**: Spent time integrating Google Gemini AI to make the site interactive
- **Smooth Animations**: Added custom CSS animations for better user experience
- **Responsive Design**: Tested on multiple devices to ensure it works everywhere
- **Dark Mode**: Implemented theme switching with persistent preferences
- **Performance**: Optimized for fast loading and smooth interactions
- **DevOps Ready**: Docker and Kubernetes configs for production deployment

## 📚 Documentation

I've created detailed guides in the `guideline/` folder:
- AI Chat setup and customization
- Kubernetes deployment instructions
- Design system and theme configuration
- Mobile responsive guidelines
- And more...

## 📧 Get in Touch

If you have questions about the project or want to discuss opportunities:

- **Email**: afnersirait@gmail.com
- **LinkedIn**: [linkedin.com/in/afnersirait](https://linkedin.com/in/afnersirait)
- **GitHub**: [github.com/afnersirait](https://github.com/afnersirait)

Or just use the chat assistant on the website - it's powered by AI and knows all about me! 🤖

---

**Built with passion by Afner Sirait** 🚀

*Last updated: January 2026*
