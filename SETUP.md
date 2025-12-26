# Setup Guide

## Prerequisites

Before you can run this project, you need to install Node.js and npm.

### Installing Node.js

#### Option 1: Using Homebrew (Recommended for macOS)

```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node
```

#### Option 2: Download from Official Website

1. Visit [https://nodejs.org/](https://nodejs.org/)
2. Download the LTS (Long Term Support) version
3. Run the installer and follow the instructions

#### Option 3: Using nvm (Node Version Manager)

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install Node.js
nvm install --lts
nvm use --lts
```

### Verify Installation

After installation, verify that Node.js and npm are installed:

```bash
node --version  # Should show v18.x.x or higher
npm --version   # Should show 9.x.x or higher
```

## Getting Started

Once Node.js is installed, follow these steps:

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js
- React
- TypeScript
- TailwindCSS
- Lucide Icons
- And other dependencies

### 2. Run Development Server

```bash
npm run dev
```

The application will start at [http://localhost:3000](http://localhost:3000)

### 3. Build for Production

```bash
npm run build
```

### 4. Start Production Server

```bash
npm start
```

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, you can specify a different port:

```bash
PORT=3001 npm run dev
```

### Module Not Found Errors

If you encounter module not found errors, try:

```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

The project uses TypeScript. If you see type errors during development, they won't prevent the app from running but should be addressed for production.

## Next Steps

1. **Customize Content**: Update all components with your personal information
2. **Replace Images**: Add your own project images in the Portfolio section
3. **Update Metadata**: Modify SEO metadata in `app/layout.tsx`
4. **Configure Contact Form**: Integrate with a form service (Formspree, EmailJS, etc.)
5. **Deploy**: Deploy to Vercel, Netlify, or your preferred hosting platform

## Need Help?

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
