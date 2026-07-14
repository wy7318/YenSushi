import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Order from './pages/Order';
import Menu from './pages/Menu';
import Layout from './components/layout/Layout';

function App() {
  useEffect(() => {
    if (!document.querySelector('script[src="https://www.wehanda.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.wehanda.com/embed.js';
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
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
