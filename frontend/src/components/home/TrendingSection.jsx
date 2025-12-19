import { motion } from 'framer-motion';
import { TrendingUp, Flame, Copy, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import { trendingAPI } from '../../services/api';
import toast from 'react-hot-toast';
import { copyToClipboard } from '../../utils/helpers';

const TrendingSection = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copiedIndex, setCopiedIndex] = useState(null);

  useEffect(() => {
    fetchTrending();
  }, []);

  const fetchTrending = async () => {
    try {
      const response = await trendingAPI.getGlobal(10);
      setTrending(response.data.data);
    } catch (error) {
      toast.error('Failed to load trending hashtags');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async (hashtag, index) => {
    const success = await copyToClipboard(hashtag);
    if (success) {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  if (loading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="h-8 w-64 bg-gray-200 rounded-lg mx-auto mb-8 shimmer"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass-card p-4 rounded-xl">
                <div className="h-6 bg-gray-200 rounded shimmer"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 relative overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-50/50 to-orange-50/50 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4"
          >
            <Flame className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="text-sm font-medium">Hot Right Now</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Trending Now
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Most popular hashtags across the Middle East
          </motion.p>
        </div>

        {/* Trending Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {trending.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card p-6 rounded-2xl group hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Rank Badge */}
              <div className="absolute top-4 right-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                  index === 0 ? 'bg-gradient-to-br from-yellow-400 to-orange-500' :
                  index === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-400' :
                  index === 2 ? 'bg-gradient-to-br from-orange-400 to-orange-600' :
                  'bg-gradient-to-br from-blue-400 to-purple-500'
                }`}>
                  #{index + 1}
                </div>
              </div>

              {/* Hashtag */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold arabic-text mb-2 group-hover:text-red-600 transition-colors">
                  {item.hashtag}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <TrendingUp className="w-4 h-4 text-red-500" />
                  <span>{item.region}</span>
                  <span>•</span>
                  <span className="text-green-600 font-medium">{item.growth}</span>
                </div>
              </div>

              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-red-50 to-orange-50 text-red-600 text-sm font-medium mb-4">
                {item.category}
              </div>

              {/* Trend Score Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <span>Trend Score</span>
                  <span className="font-bold text-red-600">{item.trend_score}/100</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.trend_score}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"
                  ></motion.div>
                </div>
              </div>

              {/* Copy Button */}
              <button
                onClick={() => handleCopy(item.hashtag, index)}
                className="w-full btn-gradient py-2 text-sm flex items-center justify-center gap-2"
              >
                {copiedIndex === index ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Hashtag
                  </>
                )}
              </button>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="btn-gradient px-8 py-3">
            <span className="flex items-center gap-2">
              <Flame className="w-5 h-5" />
              View All Trending Hashtags
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TrendingSection;