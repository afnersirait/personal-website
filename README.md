# Personal Website - CV/Resume & Portfolio

A modern, professional, and fully responsive personal website built with Next.js 14, React, TypeScript, and TailwindCSS. Showcases Afner's skills, experience, and projects with a clean, elegant design optimized for all devices.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

### **Core Features**
- 🎨 **Professional Design**: Clean, modern UI with professional teal-blue color scheme
- 📱 **Fully Responsive**: Mobile-first design optimized for all devices (320px - 4K)
- ⚡ **Fast Performance**: Optimized for speed with Next.js 14 App Router
- 🎭 **Smooth Animations**: Elegant transitions and micro-interactions
- ♿ **Accessible**: WCAG 2.1 compliant with ARIA labels and semantic HTML
- 🔍 **SEO Optimized**: Meta tags, Open Graph, and semantic structure

### **Special Features**
- 📄 **Resume Download**: One-click CV/Resume download with visual feedback
- 🖼️ **Profile Picture**: Animated gradient border with elegant display
- 🌓 **Theme Switcher**: Toggle between Default (Light) and Night (Dark) themes
- 🤖 **AI Chat Assistant**: Interactive FAQ chatbot to answer visitor questions
- 📧 **Contact Form**: Ready-to-integrate contact form
- 🚀 **Production Ready**: Docker & Kubernetes deployment configurations

## 📋 Sections

1. **🏠 Hero Section**
   - Animated profile picture with gradient border
   - Professional introduction
   - Call-to-action buttons (View Work, Download Resume, Contact)
   - Social media links (GitHub, LinkedIn, Email)

2. **👤 About Section**
   - Personal introduction
   - Skills with visual progress bars
   - Key features and highlights
   - Profile picture display

3. **📄 Resume Section**
   - Work experience timeline with achievements
   - Education history
   - Technical skills categorized
   - **Download Resume button** with visual feedback

4. **💼 Portfolio Section**
   - Project showcase with images
   - Project descriptions and tech stack
   - GitHub and live demo links
   - Responsive grid layout

5. **📧 Contact Section**
   - Contact form (ready for integration)
   - Contact information
   - Social media links
   - Location and email

6. **🔗 Footer**
   - Quick navigation links
   - Social media connections
   - Copyright information

7. **🤖 Chat Assistant**
   - Floating chat button (bottom-right)
   - Interactive FAQ chatbot
   - 20+ pre-defined questions & answers
   - Instant responses about background, skills, contact info
   - Theme-aware design

## 🛠️ Tech Stack

### **Core Technologies**
- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5.3](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS 3.4](https://tailwindcss.com/)
- **UI Library**: Custom components with [shadcn/ui](https://ui.shadcn.com/) patterns
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: TailwindCSS animations + custom keyframes

### **Development Tools**
- **Package Manager**: npm
- **Linting**: ESLint with Next.js config
- **CSS Processing**: PostCSS with Autoprefixer
- **Type Checking**: TypeScript strict mode

### **Deployment**
- **Containerization**: Docker with multi-stage builds
- **Orchestration**: Kubernetes with HPA
- **CI/CD**: GitHub Actions
- **Hosting**: Vercel, Kubernetes, or any Node.js platform

## 🚀 Quick Start

### **Prerequisites**
- Node.js 18+ and npm
- Git

### **Installation**

```bash
# 1. Clone the repository
git clone https://github.com/afnersirait/personal-website.git
cd personal-website

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open browser
# Navigate to http://localhost:3000
```

### **First Steps**
1. Add your profile picture to `public/images/profile.jpg`
2. Add your resume PDF to `public/resume/Afner_Sirait_Resume.pdf`
3. Update personal information in components
4. Customize colors in `app/globals.css`

See [QUICKSTART.md](guideline/QUICKSTART.md) for detailed setup guide.

## 🎨 Customization

### **Quick Customization**

**1. Profile Picture**
```bash
# Add your photo (recommended: 400x400px, JPG/PNG)
public/images/profile.jpg
```
See [PROFILE_PICTURE_GUIDE.md](guideline/PROFILE_PICTURE_GUIDE.md)

**2. Resume/CV**
```bash
# Add your resume PDF
public/resume/Afner_Sirait_Resume.pdf
```
See [RESUME_DOWNLOAD_GUIDE.md](guideline/RESUME_DOWNLOAD_GUIDE.md)

**3. Theme Switcher**
Toggle between light and dark themes:
- Click sun/moon icon in navigation
- Preference saved automatically
- Works on all devices

See [THEME_GUIDE.md](guideline/THEME_GUIDE.md)

**4. Chat Assistant FAQs**
```typescript
// lib/faqData.ts
// Add or modify FAQ questions and answers
```
See [CHAT_ASSISTANT_GUIDE.md](guideline/CHAT_ASSISTANT_GUIDE.md)

**5. Personal Information**
Update these components:
- `components/Hero.tsx` - Name, title, bio, social links
- `components/About.tsx` - About text, skills
- `components/Resume.tsx` - Experience, education, skills
- `components/Portfolio.tsx` - Projects
- `components/Contact.tsx` - Contact info
- `components/Footer.tsx` - Footer details
- `lib/faqData.ts` - Chat assistant FAQs

**6. Color Scheme**
```css
/* app/globals.css */
--primary: 199 89% 48%;  /* Professional teal-blue */
--secondary: 210 40% 96%; /* Light gray */
```
See [DESIGN_SYSTEM.md](guideline/DESIGN_SYSTEM.md)

**7. Metadata**
```typescript
// app/layout.tsx
export const metadata = {
  title: "Your Name - Portfolio",
  description: "Your description",
  // ...
}
```

### **Detailed Guides**
- 📋 [Customization Checklist](guideline/CUSTOMIZATION_CHECKLIST.md)
- 🎨 [Design System](guideline/DESIGN_SYSTEM.md)
- 📱 [Mobile Responsive Guide](guideline/MOBILE_RESPONSIVE_GUIDE.md)
- 🌓 [Theme Guide](guideline/THEME_GUIDE.md)
- 🤖 [Chat Assistant Guide](guideline/CHAT_ASSISTANT_GUIDE.md)

## 📝 Available Scripts

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint for code quality
```

## 🚀 Deployment

### **Option 1: Vercel (Recommended - Easiest)**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/afnersirait/personal-website)

```bash
# 1. Push to GitHub
git push origin main

# 2. Import on Vercel
# Visit https://vercel.com and import your repo

# 3. Deploy automatically
# Vercel will auto-deploy on every push
```

**Features:**
- ✅ Automatic deployments
- ✅ Global CDN
- ✅ SSL certificates
- ✅ Preview deployments
- ✅ Analytics

### **Option 2: Kubernetes (Production-Grade)**

Full production deployment with Docker and Kubernetes:

```bash
# Quick deploy
./scripts/deploy.sh

# Or manual deployment
kubectl apply -f k8s/ -n personal-website
```

**Features:**
- ✅ Docker multi-stage builds
- ✅ Kubernetes manifests (Deployment, Service, Ingress, HPA)
- ✅ GitHub Actions CI/CD
- ✅ Auto-scaling (2-10 replicas)
- ✅ SSL/TLS with cert-manager
- ✅ Health checks & monitoring

**Guides:**
- 📘 [Kubernetes Deployment Guide](guideline/KUBERNETES_DEPLOYMENT.md)
- 🚀 [Kubernetes Quickstart](guideline/KUBERNETES_QUICKSTART.md)

### **Option 3: Docker**

```bash
# Build image
docker build -t personal-website .

# Run container
docker run -p 3000:3000 personal-website
```

### **Option 4: Other Platforms**

- **Netlify**: Drag & drop or Git integration
- **AWS Amplify**: Full-stack deployment
- **Railway**: One-click deployment
- **Render**: Auto-deploy from Git
- **DigitalOcean App Platform**: Managed deployment

## 📄 Project Structure

```
personal-website/
├── app/                          # Next.js 14 App Router
│   ├── globals.css              # Global styles & CSS variables
│   ├── layout.tsx               # Root layout with metadata
│   └── page.tsx                 # Home page (main entry)
│
├── components/                   # React components
│   ├── ui/                      # Reusable UI components
│   │   ├── button.tsx           # Button component
│   │   ├── card.tsx             # Card components
│   │   └── badge.tsx            # Badge component
│   ├── Navigation.tsx           # Header navigation with mobile menu
│   ├── Hero.tsx                 # Hero section with CTA
│   ├── About.tsx                # About section with skills
│   ├── Resume.tsx               # Resume/CV section
│   ├── Portfolio.tsx            # Projects showcase
│   ├── Contact.tsx              # Contact form & info
│   ├── Footer.tsx               # Footer with links
│   ├── ProfilePicture.tsx       # Animated profile picture
│   ├── DownloadResumeButton.tsx # Resume download button
│   ├── ThemeProvider.tsx        # Theme context provider
│   ├── ThemeToggle.tsx          # Theme switcher button
│   └── ChatAssistant.tsx        # FAQ chatbot component
│
├── lib/
│   ├── utils.ts                 # Utility functions (cn, etc.)
│   └── faqData.ts               # Chat assistant FAQ data
│
├── public/                       # Static assets
│   ├── images/                  # Images folder
│   │   ├── profile.jpg          # Your profile picture
│   │   ├── profile.webp         # Optimized profile picture
│   │   └── README.md            # Image optimization guide
│   └── resume/                  # Resume folder
│       ├── Afner_Sirait_Resume.pdf  # Your resume PDF
│       └── README.md            # Resume setup guide
│
├── guideline/                    # Documentation
│   ├── CHAT_ASSISTANT_GUIDE.md  # Chat assistant documentation
│   ├── CUSTOMIZATION_CHECKLIST.md
│   ├── DESIGN_SYSTEM.md
│   ├── KUBERNETES_DEPLOYMENT.md
│   ├── KUBERNETES_QUICKSTART.md
│   ├── MOBILE_RESPONSIVE_GUIDE.md
│   ├── PROFILE_PICTURE_GUIDE.md
│   ├── PROJECT_SUMMARY.md
│   ├── QUICKSTART.md
│   ├── RESUME_DOWNLOAD_GUIDE.md
│   ├── SETUP.md
│   └── THEME_GUIDE.md           # Theme switcher documentation
│
├── k8s/                          # Kubernetes manifests
│   ├── deployment.yaml          # Deployment & Service
│   ├── ingress.yaml             # Ingress configuration
│   ├── hpa.yaml                 # Horizontal Pod Autoscaler
│   └── README.md                # K8s quick reference
│
├── scripts/                      # Deployment scripts
│   ├── deploy.sh                # Quick deploy script
│   └── cleanup.sh               # Cleanup script
│
├── .github/workflows/            # GitHub Actions
│   ├── docker-build-push.yml    # Docker CI/CD
│   ├── deploy-k8s.yml           # Kubernetes deployment
│   └── README.md                # Workflows guide
│
├── Dockerfile                    # Docker configuration
├── .dockerignore                 # Docker ignore file
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # TailwindCSS configuration
├── tsconfig.json                 # TypeScript configuration
├── postcss.config.js             # PostCSS configuration
├── package.json                  # Dependencies & scripts
└── README.md                     # This file
```

## 🎯 Best Practices

### **Code Quality**
- ✅ **TypeScript**: Full type safety
- ✅ **ESLint**: Code linting and formatting
- ✅ **Component Architecture**: Modular and reusable
- ✅ **Clean Code**: Well-organized and documented

### **Performance**
- ✅ **Next.js 14**: Latest App Router for optimal performance
- ✅ **Image Optimization**: Next.js Image component
- ✅ **Code Splitting**: Automatic route-based splitting
- ✅ **CSS Optimization**: TailwindCSS with PurgeCSS

### **Responsive Design**
- ✅ **Mobile-First**: Optimized for mobile devices
- ✅ **Touch-Friendly**: 44px minimum touch targets
- ✅ **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- ✅ **Viewport**: Proper meta viewport configuration

### **Accessibility**
- ✅ **Semantic HTML**: Proper HTML5 elements
- ✅ **ARIA Labels**: Screen reader support
- ✅ **Keyboard Navigation**: Full keyboard accessibility
- ✅ **Color Contrast**: WCAG 2.1 AA compliant

### **SEO**
- ✅ **Meta Tags**: Title, description, keywords
- ✅ **Open Graph**: Social media sharing
- ✅ **Semantic Structure**: Proper heading hierarchy
- ✅ **Fast Loading**: Optimized for Core Web Vitals

## 📚 Documentation

### **Setup & Customization**
- 🚀 [Quick Start Guide](guideline/QUICKSTART.md)
- 📋 [Customization Checklist](guideline/CUSTOMIZATION_CHECKLIST.md)
- 🛠️ [Setup Guide](guideline/SETUP.md)
- 📊 [Project Summary](guideline/PROJECT_SUMMARY.md)

### **Features**
- 🖼️ [Profile Picture Guide](guideline/PROFILE_PICTURE_GUIDE.md)
- 📄 [Resume Download Guide](guideline/RESUME_DOWNLOAD_GUIDE.md)
- 🌓 [Theme Switcher Guide](guideline/THEME_GUIDE.md)
- 🤖 [Chat Assistant Guide](guideline/CHAT_ASSISTANT_GUIDE.md)
- 🎨 [Design System](guideline/DESIGN_SYSTEM.md)
- 📱 [Mobile Responsive Guide](guideline/MOBILE_RESPONSIVE_GUIDE.md)

### **Deployment**
- ☸️ [Kubernetes Deployment](guideline/KUBERNETES_DEPLOYMENT.md)
- 🚀 [Kubernetes Quickstart](guideline/KUBERNETES_QUICKSTART.md)
- 🐳 [Docker Configuration](Dockerfile)
- ⚙️ [GitHub Actions](.github/workflows/README.md)

## 📧 Contact Form Integration

The contact form is ready for integration. Choose your preferred service:

**Recommended Services:**
- **[Formspree](https://formspree.io/)** - Easy setup, free tier
- **[EmailJS](https://www.emailjs.com/)** - Client-side email sending
- **[Resend](https://resend.com/)** - Modern email API
- **[SendGrid](https://sendgrid.com/)** - Enterprise-grade
- **Custom API** - Build your own backend

**Integration Steps:**
1. Choose a service
2. Get API key
3. Update `components/Contact.tsx`
4. Add environment variables
5. Test the form

**Made with ❤️**

Happy coding! 🚀
