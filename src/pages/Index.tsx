
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import AboutSection from '@/components/AboutSection';
import Testimonials from '@/components/Testimonials';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <Features />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Join NariNiti today and gain access to AI-powered tools, financial education, mentorship, and market opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/features" className="btn-accent">
              Get Started
            </Link>
            <Link to="/contact" className="border-2 border-white/30 px-6 py-3 rounded-full text-white font-semibold hover:bg-white/10 transition-all-300 flex items-center justify-center space-x-2">
              <span>Contact Us</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
