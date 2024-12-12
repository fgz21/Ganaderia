
import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Cría de Ganado',
      description: 'Ofrecemos servicios de cría y manejo de ganado para maximizar la producción.',
      icon: '🐄',
    },
    {
      title: 'Alimentación y Nutrición',
      description: 'Planes de alimentación personalizados para asegurar la salud y el crecimiento óptimo del ganado.',
      icon: '🥩',
    },
    {
      title: 'Salud Animal',
      description: 'Servicios veterinarios y de salud para mantener a tu ganado en óptimas condiciones.',
      icon: '💉',
    },
    {
      title: 'Consultoría Ganadera',
      description: 'Asesoramiento experto en prácticas de ganadería sostenible y rentable.',
      icon: '📊',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestros Servicios de Ganadería</h2>
        <p className="text-center text-gray-600 mb-12">
          Proporcionamos una variedad de servicios especializados para el manejo y cuidado del ganado.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div className="text-4xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;