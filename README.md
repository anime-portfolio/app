# 🎌 Anime Portfolio

> **A stunning developer portfolio template with anime aesthetics and interactive features**

[![Live Demo](https://img.shields.io/badge/Demo-Live-brightgreen?style=for-the-badge&logo=vercel)](https://fumiya-tsx.github.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/anime-portfolio/app?style=for-the-badge&logo=github)](https://github.com/anime-portfolio/app/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/anime-portfolio/app?style=for-the-badge&logo=github)](https://github.com/anime-portfolio/app/network)

**Transform your developer portfolio into an interactive anime-inspired experience that stands out from the crowd!**

## 📸 Screenshots

<div align="center">

### 🌸 Lucky Star Theme (Light Mode)
![Lucky Star Theme](./screenshot.png)

### 🌙 Lain Theme (Dark Mode)  
![Lain Theme](./screenshot_dark.png)

*Featuring dual anime themes with smooth transitions, interactive elements, and beautiful responsive design*

</div>

## ✨ Features

### 🎨 **Dual Anime Themes**
- **🌙 Lain Theme**: Cyberpunk aesthetics inspired by *Serial Experiments Lain*
- **🌸 Lucky Star Theme**: Kawaii aesthetic inspired by *Lucky Star*
- Seamless theme switching with smooth transitions

### 🎭 **Interactive Elements**
- **Floating Anime Characters**: Interactive mascots with personality
- **Glitch Transitions**: Smooth, anime-inspired page transitions
- **ASCII Loading Animations**: Retro terminal-style loaders
- **Easter Eggs**: Hidden surprises for visitors to discover
- **Konami Code Support**: Classic gaming nostalgia
- **3D Mouse Parallax**: Immersive depth effects

### 🛠️ **Developer Features**
- **Terminal UI**: Interactive command interface
- **Customizable Projects**: Easy portfolio project management
- **Responsive Design**: Perfect on all devices
- **TypeScript**: Full type safety
- **Performance Optimized**: Fast loading and smooth animations
- **SEO Friendly**: Optimized for search engines

### 🎯 **Modern Tech Stack**
- ⚡ **Next.js 14** - React framework with App Router
- 🎨 **Tailwind CSS** - Utility-first styling
- 🌟 **Framer Motion** - Smooth animations
- 📱 **Responsive Design** - Mobile-first approach
- 🔒 **TypeScript** - Type safety and better DX
- 🎪 **Three.js** - 3D graphics and interactions

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.0 or later
- **npm** or **pnpm** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/anime-portfolio/app.git
   cd app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Basic Configuration

Edit `data/portfolio-data.tsx` to customize:

```typescript
export const profileData: ProfileData = {
  name: {
    en: "Your Name",
    ja: "あなたの名前",
  },
  role: {
    en: "Your Role",
    ja: "あなたの役割",
  },
  // ... more configuration
}
```

### Adding Projects

Add your projects to the `works` array:

```typescript
{
  id: "your-project",
  title: "Project Title",
  description: "Project description...",
  images: ["image1.jpg", "image2.jpg"],
  link: "https://your-project.com",
  repo: "https://github.com/your-username/project",
  tags: ["React", "TypeScript", "Next.js"],
  date: "2024-12",
  featured: true,
  animeInspiration: "Your Favorite Anime",
}
```

### Theme Customization

Create custom themes by extending the theme configurations:

```typescript
export const customTheme: PortfolioPageProperties = {
  type: "fullscreen",
  styles: ["anime", "custom"],
  gradientBg: "bg-gradient-to-br from-custom-900 to-custom-100",
  // ... more customization
}
```

## 📁 Project Structure

```
anime-portfolio/
├── app/                    # Next.js App Router
├── components/             # React components
│   ├── ui/                # Reusable UI components
│   ├── work-card.tsx      # Project card component
│   ├── floating-girl.tsx  # Anime character component
│   └── terminal-ui.tsx    # Terminal interface
├── contexts/              # React contexts
├── data/                  # Portfolio data and configuration
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities and helpers
├── public/                # Static assets
├── styles/                # Global styles
└── types/                 # TypeScript type definitions
```

## 🎭 Themes

### 🌙 Lain Theme (Cyberpunk)
- **Inspiration**: Serial Experiments Lain
- **Aesthetic**: Dark cyberpunk with neon accents
- **Colors**: Deep grays, electric pinks, terminal greens
- **Character**: Lain Iwakura with glitchy interactions

### 🌸 Lucky Star Theme (Kawaii)
- **Inspiration**: Lucky Star
- **Aesthetic**: Bright and cheerful moe style
- **Colors**: Soft pastels, blues, and pinks
- **Character**: Konata Izumi with playful interactions

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### GitHub Pages
1. Update `next.config.mjs` for static export
2. Build and export: `npm run build`
3. Deploy the `out` folder

### Other Platforms
Compatible with Netlify, Railway, and other static hosting services.

## 🤝 Contributing

We welcome contributions from the anime and developer community!

### How to Contribute
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Test on multiple browsers and devices
- Ensure anime theme compatibility

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🎌 Anime Inspirations

This project celebrates the intersection of anime culture and web development:

- **Serial Experiments Lain** - Cyberpunk aesthetics and digital identity themes
- **Lucky Star** - Otaku culture and cheerful slice-of-life vibes
- **Ghost in the Shell** - Futuristic UI design inspiration
- **Akira** - Neon-soaked visual styling
- **Your Favorite Anime** - We'd love to see what inspires your customizations!

## 🌟 Showcase

Created something amazing with this template? We'd love to feature it!

- Share in [Discussions](https://github.com/anime-portfolio/app/discussions)
- Use hashtag `#AnimePortfolio` on social media
- Submit a PR to add your portfolio to our showcase

## 💬 Community

- **[Discussions](https://github.com/anime-portfolio/app/discussions)** - Ask questions, share ideas
- **[Issues](https://github.com/anime-portfolio/app/issues)** - Report bugs, request features
- **[Discord](#)** - Coming soon! Real-time community chat

## 🙏 Acknowledgments

- Inspired by the creativity of the anime community
- Built with amazing open-source tools
- Special thanks to all contributors and anime enthusiasts

## 📊 Stats

![GitHub language count](https://img.shields.io/github/languages/count/anime-portfolio/app)
![GitHub top language](https://img.shields.io/github/languages/top/anime-portfolio/app)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/anime-portfolio/app)

---

<div align="center">

**Made with ❤️ by anime enthusiasts, for anime enthusiasts**

*Transform your portfolio into a work of art that reflects your passion for both code and anime!*

[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Styled with Tailwind](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Animated with Framer Motion](https://img.shields.io/badge/Animated%20with-Framer%20Motion-0055FF?style=flat-square&logo=framer)](https://www.framer.com/motion/)

[⭐ Star this repo](https://github.com/anime-portfolio/app) • [🚀 View Demo](https://fumiya-tsx.github.io/) • [📖 Documentation](#) • [💬 Community](https://github.com/anime-portfolio/app/discussions)

</div>