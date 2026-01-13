# AdityaClinic - Dental & Cosmetology Clinic Website

A modern, responsive, and animated static website for a dental and cosmetology clinic built with React.js. This website features smooth animations, professional design, and intuitive navigation.

![AdityaClinic](https://img.shields.io/badge/React-19.2.3-blue) ![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple) ![License](https://img.shields.io/badge/License-MIT-green)

## 🎯 Project Overview

AdityaClinic is a comprehensive healthcare website showcasing dental and cosmetology services. The website provides an elegant user experience with smooth animations, responsive design, and modern UI/UX principles.

## ✨ Features

### 🏠 Home Page
- **Hero Slider**: Full-width image carousel with auto-play and smooth transitions
- **Welcome Section**: Introduction with animated statistics counters
- **Why Choose Us**: Feature cards with hover effects
- **Services Overview**: Grid of main services with images
- **Testimonials**: Auto-rotating patient reviews slider
- **Call-to-Action**: Prominent booking section

### 📄 Pages
- **Services**: Comprehensive service listings with filtering (Dental/Cosmetology)
- **Service Detail**: Individual service pages with detailed information
- **About Us**: Clinic history, vision, values, and facility gallery
- **Our Team**: Professional team member profiles with flip animations
- **Gallery**: Image gallery with lightbox and category filters
- **Testimonials**: Patient reviews with service filtering
- **Blog**: Blog posts and articles
- **Contact**: Contact form with validation and interactive map
- **Appointment**: Multi-step booking form with calendar integration

### 🎨 Design Features
- **Elegant Color Scheme**: Professional teal/cyan gradient theme
- **Smooth Animations**: Framer Motion animations throughout
- **Responsive Design**: Mobile-first approach, fully responsive
- **Modern UI**: Clean, professional design with Bootstrap
- **Interactive Elements**: Hover effects, transitions, and micro-interactions

### 🔧 Technical Features
- **React Router**: Client-side routing
- **Form Validation**: Comprehensive form validation
- **Image Optimization**: Lazy loading and optimized images
- **SEO Optimized**: Meta tags, semantic HTML
- **Accessibility**: ARIA labels, keyboard navigation

## 🛠️ Tech Stack

- **Framework**: React.js 19.2.3
- **Routing**: React Router DOM
- **Styling**: Bootstrap 5.3 + Custom CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Image Slider**: Swiper.js
- **Build Tool**: Create React App

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd clinic-web-static
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
clinic-web-static/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx          # Navigation bar
│   │   │   ├── Footer.jsx           # Footer component
│   │   │   ├── Button.jsx           # Reusable button
│   │   │   ├── Card.jsx             # Reusable card
│   │   │   ├── Loader.jsx           # Loading spinner
│   │   │   ├── BackToTop.jsx        # Back to top button
│   │   │   └── WhatsAppButton.jsx   # WhatsApp floating button
│   │   ├── home/
│   │   │   ├── HeroSlider.jsx       # Hero section slider
│   │   │   ├── WelcomeSection.jsx   # Welcome section
│   │   │   ├── WhyChooseUs.jsx      # Why choose us section
│   │   │   ├── ServicesOverview.jsx # Services preview
│   │   │   └── Testimonials.jsx     # Testimonials slider
│   │   ├── services/
│   │   ├── about/
│   │   └── contact/
│   ├── pages/
│   │   ├── Home.jsx                 # Home page
│   │   ├── Services.jsx             # Services listing
│   │   ├── ServiceDetail.jsx       # Service detail page
│   │   ├── AboutUs.jsx              # About page
│   │   ├── OurTeam.jsx              # Team page
│   │   ├── Gallery.jsx              # Gallery page
│   │   ├── Testimonials.jsx         # Testimonials page
│   │   ├── Blog.jsx                 # Blog page
│   │   ├── Contact.jsx              # Contact page
│   │   └── Appointment.jsx          # Appointment booking
│   ├── utils/
│   │   └── constants.js             # App constants and data
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── styles/
│   ├── App.js                        # Main app component
│   ├── App.css                       # App styles
│   ├── index.js                      # Entry point
│   └── index.css                     # Global styles
├── package.json
└── README.md
```

## 🚀 Available Scripts

### `npm start`
Runs the app in development mode at `http://localhost:3000`

### `npm run build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner

### `npm run eject`
**Note: This is a one-way operation. Once you `eject`, you can't go back!**

## 🎨 Color Scheme

The website uses an elegant color palette:

- **Primary**: Teal Gradient (`#0d9488` → `#14b8a6`)
- **Secondary**: Warm Coral (`#f97316`)
- **Accent**: Soft Gold (`#fbbf24`)
- **Dark**: Slate (`#1e293b`)
- **Light**: Off-white (`#f8fafc`)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1536px

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_PHONE=+15551234567
REACT_APP_EMAIL=info@adityaclinic.com
```

### Updating Content

Most content is stored in `src/utils/constants.js`. Update the following:

- Clinic information
- Services data
- Team members
- Testimonials
- Contact information
- Social media links

## 🔧 Customization

### Changing Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --bs-primary: #0d9488;
  --bs-secondary: #f97316;
  --bs-accent: #fbbf24;
}
```

### Adding New Services

Edit `src/utils/constants.js` and add to `DENTAL_SERVICES` or `COSMETOLOGY_SERVICES` arrays.

### Modifying Navigation

Update the `navLinks` array in `src/components/common/Navbar.jsx`.

## 📝 Content Management

### Images
- Place images in `src/assets/images/`
- Use high-quality images (recommended: 1920x1080 for hero, 800x600 for cards)
- Optimize images before adding (use WebP format when possible)

### Text Content
- Update clinic information in `src/utils/constants.js`
- Replace placeholder text with actual content
- Ensure all content is accurate and up-to-date

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/clinic-web-static",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

## 🐛 Troubleshooting

### Common Issues

**Issue**: Images not loading
- **Solution**: Check image paths and ensure images are in the correct directory

**Issue**: Styles not applying
- **Solution**: Clear browser cache and restart the dev server

**Issue**: Routing not working in production
- **Solution**: Configure your hosting provider for client-side routing (add `_redirects` file for Netlify)

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Development

### Code Style
- Use functional components with hooks
- Follow React best practices
- Keep components modular and reusable
- Add comments for complex logic

### Best Practices
- Use semantic HTML
- Ensure accessibility (ARIA labels, alt text)
- Optimize images and assets
- Test on multiple browsers and devices

## 🔮 Future Enhancements

- [ ] Online appointment scheduling with backend
- [ ] Patient portal/login system
- [ ] Live chat support
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Progressive Web App (PWA) features
- [ ] Payment gateway integration
- [ ] Email notification system
- [ ] Admin dashboard

## 📞 Support

For support, email info@adityaclinic.com or contact the development team.

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Swiper](https://swiperjs.com/)

---

**Built with ❤️ for AdityaClinic**
