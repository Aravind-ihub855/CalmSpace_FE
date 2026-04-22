import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import { Menu, X } from 'lucide-react';

interface LandingPageProps {
  scrolled: boolean;
}

const LandingPage: React.FC<LandingPageProps> = ({ scrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <div className="relative">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-serif font-bold text-indigo-900 tracking-tight">
            CalmSpace
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 font-medium hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-full font-medium shadow-md hover:bg-indigo-700 active:scale-95 transition-all">
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 p-4 flex flex-col gap-4 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-medium w-full">
              Get Started
            </button>
          </div>
        )}
      </nav>

      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />

        {/* Final CTA Section */}
        <section className="py-12 md:py-16 max-w-6xl mx-auto px-4">
          <div className="bg-indigo-600 rounded-[2.5rem] p-8 md:p-16 text-center text-white shadow-2xl shadow-indigo-200">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to breathe easier?</h2>
            <p className="text-indigo-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Join 2 million+ users finding peace and clarity through our daily mindfulness practices.
            </p>
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-slate-50 active:scale-95 transition-all">
              Start Your Free Trial
            </button>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-200 text-center text-slate-500 text-sm">
        <p>© 2024 CalmSpace. All rights reserved. Designed for serenity.</p>
      </footer>
    </div>
  );
};

export default LandingPage;