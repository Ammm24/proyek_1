import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portofolio from './components/Portofolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Portofolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;