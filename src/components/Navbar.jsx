import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 800;
      let startTime = null;

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); 
        const easing = easeInOutQuad(progress); 
        window.scrollTo(0, startPosition + distance * easing);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

 
  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  return (
    <nav className="bg-white bg-opacity-50" id="nav">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div className="min-w-[200px] max-w-3xl mx-auto">
            <ul className="flex justify-center space-x-12"> 
              <li>
                <a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); smoothScrollTo('home'); }}>Inicio</a>
              </li>
              <li>
                <a href="#services" className="nav-link" onClick={(e) => { e.preventDefault(); smoothScrollTo('services'); }}>Servicios</a>
              </li>
              <li>
                <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); smoothScrollTo('about'); }}>Acerca de Nosotros</a>
              </li>
              <li>
                <a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); smoothScrollTo('contact'); }}>Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;