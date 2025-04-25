import React from 'react';
import Modal from '../common/Modal';
import { MapPin } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const locations = [
    {
      title: "Yen Sushi & Sake Bar",
      address: "17037 N 43rd Ave #A3, Glendale, AZ 85308",
      buttonText: "Order from Glendale",
      orderLink: "https://direct.chownow.com/order/27903/locations/41339?add_cn_ordering_class=true",
      image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg"
    },
    {
      title: "Yen Sushi & Revolving Bar",
      address: "15801 N Frank Lloyd Wright Blvd, Scottsdale, AZ 85260",
      buttonText: "Order from Scottsdale",
      orderLink: "https://yensushirevolving.wehanda.com/",
      image: "https://jaytpfztifhtzcruxguj.supabase.co/storage/v1/object/public/Sumiland%20Design/Yen%20Sushi/revolving.jpg"
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
            <h2 className="font-display text-4xl text-charcoal mb-4">Choose Your Location</h2>
            <p className="text-neutral-600 font-body max-w-xl mx-auto">
              Select your preferred location to begin your order. Each restaurant offers a unique dining experience with our signature quality.
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
                    alt={location.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex-grow">
                    <h3 className="font-display text-2xl text-charcoal mb-3">{location.title}</h3>
                    <div className="flex items-start space-x-2">
                      <MapPin className="text-gold mt-1" size={18} />
                      <p className="text-neutral-600 leading-tight">{location.address}</p>
                    </div>
                  </div>

                  {/* Order Button */}
                  <div className="mt-8">
                    <a
                      href={location.orderLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gold text-charcoal text-center py-4 px-6 font-medium tracking-wide hover:bg-primary-400 transform hover:-translate-y-1 transition-all duration-300 rounded-md"
                    >
                      {location.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <p className="text-center text-neutral-500 text-sm mt-8">
            Delivery areas and menu items may vary by location
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default OrderModal;