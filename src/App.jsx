import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main'; 
import Contenido from './components/contenido'; 
import Services from './components/Services';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton'; 
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Services /> 
      <Contenido /> 
      <Contact /> 
      <ScrollToTopButton />
    </div>
  );
}

export default App;