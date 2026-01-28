# Modern DevOps Portfolio

A premium personal portfolio website built with Next.js, Three.js, and Tailwind CSS.

## Getting Started

Since `npm` was not available during initialization, you need to verify your Node.js installation first.

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Open your terminal in this folder.
2. Run `npm install` to install all dependencies manually.

```bash
npm install
```

### Environment Variables (Visitor Counter)

To enable the visitor counter, set up [Upstash Redis](https://upstash.com) (free tier available):

1. Create a Redis database at [console.upstash.com](https://console.upstash.com).
2. Copy your REST URL and token.
3. Create a `.env.local` file:

```bash
UPSTASH_REDIS_REST_URL=your_url_here
UPSTASH_REDIS_REST_TOKEN=your_token_here
```

4. Add the same variables to your Vercel project settings.

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app`: App Router pages and layouts.
- `src/components/home`: Feature sections (Hero, About, Skills, etc.).
- `src/components/ui`: Reusable UI components (GlassCard, SectionWrapper).
- `src/data`: Editable content file (`portfolio.ts`).

## Customization

Edit `src/data/portfolio.ts` to update your personal information, skills, and projects without touching the code logic.
