import React, { useState } from 'react';
import LocationModal from './LocationModal';

const LocationCTA: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<'glendale' | null>(null);

  const locations = {
    glendale: {
      title: "Yen Sushi & Sake Bar",
      subtitle: "Glendale",
      description: "Experience the art of traditional Japanese dining in our elegant Glendale location. Featuring intimate booth seating, a full-service sake bar, and a serene atmosphere perfect for both casual dining and special occasions.",
      image: "https://jaytpfztifhtzcruxguj.supabase.co/storage/v1/object/public/Sumiland%20Design/Yen%20Sushi/Glendale%20Store%20Pic.jpg",
      address: "17037 N 43rd Ave #A3, Glendale, AZ 85308",
      phone: "(602) 978-9022",
      email: "yensushiandsakebar@gmail.com",
      hours: {
        'Monday – Thursday': '11am – 9:30pm',
        'Friday': '11am – 10pm',
        'Saturday': '12pm – 10pm',
        'Sunday': '12pm – 9:30pm'
      },
      features: ["Traditional Dining Room", "Full-Service Sake Bar", "Private Events Space", "Outdoor Patio"],
      orderLink: "https://yensushi.wehanda.com/"
    },
  };

  return (
    <section id="locations" className="relative">
      <div>
        {/* Glendale Location */}
        <div className="relative h-96 md:h-[500px] overflow-hidden group">
          <div className="absolute inset-0 bg-charcoal/60 z-10"></div>
          <img
            src={locations.glendale.image}
            alt="Glendale location"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8">
            <h3 className="text-3xl font-display text-white mb-4">{locations.glendale.subtitle}</h3>
            <p className="text-white/90 mb-8 max-w-xs">
              {locations.glendale.description}
            </p>
            <button
              onClick={() => setSelectedLocation('glendale')}
              className="relative overflow-hidden group inline-block"
            >
              <span className="relative z-10 inline-block border border-gold text-gold px-6 py-3 transition-all duration-300 group-hover:text-charcoal">
                View Location
              </span>
              <div className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </div>
      </div>

      <LocationModal 
        isOpen={selectedLocation !== null}
        onClose={() => setSelectedLocation(null)}
        location={selectedLocation ? locations[selectedLocation] : null}
      />
    </section>
  );
};

export default LocationCTA;