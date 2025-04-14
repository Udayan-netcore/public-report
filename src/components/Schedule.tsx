
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

interface EventProps {
  time: string;
  title: string;
  description?: string;
}

const Event = ({ time, title, description }: EventProps) => (
  <div className="flex py-4 gap-4 animate-fade-in border-b border-gray-100 last:border-b-0">
    <div className="w-24 flex-shrink-0 text-goa-sea font-medium">{time}</div>
    <div>
      <h3 className="text-lg font-medium">{title}</h3>
      {description && <p className="text-gray-600 mt-1">{description}</p>}
    </div>
  </div>
);

const Schedule = () => {
  const [activeTab, setActiveTab] = useState("day1");
  
  return (
    <section id="schedule" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Event Schedule</h2>
        
        <Tabs defaultValue="day1" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="day1" className="text-base py-3">Day 1 (April 15)</TabsTrigger>
            <TabsTrigger value="day2" className="text-base py-3">Day 2 (April 16)</TabsTrigger>
          </TabsList>
          
          <TabsContent value="day1" className="bg-white rounded-lg p-6 shadow-sm border">
            <Event time="1:00 PM" title="Lunch" />
            <Event time="2:00 PM" title="Check-in / Freshen Up / Short Nap" description="Get settled in your rooms and take some time to rest" />
            <Event time="4:00 PM" title="Address by Kalpit" description="Welcome address and introduction to the offsite" />
            <Event time="5:00 PM" title="Unbxd - Product Experience Showcase & Team Appreciation" />
            <Event time="6:00 PM" title="Netcore - Product Experience Showcase & Team Appreciation" />
            <Event time="7:00 PM" title="N-1 Presentations / Talks" description="Inspiring Stories from team members" />
            <Event time="8:00 PM" title="Awards Ceremony" description="Recognition for outstanding contributions" />
            <Event time="9:00 PM" title="Gala Dinner" description="Networking and celebration with the team" />
          </TabsContent>
          
          <TabsContent value="day2" className="bg-white rounded-lg p-6 shadow-sm border">
            <Event time="9:30 AM" title="FunTech Activity" description="Interactive team-building exercise" />
            <Event time="Short Break" title="Coffee and refreshments" />
            <Event time="11:00 AM" title="Fire Side Chat + AMA" description="Ask Me Anything session with leadership" />
            <Event time="12:00 PM" title="Lunch" />
            <Event time="2:00 PM" title="GCP Session" description="Google Cloud Platform workshop" />
            <Event time="4:00 PM" title="Group Engagement Activity + Group Photo" description="Team activities and official offsite photograph" />
            <Event time="6:00 PM" title="Free Time" description="Explore Goa at your leisure" />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Schedule;
