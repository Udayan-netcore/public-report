
import React from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Schedule from '@/components/Schedule';
import AccommodationInfo from '@/components/AccommodationInfo';
import TransportInfo from '@/components/TransportInfo';
import CodeOfConduct from '@/components/CodeOfConduct';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Schedule />
        <AccommodationInfo />
        <TransportInfo />
        <CodeOfConduct />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
