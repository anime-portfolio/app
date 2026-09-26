# Anime Portfolio

A developer portfolio template with two original watercolor characters, each with a theme of her own: Crystalline, a light theme, and Weltschmerz, a dark one.

[![Live demo](https://img.shields.io/badge/demo-live-brightgreen)](https://anime-portfolio.github.io/app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

![Crystalline theme](./screenshot.png)

![Weltschmerz theme](./screenshot_dark.png)

## Themes and characters

Crystalline is the light theme, in soft watercolor blues and lilacs. Its companion is Crystalline-chan, a girl who walks with a deer made of glass.

Weltschmerz is the dark theme, quiet and heavy, in deep purples and ink. Its companion is Weltschmerz-chan, a girl who feels the weight of the world.

Both characters and their illustrations are original work by Aesthetic Vulpes (didvc). The switch in the header moves between the two themes.

## Features

The current theme's character floats in the corner of the page and says a short line now and then, or when clicked. Pages change with a glitch transition and load behind an ASCII animation, cards shift slightly with the mouse, and a terminal-style interface can browse the projects by command. There are a few easter eggs, including the Konami code. The interface is available in English and Japanese, and a small wiki holds the help and privacy pages.

## Who it is for

Anime Portfolio is for developers who want a personal site with some character, in the literal sense. It suits:

- Web developers, designers and students who need a portfolio that people remember after one visit
- Illustrators and hobby artists who code, and want their own drawings to be part of the site
- Japanese developers, or anyone working across Japan and the rest of the world, who want a bilingual English and Japanese portfolio without maintaining two sites
- Anyone who wants a free, static portfolio on GitHub Pages, with no server, database or monthly bill

If you have looked for an anime developer portfolio template, a kawaii portfolio, or a Next.js portfolio with a dark mode and a light mode, this is meant to be that, with the rough edges already sanded off.

## The idea

Most portfolio templates look the same: a hero banner, a grid of cards, a contact form. They work, but visitors forget them. This template keeps the parts that work, the project grid, the profile and the links, and adds a small companion who lives on the page. She reacts when you click her, says a line now and then, and changes with the theme. It is a quiet way to show personality without getting in the way of the work.

The two themes are two moods rather than two color swaps. Crystalline is bright and clear, like glass in daylight. Weltschmerz, a German word for the weary sadness of seeing the world as it is, is dark and still, like ink drying late at night. A visitor can switch between them with one click, and the character, the palette and the tone of the lines change together.

The characters are original. Many fan-made templates borrow characters from existing anime, which leaves everyone who uses them in a gray area. Crystalline-chan and Weltschmerz-chan were drawn for this project and are licensed openly, so you can build on them, or replace them with your own, without wondering who owns what.

## Making it your own

The template is designed so that you can change the parts that matter without learning how the whole thing works.

### Your character

Each theme has one floating character. You can keep Crystalline-chan and Weltschmerz-chan, or use your own drawing, a mascot, a photo of your cat, or nothing at all. A good character image is a PNG with a transparent background, around 300 by 450 pixels, drawn so that it reads well at small size in the corner of the screen. Watercolor, line art and pixel art all work; the page does not add a frame, so whatever you draw floats directly over the site.

If you would rather not have a character, the floating companion can be turned off for either theme, and the rest of the site works exactly the same.

### Her lines

Each character has a short list of lines that she says at random, or when a visitor clicks her. These are where most of the personality comes from. A few ideas:

- Keep them short. One sentence reads well in the speech bubble; two is the limit.
- Match the theme. Crystalline-chan notices light and color; Weltschmerz-chan notices weight and silence.
- Let them point somewhere. A line like "Let me show you something that sparkles..." invites a visitor to scroll.
- Write a line for the Konami code. Visitors who find it get a special message, so make it worth finding.

### Two themes, two moods

You can rename the themes, change their colors, or add a third. A pair of opposites, day and night, calm and loud, work and play, tends to feel more intentional than two similar palettes. Whatever you choose, keep text readable in both: the switch is one click away, so visitors will see both.

### Projects that tell a story

The project grid has three views: featured, all projects, and experimental. Featured is for the work you would show first in an interview. Experimental is for the odd, half-finished and joyful things that show how you think; many visitors find that view the most interesting. Each project can have several screenshots, tags, a demo link and a source link, plus a short one-line summary for the card and a longer description.

### English and Japanese

Every label on the site comes in English and Japanese, and visitors can switch languages from the header. Your name, role, location and bio can have both versions too. This makes the template a good fit for a bilingual portfolio, for job hunting in Japan, or for sharing your work with both audiences at once.

### The terminal

For visitors who prefer a keyboard, the site includes a small terminal. Typing `help` lists the commands; `ls` lists your projects, `featured` and `experimental` switch the grid, `clear` empties the screen and `exit` closes it. It is a small touch, but developers tend to find it and enjoy it.

## Tech stack

Next.js 15 (App Router, exported as a static site), React 19, TypeScript, Tailwind CSS 3, Framer Motion, and Radix UI components in the shadcn/ui style, with Lucide icons. The demo is hosted on GitHub Pages.

## Quick start

Requires Node.js 18.18 or later, and npm or pnpm.

1. Clone the repository:
   ```bash
   git clone https://github.com/anime-portfolio/app.git
   cd app
   ```

2. Install the dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

The site is exported as static files to `out/`. To serve it from a subpath, such as `/app/` on GitHub Pages, set `PAGES_BASE_PATH=/app` for the build.

## Customization

### Profile

Edit `data/portfolio-data.tsx`:

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

Social links and the contact email are optional; the page only shows the ones that are set.

### Projects

Add your projects to the `works` array in the same file:

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
}
```

### Themes

The two themes live in `contexts/theme-context.tsx`. A new theme is another configuration of the same shape, with its own colors and floating character:

```typescript
export const customTheme: PortfolioPageProperties = {
  type: "fullscreen",
  styles: ["anime", "custom"],
  gradientBg: "bg-gradient-to-br from-custom-900 to-custom-100",
  // ... more customization
}
```

## Project structure

```
app/
├── app/                    # Next.js App Router
├── components/             # React components
│   ├── ui/                # Reusable UI components
│   ├── work-card.tsx      # Project card component
│   ├── floating-girl.tsx  # Floating character component
│   └── terminal-ui.tsx    # Terminal interface
├── contexts/              # React contexts, including the themes
├── data/                  # Portfolio data and configuration
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities, translations and wiki articles
├── public/                # Static assets, including the character images
├── styles/                # Global styles
└── types/                 # TypeScript type definitions
```

## Deployment

The demo deploys to GitHub Pages through `.github/workflows/pages.yml`, which builds and publishes the site on every push to `master`. The exported `out/` folder also works on Vercel, Netlify or any other static host.

### Publishing your own copy on GitHub Pages

Because the site is exported as plain static files, hosting it is free and needs no server:

1. Fork this repository, or use it as a template for a new one.
2. In your repository's settings, open Pages and choose GitHub Actions as the source.
3. Push a change to the `master` branch. The included workflow builds the site and publishes it at `https://your-username.github.io/your-repository/`.

If you publish from a repository named `your-username.github.io`, the site lives at the root of that address instead. A custom domain can be added in the same Pages settings. Every later push rebuilds and republishes the site automatically, so updating your portfolio is as simple as editing a file and pushing.

## Contributing

Contributions are welcome. Fork the repository, then:

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit your changes: `git commit -m "Add your feature"`
3. Push the branch: `git push origin feature/your-feature`
4. Open a pull request

Follow the existing code style, add tests for new features where it makes sense, update the documentation, and check your change in more than one browser and in both themes. See [CONTRIBUTING.md](./CONTRIBUTING.md) for the details.

Questions and ideas go to [Discussions](https://github.com/anime-portfolio/app/discussions), and bugs to [Issues](https://github.com/anime-portfolio/app/issues).

## Frequently asked questions

### Is it free to use?

Yes. The code is MIT licensed, so you can use it for a personal site, a client project or a commercial product, and change anything you like.

### Can I use Crystalline-chan and Weltschmerz-chan on my own site?

Yes. The character illustrations are licensed under CC BY 4.0, which allows use, modification and redistribution, including commercially, as long as you give credit. A line such as "Characters: Crystalline-chan and Weltschmerz-chan by Aesthetic Vulpes (CC BY 4.0)" in your footer or README is enough.

### Do I need to know React or Next.js?

Not for the basics. Your name, bio, links, projects and character lines all live in plain data files that read almost like a form. Changing the layout or adding new features does need some React.

### Do I need a server or a database?

No. The site is exported as static HTML, CSS and JavaScript, so it runs on GitHub Pages, Netlify, Vercel, Cloudflare Pages or any ordinary web host, at no cost.

### Does it work on phones?

Yes. The layout is responsive, the navigation collapses into a menu on small screens, and the character stays out of the way of the content.

### Can I remove the anime elements and keep a plain portfolio?

Yes. Turn off the floating character, pick calmer colors, and what remains is a clean, fast developer portfolio with a project grid, a profile section, two themes and bilingual support.

### Can I show my own portfolio here?

Please do. Share it in [Discussions](https://github.com/anime-portfolio/app/discussions); seeing how people make it their own is the best part of maintaining a template.

## License

The code is released under the [MIT License](LICENSE). The character illustrations (Crystalline-chan and Weltschmerz-chan, in `public/images/`, `public/og.png` and the screenshots) are licensed under [CC BY 4.0](LICENSE-CC-BY-4.0).

<!-- BEGIN gh-mutual-linking -->

---

### Related projects

- [bio](https://github.com/didvc/bio): Profile writings and translations of Vulpes (didvc)
- [astro-html-editor](https://github.com/didvc/astro-html-editor): Self-hosted HTML editor with live preview. Astro SSR + plain JavaScript, server-side file persistence.
- [awesome-template](https://github.com/didvc/awesome-template)
- [react-image-editor](https://github.com/didvc/react-image-editor): A powerful web-based image editor built with React, TypeScript, and Canvas API. Features real-time filters, transformations, crop tool, and…
- [image-gallery-app](https://github.com/didvc/image-gallery-app): Modern minimalist image gallery built with Express.js and Vue.js - featuring drag & drop upload, responsive design, and clean aesthetics
- [vibe-go-image-gallery](https://github.com/didvc/vibe-go-image-gallery): Modern image gallery application built with Go and Vue.js featuring SEO optimization, responsive design, and automatic thumbnail generation.
- [html-bio-generator](https://github.com/didvc/html-bio-generator): A modern, intuitive tool for creating beautiful HTML bio pages with ease. Built with Next.js, TypeScript, and Tailwind CSS. Perfect for…
- [app](https://github.com/AI-marriage/app): AIを使った結婚証明書ジェネレーター - ChatGPTとの特別な瞬間を美しい証明書で記録しましょう
- [text-to-speech](https://github.com/didvc/text-to-speech): VoiceFlow - Modern text-to-speech web application with real-time word highlighting, customizable voice settings, and content management. Built…
- [molecular](https://github.com/didvc/molecular): Interactive web application for visualizing and animating molecular structures. Built with React, TypeScript, and modern web technologies for…
- [hugo-kawaii](https://github.com/didvc/hugo-kawaii): A modern and cool Hugo theme with beautiful kawaii aesthetics, dark mode support, and delightful animations
- [app](https://github.com/hiroyuki-generator/app)
- [Kuso-Physics](https://github.com/KusoGames/Kuso-Physics): Open-source chaos physics game. Built with Next.js. Easily self-host on GitHub Pages.
<!-- END gh-mutual-linking -->
