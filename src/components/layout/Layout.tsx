import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { initAnimations } from '../../utils/animations';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    // Initialize animations when component mounts
    initAnimations();
    
    // Update document title
    document.title = 'Yen Sushi | Premium Japanese Cuisine';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;