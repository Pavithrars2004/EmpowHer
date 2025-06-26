
import React, { useEffect, useRef } from 'react';
import { 
  TrendingUp, 
  GraduationCap, 
  Users, 
  LineChart, 
  ShieldCheck, 
  Sparkles,
  BarChart3,
  Lightbulb
} from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (cardRef.current) {
                cardRef.current.classList.add('opacity-100');
                cardRef.current.classList.remove('opacity-0', 'translate-y-10');
              }
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cardElement = cardRef.current;
    if (cardElement) {
      observer.observe(cardElement);
    }

    return () => {
      if (cardElement) {
        observer.unobserve(cardElement);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="feature-card p-6 rounded-xl glass-card opacity-0 translate-y-10 transition-all duration-700 ease-out hover:shadow-xl hover:-translate-y-1 transition-all-300"
    >
      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <TrendingUp size={24} />,
      title: "AI Credit Evaluation",
      description: "Our AI algorithms evaluate your business potential beyond traditional credit scores, making funding more accessible.",
      delay: 100
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Financial Literacy",
      description: "Access personalized, gamified financial education modules designed to improve your business financial knowledge.",
      delay: 200
    },
    {
      icon: <Users size={24} />,
      title: "Personalized Mentorship",
      description: "Connect with experienced mentors who provide guidance tailored to your specific business needs and challenges.",
      delay: 300
    },
    {
      icon: <LineChart size={24} />,
      title: "Market Linkages",
      description: "Gain access to new markets and opportunities through our extensive network of partners and platforms.",
      delay: 400
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Secure Platform",
      description: "Your data is protected with enterprise-grade security, ensuring confidentiality and privacy.",
      delay: 500
    },
    {
      icon: <Sparkles size={24} />,
      title: "Personalized Dashboard",
      description: "Track your progress, manage appointments, and access resources all in one convenient location.",
      delay: 600
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Progress Tracking",
      description: "Monitor your financial growth and business development through intuitive analytics and reports.",
      delay: 700
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Resource Hub",
      description: "Access a wealth of resources, templates, and tools specifically designed for women entrepreneurs.",
      delay: 800
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div 
          ref={sectionRef}
          className="text-center max-w-3xl mx-auto mb-16 opacity-0 translate-y-10 transition-all duration-700"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Powerful Features</h2>
          <p className="text-gray-600 text-lg">
            NariNiti combines AI technology with human expertise to deliver a comprehensive platform for women entrepreneurs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
