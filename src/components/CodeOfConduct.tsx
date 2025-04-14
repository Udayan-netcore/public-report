
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

const CodeOfConduct = () => {
  return (
    <section id="conduct" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-6">Code of Conduct</h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          We kindly request everyone to review and adhere to this document to ensure a positive and respectful environment for all.
        </p>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
            <p className="text-gray-700 mb-6">
              We are committed to creating an inclusive, respectful, and harassment-free offsite experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices.
            </p>
            
            <Separator className="my-6" />
            
            <ScrollArea className="h-64 rounded-md border p-4">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Expected Behavior</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Be respectful and inclusive of others</li>
                    <li>Exercise consideration in your speech and actions</li>
                    <li>Refrain from demeaning, discriminatory, or harassing behavior</li>
                    <li>Be mindful of your surroundings and your fellow participants</li>
                    <li>Alert event organizers if you notice any dangerous situations or someone in distress</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">Unacceptable Behavior</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Intimidating, harassing, abusive, discriminatory, derogatory, or demeaning conduct</li>
                    <li>Inappropriate use of nudity and/or sexual imagery</li>
                    <li>Threats or acts of violence</li>
                    <li>Excessive or disruptive alcohol consumption</li>
                    <li>Possession of illegal substances</li>
                    <li>Any other conduct which could reasonably be considered inappropriate in a professional setting</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">Consequences</h4>
                  <p className="text-gray-700">
                    Participants who are asked to stop any inappropriate behavior are expected to comply immediately. If a participant engages in behavior that violates this Code of Conduct, the event organizers may take any action they deem appropriate, from a warning to expulsion from the offsite without refund and, if appropriate, referral to local law enforcement.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">Reporting Guidelines</h4>
                  <p className="text-gray-700">
                    If you are subject to or witness unacceptable behavior, or have any other concerns, please notify an event organizer as soon as possible. All reports will be handled with discretion.
                  </p>
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeOfConduct;
