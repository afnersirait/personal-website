# Personal Website - CV/Resume & Portfolio

A modern, responsive personal website built with Next.js, React, TypeScript, and TailwindCSS. This website serves as a professional CV/Resume and Portfolio platform to showcase your skills, experience, and projects.

## ✨ Features

- **Modern Design**: Clean, professional, and visually appealing UI
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Engaging animations and transitions
- **SEO Optimized**: Built-in SEO best practices with Next.js
- **Fast Performance**: Optimized for speed and performance
- **Easy to Customize**: Well-structured code for easy customization

## 🚀 Sections

1. **Hero Section**: Eye-catching introduction with social links
2. **About Section**: Personal introduction and skills overview
3. **Resume Section**: 
   - Work experience with achievements
   - Education history
   - Skills and technologies
4. **Portfolio Section**: Project showcase with images and descriptions
5. **Contact Section**: Contact form and contact information
6. **Footer**: Quick links and social media connections

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **UI Components**: Custom components with shadcn/ui patterns
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: Framer Motion & TailwindCSS animations

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd personal-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **app/layout.tsx**: Update metadata (title, description, etc.)
2. **components/Navigation.tsx**: Update your name
3. **components/Hero.tsx**: Update name, title, description, and social links
4. **components/About.tsx**: Update about text and skills
5. **components/Resume.tsx**: Update work experience, education, and skills
6. **components/Portfolio.tsx**: Update projects with your own
7. **components/Contact.tsx**: Update contact information
8. **components/Footer.tsx**: Update footer information

### Styling

- **Colors**: Modify `app/globals.css` to change the color scheme
- **Fonts**: Update `app/layout.tsx` to use different Google Fonts
- **Layout**: Adjust component layouts in their respective files

### Images

Replace placeholder images in the Portfolio section with your own project screenshots. You can:
- Use local images in the `public` folder
- Use external URLs (Unsplash, your own hosting, etc.)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

This Next.js app can be deployed to:
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Railway](https://railway.app/)
- Any platform that supports Next.js

## 📄 Project Structure

```
personal-website/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── ui/               # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── badge.tsx
│   ├── Navigation.tsx    # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Resume.tsx        # Resume section
│   ├── Portfolio.tsx     # Portfolio section
│   ├── Contact.tsx       # Contact section
│   └── Footer.tsx        # Footer
├── lib/
│   └── utils.ts          # Utility functions
├── public/               # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎯 Best Practices Implemented

- **Component-based architecture**: Modular and reusable components
- **TypeScript**: Type-safe code for better development experience
- **Responsive design**: Mobile-first approach
- **Accessibility**: Semantic HTML and ARIA labels
- **Performance**: Optimized images and code splitting
- **SEO**: Meta tags and semantic structure
- **Clean code**: Well-organized and documented

## 📧 Contact Form Integration

The contact form is currently set up with a basic submit handler. To make it functional, you can integrate with:

- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- [SendGrid](https://sendgrid.com/)
- [Resend](https://resend.com/)
- Your own backend API

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you find any bugs or have suggestions, please open an issue.

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Built with amazing open-source tools and libraries
- Icons by [Lucide](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)

---

**Made with ❤️ using Next.js and TailwindCSS**

Happy coding! 🚀
