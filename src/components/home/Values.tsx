import React from 'react';
import { ArrowRight, Award, Leaf, Utensils } from 'lucide-react';

const Values: React.FC = () => {
  const values = [
    {
      icon: <Award className="text-gold w-10 h-10" />,
      title: "Only the Best on Your Plate",
      description: "We thoughtfully select every ingredient — from fresh, seasonal finds in Japan to locally sourced treasures — so every bite tells a story of care and quality."
    },
    {
      icon: <Utensils className="text-gold w-10 h-10" />,
      title: "Crafted with Passion, Perfected with Time",
      description: "Our chefs dedicate years to honing their skills, blending time-honored techniques with creative flair to bring you a dining experience that feels both familiar and new."
    },
    {
      icon: <Leaf className="text-gold w-10 h-10" />,
      title: "Good for You, Gentle on the Planet",
      description: "We make mindful choices — from sourcing sustainably to operating with eco-friendly practices — because delicious food should also be responsible."
    }
  ];
  
  return (
    <section id="values" className="section bg-charcoal relative">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[url('https://images.pexels.com/photos/4997904/pexels-photo-4997904.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-repeat bg-[length:200px_200px] opacity-10"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <span className="inline-block text-gold uppercase tracking-wider text-sm font-medium mb-4">Our Philosophy</span>
          <h2 className="font-display text-4xl lg:text-5xl text-white mb-6">
            The Principles That <br />
            <span className="text-gold">Guide Our Craft</span>
          </h2>
          <p className="text-neutral-200">
            At Yen Sushi, we believe that extraordinary dining experiences come from unwavering commitment to our core values. Every dish we serve embodies these principles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-neutral-900/50 p-8 border border-gold/10 hover:border-gold/30 transition-all duration-300 group fade-in"
            >
              <div className="mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-display text-white mb-4">{value.title}</h3>
              <p className="text-neutral-300 mb-6">{value.description}</p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;