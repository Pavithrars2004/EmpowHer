
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, GraduationCap, Check, ArrowLeft } from 'lucide-react';
import FinancialLiteracyDemo from '@/components/feature-demos/FinancialLiteracyDemo';
import { Button } from '@/components/ui/button';

const FinancialLiteracy = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20 animate-fade-in">
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Feature 02
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Gamified Financial Literacy</h1>
            <p className="text-lg text-gray-600 mb-8">
              Access personalized, gamified financial education modules designed to improve your business 
              financial knowledge in an engaging and interactive way.
            </p>
            <nav className="flex justify-center">
              <ol className="flex space-x-2 items-center text-sm text-gray-500">
                <li>
                  <Link to="/" className="hover:text-primary transition-all duration-300">Home</Link>
                </li>
                <li><ChevronRight size={14} /></li>
                <li>
                  <Link to="/features" className="hover:text-primary transition-all duration-300">Features</Link>
                </li>
                <li><ChevronRight size={14} /></li>
                <li className="text-primary font-medium">Financial Literacy</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <div className="order-2 md:order-1 relative">
              <div className="bg-accent/10 rounded-tl-[100px] rounded-br-[100px] h-full w-full absolute -top-6 -left-6 z-0"></div>
              <div className="glass-card rounded-xl overflow-hidden relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Financial Literacy" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl font-bold">Interactive Financial Learning</h2>
              <p className="text-gray-600 leading-relaxed">
                Our gamified approach to financial education makes learning enjoyable and effective, 
                helping you build essential financial skills for business success.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-1">
                    <Check size={12} />
                  </div>
                  <span className="text-gray-600">Engaging modules on budgeting, cash flow management, and investment strategies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-1">
                    <Check size={12} />
                  </div>
                  <span className="text-gray-600">Personalized learning paths based on your business needs and knowledge level</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-1">
                    <Check size={12} />
                  </div>
                  <span className="text-gray-600">Earn badges and rewards as you complete financial modules</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-1">
                    <Check size={12} />
                  </div>
                  <span className="text-gray-600">Practice real-world financial decision-making in a risk-free environment</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Demo Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Experience Our Financial Learning Platform</h3>
            <FinancialLiteracyDemo />
          </div>
          
          {/* Back to Features */}
          <div className="text-center">
            <Link to="/features">
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft size={16} />
                <span>Back to All Features</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialLiteracy;
