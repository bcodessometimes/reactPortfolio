import React from 'react';
import NavBar from './components/navbar/navbar.js';
import InfoSection from './components/infoSection/infoSection.js';
import ContentSection from './components/contentSection/contentSection.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <NavBar />

        <InfoSection />

        <ContentSection />
       
      </header>
    </div>
  );
}

export default App;
