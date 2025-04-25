import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <div className="relative">
      <Link 
        to="/" 
        className="flex items-center group"
        aria-label="Yen Sushi Logo - Go to homepage"
      >
        <div className="mr-3">
          <img 
            src="https://jaytpfztifhtzcruxguj.supabase.co/storage/v1/object/public/organization-logos/logos/logo.png"
            alt="Yen Sushi Logo"
            className="w-10 h-10 object-contain animate-float"
          />
        </div>
        <div>
          <span className="block font-display text-xl text-white group-hover:text-gold transition-colors duration-300">
            YEN
          </span>
          <span className="block text-xs uppercase tracking-widest text-gold">
            Sushi
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;