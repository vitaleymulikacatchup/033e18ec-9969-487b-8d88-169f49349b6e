import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      date: '31',
      month: 'OKT 2025',
      title: 'Halloweeni kostüümide konkurss',
      type: 'konkurss'
    },
    {
      id: 2,
      date: '07',
      month: 'NOV 2025',
      title: 'Filmiõõ',
      time: '19:00 - 23:59',
      location: 'Rae Gümnaasium',
      type: 'üritus'
    }
  ];

  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-rae-text">Sündmused</h2>
        <button className="btn-secondary">
          Vaata kõiki sündmusi
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-rae-orange rounded-lg flex flex-col items-center justify-center text-white">
                  <div className="text-xl font-bold">{event.date}</div>
                  <div className="text-xs">{event.month}</div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-rae-text mb-2">{event.title}</h3>
                {event.time && (
                  <div className="flex items-center text-sm text-rae-text-light mb-1">
                    <Clock className="h-4 w-4 mr-2 text-rae-orange" />
                    <span>{event.time}</span>
                  </div>
                )}
                {event.location && (
                  <div className="flex items-center text-sm text-rae-text-light">
                    <MapPin className="h-4 w-4 mr-2 text-rae-orange" />
                    <span>{event.location}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;