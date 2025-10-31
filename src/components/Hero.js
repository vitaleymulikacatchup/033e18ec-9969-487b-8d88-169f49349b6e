import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-96 bg-gradient-to-r from-pink-200 via-blue-200 to-blue-300 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/school-building.jpg"
          alt="Rae Gümnaasium building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200/30 via-blue-200/30 to-blue-300/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            RAE GÜMNAASIUM
          </h1>
          <p className="text-xl md:text-2xl text-white drop-shadow-md">
            Avene. Üllata. Korda. Naudi.
          </p>
        </div>
      </div>
      
      {/* Building text overlay */}
      <div className="absolute bottom-4 right-4 text-white text-lg font-semibold drop-shadow-lg">
        RAE GÜMNAASIUM
      </div>
    </section>
  );
};

export default Hero;