import React from 'react';
import Modal from '../common/Modal';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const locations = [
    {
      name: "Yen Sushi & Sake Bar",
      subtitle: "Glendale",
      description: "Experience traditional Japanese dining in our elegant Glendale location.",
      image: "https://jaytpfztifhtzcruxguj.supabase.co/storage/v1/object/public/Sumiland%20Design/Yen%20Sushi/Glendale%20Store%20Pic.jpg",
      address: "17037 N 43rd Ave #A3, Glendale, AZ 85308",
      phone: "(602) 978-9022",
      email: "yensushiandsakebar@gmail.com",
      type: "contact"
    },
    {
      name: "Yen Sushi & Revolving Bar",
      subtitle: "Scottsdale",
      description: "Experience our innovative revolving sushi bar in Scottsdale.",
      image: "https://jaytpfztifhtzcruxguj.supabase.co/storage/v1/object/public/Sumiland%20Design/Yen%20Sushi/Scottsdale%20Store%20Pic%20(1).jpg",
      address: "15801 N Frank Lloyd Wright Blvd, Scottsdale, AZ 85260",
      reservationLink: "https://yensushirevolving.wehanda.com/",
      type: "online"
    }
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative overflow-hidden rounded-lg">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-[url('https://images.pexels.com/photos/4997904/pexels-photo-4997904.jpeg')] bg-repeat bg-[length:200px_200px]"></div>
        </div>

        <div className="relative p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-charcoal mb-4">Make a Reservation</h2>
            <p className="text-neutral-600 font-body max-w-xl mx-auto">
              Select your preferred location to make a reservation. Each location offers a unique dining experience.
            </p>
          </div>

          {/* Location Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <div 
                key={index}
                className="group relative bg-white border border-neutral-200 hover:border-gold transition-all duration-300 overflow-hidden flex flex-col rounded-lg"
              >
                {/* Location Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-display text-2xl text-white">{location.subtitle}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-4">
                    <div className="flex items-start space-x-2 mb-3">
                      <MapPin className="text-gold mt-1 flex-shrink-0" size={18} />
                      <p className="text-neutral-600 text-sm">{location.address}</p>
                    </div>
                    {location.type === "contact" && (
                      <>
                        <div className="flex items-center space-x-2 mb-2">
                          <Phone className="text-gold flex-shrink-0" size={18} />
                          <a href={`tel:${location.phone}`} className="text-neutral-600 hover:text-gold transition-colors text-sm">
                            {location.phone}
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="text-gold flex-shrink-0" size={18} />
                          <a href={`mailto:${location.email}`} className="text-neutral-600 hover:text-gold transition-colors text-sm">
                            {location.email}
                          </a>
                        </div>
                      </>
                    )}
                  </div>

                  {location.type === "contact" ? (
                    <div className="mt-auto">
                      <p className="text-neutral-700 text-sm mb-4">
                        Please contact us by phone or email to make your reservation.
                      </p>
                      <div className="flex space-x-3">
                        <a
                          href={`tel:${location.phone}`}
                          className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gold text-gold hover:bg-gold hover:text-white transition-colors duration-300"
                        >
                          <Phone size={18} className="mr-2" />
                          Call Now
                        </a>
                        <a
                          href={`mailto:${location.email}`}
                          className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gold text-gold hover:bg-gold hover:text-white transition-colors duration-300"
                        >
                          <Mail size={18} className="mr-2" />
                          Email
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-auto">
                      <p className="text-neutral-700 text-sm mb-4">
                        Make your reservation online through our booking system.
                      </p>
                      <a
                        href={location.reservationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-gold text-charcoal text-center py-3 font-medium hover:bg-primary-400 transition-colors duration-300"
                      >
                        <span className="inline-flex items-center">
                          Book Online
                          <ExternalLink size={18} className="ml-2" />
                        </span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ReservationModal;