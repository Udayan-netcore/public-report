
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1A1F2C] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/8b8ec370-dfba-4a99-8606-314ae1ba724f.png" 
                alt="Netcore Logo" 
                className="h-8 w-auto"
              />
              <h3 className="text-xl font-semibold">Goa Offsite Hub</h3>
            </div>
            <p className="text-gray-300">
              Your central resource for all information related to our tech team's 2025 offsite event in Goa.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#schedule" className="text-gray-300 hover:text-white transition-colors">
                  Event Schedule
                </a>
              </li>
              <li>
                <a href="#accommodation" className="text-gray-300 hover:text-white transition-colors">
                  Accommodation
                </a>
              </li>
              <li>
                <a href="#transport" className="text-gray-300 hover:text-white transition-colors">
                  Transportation
                </a>
              </li>
              <li>
                <a href="#conduct" className="text-gray-300 hover:text-white transition-colors">
                  Code of Conduct
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">
              For any queries or assistance related to the offsite, please contact the event organizers.
            </p>
            <p className="text-gray-300 mt-2">
              Email: offsite-support@company.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Netcore Tech Team. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
