
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroElement = heroRef.current;
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-secondary-light to-white overflow-hidden pt-20">
      {/* Abstract shapes */}
      <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl"></div>
      <div className="absolute top-40 left-1/4 w-48 h-48 rounded-full bg-secondary/20 blur-2xl"></div>
      
      <div 
        ref={heroRef}
        className="container-custom relative z-10 flex flex-col md:flex-row items-center justify-between py-16 opacity-0 translate-y-10 transition-all duration-700"
      >
        {/* Hero Text Content */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0 space-y-6">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm animate-pulse-soft mb-2">
            AI-Powered Financial Empowerment
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Empowering Women Entrepreneurs, <span className="text-gradient">One Policy at a Time</span>
          </h1>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            NariNiti provides AI-powered credit evaluation, financial literacy, personalized mentorship, and market linkages to help women entrepreneurs thrive.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <Link to="/features" className="btn-accent">
              Get Started
            </Link>
            <Link to="/about" className="btn-secondary flex items-center justify-center space-x-2">
              <span>Learn More</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="flex items-center space-x-8 pt-8">
            <div>
              <p className="text-3xl font-bold text-primary">500+</p>
              <p className="text-gray-600 text-sm">Women Empowered</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">95%</p>
              <p className="text-gray-600 text-sm">Success Rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-gray-600 text-sm">Mentors</p>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative">
            {/* Main image with glass effect */}
            <div className="rounded-2xl overflow-hidden glass-card p-2 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Women entrepreneur using NariNiti" 
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating card elements */}
            <div className="absolute -top-6 -left-6 glass-card rounded-lg p-3 shadow-lg animate-pulse-soft">
              <div className="text-xs font-medium text-gray-700">Financial Score</div>
              <div className="text-lg font-bold text-primary">92/100</div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 glass-card rounded-lg p-3 shadow-lg animate-pulse-soft">
              <div className="text-xs font-medium text-gray-700">Growth Rate</div>
              <div className="text-lg font-bold text-accent">+27%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
