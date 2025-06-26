
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  GraduationCap, 
  Users, 
  LineChart, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';

const Features = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <TrendingUp size={28} />,
      title: "AI Credit Evaluation",
      description: "Our AI algorithms evaluate your business potential beyond traditional credit scores, making funding more accessible for women entrepreneurs.",
      path: "/credit-evaluation"
    },
    {
      icon: <GraduationCap size={28} />,
      title: "Financial Literacy",
      description: "Access personalized, gamified financial education modules designed to improve your business financial knowledge in an engaging way.",
      path: "/financial-literacy"
    },
    {
      icon: <Users size={28} />,
      title: "Personalized Mentorship",
      description: "Connect with experienced mentors who provide guidance tailored to your specific business needs and challenges.",
      path: "/mentorship"
    },
    {
      icon: <LineChart size={28} />,
      title: "Market Linkages",
      description: "Gain access to new markets and opportunities through our extensive network of partners and platforms.",
      path: "/market-linkages"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Features</h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover the complete suite of tools and services designed to empower women entrepreneurs.
            </p>
            <nav className="flex justify-center">
              <ol className="flex space-x-2 items-center text-sm text-gray-500">
                <li>
                  <Link to="/" className="hover:text-primary transition-all duration-300">Home</Link>
                </li>
                <li><ChevronRight size={14} /></li>
                <li className="text-primary font-medium">Features</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                path={feature.path}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Join NariNiti today and gain access to our complete suite of tools designed for women entrepreneurs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/contact" className="btn-accent">
              Get Started Now
            </Link>
            <Link to="/contact" className="border-2 border-white/30 px-6 py-3 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Contact Our Team</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
