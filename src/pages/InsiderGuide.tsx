
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const InsiderGuide = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="bg-gradient-to-br from-netcore-orange to-netcore-orange/90 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Insider's Guide to Goa</h1>
            <p className="text-xl text-white/90">By Anand, 8-time Goa Explorer</p>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-lg">
          <div className="mb-8">
            <Link to="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Offsite Hub
              </Button>
            </Link>
          </div>

          <p className="lead">
            I've been to Goa 7 times, and with this trip, it'll hit 8—yes, I'm basically a walking Goa encyclopedia at this point! 
            Since some of you are arriving early and planning to extend your stay past the 17th, I wanted to share my favorite spots 
            to make your time here unforgettable. As a fellow non-veg enthusiast, I've made sure to highlight places with great options 
            for us meat lovers. Let's dive into the food, drinks, beaches, and more, all tailored for a longer, relaxed Goa experience.
          </p>

          <h2>Foodie Heaven: Non-Veg Delights and More</h2>
          <p>
            Goa's food scene is a treasure trove, and these spots are perfect for non-veg lovers looking for something special:
          </p>
          <ul>
            <li>
              <strong>Mustard:</strong> This place is a fusion of Bengali and French cuisine, and it's pure magic. 
              Their cheesecake is to die for—I remember the first time I tried it, it was love at first bite. 
              The cocktail aloo luchi is another highlight, and they sometimes have live music on weekends, 
              adding to the vibe. Non-veg options include Bengali fish curries and French-inspired meat dishes, 
              so you're covered.
            </li>
            <li>
              <strong>Kefi:</strong> A chill Lebanese cafe with a warm atmosphere—the owner often hangs around and is super friendly. 
              During tourist season, they might be open 24x7, perfect for late-night cravings. My go-to orders are their orange juice 
              and adrak tea (yes, together—I'm not proud, but it works!). They have great non-veg mezze and grilled meats.
            </li>
            <li>
              <strong>Cream Choc:</strong> For ice-cream lovers, their gelatos are amaaaazing. It's a must for beating the heat, 
              and while it's more dessert-focused, it's a great pit stop after a non-veg meal.
            </li>
            <li>
              <strong>La Plage, Morjim:</strong> Hands down, my favorite dining spot in Goa. Run by a French couple, 
              everything on the menu is perfect, especially the desserts. Non-veg options include exquisite French dishes 
              like duck confit and seafood. Just call ahead because they're often closed, as they travel back to France frequently.
            </li>
            <li>
              <strong>Matcha, Morjim:</strong> Tiny but mighty, this is my favorite sushi place in Goa. Seating is limited to about 8, 
              but during peak season, they open up more space. Non-veg sushi options are fantastic, and it's worth the visit if you're a seafood lover.
            </li>
            <li>
              <strong>The Place, Morjim:</strong> They serve wood-fired pizza and sushi, which is pretty good, especially for non-veg pizza toppings. 
              It's not worth a special trip, but if you're in the area, check it out. There's also a Tibetan restaurant opposite with solid non-veg momos and curries.
            </li>
            <li>
              <strong>Saraya, Sangolda:</strong> A nice place for pizza, with a mud structure that gives it a unique vibe. 
              Non-veg options include meat-loaded pizzas, and the overall atmosphere is great for a relaxed meal.
            </li>
          </ul>

          <h2>Drinks, Vibes, and Party Spots</h2>
          <p>
            For drinks and a good time, these places are ideal, especially if you're staying longer and want to explore:
          </p>
          <ul>
            <li>
              <strong>Titlie, Vagator:</strong> A fancy bar with jaw-dropping sunset views. Try to get a seat facing the sea 
              for the best experience, and enjoy live music post 8pm. Non-veg snacks like grilled chicken or seafood platters 
              are perfect to pair with your drinks.
            </li>
            <li>
              <strong>Mojigao, Assagao:</strong> A beautiful, spacious hotel and restaurant where you can easily spend the day 
              working or chilling. They host cool events like concerts under the moonlight. Non-veg options include hearty meat dishes, 
              and the entire Assagao stretch has tons of restaurants for food-hopping, many with non-veg menus.
            </li>
            <li>
              For partying, <strong>Romeo Lane, Vagator</strong> tops my list. It's always buzzing with energy, and the 
              non-veg bar snacks are a hit. Get ready to dance till you drop!
            </li>
          </ul>

          <h2>Co-working and Productivity</h2>
          <p>
            If you need to get some work done while extending your stay, <strong>Barefoot, Parra</strong> is a really nice, 
            chill co-working space. It's quiet, has good Wi-Fi, and the staff is friendly. It's perfect for balancing work 
            and vacation, and they often have non-veg snacks available.
          </p>

          <h2>Beaches: Less Touristy, More You</h2>
          <p>
            For beaches, I prefer the quieter, cleaner spots, especially if you're staying longer:
          </p>
          <ul>
            <li>
              <strong>Morjim:</strong> My favorite in North Goa. It's clean, has good restaurants, and is less crowded 
              than the touristy stretches. Non-veg seafood shacks are plentiful here, making it a foodie's dream.
            </li>
            <li>
              <strong>Betalbatim (South Goa):</strong> The only South Goa beach I've visited regularly, and it's pretty nice. 
              Less touristy, with some good non-veg eateries nearby.
            </li>
            <li>
              <strong>Aarambol:</strong> A bit too hippie for my liking, but if that's your vibe, go for it. 
              They have non-veg options too, like grilled fish at beach shacks.
            </li>
            <li>
              <strong>Calangute-Baga-Anjuna:</strong> I usually avoid these because they're super touristy, 
              but if you're into that, they have plenty of non-veg restaurants. Just expect crowds.
            </li>
          </ul>

          <h2>Other Fun Activities for Extended Stays</h2>
          <p>
            If you're here for a while, try these:
          </p>
          <ul>
            <li>
              <strong>Bird Watching and Dolphin Watching Tours:</strong> At Chapora, near Morjim, you can do boat tours. 
              It's a surprisingly pleasant experience, especially during certain seasons, and a great way to break up your beach days.
            </li>
            <li>
              <strong>Board Game Events:</strong> Keep an eye out for these—they're happening all over Goa and are a 
              fun way to meet people, especially if you're staying longer.
            </li>
          </ul>

          <h2>Transportation Tips for the Long Haul</h2>
          <p>
            Goa has no cab aggregators, which can be a pain, but I recommend keeping the Goa Miles app downloaded 
            on your phone for airport transfers. It's been useful for me, especially for getting to and from the airport.
          </p>

          <h2>Final Thoughts for Long-Stayers</h2>
          <p>
            If you're extending your stay, explore quieter areas like Assagao or Siolim. They're less crowded and have 
            amazing cafes and restaurants, many with non-veg options. You could also take a day trip to Old Goa or Panaji 
            for a dose of history and culture—it's a nice break from the beach scene and keeps your extended stay interesting.
          </p>

          <div className="bg-gray-100 p-6 rounded-lg mt-8">
            <p className="italic">
              Hope this helps you all enjoy Goa to the fullest! Whether you're here early or staying late, 
              these spots will keep you fed, entertained, and happy. Let me know if you have any questions—I'm 
              basically a walking Goa guidebook at this point! 😄
            </p>
            <p className="text-right font-semibold mt-2">- Anand</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InsiderGuide;
