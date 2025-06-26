
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "NariNiti's AI-powered credit evaluation saw potential in my business when traditional banks wouldn't. The financial literacy modules helped me understand cash flows better, and their mentorship program was transformative.",
    name: "Priya Sharma",
    role: "Founder, Artisan Textiles",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "The market linkages provided by NariNiti helped my small-scale food business connect with corporate clients I couldn't reach before. My revenue has doubled in just six months!",
    name: "Ananya Desai",
    role: "CEO, Flavor Fusion Foods",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "As a first-time entrepreneur, I was overwhelmed by financial jargon and business planning. NariNiti's step-by-step guidance and supportive community made the journey less intimidating and more rewarding.",
    name: "Meera Patel",
    role: "Founder, EcoStyle Clothing",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

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

    const sectionElement = sectionRef.current;
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  return (
    <section className="section-padding bg-white">
      <div 
        ref={sectionRef}
        className="container-custom opacity-0 translate-y-10 transition-all duration-700"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Success Stories</h2>
          <p className="text-gray-600 text-lg">
            Hear from women entrepreneurs who have transformed their businesses with NariNiti's support.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Background decoration */}
          <div className="absolute -top-6 -left-6 text-primary/10">
            <Quote size={80} strokeWidth={1} />
          </div>
          
          {/* Testimonial card */}
          <div className="relative glass-card rounded-2xl p-8 md:p-10 overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Image */}
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="mb-6">
                  <p className="text-gray-700 text-lg italic leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-primary">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="absolute bottom-6 right-6 flex space-x-2">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-gray-600 hover:text-primary transition-all-300"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-gray-600 hover:text-primary transition-all-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all-300 ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
