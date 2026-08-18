# Frontend Multitool

A modern, privacy-first web application built with Next.js 16 that provides a comprehensive collection of free online developer tools. All tools run entirely client-side in your browser, ensuring your data never leaves your device.

### 🔗 [**Live Demo →**](https://frontend-multi-tool.vercel.app/)

![Frontend Multitool Screenshot](/public/images/screenshot/homepage.png)

## 🚀 Features

- **15 Developer Tools** including JSON Formatter, UUID Generator/Validator/Decoder, Base64/URL/HTML Encoder, and more
- **Next.js 16 App Router** with React 19 and TypeScript
- **Tailwind CSS 4** for modern, responsive styling
- **SEO Optimized** with structured data, sitemap, metadata, and robots.txt
- **Dark Mode** with persistent theme switching (localStorage-based)
- **Tool Maintenance System** - Scalable architecture for 100+ tools
- **Zero Registration** - all tools work instantly without sign-up
- **Privacy First** - 100% client-side processing, no data sent to servers
- **Accessibility** - WCAG AA compliant with keyboard navigation and screen reader support
- **Bilingual** - Full German/English content via locale-prefixed routing (`/en/...`)

## 📋 Available Tools

### UUID Tools

- **UUID Generator** - Generate RFC 4122 compliant UUIDs (v1, v3, v4, v5, v7, NIL), validate existing UUIDs, decode their embedded metadata (version, variant, v1 timestamp), and convert between formats

### JSON Tools

- **JSON Formatter** - Format, validate, minify, and beautify JSON

### Encoding Tools

- **Base64 / URL / HTML Encoder & Decoder** - Encode and decode Base64 strings, percent-encode URLs, and convert special characters to HTML entities

### Text Tools

- **Text Diff** - Compare text differences with highlighting
- **Markdown Previewer** - Live markdown editor with GitHub-flavored markdown

### Color Tools

- **Color Picker** - Pick and convert colors (HEX, RGB, HSL)
- **Color Palette Generator** - Generate color harmonies
- **Gradient Generator** - Create CSS gradients with 45+ presets

### Security Tools

- **JWT Decoder** - Decode JSON Web Tokens
- **Hash Generator** - Generate MD5, SHA-1, SHA-256, SHA-512, HMAC hashes

### Other Tools

- **Regex Tester** - Test regular expressions with real-time matching
- **Timestamp Converter** - Convert Unix timestamps to dates
- **CSS Minifier/Beautifier** - Minify or beautify CSS
- **QR Code Generator** - Generate customizable QR codes

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **React:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 with custom CSS variables
- **Icons:** Lucide React
- **Code Quality:** ESLint + Prettier with Tailwind plugin
- **Deployment:** Vercel-ready (zero-config)

## 📦 Getting Started

**Prerequisites:**

- Node.js 20+ and npm

**Installation:**

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## 🛠️ Available Scripts

```bash
npm run dev              # Start development server
npm run build            # Create production build (validates tools)
npm run start            # Start production server
npm run typecheck        # TypeScript validation
npm run test:ci          # Run test suite once
npm run check:release    # Validate tools + typecheck + tests + production build
npm run format           # Format code with Prettier
npm run lint             # Lint code with ESLint
npm run create:tool      # Generate a new tool (interactive CLI)
npm run validate:tools   # Validate all tools in registry
```

## 📁 Project Structure

```
frontend-toolkit/
├── app/                      # Next.js 16 App Router
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Homepage with tool grid
│   ├── globals.css          # Global styles and CSS variables
│   ├── sitemap.ts           # Dynamic sitemap generation
│   ├── robots.ts            # SEO robots configuration
│   ├── about/               # About page
│   ├── privacy/              # Privacy policy
│   ├── terms/                # Terms and conditions
│   └── tools/               # Tool pages (each tool has own folder)
│       ├── json-formatter/
│       │   ├── page.tsx            # Server component with metadata
│       │   ├── formatter-ui.tsx    # Client component with UI
│       │   └── utils.ts            # Tool logic
│       └── ...15 tools
├── components/              # Reusable React components
│   ├── layout-client.tsx    # Header & Footer (client components)
│   ├── breadcrumb.tsx       # Navigation breadcrumbs
│   ├── theme-toggle.tsx     # Dark mode toggle
│   ├── tool-schema.tsx      # Structured data for SEO
│   └── ...
├── lib/
│   ├── site-config.ts       # Central site configuration
│   ├── tools/
│   │   ├── registry.ts      # Central tool registry (15 tools)
│   │   └── validator.ts     # Validation functions
│   ├── types/
│   │   ├── tool.ts          # Tool TypeScript interfaces
│   │   └── blog.ts          # Blog TypeScript interfaces
│   ├── contexts/
│   │   ├── theme-context.tsx      # Theme provider
│   │   └── mobile-nav-context.tsx # Mobile navigation
│   ├── content/
│   │   └── blog.ts          # Blog content utilities
│   └── i18n/                # Internationalization (future-ready)
│       ├── index.ts
│       └── en.ts            # English content
├── content/
│   └── blog/                # Markdown blog posts
├── scripts/
│   ├── create-tool.js       # Tool generator CLI
│   └── validate-tools.js    # Tool validator
├── docs/
│   ├── TOOL_MAINTENANCE.md  # Maintenance system docs
│   ├── SCHEMA_IMPLEMENTATION.md
│   └── QUICK_REFERENCE.md
├── tailwind.config.ts       # Tailwind CSS 4 configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🔧 Tool Maintenance System

This project includes a powerful, scalable maintenance system designed for managing 100+ tools efficiently.

### Adding a New Tool

**Recommended: Use the interactive CLI**

```bash
npm run create:tool
```

This scaffolds:

- ✅ All required files (page, UI component, utils)
- ✅ Boilerplate code with proper structure
- ✅ Registry entry with SEO metadata
- ✅ Next.js metadata and accessibility patterns

**Manual Process:**

1. Add tool to `lib/tools/registry.ts`
2. Create `app/tools/{tool-id}/page.tsx` (server component)
3. Create `app/tools/{tool-id}/{tool-id}-ui.tsx` (client component)
4. Create `app/tools/{tool-id}/utils.ts` (logic)
5. Run `npm run validate:tools`

### Tool Validation

```bash
npm run validate:tools
```

Automatically checks:

- ✅ Required fields present
- ✅ Proper naming conventions
- ✅ No duplicate IDs or routes
- ✅ File structure exists
- ✅ SEO optimization (description length, keywords)
- ✅ Accessibility requirements

**Note:** Validation runs automatically before production builds.

### Tool Registry

All tools are defined in `lib/tools/registry.ts`. Each tool configuration includes:

- **Metadata:** ID, name, description, keywords
- **Grouping:** Category, icon, color
- **Relationships:** Related tools for cross-linking
- **SEO:** Structured data and Open Graph tags

Tools automatically appear in:

- Homepage grid
- Sidebar navigation
- Sitemap
- Search functionality
- Related tools sections

## 🌍 Internationalization

The project is structured for multi-language support (currently English only).

- `lib/tools/registry.ts` - Central tool definitions
- `lib/i18n/en.ts` - English content (re-exports from registry)
- `lib/i18n/index.ts` - i18n aggregation

To add a language: Create `lib/i18n/{locale}.ts` and update `getTranslations()`.

## 🎨 Theme Customization

Edit CSS variables in `app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  /* ... */
}

.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  /* ... */
}
```

Theme persists to `localStorage` and uses Tailwind's class-based dark mode.

## 📚 Documentation

- [TOOL_MAINTENANCE.md](docs/TOOL_MAINTENANCE.md) - Tool system guide
- [SCHEMA_IMPLEMENTATION.md](docs/SCHEMA_IMPLEMENTATION.md) - SEO structured data
- [QUICK_REFERENCE.md](docs/QUICK_REFERENCE.md) - Quick command reference
- [copilot-instructions.md](.github/copilot-instructions.md) - Architecture details

## 🚀 Deployment

## Recruiter-Friendly Release Checklist

- [ ] `npm run check:release` runs successfully
- [ ] About page reflects real project context (no placeholder personas)
- [ ] Metadata, sitemap and robots are up to date
- [ ] README stack versions and tool count are accurate
- [ ] At least one meaningful UI test exists for critical user flow

## Deployment

**Vercel (Recommended):**

1. Push to GitHub
2. Import project in Vercel
3. Keep build command as default (`npm run build`)
4. Deploy (no environment variables required)

### Suggested Vercel Settings

- Framework preset: `Next.js`
- Node version: `20.x`
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `.next` (default)

**Manual Build:**

```bash
npm run build
npm run start
```

The app is fully static-exportable if needed.

## 📝 License

This project is licensed under the MIT License.

---

**Frontend Multitool** - Built with Next.js 16, React 19, and Tailwind CSS 4
