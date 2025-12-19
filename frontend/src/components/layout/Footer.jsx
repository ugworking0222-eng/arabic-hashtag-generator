import { Heart, Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-card border-t border-white/20 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4 gradient-text">
              About
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              The best Arabic hashtag generator for all Middle East countries. 
              Generate trending hashtags for social media instantly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 gradient-text">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/trending" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Trending
                </a>
              </li>
              <li>
                <a href="/search" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Search
                </a>
              </li>
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h3 className="font-bold text-lg mb-4 gradient-text">
              Countries
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/country/sa" className="text-gray-600 hover:text-blue-600 transition-colors">
                  🇸🇦 Saudi Arabia
                </a>
              </li>
              <li>
                <a href="/country/ae" className="text-gray-600 hover:text-blue-600 transition-colors">
                  🇦🇪 UAE
                </a>
              </li>
              <li>
                <a href="/country/eg" className="text-gray-600 hover:text-blue-600 transition-colors">
                  🇪🇬 Egypt
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-lg mb-4 gradient-text">
              Connect
            </h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-gray-600 text-sm flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> for the Arab World
          </p>
          <p className="text-gray-500 text-xs mt-2">
            © {currentYear} Arabic Hashtag Generator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;