import { motion } from 'framer-motion';
import { Zap, TrendingUp, Globe, Shield, Clock, Heart } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "زيادة الوصول والتفاعل",
      titleEn: "Increase Reach & Engagement",
      description: "استخدم هاشتاقات رائجة ومحدثة لزيادة مشاهدات منشوراتك والوصول لجمهور أوسع على انستقرام وتيك توك",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "محدث يومياً",
      titleEn: "Updated Daily",
      description: "نقوم بتحديث قاعدة بيانات الهاشتاقات يومياً لضمان حصولك على أحدث الترندات والهاشتاقات الأكثر رواجاً",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "17 دولة عربية",
      titleEn: "17 Arab Countries",
      description: "هاشتاقات مخصصة لكل دولة عربية: السعودية، الإمارات، مصر، لبنان، الأردن، الكويت، قطر، البحرين وغيرها",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "مجاني 100% بدون حدود",
      titleEn: "100% Free Unlimited",
      description: "استخدم جميع الهاشتاقات مجاناً بدون أي قيود أو رسوم. لا يتطلب تسجيل أو اشتراك",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "15+ فئة متنوعة",
      titleEn: "15+ Categories",
      description: "هاشتاقات لجميع المجالات: سفر، طعام، أعمال، رياضة، موضة، صحة، تقنية، تعليم، ثقافة وأكثر",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "آمن وموثوق",
      titleEn: "Safe & Reliable",
      description: "جميع الهاشتاقات آمنة ومتوافقة مع سياسات منصات التواصل الاجتماعي. لا توجد هاشتاقات محظورة",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 arabic-text">
            لماذا تستخدم مولد الهاشتاقات العربية؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            أفضل أداة مجانية للحصول على هاشتاقات عربية رائجة ومحدثة
          </p>
          <p className="text-lg text-gray-500 mt-2">
            Why Use Our Arabic Hashtag Generator?
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 hover:scale-105 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} p-4 mb-4 text-white`}>
                {benefit.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2 arabic-text">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                {benefit.titleEn}
              </p>
              <p className="text-gray-600 leading-relaxed arabic-text">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* SEO Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-4 arabic-text text-center">
              ✅ يدعم جميع منصات التواصل الاجتماعي
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl mb-2">📱</p>
                <p className="font-semibold arabic-text">انستقرام</p>
                <p className="text-sm text-gray-500">Instagram</p>
              </div>
              <div>
                <p className="text-3xl mb-2">🎵</p>
                <p className="font-semibold arabic-text">تيك توك</p>
                <p className="text-sm text-gray-500">TikTok</p>
              </div>
              <div>
                <p className="text-3xl mb-2">🐦</p>
                <p className="font-semibold arabic-text">تويتر</p>
                <p className="text-sm text-gray-500">Twitter / X</p>
              </div>
              <div>
                <p className="text-3xl mb-2">👍</p>
                <p className="font-semibold arabic-text">فيسبوك</p>
                <p className="text-sm text-gray-500">Facebook</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;