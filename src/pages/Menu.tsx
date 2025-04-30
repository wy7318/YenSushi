import React, { useState } from 'react';

const Menu: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const locations = {
    glendale: {
      name: "Glendale",
      menuUrl: "https://jaytpfztifhtzcruxguj.supabase.co/storage/v1/object/public/organization-logos/Menu/yen-2024-50624-menu.pdf",
      image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg"
    },
    scottsdale: {
      name: "Scottsdale",
      menuUrl: "https://jaytpfztifhtzcruxguj.supabase.co/storage/v1/object/public/organization-logos/Menu/Menu%20Combined%20Revolving.pdf",
      image: "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg"
    }
  };

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Add a spacer div to account for the fixed navbar */}
      <div className="h-40"></div>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl text-white mb-6">
              Our <span className="text-gold">Menu</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Select a location to view its menu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {Object.entries(locations).map(([key, location]) => (
              <div 
                key={key}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-xl"
                onClick={() => {
                  window.open(location.menuUrl, '_blank');
                  setSelectedLocation(key);
                }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={location.image}
                    alt={`${location.name} location`}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-charcoal/60 transition-opacity duration-300 group-hover:bg-charcoal/40"></div>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    <h3 className="text-3xl font-display text-white mb-4">{location.name}</h3>
                    <button className="bg-gold text-charcoal px-8 py-3 transform transition-all duration-300 group-hover:scale-105 hover:bg-primary-400">
                      View Menu
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;