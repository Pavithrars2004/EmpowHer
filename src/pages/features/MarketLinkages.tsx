
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, LineChart, Check, ArrowLeft } from 'lucide-react';
import MarketLinkageDemo from '@/components/feature-demos/MarketLinkageDemo';
import { Button } from '@/components/ui/button';

const MarketLinkages = () => {
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
              Feature 04
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Market Linkage Tools</h1>
            <p className="text-lg text-gray-600 mb-8">
              Gain access to new markets and opportunities through our extensive 
              network of partners and platforms.
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
                <li className="text-primary font-medium">Market Linkages</li>
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
              <div className="bg-primary/10 rounded-tl-[100px] rounded-br-[100px] h-full w-full absolute -top-6 -left-6 z-0"></div>
              <div className="glass-card rounded-xl overflow-hidden relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Market Linkages" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl font-bold">Expand Your Market Reach</h2>
              <p className="text-gray-600 leading-relaxed">
                Our market linkage tools help connect your business to new customers, 
                partners, and opportunities to accelerate your growth.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-1">
                    <Check size={12} />
                  </div>
                  <span className="text-gray-600">Connect with corporate buyers and procurement opportunities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-1">
                    <Check size={12} />
                  </div>
                  <span className="text-gray-600">Access to e-commerce platforms and digital marketplace integration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-1">
                    <Check size={12} />
                  </div>
                  <span className="text-gray-600">Export market guidance and international trade support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-1">
                    <Check size={12} />
                  </div>
                  <span className="text-gray-600">Supply chain and logistics optimization for your business</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Demo Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Explore Market Opportunities</h3>
            <MarketLinkageDemo />
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

export default MarketLinkages;
