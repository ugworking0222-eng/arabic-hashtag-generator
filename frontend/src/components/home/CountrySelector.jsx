import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MapPin, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { countriesAPI } from '../../services/api';
import toast from 'react-hot-toast';

const CountrySelector = () => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await countriesAPI.getAll();
      setCountries(response.data.data);
    } catch (error) {
      toast.error('Failed to load countries');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCountryClick = (code) => {
    navigate(`/country/${code.toLowerCase()}`);
  };

  // Country colors based on flag
  const getCountryGradient = (code) => {
    const gradients = {
      SA: 'from-green-600 to-emerald-600',
      AE: 'from-red-600 to-orange-600',
      QA: 'from-purple-600 to-pink-600',
      KW: 'from-blue-600 to-cyan-600',
      BH: 'from-red-500 to-pink-500',
      OM: 'from-red-600 to-pink-600',
      EG: 'from-red-600 to-yellow-600',
      JO: 'from-green-600 to-red-600',
      LB: 'from-red-600 to-green-600',
      IQ: 'from-red-600 to-black',
      SY: 'from-red-600 to-black',
      PS: 'from-green-600 to-red-600',
      YE: 'from-red-600 to-black',
      MA: 'from-red-600 to-green-600',
      DZ: 'from-green-600 to-white',
      TN: 'from-red-600 to-white',
      LY: 'from-green-600 to-black',
    };
    return gradients[code] || 'from-blue-600 to-purple-600';
  };

  if (loading) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="h-8 w-64 bg-gray-200 rounded-lg mx-auto mb-4 shimmer"></div>
            <div className="h-4 w-96 bg-gray-200 rounded-lg mx-auto shimmer"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl">
                <div className="w-16 h-16 bg-gray-200 rounded-xl mx-auto mb-4 shimmer"></div>
                <div className="h-4 bg-gray-200 rounded mx-auto shimmer"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4"
          >
            <MapPin className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium arabic-text">اختر بلدك • Choose Your Country</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold gradient-text mb-2 arabic-text"
          >
            اختر دولة
          </motion.h2>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4"
          >
            Select a Country
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg arabic-text"
          >
            اختر دولة للحصول على الهاشتاقات المناسبة
          </motion.p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {countries.map((country, index) => (
            <motion.div
              key={country.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => handleCountryClick(country.code)}
              className="country-card group relative overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getCountryGradient(country.code)} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Flag */}
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {country.flag}
                </div>

                {/* Country Name */}
                <h3 className="font-bold text-lg mb-1 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {country.name_en}
                </h3>

                {/* Arabic Name */}
                <p className="text-sm text-gray-500 arabic-text mb-3">
                  {country.name_ar}
                </p>

                {/* Region Badge */}
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium">
                  <MapPin className="w-3 h-3" />
                  {country.region}
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${getCountryGradient(country.code)} flex items-center justify-center shadow-lg`}>
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-gradient px-8 py-3">
            View All {countries.length} Countries
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CountrySelector;