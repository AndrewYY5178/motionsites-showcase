import { Link, useLocation } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Sparkles className="w-5 h-5 text-anddream-lime" strokeWidth={1.5} />
            <span className="text-lg font-bold tracking-tight text-gray-900">
              AndDream
            </span>
          </Link>

          {/* Nav links */}
          <div className="hidden sm:flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/'
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Gallery
            </Link>
            <a
              href="https://motionsites.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              MotionSites →
            </a>
          </div>

          {/* CTA */}
          <a
            href="https://github.com/AndrewYY5178/motionsites-showcase"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
