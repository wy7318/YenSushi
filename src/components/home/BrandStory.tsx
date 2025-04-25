import React, { useRef, useEffect, useState } from 'react';
import { handleScrollAnimations } from '../../utils/animations';
import OrderModal from '../order/OrderModal';

const BrandStory: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleScrollAnimations();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="story" ref={sectionRef} className="section relative overflow-hidden bg-charcoal">
      {/* Japanese calligraphy background element */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <img 
          src="https://images.pexels.com/photos/5395804/pexels-photo-5395804.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="" 
          className="w-full max-w-4xl"
          aria-hidden="true"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center min-h-[60vh]">
          {/* Left Column - Content */}
          <div>
            <div className="fade-in">
              <span className="inline-block text-gold uppercase tracking-wider text-sm font-medium mb-4">Our Story</span>
              <h2 className="font-display text-4xl lg:text-5xl text-white mb-6">
                Old Soul, <br />
                <span className="text-gold">New Vibe</span>
              </h2>
              
              <div className="space-y-6 text-neutral-200 leading-relaxed">
                <p>
                  At Yen Sushi, our journey began with a simple passion — to share the joy of fresh, authentic Japanese cuisine in a space that feels like home.
                </p>
                
                <p>
                  From our cozy kitchen in Glendale, where we first welcomed guests with hand-crafted rolls and heartfelt hospitality, to our vibrant Scottsdale location featuring a revolving sushi bar that brings the experience right to your table — every plate we serve carries the spirit of tradition and innovation.
                </p>
                
                <p>
                  Whether you're joining us for a quiet lunch, a family dinner, or a sushi adventure on the belt, we're here to make every visit special.
                </p>
                
                <p>
                  Come taste the story we're proud to share — one bite at a time.
                </p>
              </div>
              
              <button 
                onClick={() => setIsOrderModalOpen(true)}
                className="mt-8 bg-gold text-charcoal px-8 py-4 hover:bg-primary-400 transition-colors duration-300 group flex items-center"
              >
                Crave It? Get It.
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>
          
          {/* Right Column - Images */}
          <div className="relative h-full">
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Image 1 */}
              <div className="fade-in aspect-[3/4] overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Sushi preparation" 
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
              
              {/* Image 2 */}
              <div className="fade-in mt-12 aspect-[3/4] overflow-hidden">
                <img 
                  src="https://jaytpfztifhtzcruxguj.supabase.co/storage/v1/object/public/Sumiland%20Design/Yen%20Sushi/glendale%20Sake%20bomb.png" 
                  alt="Elegant plating" 
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
              
              {/* Image 3 */}
              <div className="fade-in col-span-2 mt-4 aspect-[16/9] overflow-hidden">
                <img 
                  src="https://jaytpfztifhtzcruxguj.supabase.co/storage/v1/object/public/Sumiland%20Design/Yen%20Sushi/food.jpg" 
                  alt="Restaurant interior" 
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <OrderModal 
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </section>
  );
};

export default BrandStory;