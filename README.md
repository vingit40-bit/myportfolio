# Modern Portfolio Website

A premium, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. Designed for Web Developers, Frontend Developers, Full Stack Developers, and Software Engineers.

## Features

- 🎨 **Modern UI Design** - Premium dark theme with glassmorphism effects
- ✨ **Advanced Animations** - Smooth transitions and micro-interactions using Framer Motion
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🌙 **Dark/Light Mode** - Theme toggle with smooth transitions
- 🎯 **Custom Cursor** - Interactive cursor effect (desktop only)
- 📊 **Animated Progress Bars** - Skill visualization with smooth animations
- 🎬 **Scroll Animations** - Fade-up effects and scroll reveals
- ⚡ **Fast Loading** - Optimized performance with lazy loading
- 🔍 **SEO Friendly** - Proper meta tags and semantic HTML
- 📧 **Contact Form** - Functional contact form with validation

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## Sections

- **Hero** - Professional introduction with typing animation
- **About** - Professional summary, education, and fun facts
- **Skills** - Categorized skills with animated progress bars
- **Experience** - Work experience timeline
- **Services** - Services offered
- **Projects** - Featured projects with tech stack and features
- **Certificates** - Professional certifications
- **Education** - Academic background
- **Testimonials** - Client testimonials
- **FAQ** - Frequently asked questions
- **Contact** - Contact form and information

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── animations/
│   └── variants.js          # Animation variants
├── components/
│   ├── CustomCursor.jsx     # Custom cursor component
│   ├── Footer.jsx           # Footer component
│   ├── LoadingScreen.jsx    # Loading screen
│   ├── Navbar.jsx           # Navigation bar
│   └── ScrollProgress.jsx   # Scroll progress indicator
├── data/
│   └── portfolioData.js     # Portfolio content data
├── hooks/
│   ├── useCounter.js        # Counter animation hook
│   ├── useInView.js         # Intersection observer hook
│   ├── useScroll.js         # Scroll position hook
│   ├── useTheme.js          # Theme toggle hook
│   └── useTyping.js         # Typing animation hook
├── pages/
│   └── NotFound.jsx         # 404 page
├── sections/
│   ├── About.jsx            # About section
│   ├── Certificates.jsx     # Certificates section
│   ├── Contact.jsx          # Contact section
│   ├── Education.jsx        # Education section
│   ├── Experience.jsx       # Experience section
│   ├── FAQ.jsx              # FAQ section
│   ├── Hero.jsx             # Hero section
│   ├── Projects.jsx         # Projects section
│   ├── Services.jsx         # Services section
│   ├── Skills.jsx           # Skills section
│   └── Testimonials.jsx     # Testimonials section
├── App.jsx                  # Main app component
├── index.css                # Global styles
└── main.jsx                 # Entry point
```

## Customization

### Update Portfolio Data

Edit `src/data/portfolioData.js` to update:
- Personal information
- Skills and experience
- Projects
- Certificates
- Contact information

### Customize Colors

Edit `tailwind.config.js` to customize the color palette:
```javascript
colors: {
  primary: '#100D23',
  secondary: '#1D1A38',
  accent: '#7C3AED',
  // ... other colors
}
```

### Modify Animations

Edit `src/animations/variants.js` to customize animation effects.

## Performance

- Lazy loading for images
- Optimized animations
- Minimal bundle size
- Efficient re-renders

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Author

Your Name - [Portfolio Website](https://yourportfolio.com)

---

Built with ❤️ using React, Vite, and Tailwind CSS
