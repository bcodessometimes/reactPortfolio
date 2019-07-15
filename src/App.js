import React from 'react';
import NavBar from './components/navbar/navbar.js';
import InfoSection from './components/infoSection/infoSection.js';
import ContentSection from './components/contentSection/contentSection.js';
import './App.css';

function App() {
  return (
    <div className="App">
     
        <NavBar />
        <InfoSection />
        <ContentSection />
      
    </div>
  );
}

export default App;
