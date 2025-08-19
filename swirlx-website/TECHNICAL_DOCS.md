# 🔧 SwirlX Website - Technical Documentation

## 🎯 **Purpose**
This document provides technical details about the SwirlX website architecture, deployment process, and technical specifications for IT teams, system administrators, and future developers.

---

## 📋 **Table of Contents**
1. [System Architecture](#system-architecture)
2. [Technology Stack](#technology-stack)
3. [Deployment Process](#deployment-process)
4. [File Structure](#file-structure)
5. [Configuration Files](#configuration-files)
6. [Dependencies](#dependencies)
7. [Build Process](#build-process)
8. [Performance & Optimization](#performance--optimization)
9. [Security Considerations](#security-considerations)
10. [Monitoring & Analytics](#monitoring--analytics)
11. [Backup & Recovery](#backup--recovery)
12. [Troubleshooting](#troubleshooting)

---

## 🏗️ **System Architecture**

### **Overview**
- **Type:** Single Page Application (SPA)
- **Framework:** React 18 with Vite build tool
- **Hosting:** Vercel (serverless deployment)
- **Domain:** swirlx-engineering.com (custom domain)

### **Architecture Diagram**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   User Browser  │───▶│   Vercel CDN    │───▶│  React App      │
│                 │    │   (Global)      │    │  (Static Files) │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │
                                ▼
                       ┌─────────────────┐
                       │   GitHub Repo   │
                       │   (Source Code) │
                       └─────────────────┘
```

### **Data Flow**
1. **User Request** → Vercel CDN
2. **CDN Check** → Static files served if available
3. **Cache Miss** → Origin server (Vercel)
4. **Build Process** → React app compilation
5. **Response** → HTML, CSS, JavaScript to user

---

## 🛠️ **Technology Stack**

### **Frontend Framework**
- **React 18.2.0** - Modern React with hooks and concurrent features
- **JSX** - JavaScript XML for component structure
- **React Router** - Client-side routing (if implemented)

### **Build Tools**
- **Vite 4.4.0** - Fast build tool and development server
- **PostCSS 8.4.24** - CSS processing and optimization
- **Autoprefixer 10.4.14** - CSS vendor prefixing

### **Styling & Design**
- **Tailwind CSS 3.3.2** - Utility-first CSS framework
- **Custom CSS** - Component-specific styles
- **Responsive Design** - Mobile-first approach

### **Animation Libraries**
- **Framer Motion** - React animation library
- **GSAP (GreenSock)** - Professional animation platform
- **ScrollTrigger** - Scroll-based animations

### **Development Tools**
- **Node.js** - JavaScript runtime
- **npm** - Package manager
- **Git** - Version control
- **GitHub** - Code repository

---

## 🚀 **Deployment Process**

### **Automatic Deployment (CI/CD)**
- **Trigger:** Git push to main branch
- **Platform:** Vercel automatic deployment
- **Build Command:** `npm run build`
- **Output Directory:** `dist/`
- **Deployment Time:** 1-3 minutes

### **Manual Deployment**
```bash
# Build the project
npm run build

# Deploy to Vercel
vercel --prod

# Or deploy specific files
vercel --prod --cwd .
```

### **Environment Variables**
```bash
# Production environment
NODE_ENV=production
VITE_APP_TITLE=SwirlX
VITE_APP_DESCRIPTION=TPMS Heat Exchangers
```

### **Build Output**
- **Location:** `dist/` directory
- **Files:** HTML, CSS, JavaScript bundles
- **Size:** Optimized and minified
- **Format:** Static files ready for CDN

---

## 📁 **File Structure**

### **Root Directory**
```
swirlx-website/
├── src/                    # Source code
│   ├── components/         # React components
│   ├── App.jsx            # Main application
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── public/                 # Static assets
├── dist/                   # Build output
├── node_modules/           # Dependencies
├── package.json            # Project configuration
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── .gitignore             # Git ignore rules
```

### **Component Structure**
```
src/components/
├── Hero.jsx               # Hero section with animations
├── Navigation.jsx         # Site navigation
├── Technology.jsx         # Product showcase
├── About.jsx              # Company information
└── Contact.jsx            # Contact form
```

### **Configuration Files**
- **`vite.config.js`** - Build tool configuration
- **`tailwind.config.js`** - CSS framework configuration
- **`postcss.config.js`** - CSS processing configuration
- **`package.json`** - Dependencies and scripts

---

## ⚙️ **Configuration Files**

### **Vite Configuration (`vite.config.js`)**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser'
  }
})
```

### **Tailwind Configuration (`tailwind.config.js`)**
```javascript
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'swirlx-primary': '#1e40af',
        'swirlx-secondary': '#64748b',
        'swirlx-accent': '#f59e0b',
        'swirlx-dark': '#0f172a',
        'swirlx-light': '#f8fafc'
      }
    }
  },
  plugins: []
}
```

### **PostCSS Configuration (`postcss.config.js`)**
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
```

---

## 📦 **Dependencies**

### **Production Dependencies**
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "framer-motion": "^10.16.0",
  "gsap": "^3.12.0"
}
```

### **Development Dependencies**
```json
{
  "@types/react": "^18.2.0",
  "@types/react-dom": "^18.2.0",
  "@vitejs/plugin-react": "^4.0.0",
  "autoprefixer": "^10.4.14",
  "postcss": "^8.4.24",
  "tailwindcss": "^3.3.2",
  "vite": "^4.4.0"
}
```

### **Key Package Purposes**
- **React** - UI framework
- **Framer Motion** - Animation library
- **GSAP** - Advanced animations
- **Tailwind CSS** - Utility CSS framework
- **Vite** - Build tool and dev server

---

## 🔨 **Build Process**

### **Development Build**
```bash
# Start development server
npm run dev

# Development server runs on http://localhost:5173
# Hot Module Replacement (HMR) enabled
# Source maps for debugging
```

### **Production Build**
```bash
# Create production build
npm run build

# Build process:
# 1. Transpile JSX to JavaScript
# 2. Bundle and optimize JavaScript
# 3. Process and optimize CSS
# 4. Generate static HTML
# 5. Output to dist/ directory
```

### **Build Output Analysis**
```bash
# Analyze bundle size
npm run build
# Check dist/ directory for file sizes
# Optimize if bundle is too large
```

---

## ⚡ **Performance & Optimization**

### **Build Optimizations**
- **Code Splitting** - Automatic chunk splitting
- **Tree Shaking** - Remove unused code
- **Minification** - Compress JavaScript and CSS
- **Asset Optimization** - Optimize images and fonts

### **Runtime Optimizations**
- **Lazy Loading** - Load components on demand
- **Memoization** - Prevent unnecessary re-renders
- **Bundle Splitting** - Load only needed code
- **CDN Delivery** - Global content distribution

### **Performance Metrics**
- **First Contentful Paint (FCP):** < 1.5s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Cumulative Layout Shift (CLS):** < 0.1
- **First Input Delay (FID):** < 100ms

---

## 🔒 **Security Considerations**

### **Security Headers**
```http
# Vercel automatically adds:
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

### **Content Security Policy**
```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com
```

### **HTTPS Enforcement**
- **SSL Certificate** - Automatically managed by Vercel
- **HTTPS Redirect** - All HTTP traffic redirected to HTTPS
- **HSTS Header** - Strict transport security

### **Vulnerability Management**
- **Regular Updates** - Keep dependencies updated
- **Security Audits** - npm audit for vulnerabilities
- **Dependency Monitoring** - GitHub security alerts

---

## 📊 **Monitoring & Analytics**

### **Performance Monitoring**
- **Vercel Analytics** - Built-in performance metrics
- **Core Web Vitals** - Google's performance metrics
- **Real User Monitoring** - Actual user experience data

### **Error Tracking**
- **Console Errors** - Browser developer tools
- **Network Errors** - Network tab monitoring
- **Build Errors** - Vercel deployment logs

### **Uptime Monitoring**
- **Vercel Status** - Platform status monitoring
- **Custom Monitoring** - External uptime services
- **Alert Systems** - Email/SMS notifications

---

## 💾 **Backup & Recovery**

### **Code Backup**
- **GitHub Repository** - Primary code backup
- **Local Repository** - Developer machine backup
- **Branch Protection** - Main branch protection rules

### **Data Backup**
- **Static Content** - All content in Git repository
- **Configuration** - Environment and build configs
- **Dependencies** - package.json and package-lock.json

### **Recovery Procedures**
```bash
# Restore from GitHub
git clone https://github.com/hugodeengineering/swirlx-website.git
cd swirlx-website
npm install
npm run build
vercel --prod
```

---

## 🛠️ **Troubleshooting**

### **Common Build Issues**

#### **Dependency Issues**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### **Build Failures**
```bash
# Check for syntax errors
npm run build

# Check console for error messages
# Common issues: JSX syntax, import errors
```

#### **Deployment Issues**
```bash
# Check Vercel logs
vercel logs

# Redeploy manually
vercel --prod
```

### **Performance Issues**

#### **Slow Loading**
- **Check bundle size** - Optimize large dependencies
- **Enable compression** - Gzip/Brotli compression
- **Optimize images** - Use WebP format, proper sizing

#### **Animation Performance**
- **Reduce complexity** - Simplify animations
- **Use hardware acceleration** - Transform3d properties
- **Limit concurrent animations** - Stagger animations

### **Browser Compatibility**
- **Test on multiple browsers** - Chrome, Firefox, Safari, Edge
- **Check for polyfills** - Modern JavaScript features
- **Responsive testing** - Mobile and desktop devices

---

## 📚 **Additional Resources**

### **Documentation**
- **React Documentation:** https://react.dev/
- **Vite Documentation:** https://vitejs.dev/
- **Tailwind CSS Documentation:** https://tailwindcss.com/
- **Framer Motion Documentation:** https://www.framer.com/motion/

### **Development Tools**
- **VS Code Extensions** - React, Tailwind, Prettier
- **Browser DevTools** - React DevTools, Performance tools
- **Linting Tools** - ESLint, Prettier configuration

### **Performance Tools**
- **Lighthouse** - Performance auditing
- **WebPageTest** - Detailed performance analysis
- **GTmetrix** - Performance monitoring

---

## 🎯 **Quick Reference**

### **Common Commands**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
vercel --prod        # Deploy to production
```

### **File Locations**
- **Source Code:** `src/` directory
- **Build Output:** `dist/` directory
- **Configuration:** Root directory
- **Dependencies:** `node_modules/` directory

### **Contact Information**
- **Technical Issues:** Contact developer
- **Hosting Issues:** Vercel support
- **Domain Issues:** Domain registrar support

---

## 🎉 **Conclusion**

This technical documentation provides comprehensive information about the SwirlX website's technical architecture, deployment process, and maintenance procedures. The system is designed to be:

- **Reliable** - Automated deployment and monitoring
- **Scalable** - CDN-based global distribution
- **Maintainable** - Clear structure and documentation
- **Performant** - Optimized build process and runtime

**For technical support or questions, contact the development team.**

---

*Last Updated: [Current Date]  
Version: 1.0  
Maintained by: [Your Name]  
Technical Contact: [Your Email]*
