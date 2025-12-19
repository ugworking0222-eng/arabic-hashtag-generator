import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="text-center py-20">
      <div className="text-9xl mb-8">🔍</div>
      <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
      <p className="text-gray-500 mb-8">
        The page you're looking for doesn't exist.
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link to="/" className="btn-gradient px-6 py-3">
          <span className="flex items-center gap-2">
            <Home className="w-5 h-5" />
            Go Home
          </span>
        </Link>
        <Link to="/search" className="glass-card px-6 py-3 font-semibold hover:scale-105 transition-all">
          <span className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            Search
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;