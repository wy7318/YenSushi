import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ReservationModal from '../reservation/ReservationModal';
import OrderModal from '../order/OrderModal';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full scale-105 transition-transform duration-[2s]"
          poster="https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=1600"
          style={{ transform: isLoaded ? 'scale(1)' : 'scale(1.05)' }}
        >
          <source 
            src="https://player.vimeo.com/external/372303811.hd.mp4?s=c9a8ded9fd3c18ad46b91e8c1605a9532de31f5f&profile_id=175&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal opacity-0 transition-opacity duration-1000"
          style={{ opacity: isLoaded ? 1 : 0 }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo Animation */}
          <div className="inline-block mb-6 animate-scaleIn">
            <img 
              src="https://jaytpfztifhtzcruxguj.supabase.co/storage/v1/object/public/organization-logos/logos/logo.png"
              alt="Yen Sushi Logo"
              className="w-20 h-20 object-contain animate-float"
            />
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <span className="inline-block">YEN</span>{' '}
            <span className="inline-block text-gradient">SUSHI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mt-6 mb-8 font-['Neue_Haas_Grotesk'] animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            More Than Sushi — It's an Experience
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button 
              onClick={() => setIsReservationModalOpen(true)}
              className="btn bg-gold text-charcoal hover:bg-primary-400 px-8 py-4 text-base btn-hover-shine animate-slideInLeft"
              style={{ animationDelay: '0.9s' }}
            >
              Reserve a Table
            </button>
            <button 
              onClick={() => setIsOrderModalOpen(true)}
              className="btn border border-gold text-gold hover:bg-gold/10 px-8 py-4 text-base btn-hover-shine animate-slideInRight"
              style={{ animationDelay: '1.2s' }}
            >
              Feeling Hungry?
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce opacity-0 transition-opacity duration-1000"
          style={{ opacity: isLoaded ? 1 : 0, animationDelay: '1.5s' }}
        >
          <a 
            href="#story" 
            className="text-gold opacity-80 hover:opacity-100 transition-opacity duration-300"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} strokeWidth={1.5} />
          </a>
        </div>
      </div>

      <ReservationModal 
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />

      <OrderModal 
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </section>
  );
};

export default Hero;