import React, { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 mt-16 sm:mt-0">
      <div 
        className="absolute inset-0 bg-charcoal/90 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>
      <div 
        className="relative z-10 w-full max-w-4xl bg-white rounded-lg shadow-2xl transform transition-all duration-300 ease-out max-h-[85vh] overflow-y-auto"
        onClick={handleModalClick}
        style={{
          boxShadow: '0 0 60px rgba(198, 168, 125, 0.1)',
        }}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-neutral-400 hover:text-gold transition-colors duration-300 z-20 bg-white/80 backdrop-blur-sm rounded-full p-1"
          aria-label="Close modal"
        >
          <img 
            src="https://jaytpfztifhtzcruxguj.supabase.co/storage/v1/object/public/organization-logos/logos/logo.png"
            alt="Close"
            className="w-6 h-6 object-contain"
          />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;