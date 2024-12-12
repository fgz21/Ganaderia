import React from 'react';


const MySection = () => {
  return (
    <section className="text-gray-600 body-font" id="about">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex -wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Precio / Ganado / Ganaderia
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Descubre el mundo de la ganadería, donde el precio del ganado refleja la calidad y la demanda del mercado. Nuestra actividad se centra en la cría y manejo de animales, garantizando productos de la más alta calidad. Únete a nosotros y aprovecha las oportunidades que ofrece este sector vital para la economía y la alimentación global. ¡Transforma tu experiencia en ganadería hoy mismo!
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {[
            {
              imgSrc: "https://plus.unsplash.com/premium_photo-1664391679087-a399eafb45f7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FuYWRlciVDMyVBRGF8ZW58MHx8MHx8fDA%3D",
              subtitle: "Barinas",
              title: "Alto Barinas",
              description: "En Alto Barinas, la ganadería se entrelaza con el arte urbano, creando un ambiente vibrante y único. Aquí, la tradición se fusiona con la modernidad, ofreciendo una experiencia que va más allá de lo convencional. ¡Descubre cómo la cultura local se refleja en cada rincón!"
            },
            {
              imgSrc: "https://images.unsplash.com/photo-1504868004816-c475780f060f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FuYWRlciVDMyVBRGF8ZW58MHx8MHx8fDA%3D",
              subtitle: "Barinas",
              title: "Alto Barinas",
              description: "La ganadería en Alto Barinas refleja la diversidad cultural de la región. Con un enfoque en prácticas sostenibles, este lugar no solo se dedica a la producción, sino que también celebra el arte y la creatividad. Ven y vive la experiencia de un entorno donde cada elemento cuenta una historia"
            },
            {
              imgSrc: "https://plus.unsplash.com/premium_photo-1677850457318-06499bd9f58c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdhbmFkZXIlQzMlQURhfGVufDB8fDB8fHww",
              subtitle: "Barinas",
              title: "Alto Barinas",
              description: "En Alto Barinas, la ganadería se transforma en una experiencia artística. Con un enfoque en la innovación, este lugar combina técnicas tradicionales con un toque contemporáneo, creando un espacio donde la naturaleza y el arte se entrelazan. ¡Explora un mundo donde cada detalle es una obra maestra!"
            },
            {
              imgSrc: "https://images.unsplash.com/photo-1563462336697-00383abf618d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdhbmFkZXIlQzMlQURhfGVufDB8fDB8fHww",
              subtitle: "Barinas",
              title: "Alto Barinas",
              description: "La ganadería en Alto Barinas no es solo un negocio, es una forma de vida. Aquí, la creatividad se encuentra con la naturaleza, ofreciendo un espacio donde los visitantes pueden disfrutar de la belleza del entorno mientras aprenden sobre prácticas ganaderas responsables. ¡Únete a nosotros y sé parte de esta experiencia única!"
            }
          ].map((item, index) => (
            <div className="xl:w-1/4 md:w-1/2 p-4" key={index}>
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src={item.imgSrc} alt="content" />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.subtitle}</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.title}</h2>
                <p className="leading-relaxed text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySection;