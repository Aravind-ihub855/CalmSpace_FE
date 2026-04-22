import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  user: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "CalmSpace has completely changed my morning routine. I feel more grounded than ever before.",
    user: "Sarah Jenkins",
    role: "Yoga Instructor",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
  },
  {
    quote: "The sleep stories are a game changer. I haven't slept this well in years. Truly magical.",
    user: "Marcus Chen",
    role: "Software Engineer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-12 md:py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-lg text-slate-700 italic mb-8 leading-relaxed">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.user} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-slate-100"
                />
                <div>
                  <p className="font-semibold text-slate-900">{t.user}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;