import React from 'react';

import './App.css';
import './MediaQuery/AppQuery.css'
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import HireMe from './components/HireMe';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Work/>
      <HireMe/>
      <Contact/>
    </div>
  );
}

export default App;
