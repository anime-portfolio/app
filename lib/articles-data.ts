export interface Article {
  id: string
  title: string
  description: string
  content: string
  lastUpdated: string
  author: string
}

export const articles: Article[] = [
  {
    id: "help",
    title: "Help & FAQ",
    description: "Frequently asked questions and help for using the Anime Dev Portfolio",
    lastUpdated: "2025-05-01",
    author: "Aesthetic Vulpes",
    content: `
# Help & Frequently Asked Questions

## What is this portfolio?

This is an open-source developer portfolio template with two original watercolor characters, Crystalline-chan and Weltschmerz-chan. It features interactive elements, theme switching, and a unique presentation of your projects.

## How do I customize this portfolio?

You can customize this portfolio by editing the \`data/portfolio-data.tsx\` file. This file contains all the configuration for themes, projects, and site metadata.

## How do I add a new project?

To add a new project, edit the \`works\` array in \`data/portfolio-data.tsx\` and add a new object with your project details.

## How do I change themes?

The portfolio comes with two themes: Crystalline (light) and Weltschmerz (dark). You can switch between them using the theme toggle button in the header.

## Can I add more themes?

Yes! You can create additional themes by adding new theme configurations in \`data/portfolio-data.tsx\` and updating the theme context to support them.

## How do I deploy this portfolio?

You can deploy this portfolio to GitHub Pages, Vercel, Netlify, or any other static site hosting service. Simply connect your GitHub repository to your hosting provider of choice.

## I found a bug, where can I report it?

You can report bugs by opening an issue on the [GitHub repository](https://github.com/anime-portfolio/app).

## How do I contribute to this project?

Contributions are welcome! Check out the [GitHub repository](https://github.com/anime-portfolio/app) for more information on how to contribute.
    `,
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    description: "Privacy policy for the Anime Dev Portfolio",
    lastUpdated: "2025-05-01",
    author: "Aesthetic Vulpes",
    content: `
# Privacy Policy

## Introduction

This Privacy Policy explains how this portfolio ("we", "our", or "us") collects, uses, and shares information about you when you use our website.

## Information We Collect

We collect minimal information about you when you use our website:

- **Usage Data**: We collect information about how you interact with our website, such as the pages you visit and the time you spend on each page.
- **Device Information**: We collect information about the device you use to access our website, such as your device type, operating system, and browser.

We do not collect personally identifiable information unless you explicitly provide it to us (e.g., by contacting us).

## How We Use Your Information

We use the information we collect to:

- Improve our website and user experience
- Analyze website usage and trends
- Diagnose technical issues

## Cookies

We use cookies to enhance your experience on our website. You can disable cookies in your browser settings, but this may affect your experience on our website.

## Third-Party Services

We may use third-party services, such as analytics providers, to help us understand how users interact with our website. These third-party services may collect information about you, and their collection and use of information is governed by their privacy policies.

## Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.

## Contact Us

If you have any questions about this Privacy Policy, please contact us at privacy@animedevportfolio.example.com.
    `,
  },
  {
    id: "self-hosting",
    title: "Self-Hosting Guide",
    description: "Guide for self-hosting the Anime Dev Portfolio",
    lastUpdated: "2025-05-01",
    author: "Aesthetic Vulpes",
    content: `
# Self-Hosting Guide

This guide will help you set up and customize your own instance of the Anime Dev Portfolio.

## Prerequisites

- Node.js 18 or later
- Git
- Basic knowledge of React and Next.js

## Installation

1. Clone the repository:

\`\`\`bash
git clone https://github.com/anime-portfolio/app.git
cd app
\`\`\`

2. Install dependencies:

\`\`\`bash
npm install
\`\`\`

3. Start the development server:

\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Basic Customization

The main configuration file is \`data/portfolio-data.tsx\`. This file contains all the data for your portfolio, including:

- Theme configurations
- Project data
- Site metadata

Edit this file to customize your portfolio.

### Advanced Customization

For more advanced customization, you can modify the components in the \`components\` directory. The main components are:

- \`app/page.tsx\`: The main portfolio page
- \`components/work-card.tsx\`: The card component for projects
- \`components/floating-girl.tsx\`: The floating anime character
- \`components/terminal-ui.tsx\`: The terminal UI component

### Adding New Themes

To add a new theme:

1. Create a new theme configuration in \`data/portfolio-data.tsx\`
2. Update the theme context in \`contexts/theme-context.tsx\` to include your new theme
3. Update the theme switcher in \`components/theme-switcher.tsx\` to support your new theme

## Deployment

### Vercel

The easiest way to deploy your portfolio is to use Vercel:

1. Push your code to a GitHub repository
2. Import your repository on Vercel
3. Deploy

### Other Hosting Providers

You can also deploy your portfolio to other hosting providers:

1. Build your portfolio:

\`\`\`bash
npm run build
\`\`\`

2. Deploy the \`out\` directory to your hosting provider of choice.

## Troubleshooting

If you encounter any issues, check the [GitHub repository](https://github.com/anime-portfolio/app) for known issues or open a new issue.
    `,
  },
]

export function getArticle(id: string): Article | undefined {
  return articles.find((article) => article.id === id)
}

export function getAllArticles(): Article[] {
  return articles
}
