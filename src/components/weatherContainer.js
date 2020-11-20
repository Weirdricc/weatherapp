import React from 'react';
import { days } from './days';
import WeatherCardList from './weatherCardList';

const weatherContainer = () => {
  return (
    <div>
      <WeatherCardList days={days} />
    </div>
  );
};

export default weatherContainer;
