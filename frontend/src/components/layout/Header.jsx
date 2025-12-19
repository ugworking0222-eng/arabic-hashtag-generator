import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, TrendingUp, Hash, Globe } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const scrollToSection = (sectionId) => {
    // If not on home page, first navigate to home
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleCountriesClick = () => {
    scrollToSection('countries-section');
  };

  const handleGetStartedClick = () => {
    scrollToSection('categories-section');
  };

  return (
    <header className="sticky top-0 z-50 glass-card border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Hash className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">
                Hashtag Generator
              </h1>
              <p className="text-xs text-gray-500 arabic-text">
                مولد الهاشتاقات العربية
              </p>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search hashtags... بحث عن هاشتاقات"
                className="w-full px-6 py-3 pr-12 rounded-xl glass-card focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Navigation */}
          <nav className="flex items-center gap-2">
            <Link
              to="/trending"
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/50 transition-all group"
            >
              <TrendingUp className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
              <span className="hidden lg:inline font-medium">Trending</span>
            </Link>

            <button 
              onClick={handleCountriesClick}
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/50 transition-all group cursor-pointer"
            >
              <Globe className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
              <span className="hidden lg:inline font-medium">Countries</span>
            </button>

            <button 
              onClick={handleGetStartedClick}
              className="btn-gradient px-6 py-2 text-sm cursor-pointer"
            >
              Get Started
            </button>
          </nav>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search hashtags..."
              className="w-full px-6 py-3 pr-12 rounded-xl glass-card focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;