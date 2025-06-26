
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-gray-600 mb-8">
              Get in touch with our team to learn more about NariNiti or discuss how we can help your business.
            </p>
            <nav className="flex justify-center">
              <ol className="flex space-x-2 items-center text-sm text-gray-500">
                <li>
                  <Link to="/" className="hover:text-primary transition-all-300">Home</Link>
                </li>
                <li><ChevronRight size={14} /></li>
                <li className="text-primary font-medium">Contact</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                  Contact Information
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 text-lg mb-8">
                  We're here to answer your questions about NariNiti and how we can support your entrepreneurial journey.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-1">Our Location</h4>
                    <p className="text-gray-600">123 Innovation Drive, Bangalore, Karnataka 560001</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-1">Phone Number</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-1">Email Address</h4>
                    <p className="text-gray-600">info@nariniti.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-1">Working Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <div className="p-6 rounded-xl glass-card">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <MessageSquare size={20} />
                    </div>
                    <h3 className="text-xl font-bold">Live Chat Support</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Need immediate assistance? Our live chat support is available during business hours.
                  </p>
                  <button className="bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-dark transition-all-300 shadow-md hover:shadow-lg w-full">
                    Start Live Chat
                  </button>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Find Us On The Map</h2>
            <p className="text-gray-600">
              Visit our office in Bangalore to meet our team in person.
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg glass-card">
            {/* Placeholder for map - in a real implementation, you would use Google Maps or similar */}
            <div className="bg-gray-200 w-full h-96 flex items-center justify-center">
              <p className="text-gray-500">Map Loading...</p>
              {/* This is a placeholder - would be replaced with an actual map implementation */}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-2">
              Quick Answers
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">
              Find answers to common questions about NariNiti and our services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="glass-card rounded-xl p-6 hover:shadow-lg transition-all-300">
              <h3 className="text-xl font-bold mb-3">How does NariNiti's AI credit evaluation work?</h3>
              <p className="text-gray-600">
                Our AI algorithms assess multiple factors beyond traditional credit scores, including business growth potential, market viability, and your track record as an entrepreneur. This comprehensive approach gives women entrepreneurs a fairer chance at accessing funding.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 hover:shadow-lg transition-all-300">
              <h3 className="text-xl font-bold mb-3">Is NariNiti available throughout India?</h3>
              <p className="text-gray-600">
                Yes, NariNiti is available to women entrepreneurs across India. We have specialized resources for entrepreneurs in both urban and rural areas, with support in multiple languages.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 hover:shadow-lg transition-all-300">
              <h3 className="text-xl font-bold mb-3">How are mentors selected for the mentorship program?</h3>
              <p className="text-gray-600">
                Our mentors are carefully selected based on their business experience, industry expertise, and commitment to supporting women entrepreneurs. We match mentors and mentees based on industry alignment, business goals, and personal compatibility.
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 hover:shadow-lg transition-all-300">
              <h3 className="text-xl font-bold mb-3">What kind of businesses does NariNiti support?</h3>
              <p className="text-gray-600">
                NariNiti supports women entrepreneurs across diverse sectors, from traditional businesses to tech startups, e-commerce ventures, creative enterprises, and service-based companies. Our resources are adaptable to various business models and industries.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
