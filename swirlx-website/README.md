# SwirlX TPMS Heat Exchanger Website

A modern, industrial-style marketing website built with React and Tailwind CSS.

## Features

- **Hero Section**: Full-width banner with company tagline and CTAs
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional corporate engineering aesthetic
- **Accessibility**: ARIA labels, semantic HTML, and proper contrast

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
swirlx-website/
├── src/
│   ├── components/
│   │   └── Hero.jsx          # Hero banner component
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Tailwind CSS and custom styles
├── public/                   # Static assets
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind configuration
├── vite.config.js            # Vite build configuration
└── postcss.config.js         # PostCSS configuration
```

## Customization

- **Colors**: Update `swirlx-primary`, `swirlx-secondary`, etc. in `tailwind.config.js`
- **Content**: Replace placeholder text in components
- **Images**: Add actual product and company images
- **Branding**: Update logo and company information

## Next Steps

- Add Features section
- Add Product grid
- Add Case studies
- Add Contact form
- Add Footer
- Add Navigation header
- Implement smooth scrolling
- Add animations and interactions

## Technologies Used

- React 18
- Tailwind CSS 3
- Vite
- PostCSS
- Autoprefixer
