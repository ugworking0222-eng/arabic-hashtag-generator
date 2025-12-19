import Hero from '../components/home/Hero';
import CountrySelector from '../components/home/CountrySelector';
import CategoryGrid from '../components/home/CategoryGrid';
import TrendingSection from '../components/home/TrendingSection';
import HowItWorks from '../components/home/HowItWorks';
import Benefits from '../components/home/Benefits';
import FAQ from '../components/home/FAQ';

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <Hero />

      {/* Country Selector */}
      <div id="countries-section">
        <CountrySelector />
      </div>

      {/* Category Grid */}
      <div id="categories-section">
        <CategoryGrid />
      </div>

      {/* Trending Section */}
      <div id="trending-section">
        <TrendingSection />
      </div>

      {/* How It Works - SEO Section */}
      <HowItWorks />

      {/* Benefits - SEO Section */}
      <Benefits />

      {/* FAQ - SEO Section */}
      <FAQ />
    </div>
  );
};

export default Home;