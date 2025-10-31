import React, { useState } from 'react';
import { Search, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [openDropdown, setOpenDropdown] = useState(null);

  const navigationItems = [
    { name: 'Avaleht', href: '#', current: true },
    { 
      name: 'Õppetöö', 
      href: '#',
      dropdown: ['Õppekavad', 'Tunniplaan', 'E-kool', 'Õpilaste tulemused']
    },
    { 
      name: 'Koolielu', 
      href: '#',
      dropdown: ['Traditsioonid', 'Ringid', 'Projektid', 'Galerii']
    },
    { 
      name: 'Koolist', 
      href: '#',
      dropdown: ['Ajalugu', 'Juhtkond', 'Õpetajad', 'Nõukogu']
    },
    { 
      name: 'Talendiotsing', 
      href: '#',
      dropdown: ['Konkursid', 'Stipendiumid', 'Tunnustused']
    },
    { 
      name: 'Vastuvõtt', 
      href: '#',
      dropdown: ['Tingimused', 'Avaldused', 'Testimine']
    },
    { name: 'Koolimeedia', href: '#', external: true },
    { 
      name: 'Kalender', 
      href: '#',
      dropdown: ['Sündmused', 'Koolivaheajad', 'Eksamid']
    },
    { 
      name: 'Kontaktid', 
      href: '#',
      dropdown: ['Aadress', 'Telefon', 'E-post', 'Kaart']
    }
  ];

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <header className="bg-rae-orange">
      {/* Top bar */}
      <div className="bg-rae-orange-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center space-x-8">
              <div className="text-white text-sm">
                <span className="font-semibold">Rae Gümnaasium</span>
              </div>
              <div className="text-white text-sm">
                Avene. Üllata. Korda. Naudi.
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white text-sm hover:text-gray-200">
                Juurdepääsetavus
              </a>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Otsing..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-3 pr-10 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <Search className="h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-rae-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="text-white font-bold text-xl">
                  <div className="bg-white text-rae-orange px-2 py-1 rounded">
                    rae
                  </div>
                  <div className="text-xs mt-1">Rae Gümnaasium</div>
                </div>
              </div>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden lg:block">
              <div className="flex items-center space-x-1">
                {navigationItems.map((item, index) => (
                  <div key={item.name} className="relative">
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(index)}
                          className={`nav-link flex items-center ${item.current ? 'border-b-2 border-white' : ''}`}
                        >
                          {item.name}
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </button>
                        {openDropdown === index && (
                          <div className="dropdown-menu">
                            {item.dropdown.map((subItem) => (
                              <a key={subItem} href="#" className="dropdown-item">
                                {subItem}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className={`nav-link ${item.current ? 'border-b-2 border-white' : ''} ${item.external ? 'flex items-center' : ''}`}
                      >
                        {item.name}
                        {item.external && <span className="ml-1 text-xs">↗</span>}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-200 p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-rae-orange-dark">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-gray-200 text-base font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;