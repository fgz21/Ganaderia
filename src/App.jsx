import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main'; 
import Contenido from './components/contenido'; 
import Servicios from './components/servicios';
import Contacto from './components/contacto';
import ScrollToTopButton from './components/ScrollToTopButton'; 
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Servicios /> 
      <Contenido /> 
      <Contacto /> 
      <ScrollToTopButton />
    </div>
  );
}

export default App;