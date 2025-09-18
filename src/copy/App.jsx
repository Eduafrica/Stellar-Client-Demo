import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Course from './components/Course';
import Certificates from './components/Cerificates';
import Career from './components/Career';

function App() {
  return (
    <>
      {/* <h1>Vite + React</h1> */}
      <Navbar />
      <Hero />
      <Course />
      <Certificates />
      <Certificates category="Free" />
      <Career />
    </>
  );
}

export default App;
