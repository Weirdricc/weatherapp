import React from 'react';
import './App.css';
import DateTime from './components/dateTime';
import WeatherContainer from './components/weatherContainer';

function App() {
  return (
    <div className='App'>
      <DateTime />
      <WeatherContainer />
    </div>
  );
}

export default App;
