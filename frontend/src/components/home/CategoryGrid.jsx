import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Grid3X3, TrendingUp, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { categoriesAPI } from '../../services/api';
import toast from 'react-hot-toast';
import { CATEGORY_COLORS } from '../../utils/constants';

const CategoryGrid = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await categoriesAPI.getAll();
      setCategories(response.data.data);
    } catch (error) {
      toast.error('Failed to load categories');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryClick = (slug) => {
    navigate(`/category/${slug}`);
  };

  const getCategoryStyle = (slug) => {
    return CATEGORY_COLORS[slug] || CATEGORY_COLORS.travel;
  };

  if (loading) {
    return (
      <section className="py-16 bg-white/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-8 w-64 bg-gray-200 rounded-lg mx-auto mb-4 shimmer"></div>
            <div className="h-4 w-96 bg-gray-200 rounded-lg mx-auto shimmer"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl">
                <div className="w-12 h-12 bg-gray-200 rounded-xl mb-4 shimmer"></div>
                <div className="h-6 bg-gray-200 rounded mb-2 shimmer"></div>
                <div className="h-4 bg-gray-200 rounded shimmer"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white/30">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4"
          >
            <Grid3X3 className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium arabic-text">تصفح الفئات • Browse Categories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold gradient-text mb-2 arabic-text"
          >
            استكشف الفئات
          </motion.h2>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4"
          >
            Explore Categories
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg arabic-text"
          >
            استكشف الفئات المختلفة واحصل على هاشتاقات مناسبة
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {categories.map((category, index) => {
            const style = getCategoryStyle(category.slug);
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleCategoryClick(category.slug)}
                className="category-card group relative overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative z-10">
                  
                  {/* Icon Container */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${style.gradient} flex items-center justify-center text-3xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    {category.icon || style.icon}
                  </div>

                  {/* Category Name */}
                  <h3 className="font-bold text-xl mb-2 text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                    {category.name_en}
                  </h3>

                  {/* Arabic Name */}
                  <p className="text-gray-500 arabic-text mb-4 text-lg">
                    {category.name_ar}
                  </p>

                  {/* Stats Row */}
                  <div className="flex items-center justify-between">
                    {/* Popularity Badge */}
                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full ${style.bg} ${style.text} text-xs font-medium`}>
                      <TrendingUp className="w-3 h-3" />
                      {category.popularity}% Popular
                    </div>

                    {/* Arrow Icon */}
                    <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${style.gradient} flex items-center justify-center shadow-lg`}>
                        <ChevronRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className={`absolute inset-0 border-2 ${style.border} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-gradient px-8 py-3">
            Explore All {categories.length} Categories
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryGrid;