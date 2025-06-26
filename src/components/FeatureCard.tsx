
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowUpRight } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  path: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, path, index }: FeatureCardProps) => {
  return (
    <div 
      className="feature-card p-8 rounded-xl glass-card hover:shadow-xl transition-all duration-300 opacity-0 translate-y-10 animate-[fade-in_0.5s_ease-out_forwards]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link to={path}>
        <Button className="flex items-center space-x-2 w-full sm:w-auto">
          <span>Learn More</span>
          <ArrowUpRight size={16} />
        </Button>
      </Link>
    </div>
  );
};

export default FeatureCard;
