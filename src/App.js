import React from 'react';

import { Home } from 'Scene';
import { Header, Footer } from 'Component';

import './App.scss';

function App() {
  return (
    <div className="base">
      <Header />
      <Home />
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
