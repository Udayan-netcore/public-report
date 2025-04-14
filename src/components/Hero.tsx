
import React from 'react';
import { CalendarIcon, MapPinIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSchedule = () => {
    const scheduleSection = document.getElementById('schedule');
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#F97316] to-[#F97316]/90">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000')] bg-cover bg-center" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center md:text-left md:max-w-2xl animate-fade-in" style={{ animationDelay: '200ms' }}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Tech Team Offsite</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-6">Goa 2025</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-3 md:space-y-0 md:space-x-6 mb-8">
            <div className="flex items-center text-white/90">
              <CalendarIcon className="w-5 h-5 mr-2" />
              <span>April 15-17, 2025</span>
            </div>
            <div className="flex items-center text-white/90">
              <MapPinIcon className="w-5 h-5 mr-2" />
              <span>Novotel Panjim, Goa</span>
            </div>
          </div>
          
          <p className="text-lg text-white/80 mb-8 max-w-lg mx-auto md:mx-0">
            Join us for three days of learning, collaboration, and fun at our annual tech team offsite in beautiful Goa!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
            <Button 
              onClick={scrollToSchedule}
              className="bg-white text-[#F97316] hover:bg-white/90"
            >
              View Schedule
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
