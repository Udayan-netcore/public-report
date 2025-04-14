
import React from 'react';
import { Hotel, Wifi, UtensilsCrossed } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AccommodationInfo = () => {
  return (
    <section id="accommodation" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Accommodation</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Your stay has been arranged at the Novotel Panjim, Goa, on a dual occupancy basis.
          You will receive your specific room accommodation details upon arrival at the hotel.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-goa-sea/10 text-goa-sea mb-4 mx-auto">
                <Hotel className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Novotel Panjim</h3>
              <p className="text-gray-600 text-center">
                Modern accommodations with all amenities for a comfortable stay
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-goa-sea/10 text-goa-sea mb-4 mx-auto">
                <Wifi className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Amenities</h3>
              <p className="text-gray-600 text-center">
                Free Wi-Fi, swimming pool, fitness center, and 24/7 room service
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-goa-sea/10 text-goa-sea mb-4 mx-auto">
                <UtensilsCrossed className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Dining</h3>
              <p className="text-gray-600 text-center">
                Multiple dining options with local and international cuisine
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-3">Location</h3>
          <div className="aspect-video rounded-md overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.0223310489054!2d73.8326!3d15.4909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc09f1d652a91%3A0x7e452576a876a85f!2sNovotel%20Goa%20Dona%20Sylvia%20Resort!5e0!3m2!1sen!2sin!4v1648544247852!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              title="Hotel Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationInfo;
