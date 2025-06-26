
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and short description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="font-montserrat font-extrabold text-2xl">
                <span className="text-white">Nari</span>
                <span className="text-accent">Niti</span>
              </div>
            </Link>
            <p className="text-gray-200 text-sm leading-relaxed">
              Empowering women entrepreneurs through AI-powered credit evaluation, financial literacy, mentorship, and market linkages.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-200 hover:text-accent transition-all-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-200 hover:text-accent transition-all-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-200 hover:text-accent transition-all-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-200 hover:text-accent transition-all-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-200 hover:text-accent transition-all-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-200 hover:text-accent transition-all-300">About Us</Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-200 hover:text-accent transition-all-300">Features</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-accent transition-all-300">Contact</Link>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-accent transition-all-300">Login</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-200 hover:text-accent transition-all-300">AI Credit Evaluation</a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-accent transition-all-300">Financial Literacy</a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-accent transition-all-300">Mentorship Programs</a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-accent transition-all-300">Market Linkages</a>
              </li>
              <li>
                <a href="#" className="text-gray-200 hover:text-accent transition-all-300">Resources</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-gray-200">123 Innovation Drive, Bangalore, Karnataka 560001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-accent flex-shrink-0" />
                <span className="text-gray-200">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-accent flex-shrink-0" />
                <span className="text-gray-200">info@nariniti.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} NariNiti. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 text-sm hover:text-accent transition-all-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 text-sm hover:text-accent transition-all-300">Terms of Service</a>
            <a href="#" className="text-gray-400 text-sm hover:text-accent transition-all-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
