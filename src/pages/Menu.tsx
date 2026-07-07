import React, { useEffect } from 'react';

const Menu: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://wehanda.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Spacer for fixed navbar */}
      <div className="h-40"></div>

      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl text-white mb-6">
              Our <span className="text-gold">Menu</span>
            </h1>
          </div>

          <div data-wehanda-embed="" data-restaurant="yen-sushi-sake-bar"></div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
