import React from 'react';
import Logo from '../common/Logo';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-charcoal relative overflow-hidden">
      {/* Japanese pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[url('https://images.pexels.com/photos/7214464/pexels-photo-7214464.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-repeat bg-[length:200px_200px]"></div>
      </div>
      
      <div className="container-custom pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Column 1: About */}
          <div className="fade-in">
            <Logo />
            <p className="mt-6 text-neutral-300 max-w-xs">
              Yen Sushi offers an authentic and elevated Japanese dining experience with the freshest ingredients and masterful preparation.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/yensushiaz/" className="text-gold hover:text-white transition-colors duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/YenSushiSakeBar/" className="text-gold hover:text-white transition-colors duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>

            </div>
          </div>
          
          {/* Column 2: Glendale Location */}
          <div className="fade-in">
            <h3 className="text-lg font-display text-gold mb-6">Glendale</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <MapPin size={20} className="text-gold flex-shrink-0 mt-1" />
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=17037+N+43rd+Ave+%23A3%2C+Glendale%2C+AZ+85308"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-gold transition-colors duration-300"
                >
                  17037 N 43rd Ave #A3, Glendale, AZ 85308
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={20} className="text-gold flex-shrink-0" />
                <a 
                  href="tel:(602) 978-9022"
                  className="text-neutral-300 hover:text-gold transition-colors duration-300"
                >
                  (602) 978-9022
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={20} className="text-gold flex-shrink-0" />
                <a 
                  href="mailto:yensushiandsakebar@gmail.com"
                  className="text-neutral-300 hover:text-gold transition-colors duration-300"
                >
                  yensushiandsakebar@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Column 3: Scottsdale Location */}
          <div className="fade-in">
            <h3 className="text-lg font-display text-gold mb-6">Scottsdale</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <MapPin size={20} className="text-gold flex-shrink-0 mt-1" />
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=15801+N+Frank+Lloyd+Wright+Blvd%2C+Scottsdale%2C+AZ+85260"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-gold transition-colors duration-300"
                >
                  15801 N Frank Lloyd Wright Blvd, Scottsdale, AZ 85260
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={20} className="text-gold flex-shrink-0" />
                <a 
                  href="tel:(480) 661-1188"
                  className="text-neutral-300 hover:text-gold transition-colors duration-300"
                >
                  (480) 661-1188
                </a>
              </div>
            </div>
          </div>
          
          {/* Column 4: Newsletter */}
          {/* <div className="fade-in">
            <h3 className="text-lg font-display text-gold mb-6">Newsletter</h3>
            <p className="text-neutral-300 mb-4">Subscribe for updates on special events and exclusive offers.</p>
            <form className="mt-4">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 focus:border-gold outline-none text-white rounded-none"
                  required
                />
                <button 
                  type="submit" 
                  className="absolute right-0 top-0 bottom-0 bg-gold text-charcoal px-4 transition-colors duration-300 hover:bg-primary-400"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div> */}
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              © {currentYear} Yen Sushi. All rights reserved | Web Design by <a href="https://www.sumisubi.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-white transition-colors duration-300">Sumiland Design</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;