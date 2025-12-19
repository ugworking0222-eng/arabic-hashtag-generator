import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Globe, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-40 right-1/4 w-48 h-48 bg-pink-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
          >
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium">
              🔥 #1 Arabic Hashtag Generator
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight arabic-text"
          >
            مولد <span className="gradient-text">الهاشتاقات</span>
            <br />
            العربية الرائجة
          </motion.h1>

          {/* English Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700"
          >
            Arabic Hashtag Generator
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-gray-600 mb-4 leading-relaxed arabic-text"
          >
            اكتشف وأنشئ آلاف الهاشتاقات الرائجة
            <br className="hidden md:block" />
            للسعودية والإمارات ومصر وجميع دول الشرق الأوسط
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-lg text-gray-500 mb-8 leading-relaxed"
          >
            Discover and generate thousands of trending hashtags for
            <br className="hidden md:block" />
            Saudi Arabia, UAE, Egypt, and all Middle East countries
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <button className="btn-gradient px-8 py-4 text-lg">
              <span className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span>
                  <span className="arabic-text block">ابدأ مجاناً</span>
                  <span className="text-sm opacity-90">Get Started Free</span>
                </span>
              </span>
            </button>
            
            <button className="glass-card px-8 py-4 text-lg font-semibold hover:scale-105 transition-all">
              <span className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-red-500" />
                <span>
                  <span className="arabic-text block">عرض الرائج</span>
                  <span className="text-sm text-gray-500">View Trending</span>
                </span>
              </span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-3xl font-bold gradient-text mb-2">17+</div>
              <div className="text-sm text-gray-600 arabic-text">دولة</div>
              <div className="text-xs text-gray-500">Countries</div>
            </div>
            
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-3xl font-bold gradient-text mb-2">15+</div>
              <div className="text-sm text-gray-600 arabic-text">فئة</div>
              <div className="text-xs text-gray-500">Categories</div>
            </div>
            
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-3xl font-bold gradient-text mb-2">5000+</div>
              <div className="text-sm text-gray-600 arabic-text">هاشتاق</div>
              <div className="text-xs text-gray-500">Hashtags</div>
            </div>
            
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <div className="text-sm text-gray-600 arabic-text">مجاني</div>
              <div className="text-xs text-gray-500">Free</div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-gray-600"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="arabic-text">تحديث فوري • Real-time Trending</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="arabic-text">17 دولة • 17 Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="arabic-text">15 فئة • 15 Categories</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span className="arabic-text">نسخ بضغطة واحدة • Copy with 1 Click</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;