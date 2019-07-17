import React, { useState } from 'react';
import NavBar from './components/navbar/navbar.js';
import InfoSection from './components/infoSection/infoSection.js';
import ContentSection from './components/contentSection/contentSection.js';
import './App.css';

function App() {
  
  const [displayContent, setDisplayContent] = useState("AboutMe");

  const changeDisplayContent = (change) => {
    setDisplayContent(change)
}

  return (
    <div className="App">
     <div class="row">
      <div class="col-1">
      <NavBar 
      setContent={changeDisplayContent}
      />
      </div>
      <div class="col-4">
      <InfoSection />
      </div>
      <div class="col-6">
      <ContentSection 
      fillContent={displayContent}
      />
      </div>

     </div>
      
    </div>
  );
}

export default App;
