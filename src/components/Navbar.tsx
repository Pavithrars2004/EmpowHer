
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, User, LogOut, BarChart3 } from "lucide-react";
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="font-montserrat font-extrabold text-2xl">
              <span className="text-primary">Nari</span>
              <span className="text-accent">Niti</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-montserrat font-medium transition-all-300 hover:text-primary ${isActive(link.path) ? 'text-primary' : 'text-gray-700'}`}
              >
                {link.name}
              </Link>
            ))}
            
            {user && (
              <>
                <Link 
                  to="/dashboard"
                  className={`font-montserrat font-medium transition-all-300 hover:text-primary ${isActive('/dashboard') ? 'text-primary' : 'text-gray-700'}`}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/analytics"
                  className={`font-montserrat font-medium transition-all-300 hover:text-primary ${isActive('/analytics') ? 'text-primary' : 'text-gray-700'}`}
                >
                  Analytics
                </Link>
              </>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="font-montserrat flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    My Account
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => navigate('/dashboard')}>
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/analytics')}>
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Analytics
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/profile')}>
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="text-red-600">
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="ghost" className="font-montserrat" onClick={() => navigate('/auth')}>
                  Login
                </Button>
                <Button className="bg-accent hover:bg-accent-dark text-white font-montserrat" onClick={() => navigate('/auth?tab=signup')}>
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              className="text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'}`}>
        <div className="container-custom bg-white shadow-xl rounded-b-xl px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block py-3 font-montserrat font-medium ${isActive(link.path) ? 'text-primary' : 'text-gray-700'}`}
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
          
          {user && (
            <>
              <Link
                to="/dashboard"
                className={`block py-3 font-montserrat font-medium ${isActive('/dashboard') ? 'text-primary' : 'text-gray-700'}`}
                onClick={closeMenu}
              >
                Dashboard
              </Link>
              <Link
                to="/analytics"
                className={`block py-3 font-montserrat font-medium ${isActive('/analytics') ? 'text-primary' : 'text-gray-700'}`}
                onClick={closeMenu}
              >
                Analytics
              </Link>
            </>
          )}
          
          <div className="pt-4 space-y-3">
            {user ? (
              <>
                <Button 
                  variant="outline" 
                  className="w-full justify-start font-montserrat"
                  onClick={() => {
                    navigate('/profile');
                    closeMenu();
                  }}
                >
                  <User className="h-4 w-4 mr-2" />
                  My Profile
                </Button>
                <Button 
                  variant="destructive" 
                  className="w-full justify-start font-montserrat"
                  onClick={() => {
                    handleSignOut();
                    closeMenu();
                  }}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start font-montserrat"
                  onClick={() => {
                    navigate('/auth');
                    closeMenu();
                  }}
                >
                  Login
                </Button>
                <Button 
                  className="w-full bg-accent hover:bg-accent-dark text-white justify-start font-montserrat"
                  onClick={() => {
                    navigate('/auth?tab=signup');
                    closeMenu();
                  }}
                >
                  Get Started
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
