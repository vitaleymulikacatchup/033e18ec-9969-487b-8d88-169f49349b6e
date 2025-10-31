import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickLinks from './components/QuickLinks';
import News from './components/News';
import Events from './components/Events';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <QuickLinks />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <News />
        <Events />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

export default App;