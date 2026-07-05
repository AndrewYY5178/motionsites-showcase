import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Sparkles className="w-4 h-4" strokeWidth={1.5} />
            <span>AndDream · AI 灵感库</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a
              href="https://motionsites.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors"
            >
              Prompts by MotionSites
            </a>
            <a
              href="https://github.com/AndrewYY5178/motionsites-showcase"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
