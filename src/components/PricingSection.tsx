import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface PricingTier {
  name: string;
  price: number;
  isPopular?: boolean;
  features: string[];
}

const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const displayTiers: PricingTier[] = [
    {
      name: "Starter",
      price: 0,
      features: ["Basic access", "Daily meditations", "Community access"]
    },
    {
      name: "Monthly Pro",
      price: isAnnual ? 9.99 : 12.99,
      isPopular: true,
      features: ["Full access library", "Offline mode", "Sleep stories", "Advanced analytics"]
    },
    {
      name: "Annual Pro",
      price: isAnnual ? 69 : 89,
      features: ["All Premium features", "Family sharing", "Personalized coaching", "Priority support"]
    }
  ];

  return (
    <section id="pricing" className="py-12 md:py-16 max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Simple, transparent pricing</h2>
        
        {/* Toggle */}
        <div className="flex items-center justify-center gap-4">
          <span className={`text-sm font-medium ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 h-7 bg-indigo-100 rounded-full p-1 transition-colors relative"
          >
            <motion.div 
              animate={{ x: isAnnual ? 28 : 0 }}
              className="w-5 h-5 bg-indigo-600 rounded-full shadow-sm"
            />
          </button>
          <span className={`text-sm font-medium ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
            Yearly <span className="text-emerald-600 ml-1 text-xs font-bold">(Save 20%)</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayTiers.map((tier) => (
          <motion.div
            key={tier.name}
            layout
            className={`relative bg-white border rounded-2xl p-6 flex flex-col ${
              tier.isPopular 
                ? 'border-indigo-200 ring-4 ring-indigo-50 scale-105 z-10 shadow-xl' 
                : 'border-slate-200 shadow-sm'
            }`}
          >
            {tier.isPopular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Most Popular
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-slate-900">${tier.price}</span>
                <span className="text-slate-500">/{isAnnual ? 'yr' : 'mo'}</span>
              </div>
            </div>

            <ul className="flex-1 space-y-4 mb-8">
              {tier.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-3 text-slate-600 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button 
              className={`w-full py-3 rounded-full font-semibold transition-all active:scale-95 ${
                tier.isPopular 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md' 
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;