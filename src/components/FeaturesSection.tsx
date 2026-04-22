import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Waves, LineChart, Brain, Wind, Moon } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
}

const features: Feature[] = [
  {
    title: "Guided Journeys",
    description: "Curated paths for anxiety, sleep, and focus designed by experts.",
    icon: <Brain className="w-6 h-6" />,
    colorClass: "bg-emerald-50 text-emerald-700"
  },
  {
    title: "Ambient Audio",
    description: "High-fidelity nature sounds and white noise to ground your senses.",
    icon: <Waves className="w-6 h-6" />,
    colorClass: "bg-indigo-50 text-indigo-700"
  },
  {
    title: "Mindful Analytics",
    description: "Track your streaks and mental wellness trends over time.",
    icon: <LineChart className="w-6 h-6" />,
    colorClass: "bg-rose-50 text-rose-700"
  },
  {
    title: "Breathing Exercises",
    description: "Instant physiological relief with rhythmic breathing tools.",
    icon: <Wind className="w-6 h-6" />,
    colorClass: "bg-sky-50 text-sky-700"
  },
  {
    title: "Sleep Stories",
    description: "Gentle narratives to help you drift into deep, restorative sleep.",
    icon: <Moon className="w-6 h-6" />,
    colorClass: "bg-purple-50 text-purple-700"
  },
  {
    title: "Daily Zen",
    description: "Small, manageable mindfulness habits for busy lifestyles.",
    icon: <Leaf className="w-6 h-6" />,
    colorClass: "bg-amber-50 text-amber-700"
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Everything you need to find peace</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our science-backed features are designed to help you navigate life's stresses with ease and intentionality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              <div className={`w-12 h-12 ${feature.colorClass} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;