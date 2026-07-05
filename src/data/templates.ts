export interface Template {
  id: string;
  title: string;
  category: string;
  summary: string;
  gradient: string;
}

export const templates: Template[] = [
  {
    id: '3d-jack-portfolio-hero',
    title: '3D Jack Portfolio',
    category: 'Portfolio',
    summary: 'Build a 3D Creator portfolio landing page for "Jack" using React, TypeScript, Tailwind CSS, Framer Motion, and Lucide React. The page has a dark theme...',
    gradient: "from-purple-600 to-blue-500",
  },
  {
    id: 'modern-agency',
    title: 'Modern Agency',
    category: 'Agency',
    summary: 'Build a React + Vite + Tailwind CSS landing page for "Axion Studio" - a design agency site. Use the `shaders` package (npm: `shaders`) for the hero ba...',
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    id: 'email-landing-page',
    title: 'Email Landing Page',
    category: 'Landing page',
    summary: 'Build a premium, AI-native email client landing page called "Aura" using **React 18 + TypeScript + Vite + Tailwind CSS + motion/react (framer motion) ...',
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 'halo-usd-landing',
    title: 'USD Halo',
    category: 'Landing Page',
    summary: 'Build a premium, fintech-style landing page for a stablecoin product called "Halo / USD Halo" using React + TypeScript + Vite + Tailwind CSS, with luc...',
    gradient: "from-blue-600 to-indigo-500",
  },
  {
    id: 'prisma-landing',
    title: 'Prisma Creative Studio',
    category: 'Landing Page',
    summary: 'Create a React + Vite + TypeScript + Tailwind CSS landing page for a creative studio called "Prisma". The page has 3 sections: Hero, About, and Featur...',
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 'innovation-landing',
    title: 'Innovation',
    category: 'Landing Page',
    summary: 'RECREATION PROMPT  Build a single-page landing site using React + TypeScript + Vite + Tailwind CSS + framer-motion + lucide-react. The entire page has...',
    gradient: "from-violet-600 to-purple-500",
  },
  {
    id: 'orbis-nft-landing',
    title: 'Orbis NFT',
    category: 'Landing Page',
    summary: 'Create an NFT landing page called "Orbis.Nft" with 4 sections, using a dark space theme. The page uses video backgrounds served from CloudFront, a liq...',
    gradient: "from-cyan-500 to-blue-400",
  },
  {
    id: 'portfolio-cosmic-hero',
    title: 'Portfolio Cosmic',
    category: 'Portfolio',
    summary: 'Prompt to recreate this landing page:  Build a single-page dark portfolio landing page using React + Vite + Tailwind CSS + TypeScript + GSAP + Framer ...',
    gradient: "from-amber-500 to-orange-500",
  },
  {
    id: 'mindloop-landing',
    title: 'Mindloop Landing',
    category: 'Landing Page',
    summary: 'Build a dark monochrome landing page called Mindloop — a newsletter/content platform. Use React + Vite + TypeScript + Tailwind CSS + shadcn/ui + Frame...',
    gradient: "from-green-500 to-emerald-400",
  },
];
