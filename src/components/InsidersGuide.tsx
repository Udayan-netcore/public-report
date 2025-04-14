
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Utensils, Wine, Umbrella, Coffee, Car, Globe } from 'lucide-react';

const InsidersGuide = () => {
  return (
    <section id="insiders-guide" className="py-16 bg-netcore-dark/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-netcore-dark mb-3">Insider's Guide to Goa</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recommendations from our resident Goa expert, Anand, who is embarking on his 8th trip to this paradise!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          <Card>
            <CardHeader className="bg-netcore-orange/10 rounded-t-lg">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold text-netcore-orange">Foodie Heaven</CardTitle>
                <Utensils className="h-6 w-6 text-netcore-orange" />
              </div>
              <CardDescription>Non-Veg Delights and More</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-semibold">Mustard:</span> Bengali-French fusion with amazing cheesecake</li>
                <li><span className="font-semibold">Kefi:</span> Lebanese cafe with great mezze and grilled meats</li>
                <li><span className="font-semibold">La Plage, Morjim:</span> French cuisine with exquisite seafood</li>
                <li><span className="font-semibold">Matcha, Morjim:</span> Best sushi in Goa</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="bg-netcore-orange/10 rounded-t-lg">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold text-netcore-orange">Drinks & Vibes</CardTitle>
                <Wine className="h-6 w-6 text-netcore-orange" />
              </div>
              <CardDescription>Best Spots for Good Times</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-semibold">Titlie, Vagator:</span> Fancy bar with sunset views and live music</li>
                <li><span className="font-semibold">Mojigao, Assagao:</span> Spacious venue with events</li>
                <li><span className="font-semibold">Romeo Lane, Vagator:</span> Top spot for partying</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="bg-netcore-orange/10 rounded-t-lg">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold text-netcore-orange">Beach Guide</CardTitle>
                <Umbrella className="h-6 w-6 text-netcore-orange" />
              </div>
              <CardDescription>Less Touristy, More Authentic</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-semibold">Morjim:</span> Clean, good restaurants, less crowded</li>
                <li><span className="font-semibold">Betalbatim:</span> Nice South Goa option</li>
                <li><span className="font-semibold">Aarambol:</span> For hippie vibes and grilled fish</li>
                <li><span className="font-semibold">Avoid:</span> Calangute-Baga-Anjuna (too touristy)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="bg-netcore-orange/10 rounded-t-lg">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold text-netcore-orange">Work & Play</CardTitle>
                <Coffee className="h-6 w-6 text-netcore-orange" />
              </div>
              <CardDescription>Co-working and Activities</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-semibold">Barefoot, Parra:</span> Chill co-working with good Wi-Fi</li>
                <li><span className="font-semibold">Bird & Dolphin Watching:</span> Tours at Chapora</li>
                <li><span className="font-semibold">Board Game Events:</span> Fun social activities around Goa</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="bg-netcore-orange/10 rounded-t-lg">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold text-netcore-orange">Transport Tips</CardTitle>
                <Car className="h-6 w-6 text-netcore-orange" />
              </div>
              <CardDescription>Getting Around</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="list-disc pl-5 space-y-2">
                <li>Download the Goa Miles app for airport transfers</li>
                <li>No cab aggregators in Goa, so plan ahead</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="bg-netcore-orange/10 rounded-t-lg">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-semibold text-netcore-orange">Extended Stay</CardTitle>
                <Globe className="h-6 w-6 text-netcore-orange" />
              </div>
              <CardDescription>For Longer Trips</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <ul className="list-disc pl-5 space-y-2">
                <li>Explore quieter areas like Assagao or Siolim</li>
                <li>Take day trips to Old Goa or Panaji</li>
                <li>Try food-hopping in Assagao</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="italic text-gray-600 mb-6">
            "Hope this helps you all enjoy Goa to the fullest! Whether you're here early or staying late, 
            these spots will keep you fed, entertained, and happy." - Anand
          </p>
          <Link to="/insider-guide" id="insider-guide-link">
            <Button className="bg-netcore-orange hover:bg-netcore-orange/90">
              View Full Guide
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InsidersGuide;
