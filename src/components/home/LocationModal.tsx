import React from 'react';
import Modal from '../common/Modal';
import { MapPin, Clock, Phone, Mail, ExternalLink, Navigation } from 'lucide-react';

interface LocationHours {
  [key: string]: string;
}

interface LocationDetails {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  address: string;
  phone: string;
  email?: string;
  hours: LocationHours;
  features: string[];
  orderLink: string;
}

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  location: LocationDetails | null;
}

const LocationModal: React.FC<LocationModalProps> = ({ isOpen, onClose, location }) => {
  if (!location) return null;

  const getGoogleMapsUrl = (address: string) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="overflow-hidden rounded-lg">
        {/* Hero Image */}
        <div className="relative h-72 overflow-hidden">
          <img 
            src={location.image}
            alt={location.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h2 className="font-display text-3xl sm:text-4xl text-white mb-2">{location.title}</h2>
            <a 
              href={getGoogleMapsUrl(location.address)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gold hover:text-white transition-colors duration-300 group"
            >
              <MapPin size={18} className="mr-2 flex-shrink-0" />
              <span className="text-sm mr-2">{location.address}</span>
              <Navigation size={16} className="transform group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <h3 className="font-display text-2xl text-charcoal mb-4">About This Location</h3>
              <p className="text-neutral-600 mb-6">{location.description}</p>
              
              <div className="mb-6">
                <h4 className="font-display text-lg text-charcoal mb-3">Hours of Operation</h4>
                <div className="flex items-start space-x-2 text-neutral-600">
                  <Clock size={18} className="text-gold mt-1 flex-shrink-0" />
                  <div className="space-y-1">
                    {Object.entries(location.hours).map(([day, hours]) => (
                      <p key={day} className="flex justify-between">
                        <span className="font-medium mr-4">{day}:</span>
                        <span>{hours}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-display text-lg text-charcoal mb-3">Contact</h4>
                <div className="flex items-center space-x-2 text-neutral-600">
                  <Phone size={18} className="text-gold flex-shrink-0" />
                  <a href={`tel:${location.phone}`} className="hover:text-gold transition-colors duration-300">
                    {location.phone}
                  </a>
                </div>
                {location.email && (
                  <div className="flex items-center space-x-2 text-neutral-600">
                    <Mail size={18} className="text-gold flex-shrink-0" />
                    <a href={`mailto:${location.email}`} className="hover:text-gold transition-colors duration-300">
                      {location.email}
                    </a>
                  </div>
                )}
              </div>

              {/* Get Directions Button */}
              <a
                href={getGoogleMapsUrl(location.address)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-6 text-gold hover:text-charcoal border border-gold px-4 py-2 transition-all duration-300 hover:bg-gold group"
              >
                <Navigation size={18} className="mr-2" />
                Get Directions
              </a>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="font-display text-2xl text-charcoal mb-4">Location Features</h3>
              <ul className="grid grid-cols-1 gap-3 mb-8">
                {location.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-neutral-600">
                    <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={location.orderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-gold text-charcoal px-6 py-4 font-medium tracking-wide hover:bg-primary-400 transition-all duration-300 group"
              >
                Order Now
                <ExternalLink size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LocationModal;