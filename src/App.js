import React from 'react';
import NavBar from './components/navbar/navbar.js';
import InfoSection from './components/infoSection/infoSection.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <NavBar />
        
        <InfoSection />
       
      </header>
    </div>
  );
}

export default App;
