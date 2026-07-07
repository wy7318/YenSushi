import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { initAnimations } from '../../utils/animations';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Initialize animations when component mounts
    initAnimations();
    
    // Update document title
    document.title = 'Yen Sushi | Premium Japanese Cuisine';
  }, []);

  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      {location.pathname !== '/order' && <Footer />}
    </div>
  );
};

export default Layout;