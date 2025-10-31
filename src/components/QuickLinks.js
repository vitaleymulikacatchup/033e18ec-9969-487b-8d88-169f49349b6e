import React from 'react';
import { ExternalLink } from 'lucide-react';

const QuickLinks = () => {
  const links = [
    { name: 'Tunniplaan', href: '#', icon: ExternalLink },
    { name: 'Õpilaspilet', href: '#' },
    { name: 'Koolikõnts', href: '#' },
    { name: 'Koolipuhvet', href: '#' },
    { name: 'Telli koolipitsad', href: '#' }
  ];

  return (
    <section className="bg-white py-4 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="inline-flex items-center px-4 py-2 bg-rae-orange text-white rounded-full text-sm font-medium hover:bg-rae-orange-dark transition-colors duration-200"
              >
                {link.name}
                {Icon && <Icon className="ml-2 h-4 w-4" />}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;