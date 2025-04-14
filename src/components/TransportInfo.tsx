
import React from 'react';
import { Plane, Bus, Map } from 'lucide-react';

const TransportInfo = () => {
  return (
    <section id="transport" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Transportation</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Bus transportation will be available from the airport to the hotel for everyone.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-goa-sand/30 rounded-lg p-6 flex">
            <div className="flex items-start justify-center mr-4">
              <div className="h-12 w-12 rounded-full bg-goa-sea/10 text-goa-sea flex items-center justify-center">
                <Plane className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Airport Information</h3>
              <p className="text-gray-700 mb-3">
                The nearest airport is Goa International Airport (GOI), also known as Dabolim Airport.
              </p>
              <p className="text-gray-700">
                It's approximately 30 km from Novotel Panjim and takes about 45-60 minutes by road.
              </p>
            </div>
          </div>

          <div className="bg-goa-sand/30 rounded-lg p-6 flex">
            <div className="flex items-start justify-center mr-4">
              <div className="h-12 w-12 rounded-full bg-goa-sea/10 text-goa-sea flex items-center justify-center">
                <Bus className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Bus Transportation</h3>
              <p className="text-gray-700 mb-3">
                Buses will be available at the airport to transport you to the hotel.
              </p>
              <p className="text-gray-700">
                Look for the company banner or representative at the airport arrival area.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <div className="flex items-center mb-4">
              <Map className="h-5 w-5 text-goa-sea mr-2" />
              <h3 className="text-xl font-semibold">Getting Around</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-goa-sea mr-2">•</span>
                <span>Local taxis and ride-sharing services are readily available in Goa.</span>
              </li>
              <li className="flex items-start">
                <span className="text-goa-sea mr-2">•</span>
                <span>Renting scooters is a popular way to explore Goa (international driver's license recommended).</span>
              </li>
              <li className="flex items-start">
                <span className="text-goa-sea mr-2">•</span>
                <span>The hotel can assist with arranging transportation for your local sightseeing needs.</span>
              </li>
              <li className="flex items-start">
                <span className="text-goa-sea mr-2">•</span>
                <span>For Day 2 evening exploration, you are free to make your own transportation arrangements.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransportInfo;
