# Aravind Reddy Mokireddy - Portfolio Website

A modern portfolio website built with Next.js, showcasing my work as a Front-end Developer, Flutter Developer, and Freelancer.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules
- **Deployment:** GitHub Pages (Static Export)

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Main page component
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── PageLoader.tsx   # Loading animation
│       ├── BackgroundCircles.tsx
│       ├── Header.tsx       # Navigation header
│       ├── Home.tsx         # Home section
│       ├── About.tsx        # About section with tabs
│       ├── Portfolio.tsx    # Portfolio with modal
│       └── Contact.tsx      # Contact form
├── public/
│   ├── images/             # Image assets
│   └── fonts/              # Font files
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Actions deployment
```

## 🛠️ Development

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The development server will be available at `http://localhost:3000`

## 🚢 Deployment

This website is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Manual Deployment

```bash
# Build and export static files
npm run build

# The static files will be in the 'out' directory
```

### GitHub Pages Setup

1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Push to the main branch to trigger deployment

## ✨ Features

- **Responsive Design:** Fully responsive across all devices
- **Single Page Application:** Smooth section transitions
- **Portfolio Modal:** Interactive project showcase
- **Contact Form:** Integrated with getform.io
- **Animations:** Custom CSS animations and transitions
- **TypeScript:** Type-safe code throughout
- **Modular Components:** Reusable React components
- **SEO Optimized:** Proper metadata and semantic HTML

## 📧 Contact

- **Email:** aravindreddy.mokireddy@gmail.com
- **GitHub:** [@aravindreddymokireddy](https://github.com/aravindreddymokireddy)
- **LinkedIn:** [aravindreddy-m](https://www.linkedin.com/in/aravindreddy-m/)

## 📄 License

This project is open source and available under the MIT License.
