
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Brain, FilePlus, Dice6, Lightbulb, Mic, Check, PartyPopper } from 'lucide-react';
import { cn } from "@/lib/utils";

const FunTechSection = () => {
  return (
    <section id="funtech" className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Brain className="h-8 w-8 text-[#9b87f5] mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#7E69AB]">🧠 Funtech Goa: Where AI Meets Play!</h2>
          </div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Welcome to Funtech Goa — a high-energy blend of innovation, imagination, and interaction! 
            Whether you're an AI enthusiast, a curious learner, or just here for a good time, 
            this event is packed with activities that bring artificial intelligence to life through games, 
            creativity, and team challenges.
          </p>
          <p className="text-xl font-semibold mt-4 text-[#8B5CF6]">Let the games begin!</p>
        </div>

        {/* Activity 1: AI Meme War */}
        <Card className={cn("mb-10 overflow-hidden border-l-4", "border-l-[#9b87f5]")}>
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Dice6 className="h-7 w-7 text-[#9b87f5]" />
              <h3 className="text-2xl font-bold text-[#7E69AB]">🎭 1. AI Meme War</h3>
            </div>
            <p className="text-gray-700 mb-4 italic">If memes are your love language, this one's for you!</p>
            <p className="text-gray-700 mb-6">
              Get ready for a hilarious showdown where each team has 10 minutes to craft a witty, 
              AI-themed meme. When the clock stops, all memes hit the big screen for a live audience vote. 
              Who will reign supreme?
            </p>

            <div className="bg-purple-100 p-4 rounded-lg flex items-center gap-3 mb-6">
              <FilePlus className="h-5 w-5 text-[#8B5CF6]" />
              <div>
                <span className="font-semibold">📁 Upload Link: </span>
                <a href="#" className="text-[#8B5CF6] font-bold underline">[Insert Google Drive Link Here]</a>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold mb-3 text-[#7E69AB]">🧩 Rules of Engagement:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Create 1 meme per team, all about AI.</li>
                <li>Must be original and whipped up within the 10-minute limit.</li>
                <li>Use any tools or sources you've got handy.</li>
                <li>Upload your masterpiece to the Google Drive folder before time's up.</li>
                <li>Memes go up anonymously—everyone votes for their fave (no self-voting!).</li>
                <li>Most votes crown you the Meme Masters of Funtech!</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Activity 2: AI Innovation Pitch */}
        <Card className={cn("mb-10 overflow-hidden border-l-4", "border-l-[#F97316]")}>
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="h-7 w-7 text-[#F97316]" />
              <h3 className="text-2xl font-bold text-[#7E69AB]">🧪 2. AI Innovation Pitch: "Netcore Departments Reimagined"</h3>
            </div>
            <p className="text-gray-700 mb-4 italic">Reimagine corporate life with a dash of AI magic!</p>
            <p className="text-gray-700 mb-6">
              Teams draw a department or partner function from a bowl, brainstorm for 60 seconds, 
              and pitch an AI solution that's fun, feasible, and futuristic—all in just 1 minute.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-3 text-[#F97316]">🏢 Departments You Might Draw:</h4>
                <p className="text-gray-700 mb-3">Think big! Your idea could transform:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>HR: AI-driven onboarding</li>
                  <li>Sales: Predictive analytics</li>
                  <li>Operations: Autonomous inventory magic</li>
                  <li>Marketing: Smart content generation</li>
                  <li>Legal: Compliance automation</li>
                  <li>And so much more…</li>
                </ul>
                <p className="text-gray-600 italic mt-3 text-sm">(Full list of 25+ business functions provided for variety and excitement!)</p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-3 text-[#F97316]">🎤 How It Works:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Draw a chit with a department or entity.</li>
                  <li>Brainstorm for 60 seconds.</li>
                  <li>Pitch your idea in 1 minute.</li>
                  <li>Teams vote for the most innovative or practical pitch.</li>
                  <li>May the boldest bots win!</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activity 3: AI Dumb Charades */}
        <Card className={cn("mb-10 overflow-hidden border-l-4", "border-l-[#33C3F0]")}>
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Mic className="h-7 w-7 text-[#33C3F0]" />
              <h3 className="text-2xl font-bold text-[#7E69AB]">🎬 3. AI Dumb Charades</h3>
            </div>
            <p className="text-gray-700 mb-4 italic">Classic dumb charades, but with an AI twist!</p>
            <p className="text-gray-700 mb-6">
              Act out tricky AI concepts without a word while your team races to guess. Laughter guaranteed.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-3 text-[#33C3F0]">🧠 Example Terms:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Turing Test</li>
                  <li>Neural Network</li>
                  <li>Chatbot</li>
                  <li>Facial Recognition</li>
                  <li>Generative Adversarial Network (GAN)</li>
                  <li>Smart Home</li>
                  <li>Bias in AI</li>
                </ul>
                <p className="text-gray-600 italic mt-3 text-sm">(Full list of 25 AI terms handed out during the game.)</p>
              </div>

              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-3 text-[#33C3F0]">🎲 Gameplay Mechanics:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>One teammate picks a chit and acts out the AI term.</li>
                  <li>No talking, writing, or spelling—pure performance!</li>
                  <li>Team gets 60 seconds to guess.</li>
                  <li>Correct guess = 1 point.</li>
                  <li>Rounds keep rolling—highest score wins!</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Event Vibes & Ground Rules */}
        <Card className="mb-10 overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Check className="h-7 w-7 text-green-500" />
              <h3 className="text-2xl font-bold text-[#7E69AB]">✅ Event Vibes & Ground Rules</h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Bring your A-game, wild ideas, and team spirit.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Keep it respectful—creativity beats criticism every time!</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Have fun and maybe learn a thing or two.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5" />
                <span>Devices, props, and tools are fair game (but no pre-made AI memes, cheaters 😉).</span>
              </li>
            </ul>
            <p className="font-medium text-center text-lg">Above all—enjoy the ride!</p>
          </CardContent>
        </Card>

        {/* Final Callout */}
        <div className="bg-gradient-to-r from-[#9b87f5]/20 to-[#F97316]/20 p-8 rounded-lg text-center">
          <div className="flex items-center justify-center mb-4">
            <PartyPopper className="h-8 w-8 text-[#F97316] mr-3" />
            <h3 className="text-2xl font-bold text-[#7E69AB]">🎉 Let's Make AI Fun Again!</h3>
          </div>
          <p className="text-gray-700 max-w-3xl mx-auto mb-4">
            Whether you're memeing, pitching, or miming, Funtech Goa is your playground for creative tech expression. 
            Let loose, laugh a lot, and leave with some AI inspiration.
          </p>
          <p className="text-lg font-medium text-[#8B5CF6]">
            This is your chance to invent, entertain, and ideate with AI—see you there!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FunTechSection;
