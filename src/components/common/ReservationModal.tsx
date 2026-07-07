import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const RESERVATION_EVENT = 'yen:open-reservation';

const ReservationModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(RESERVATION_EVENT, handler);
    return () => window.removeEventListener(RESERVATION_EVENT, handler);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div className="relative z-10 w-full max-w-lg h-[92vh] rounded-xl overflow-hidden shadow-2xl border border-gold/20">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 z-20 text-white hover:text-gold transition-colors duration-300 bg-charcoal/90 rounded-full p-1.5"
          aria-label="Close"
        >
          <X size={18} />
        </button>
        <iframe
          src="https://wehanda.com/embed/yen-sushi-sake-bar?reserve=1"
          className="w-full h-full border-0"
          title="Reserve a Table"
          scrolling="no"
        />
      </div>
    </div>
  );
};

export default ReservationModal;
