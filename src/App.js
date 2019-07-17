import React from 'react';
import NavBar from './components/navbar/navbar.js';
import InfoSection from './components/infoSection/infoSection.js';
import ContentSection from './components/contentSection/contentSection.js';
import './App.css';

function App() {
  return (
    <div className="App">
     <div class="row">
      <div class="col-1">
      <NavBar />
      </div>
      <div class="col-5">
      <InfoSection />
      </div>
      <div class="col-6">
      <ContentSection />
      </div>

     </div>
      
    </div>
  );
}

export default App;
