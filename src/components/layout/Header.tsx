import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../common/Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveItem(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#story' },
    { name: 'Menu', path: '/order' },
  ];

  const handleNavigation = (item: { name: string; path?: string; action?: () => void }) => {
    if (item.action) {
      item.action();
    } else if (item.path?.startsWith('/#')) {
      const targetId = item.path.slice(2);
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: targetId } });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (item.path) {
      navigate(item.path);
    }
    setIsMenuOpen(false);
  };

  const isActive = (item: { name: string; path?: string }) => {
    if (!item.path) return false;
    if (item.path === '/') return location.pathname === '/' && activeItem === 'home';
    if (item.path.startsWith('/#')) return location.pathname === '/' && activeItem === item.path.slice(2);
    return location.pathname === item.path;
  };

  const navItemClass = (active: boolean) => `
    text-sm font-medium tracking-wider uppercase
    py-2 px-1
    transition-all duration-300
    ${active ? 'text-gold' : 'text-white hover:text-gold'}
    relative
    after:content-['']
    after:absolute
    after:bottom-0
    after:left-0
    after:w-full
    after:h-px
    after:bg-gold
    after:origin-left
    after:scale-x-0
    after:transition-transform
    after:duration-300
    group-hover:after:scale-x-100
    ${active ? 'after:scale-x-100' : ''}
  `;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-charcoal/95 backdrop-blur-md py-4 shadow-lg'
          : 'bg-gradient-to-b from-charcoal/80 to-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-12">
            {menuItems.map((item) => (
              <li key={item.name} className="relative group">
                <button
                  onClick={() => handleNavigation(item)}
                  className={navItemClass(isActive(item))}
                >
                  {item.name}
                </button>
                <div className={`
                  absolute -bottom-1 left-1/2 -translate-x-1/2
                  w-1 h-1 rounded-full bg-gold
                  transition-all duration-300
                  opacity-0 scale-0
                  group-hover:opacity-100 group-hover:scale-100
                  ${isActive(item) ? 'opacity-100 scale-100' : ''}
                `}></div>
              </li>
            ))}

            {/* Reservations — Wehanda native overlay */}
            <li className="relative group">
              <button
                data-wehanda-order=""
                data-restaurant="yen-sushi-sake-bar"
                data-view="reserve"
                className={navItemClass(false)}
              >
                Reservations
              </button>
              <div className="
                absolute -bottom-1 left-1/2 -translate-x-1/2
                w-1 h-1 rounded-full bg-gold
                transition-all duration-300
                opacity-0 scale-0
                group-hover:opacity-100 group-hover:scale-100
              "></div>
            </li>
          </ul>
        </nav>

        {/* Order Now Button - Desktop */}
        <div className="hidden md:block">
          <Link
            to="/order"
            className="
              relative overflow-hidden
              btn bg-gold text-charcoal
              px-8 py-3
              transition-all duration-300
              before:content-['']
              before:absolute
              before:inset-0
              before:bg-white
              before:scale-x-0
              before:origin-left
              before:transition-transform
              before:duration-300
              hover:before:scale-x-100
              hover:text-gold
              group
            "
          >
            <span className="relative z-10 transition-colors duration-300">
              Order Now
            </span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2 hover:text-gold transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`
          md:hidden absolute top-full left-0 w-full
          bg-charcoal/95 backdrop-blur-md
          border-t border-gold/20
          transition-all duration-500 ease-in-out
          ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}
      >
        <nav className="container-custom py-6">
          <ul className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavigation(item)}
                  className={`
                    block w-full text-left py-3 px-4
                    text-lg font-medium
                    transition-all duration-300
                    ${isActive(item)
                      ? 'text-gold bg-white/5'
                      : 'text-white hover:text-gold hover:bg-white/5'
                    }
                  `}
                >
                  {item.name}
                </button>
              </li>
            ))}

            {/* Reservations popup — mobile */}
            <li>
              <button
                data-wehanda-order=""
                data-restaurant="yen-sushi-sake-bar"
                data-view="reserve"
                onClick={() => setIsMenuOpen(false)}
                className="
                  block w-full text-left py-3 px-4
                  text-lg font-medium
                  text-white hover:text-gold hover:bg-white/5
                  transition-all duration-300
                "
              >
                Reservations
              </button>
            </li>

            <li className="pt-4">
              <Link
                to="/order"
                onClick={() => setIsMenuOpen(false)}
                className="
                  block w-full bg-gold text-charcoal
                  py-4 px-6 text-center
                  font-medium tracking-wide
                  transition-all duration-300
                  hover:bg-white hover:text-gold
                "
              >
                Order Now
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
