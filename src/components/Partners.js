import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Partners = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const partners = [
    {
      name: 'Tallinna Tehnikaülikool',
      logo: '/images/ttu-logo.png'
    },
    {
      name: 'TalTech',
      logo: '/images/taltech-logo.png'
    },
    {
      name: 'Arhitektuurikool',
      logo: '/images/architecture-logo.png'
    },
    {
      name: 'Rae Ettevõtete Liit',
      logo: '/images/rae-business-logo.png'
    },
    {
      name: 'Partner 5',
      logo: '/images/partner5-logo.png'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(partners.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(partners.length / 4)) % Math.ceil(partners.length / 4));
  };

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-rae-text mb-8">Koostööpartnerid</h2>
      
      <div className="relative">
        <div className="flex items-center justify-between">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <div className="flex-1 mx-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {partners.slice(currentSlide * 4, (currentSlide + 1) * 4).map((partner, index) => (
                <div key={index} className="flex items-center justify-center p-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-16 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-200"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(partners.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                currentSlide === index ? 'bg-rae-orange' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;