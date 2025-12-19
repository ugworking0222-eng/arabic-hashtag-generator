import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "ما هي الهاشتاقات وكيف تعمل؟",
      questionEn: "What are hashtags and how do they work?",
      answer: "الهاشتاقات هي كلمات مفتاحية تبدأ بعلامة # وتستخدم لتصنيف المحتوى على منصات التواصل الاجتماعي. عند استخدام هاشتاق معين، يصبح منشورك مرئياً لجميع من يبحثون عن هذا الهاشتاق أو يتابعونه، مما يزيد من فرص وصولك لجمهور أوسع وزيادة التفاعل."
    },
    {
      question: "كم عدد الهاشتاقات التي يجب استخدامها في المنشور؟",
      questionEn: "How many hashtags should I use per post?",
      answer: "يختلف العدد المثالي حسب المنصة: على انستقرام يمكنك استخدام حتى 30 هاشتاق (يُنصح باستخدام 10-15)، على تيك توك يُفضل 3-5 هاشتاقات، وعلى تويتر يكفي 1-3 هاشتاقات. المهم اختيار هاشتاقات ذات صلة بمحتواك وليس مجرد عدد كبير."
    },
    {
      question: "هل الهاشتاقات تزيد المتابعين حقاً؟",
      questionEn: "Do hashtags really increase followers?",
      answer: "نعم! استخدام الهاشتاقات الصحيحة يزيد من ظهور منشوراتك في نتائج البحث وصفحات الاستكشاف، مما يجذب متابعين جدد مهتمين بمحتواك. الهاشتاقات المستهدفة والرائجة هي المفتاح لنمو حسابك بشكل عضوي."
    },
    {
      question: "كيف أختار أفضل الهاشتاقات لمحتواي؟",
      questionEn: "How do I choose the best hashtags for my content?",
      answer: "اختر هاشتاقات مناسبة لمحتواك ومجالك وجمهورك المستهدف. استخدم مزيجاً من الهاشتاقات الشائعة (للوصول الواسع) والمتخصصة (للجمهور المهتم). أيضاً استخدم هاشتاقات محلية خاصة بدولتك لزيادة التفاعل من جمهورك المحلي."
    },
    {
      question: "هل توجد هاشتاقات محظورة يجب تجنبها؟",
      questionEn: "Are there banned hashtags I should avoid?",
      answer: "نعم، بعض المنصات تحظر هاشتاقات معينة. جميع الهاشتاقات في مولدنا آمنة ومتوافقة مع سياسات منصات التواصل. نتجنب الهاشتاقات المحظورة أو المخالفة لضمان عدم تأثر حسابك سلباً."
    },
    {
      question: "هل الخدمة مجانية حقاً؟",
      questionEn: "Is the service really free?",
      answer: "نعم! الخدمة مجانية 100% ولا تتطلب تسجيل أو دفع أي رسوم. يمكنك استخدام جميع الهاشتاقات المتاحة (أكثر من 5000 هاشتاق) بحرية تامة وبدون أي قيود على عدد مرات الاستخدام."
    },
    {
      question: "كم مرة يتم تحديث الهاشتاقات؟",
      questionEn: "How often are hashtags updated?",
      answer: "نقوم بتحديث قاعدة بيانات الهاشتاقات يومياً لضمان حصولك على أحدث الترندات والهاشتاقات الأكثر رواجاً. نتابع الهاشتاقات الشائعة في كل دولة وفئة ونضيف الجديد منها باستمرار."
    },
    {
      question: "هل يمكنني استخدام الهاشتاقات لأكثر من منصة؟",
      questionEn: "Can I use the hashtags for multiple platforms?",
      answer: "بالتأكيد! جميع هاشتاقاتنا تعمل على انستقرام، تيك توك، تويتر، فيسبوك، يوتيوب ولينكد إن. فقط انسخ الهاشتاقات المناسبة واستخدمها على أي منصة تريد."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 arabic-text">
            الأسئلة الشائعة
          </h2>
          <p className="text-xl text-gray-600">
            إجابات على أهم الأسئلة حول استخدام الهاشتاقات العربية
          </p>
          <p className="text-lg text-gray-500 mt-2">
            Frequently Asked Questions
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-bold arabic-text mb-1">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {faq.questionEn}
                  </p>
                </div>
                <div className="ml-4 text-indigo-600">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-600 leading-relaxed arabic-text">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
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
          <p className="text-gray-600 mb-4 arabic-text">
            هل لديك سؤال آخر؟
          </p>
          <button className="btn-gradient px-8 py-4">
            <span className="arabic-text">تواصل معنا</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;