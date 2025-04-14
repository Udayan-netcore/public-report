
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, XCircle, Phone, AlertCircle } from 'lucide-react';

const CodeOfConduct = () => {
  return (
    <section id="conduct" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Code of Conduct</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8">
          We kindly request everyone to review and adhere to this document to ensure a positive and respectful environment for all.
        </p>

        <Card className="max-w-4xl mx-auto bg-white rounded-lg shadow-md mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">Purpose</h3>
            <p className="text-gray-700 mb-6">
              Ensure a safe, respectful, and professional experience for all Netcorians traveling to Goa.
            </p>
            
            <h3 className="text-xl font-semibold mb-2">Event Details</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-6">
              <li>Dates: 15th - 17th April 2025</li>
              <li>Accommodation: Novotel Panjim, Goa</li>
              <li>Travel: All travel tickets have been issued and shared.</li>
              <li>Note: Netcore will not be responsible for any misconduct or incidents occurring after the official conclusion of the Tech Offsite on 16th April 2025.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-2">Tech Offsite Committee</h3>
            <p className="text-gray-700 mb-2">For any support during the event, please contact:</p>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-goa-sea mr-2" />
                <span>Zulfidar: 9702026445</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-goa-sea mr-2" />
                <span>Akanksha: 9167697616</span>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-2">Important Checklists</h3>
            <p className="text-gray-700 mb-2">Before you go, make sure to:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-6">
              <li>Carry your Aadhaar Card and Netcore employee ID.</li>
              <li>Dress appropriately for the hot weather (light clothing).</li>
              <li>Have a soft or hard copy of your travel tickets.</li>
              <li>Keep an emergency contact list for personal and Netcore representatives.</li>
              <li>Note that transportation will be managed by the Netcore Tech Offsite Committee.</li>
            </ul>
          </CardContent>
        </Card>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Guidelines for Attendees</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-white shadow-md h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-goa-palm mr-2" />
                  <h4 className="text-xl font-semibold">Things to Do</h4>
                </div>
                <ScrollArea className="h-[400px] md:h-[450px] pr-4">
                  <ul className="space-y-4">
                    <li>
                      <p className="font-medium">Represent Netcore positively</p>
                      <p className="text-gray-600 text-sm">Be a proud ambassador of our brand—your actions reflect all of us.</p>
                    </li>
                    <li>
                      <p className="font-medium">Dress appropriately (business/smart casual)</p>
                      <p className="text-gray-600 text-sm">Look sharp, feel sharp—smart casual is the way to go.</p>
                    </li>
                    <li>
                      <p className="font-medium">Be polite and respectful</p>
                      <p className="text-gray-600 text-sm">Treat colleagues, partners, and locals with kindness and respect.</p>
                    </li>
                    <li>
                      <p className="font-medium">Be punctual</p>
                      <p className="text-gray-600 text-sm">Time matters—arrive on time and always wear your ID with pride.</p>
                    </li>
                    <li>
                      <p className="font-medium">Attend all planned sessions</p>
                      <p className="text-gray-600 text-sm">Every session counts—be present, engaged, and curious.</p>
                    </li>
                    <li>
                      <p className="font-medium">Carry a hotel card or Google Maps pin</p>
                      <p className="text-gray-600 text-sm">In case of language barriers with drivers, showing the hotel info helps.</p>
                    </li>
                    <li>
                      <p className="font-medium">Drink responsibly in designated venues</p>
                      <p className="text-gray-600 text-sm">If you choose to drink, do so responsibly and only where permitted.</p>
                    </li>
                    <li>
                      <p className="font-medium">Treat hotel property with care</p>
                      <p className="text-gray-600 text-sm">Respect your space—handle hotel property like it's your own.</p>
                    </li>
                    <li>
                      <p className="font-medium">Stay hydrated and use sunscreen</p>
                      <p className="text-gray-600 text-sm">Goa can be humid and hot—stay cool and comfortable.</p>
                    </li>
                  </ul>
                </ScrollArea>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <XCircle className="h-6 w-6 text-red-500 mr-2" />
                  <h4 className="text-xl font-semibold">Things to Avoid</h4>
                </div>
                <ScrollArea className="h-[400px] md:h-[450px] pr-4">
                  <ul className="space-y-4">
                    <li>
                      <p className="font-medium">Avoid offensive or discriminatory behavior</p>
                      <p className="text-gray-600 text-sm">Inclusion is our core—keep your words and actions considerate.</p>
                    </li>
                    <li>
                      <p className="font-medium">Misconduct due to intoxication won't be tolerated</p>
                      <p className="text-gray-600 text-sm">Stay in control—intoxication is never an excuse for poor behavior.</p>
                    </li>
                    <li>
                      <p className="font-medium">Any damages are the individual's responsibility</p>
                      <p className="text-gray-600 text-sm">You break it, you fix it—personal accountability applies.</p>
                    </li>
                    <li>
                      <p className="font-medium">Avoid excessive noise in your hotel</p>
                      <p className="text-gray-600 text-sm">Keep it down—let's be good neighbors to fellow guests.</p>
                    </li>
                    <li>
                      <p className="font-medium">Don't litter or smoke in restricted areas</p>
                      <p className="text-gray-600 text-sm">Fines can be steep. Look for designated areas.</p>
                    </li>
                    <li>
                      <p className="font-medium">Avoid negative social posts</p>
                      <p className="text-gray-600 text-sm">Keep it positive—your posts reflect on all of us.</p>
                    </li>
                    <li>
                      <p className="font-medium">Don't share confidential info with strangers</p>
                      <p className="text-gray-600 text-sm">Keep it tight—confidential info stays within trusted circles.</p>
                    </li>
                    <li>
                      <p className="font-medium">Don't raise your voice or lose temper in public</p>
                      <p className="text-gray-600 text-sm">Using face is frowned upon—calm communication is preferred.</p>
                    </li>
                    <li>
                      <p className="font-medium">Use event hashtags responsibly</p>
                      <p className="text-gray-600 text-sm">Post smart—represent the brand well with every hashtag.</p>
                    </li>
                  </ul>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <AlertCircle className="h-6 w-6 text-goa-sunset mr-2" />
                  <h4 className="text-xl font-semibold">Disciplinary Action</h4>
                </div>
                <p className="text-gray-700">
                  Netcore Management reserves the right to take disciplinary action for any misconduct during the Tech Offsite. The first action will be removal from the event.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <AlertCircle className="h-6 w-6 text-goa-sea mr-2" />
                  <h4 className="text-xl font-semibold">Acknowledgment</h4>
                </div>
                <p className="text-gray-700">
                  All attendees must sign a digital acknowledgment confirming their understanding and agreement to follow these guidelines. The digital version will be sent via email.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-10 p-6 bg-goa-sand/30 rounded-lg text-center">
            <h3 className="text-xl font-bold text-goa-night mb-2">Key Message</h3>
            <p className="text-gray-700 text-lg">
              Stay safe, enjoy the Netcore sessions and team bonding activities, and have fun!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeOfConduct;
