import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
      </BrowserRouter>
      {/* <WeatherByName/> */}
      {/* <WeatherById/> */}
      {/* <WeatherByCoordiante/> */}
      {/* <WeatherByZipCode/> */}
    </div>
  );
}

export default App;
