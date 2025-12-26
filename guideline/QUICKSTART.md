# Quick Start Guide

## 🚀 Get Your Website Running in 3 Steps

### Step 1: Install Node.js

**macOS (using Homebrew):**
```bash
brew install node
```

**Or download from:** [https://nodejs.org/](https://nodejs.org/)

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your website! 🎉

---

## ✏️ Customize Your Website

### 1. Update Personal Information

Edit these files with your details:

- **`components/Navigation.tsx`** - Your name in the navbar
- **`components/Hero.tsx`** - Name, title, bio, and social links
- **`components/About.tsx`** - About section content
- **`components/Resume.tsx`** - Work experience, education, skills
- **`components/Portfolio.tsx`** - Your projects
- **`components/Contact.tsx`** - Contact information
- **`components/Footer.tsx`** - Footer content

### 2. Update Social Media Links

Replace these placeholders in Hero.tsx and Footer.tsx:
- `https://github.com/yourusername`
- `https://linkedin.com/in/yourusername`
- `https://twitter.com/yourusername`
- `your.email@example.com`

### 3. Add Your Projects

In `components/Portfolio.tsx`, replace the sample projects with your own:

```typescript
{
  title: "Your Project Name",
  description: "Project description...",
  image: "your-image-url-or-path",
  tags: ["React", "Node.js", "etc"],
  github: "your-github-repo-url",
  demo: "your-live-demo-url",
}
```

### 4. Customize Colors

Edit `app/globals.css` to change the color scheme. The default uses a blue theme, but you can customize:

```css
:root {
  --primary: 221.2 83.2% 53.3%; /* Change this for different primary color */
  /* ... other color variables */
}
```

---

## 🎨 Color Themes

### Blue (Default)
Already set up!

### Purple Theme
```css
--primary: 262.1 83.3% 57.8%;
```

### Green Theme
```css
--primary: 142.1 76.2% 36.3%;
```

### Orange Theme
```css
--primary: 24.6 95% 53.1%;
```

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 🚀 Deploy Your Website

### Deploy to Vercel (Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Done! Your website is live! 🎉

### Other Options
- **Netlify**: [netlify.com](https://netlify.com)
- **GitHub Pages**: Requires additional setup
- **AWS Amplify**: [aws.amazon.com/amplify](https://aws.amazon.com/amplify)

---

## 📝 Common Customizations

### Change Font

Edit `app/layout.tsx`:

```typescript
import { Poppins } from "next/font/google";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});
```

### Add More Sections

Create a new component in `components/` and import it in `app/page.tsx`

### Update SEO

Edit `app/layout.tsx` metadata:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Your custom description",
  // ... more metadata
};
```

---

## 🆘 Need Help?

- Check `README.md` for detailed documentation
- Check `SETUP.md` for installation troubleshooting
- Visit [Next.js Docs](https://nextjs.org/docs)

---

**Happy customizing! 🎨**
