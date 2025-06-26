
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Target, Gem, ChevronRight, ArrowRight } from 'lucide-react';

const About = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About NariNiti</h1>
            <p className="text-lg text-gray-600 mb-8">
              Learn more about our mission to empower women entrepreneurs and create a more inclusive financial ecosystem.
            </p>
            <nav className="flex justify-center">
              <ol className="flex space-x-2 items-center text-sm text-gray-500">
                <li>
                  <Link to="/" className="hover:text-primary transition-all-300">Home</Link>
                </li>
                <li><ChevronRight size={14} /></li>
                <li className="text-primary font-medium">About Us</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-2">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">The Journey of NariNiti</h2>
              <p className="text-gray-600 leading-relaxed">
                NariNiti was founded in 2022 by a team of financial experts, technologists, and women entrepreneurs who recognized the unique challenges faced by women in business. The platform was born from a simple observation: despite their potential, women entrepreneurs often lack access to the financial resources, knowledge, and networks needed to scale their businesses.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The name "NariNiti" combines "Nari" (woman) and "Niti" (policy/strategy), reflecting our commitment to empowering women through strategic financial and business solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, NariNiti has empowered over 500 women entrepreneurs across India, helping them secure funding, improve financial literacy, and build thriving businesses.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-accent/10 rounded-tl-[100px] rounded-br-[100px] h-full w-full absolute -top-6 -right-6 z-0"></div>
              <div className="glass-card rounded-lg overflow-hidden relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="The NariNiti team working" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-2">
              Our Purpose
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mission and Values</h2>
            <p className="text-gray-600 text-lg">
              Our mission and values guide everything we do at NariNiti, from platform development to community building.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card rounded-xl p-8">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To empower women entrepreneurs through innovative technology and personalized support, creating a path to financial independence and business success.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-primary mt-1"><ChevronRight size={16} /></span>
                  <span className="text-gray-600">Democratize access to financial resources</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary mt-1"><ChevronRight size={16} /></span>
                  <span className="text-gray-600">Provide personalized financial education</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary mt-1"><ChevronRight size={16} /></span>
                  <span className="text-gray-600">Connect entrepreneurs with mentors and markets</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary mt-1"><ChevronRight size={16} /></span>
                  <span className="text-gray-600">Build a supportive community of women entrepreneurs</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card rounded-xl p-8">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <Gem size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-gray-600 mb-6">
                Our core values shape our platform, guide our decisions, and reflect our commitment to women entrepreneurs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-bold text-gray-800">Inclusivity</h4>
                  <p className="text-gray-600 text-sm">Serving entrepreneurs from all backgrounds and regions.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-gray-800">Innovation</h4>
                  <p className="text-gray-600 text-sm">Using technology to solve complex financial challenges.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-gray-800">Integrity</h4>
                  <p className="text-gray-600 text-sm">Maintaining the highest ethical standards in all interactions.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-gray-800">Empowerment</h4>
                  <p className="text-gray-600 text-sm">Building capacity and confidence through education and support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-2">
              Our People
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Leadership Team</h2>
            <p className="text-gray-600 text-lg">
              Meet the diverse team of experts and entrepreneurs behind NariNiti.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member Card 1 */}
            <div className="glass-card rounded-xl overflow-hidden hover:shadow-lg transition-all-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                  alt="Founder & CEO" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Anjali Sharma</h3>
                  <p className="text-white/80">Founder & CEO</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Former fintech executive with 15+ years of experience. Passionate about financial inclusion and women's empowerment.
                </p>
              </div>
            </div>
            
            {/* Team Member Card 2 */}
            <div className="glass-card rounded-xl overflow-hidden hover:shadow-lg transition-all-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                  alt="CTO" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Vikram Desai</h3>
                  <p className="text-white/80">Chief Technology Officer</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  AI expert and former tech lead at a leading global bank. Specializes in fintech solutions and credit algorithms.
                </p>
              </div>
            </div>
            
            {/* Team Member Card 3 */}
            <div className="glass-card rounded-xl overflow-hidden hover:shadow-lg transition-all-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                  alt="Chief Mentorship Officer" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Priya Malhotra</h3>
                  <p className="text-white/80">Chief Mentorship Officer</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Serial entrepreneur with experience scaling multiple women-led businesses. Passionate about mentorship and knowledge sharing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the NariNiti Community</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Be part of a growing network of women entrepreneurs who are transforming their businesses and communities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/features" className="btn-accent">
              Explore Our Features
            </Link>
            <Link to="/contact" className="border-2 border-white/30 px-6 py-3 rounded-full text-white font-semibold hover:bg-white/10 transition-all-300 flex items-center justify-center space-x-2">
              <span>Contact Us</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
