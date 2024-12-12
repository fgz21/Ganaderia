import React from 'react';

const Main = () => {
  return (
    <section className="bg-green-500 text-white h-[100vh] flex">
      <div className="w-1/2 flex items-center justify-center">
        <div className="rounded-b-lg overflow-hidden">
          <img 
            src="https://media.istockphoto.com/id/2012710242/es/foto/vacas-disfrutando-de-su-comida.webp?a=1&b=1&s=612x612&w=0&k=20&c=GeF3rwYgLi1esEZsu6XdM7zRpJMy9au5oewahWW-llQ="
            alt="Ganadería"
            className="object-cover h-full w-full rounded-lg"
          />
        </div>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Bienvenido a Nuestra Plataforma de Ganadería
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Nos dedicamos a ofrecer soluciones innovadoras para el cuidado y manejo de ganado, asegurando la salud y bienestar de los animales.
        </p>
        
      </div>
    </section>
  );
};

export default Main;