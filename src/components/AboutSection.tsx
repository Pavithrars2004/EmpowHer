
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Heart, Target } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

    const elements = [sectionRef.current, imageRef.current, contentRef.current];
    elements.forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elements.forEach(element => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <section className="section-padding bg-white">
      <div 
        ref={sectionRef}
        className="container-custom opacity-0 translate-y-10 transition-all duration-700"
      >
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image */}
          <div 
            ref={imageRef}
            className="w-full md:w-1/2 opacity-0 translate-y-10 transition-all duration-700 delay-300"
          >
            <div className="relative">
              <div className="bg-primary/10 rounded-br-[100px] rounded-tl-[100px] h-full w-full absolute -top-6 -left-6 z-0"></div>
              <div className="glass-card rounded-2xl overflow-hidden relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Women entrepreneurs collaborating"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div 
            ref={contentRef}
            className="w-full md:w-1/2 opacity-0 translate-y-10 transition-all duration-700 delay-500"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              About NariNiti
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Empowering Women Entrepreneurs Across India
            </h2>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              NariNiti was founded with a vision to create a more inclusive financial ecosystem for women entrepreneurs. We leverage AI technology, mentorship, and market connections to help women overcome traditional barriers to business success.
            </p>
            
            <div className="space-y-5 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <Target size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800 mb-1">Our Mission</h4>
                  <p className="text-gray-600">To empower women entrepreneurs through innovative technology and personalized support, creating a path to financial independence and business success.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <Heart size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800 mb-1">Our Values</h4>
                  <p className="text-gray-600">Inclusivity, innovation, integrity, and empowerment guide every aspect of our platform and community.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800 mb-1">Our Impact</h4>
                  <p className="text-gray-600">We've helped over 500 women entrepreneurs secure funding, improve financial knowledge, and grow successful businesses.</p>
                </div>
              </div>
            </div>
            
            <Link to="/about" className="btn-primary inline-flex items-center space-x-2">
              <span>Learn More About Us</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
