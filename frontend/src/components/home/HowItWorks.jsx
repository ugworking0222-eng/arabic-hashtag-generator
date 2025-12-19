import { motion } from 'framer-motion';
import { Search, Copy, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="w-12 h-12" />,
      title: "اختر دولتك أو فئتك",
      titleEn: "Choose Your Country or Category",
      description: "اختر من بين 17 دولة عربية أو 15 فئة متنوعة تشمل السفر، الطعام، الأعمال، الرياضة، الموضة وغيرها الكثير.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "تصفح الهاشتاقات الرائجة",
      titleEn: "Browse Trending Hashtags",
      description: "احصل على هاشتاقات محدثة يومياً ومصنفة حسب معدل الرواج والتفاعل. جميع الهاشتاقات مختارة بعناية لزيادة وصولك.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Copy className="w-12 h-12" />,
      title: "انسخ واستخدم فوراً",
      titleEn: "Copy & Use Instantly",
      description: "انسخ الهاشتاقات بنقرة واحدة واستخدمها مباشرة في منشوراتك على انستقرام، تيك توك، تويتر، فيسبوك أو أي منصة أخرى.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 arabic-text">
            كيف يعمل مولد الهاشتاقات؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ثلاث خطوات بسيطة للحصول على أفضل الهاشتاقات العربية الرائجة
          </p>
          <p className="text-lg text-gray-500 mt-2">
            How Our Arabic Hashtag Generator Works
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="glass-card p-8 hover:scale-105 transition-all duration-300 h-full">
                {/* Step Number */}
                <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${step.gradient} p-4 mb-6 mx-auto text-white`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 arabic-text text-center">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 text-center">
                  {step.titleEn}
                </p>
                <p className="text-gray-600 leading-relaxed arabic-text text-center">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-gradient px-8 py-4 text-lg">
            <span className="arabic-text">ابدأ الآن مجاناً</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;