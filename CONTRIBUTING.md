# 🤝 Contributing to Anime Portfolio

Thank you for your interest in contributing to the Anime Portfolio project! We're excited to collaborate with fellow developers and anime enthusiasts to make this project even better.

## 🌟 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [Getting Started](#-getting-started)
- [Development Setup](#-development-setup)
- [Contributing Guidelines](#-contributing-guidelines)
- [Submitting Contributions](#-submitting-contributions)
- [Contributor License Agreement (CLA)](#️-contributor-license-agreement-cla)
- [Community](#-community)

## 📜 Code of Conduct

This project follows a code of conduct that ensures a welcoming and inclusive environment for all contributors. By participating, you agree to:

### ✅ **Expected Behavior**
- Be respectful and inclusive in all interactions
- Use welcoming and inclusive language
- Accept constructive feedback gracefully
- Focus on what's best for the community
- Show empathy towards other community members
- Celebrate the intersection of anime culture and development

### ❌ **Unacceptable Behavior**
- Harassment, discrimination, or offensive comments
- Trolling, insulting, or derogatory remarks
- Publishing private information without permission
- Any conduct that would be inappropriate in a professional setting
- Spamming or excessive self-promotion

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.0 or later
- **npm** or **pnpm** package manager
- **Git** for version control
- Basic knowledge of React, Next.js, and TypeScript
- Love for anime and creative web development! 🎌

### First Steps
1. **Star and Fork** the repository
2. **Check existing issues** for something interesting to work on
3. **Join discussions** to connect with the community
4. **Read our documentation** to understand the project structure

## 🛠️ Development Setup

### 1. Fork and Clone
```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/app.git
cd app

# Add upstream remote
git remote add upstream https://github.com/anime-portfolio/app.git
```

### 2. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 3. Start Development Server
```bash
npm run dev
# or
pnpm dev
```

### 4. Create a Branch
```bash
git checkout -b feature/your-amazing-feature
# or
git checkout -b fix/bug-description
```

## 📋 Contributing Guidelines

### 🎯 **What We're Looking For**

#### 🎨 **Theme Contributions**
- New anime-inspired themes
- Improvements to existing Lain or Lucky Star themes
- Creative visual effects and animations
- Character interactions and easter eggs

#### 🔧 **Feature Enhancements**
- Performance optimizations
- Accessibility improvements
- Mobile experience enhancements
- New interactive elements
- Developer experience improvements

#### 🐛 **Bug Fixes**
- Cross-browser compatibility issues
- Mobile responsiveness problems
- Theme switching bugs
- Performance issues
- TypeScript errors

#### 📚 **Documentation**
- Setup and customization guides
- Code examples and tutorials
- Anime inspiration documentation
- Translation improvements (Japanese/English)

### 🎨 **Design Guidelines**

#### **Theme Development**
- Stay true to anime aesthetics and culture
- Ensure accessibility (contrast, screen readers)
- Test on multiple devices and browsers
- Include both light and dark variants when appropriate
- Document anime inspirations and references

#### **Code Style**
- Follow existing TypeScript patterns
- Use Tailwind CSS for styling
- Write meaningful commit messages
- Add JSDoc comments for complex functions
- Keep components modular and reusable

#### **Animation Guidelines**
- Use Framer Motion for complex animations
- Ensure animations are performant (60fps)
- Provide reduced motion alternatives
- Test on lower-end devices

### 🧪 **Testing Requirements**

Before submitting your contribution:

#### **Manual Testing**
- [ ] Test on Chrome, Firefox, Safari, and Edge
- [ ] Test on mobile devices (iOS and Android)
- [ ] Test both Lain and Lucky Star themes
- [ ] Verify responsive design at different screen sizes
- [ ] Check accessibility with screen readers
- [ ] Test with slow internet connections

#### **Code Quality**
- [ ] Run `npm run lint` and fix any issues
- [ ] Run `npm run type-check` and resolve TypeScript errors
- [ ] Run `npm run build` successfully
- [ ] Test in production mode (`npm start`)

## 📤 Submitting Contributions

### 1. **Prepare Your Changes**
```bash
# Make sure your branch is up to date
git fetch upstream
git rebase upstream/main

# Run quality checks
npm run lint
npm run type-check
npm run build
```

### 2. **Commit Your Changes**
```bash
# Use conventional commit format
git commit -m "feat: add new Evangelion theme with angel animations"
git commit -m "fix: resolve theme switching bug on mobile devices"
git commit -m "docs: add customization guide for new themes"
```

### 3. **Push and Create PR**
```bash
git push origin feature/your-amazing-feature
```

Then create a Pull Request on GitHub with:
- Clear title and description
- Screenshots/videos for visual changes
- Reference to related issues
- Testing checklist completion

### 4. **Respond to Feedback**
- Address reviewer comments promptly
- Make requested changes
- Keep discussions constructive and friendly

## 🛡️ Contributor License Agreement (CLA)

By submitting a pull request or contribution, you agree to the following:

> You grant the project founder a **non-exclusive, irrevocable, worldwide, royalty-free license** to use, modify, sublicense, and relicense your contribution, including the right to incorporate it into dual-licensed or commercial versions of the project.

This ensures that the project can grow sustainably while preserving creator rights.  
If you are contributing on behalf of a company or organization, please contact us in advance.

### 🤔 **Why Do We Have a CLA?**

The CLA helps us:
- **Protect contributors**: Ensures your work is properly attributed
- **Enable project growth**: Allows flexible licensing for different use cases
- **Maintain sustainability**: Enables potential commercialization to support development
- **Preserve rights**: You retain ownership while granting usage rights

### ✍️ **Signing the CLA**

By submitting a contribution, you automatically agree to the CLA. No separate signing process is required - your first PR submission constitutes agreement.

## 🎌 **Anime Culture Guidelines**

### **Celebrating Anime Heritage**
- When adding anime references, include source attribution
- Respect intellectual property (use original art or properly licensed assets)
- Share the anime inspiration behind your contributions
- Be inclusive of different anime genres and tastes

### **Cultural Sensitivity**
- Use respectful language when referencing Japanese culture
- Avoid stereotypes or cultural appropriation
- Include proper romanization for Japanese terms
- Consider cultural context in design decisions

## 💬 Community

### **Where to Get Help**
- **[GitHub Discussions](https://github.com/anime-portfolio/app/discussions)** - Questions, ideas, and general chat
- **[Issues](https://github.com/anime-portfolio/app/issues)** - Bug reports and feature requests
- **Discord** (coming soon!) - Real-time community chat

### **Community Events**
- Monthly showcase of community portfolios
- Anime-themed coding challenges
- Collaborative theme development
- Code review sessions

### **Recognition**
Contributors are recognized through:
- Credits in documentation
- Feature showcases
- Community highlights
- Potential maintainer roles

## 🎁 **Types of Contributions We Value**

### **Code Contributions**
- New features and enhancements
- Bug fixes and performance improvements
- TypeScript improvements
- Testing and quality assurance

### **Design Contributions**
- UI/UX improvements
- New themes and visual styles
- Animation and interaction design
- Accessibility enhancements

### **Content Contributions**
- Documentation improvements
- Tutorial creation
- Translation work
- Community management

### **Community Contributions**
- Helping others in discussions
- Organizing community events
- Sharing showcases and inspirations
- Promoting the project

## 🚀 **Getting Your First Contribution Merged**

### **Good First Issues**
Look for issues labeled:
- `good first issue` - Perfect for newcomers
- `help wanted` - Community assistance needed
- `anime-theme` - Anime-related enhancements
- `documentation` - Docs improvements

### **Quick Wins**
- Fix typos in documentation
- Add new anime character phrases
- Improve existing animations
- Add new project examples
- Enhance mobile responsiveness

## 📈 **Becoming a Regular Contributor**

### **Path to Maintainer**
Regular contributors who demonstrate:
- Consistent high-quality contributions
- Community engagement and helpfulness
- Understanding of project goals
- Anime enthusiasm and cultural awareness

May be invited to become project maintainers with additional responsibilities and recognition.

## 🙏 **Thank You**

Every contribution, no matter how small, makes this project better for the entire anime development community. Whether you're fixing a typo, adding a new theme, or helping fellow developers, your efforts are deeply appreciated.

**Let's build something amazing together! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧**

---

*For questions about contributing, please reach out through [GitHub Discussions](https://github.com/anime-portfolio/app/discussions) or create an issue. We're here to help make your contribution experience as smooth as possible!*