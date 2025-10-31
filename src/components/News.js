import React from 'react';
import { Calendar, User } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Esimese õppeperioodi kokkuvõte õpilaste vaates',
      image: '/images/students-orange-vests.jpg',
      date: '28.10.2025',
      author: 'Kirsti Pallum'
    },
    {
      id: 2,
      title: 'Rae Gümnaasium linnulennult - vaata videot',
      image: '/images/aerial-view.jpg',
      date: '24.10.2025',
      author: 'Kirsti Pallum'
    },
    {
      id: 3,
      title: '2. koht rahvusvahelisel kübervõistlusel!',
      image: '/images/cyber-competition.jpg',
      date: '22.10.2025',
      author: 'Kirsti Pallum'
    },
    {
      id: 4,
      title: 'Rae valla siselliinde sõiduplaanid alates 27.10.2025',
      image: '/images/blue-bus.jpg',
      date: '22.10.2025',
      author: 'Kirsti Pallum'
    }
  ];

  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-rae-text">Uudised</h2>
        <button className="btn-secondary">
          Ava uudised
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {newsItems.map((item) => (
          <article key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-rae-text mb-3 line-clamp-2">
                {item.title}
              </h3>
              <div className="flex items-center text-sm text-rae-text-light space-x-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1 text-rae-orange" />
                  <span>{item.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1 text-rae-orange" />
                  <span>{item.author}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default News;