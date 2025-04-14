
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-goa-sea font-bold text-xl">Goa Offsite Hub</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#schedule" className="text-gray-700 hover:text-goa-sea hover:underline underline-offset-4 font-medium transition-colors">
              Schedule
            </a>
            <a href="#accommodation" className="text-gray-700 hover:text-goa-sea hover:underline underline-offset-4 font-medium transition-colors">
              Accommodation
            </a>
            <a href="#transport" className="text-gray-700 hover:text-goa-sea hover:underline underline-offset-4 font-medium transition-colors">
              Transport
            </a>
            <a href="#conduct" className="text-gray-700 hover:text-goa-sea hover:underline underline-offset-4 font-medium transition-colors">
              Code of Conduct
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-goa-sea"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden bg-white shadow-lg absolute w-full transform transition-transform duration-300 ease-in-out",
        isMenuOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          <a 
            href="#schedule" 
            className="block py-2 px-4 text-gray-700 hover:bg-goa-sand hover:text-goa-sea rounded-md"
            onClick={toggleMenu}
          >
            Schedule
          </a>
          <a 
            href="#accommodation" 
            className="block py-2 px-4 text-gray-700 hover:bg-goa-sand hover:text-goa-sea rounded-md"
            onClick={toggleMenu}
          >
            Accommodation
          </a>
          <a 
            href="#transport" 
            className="block py-2 px-4 text-gray-700 hover:bg-goa-sand hover:text-goa-sea rounded-md"
            onClick={toggleMenu}
          >
            Transport
          </a>
          <a 
            href="#conduct" 
            className="block py-2 px-4 text-gray-700 hover:bg-goa-sand hover:text-goa-sea rounded-md"
            onClick={toggleMenu}
          >
            Code of Conduct
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
