import React, { useState } from 'react';
import LocationModal from './LocationModal';

const LocationCTA: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<'glendale' | 'scottsdale' | null>(null);

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
      orderLink: "https://direct.chownow.com/order/27903/locations/41339?add_cn_ordering_class=true"
    },
    scottsdale: {
      title: "Yen Sushi & Revolving Bar",
      subtitle: "Scottsdale",
      description: "Discover a unique dining adventure at our Scottsdale location, featuring our innovative revolving sushi bar. Watch as fresh, artfully prepared dishes parade past your seat, offering an interactive and entertaining dining experience.",
      image: "https://jaytpfztifhtzcruxguj.supabase.co/storage/v1/object/public/Sumiland%20Design/Yen%20Sushi/Scottsdale%20Store%20Pic%20(1).jpg",
      address: "15801 N Frank Lloyd Wright Blvd, Scottsdale, AZ 85260",
      phone: "(480) 661-1188",
      hours: {
        'Monday': '11:30am – 9:00pm',
        'Tuesday': '11:30am – 9:00pm',
        'Wednesday': '11:30am – 9:00pm',
        'Thursday': '11:30am – 9:00pm',
        'Friday': '11:30am – 9:30pm',
        'Saturday': '11:30am – 9:30pm',
        'Sunday': '11:30am – 9:00pm'
      },
      features: ["Revolving Sushi Bar", "Interactive Dining Experience", "Premium Sake Selection", "Chef's Special Creations"],
      orderLink: "https://yensushirevolving.wehanda.com/"
    }
  };

  return (
    <section id="locations" className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Glendale Location */}
        <div className="relative h-96 md:h-auto overflow-hidden group">
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
        
        {/* Scottsdale Location */}
        <div className="relative h-96 md:h-auto overflow-hidden group">
          <div className="absolute inset-0 bg-charcoal/60 z-10"></div>
          <img 
            src={locations.scottsdale.image}
            alt="Scottsdale location"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8">
            <h3 className="text-3xl font-display text-white mb-4">{locations.scottsdale.subtitle}</h3>
            <p className="text-white/90 mb-8 max-w-xs">
              {locations.scottsdale.description}
            </p>
            <button 
              onClick={() => setSelectedLocation('scottsdale')}
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