import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import Order from './pages/Order';
import Layout from './components/layout/Layout';

function App() {
  useEffect(() => {
    if (!document.querySelector('script[src="https://wehanda.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://wehanda.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/menu" element={<Navigate to="/order" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
