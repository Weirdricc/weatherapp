import React from 'react';
import WeatherCard from './weatherCard';

const weatherCardList = ({ days }) => {
  const dayComponent = days.map(day => {
      return <WeatherCard key={day.order} name={day.shortName} temp={day.temp} sky={day.sky.value}/>;
  });

  return <div>{dayComponent}</div>;
};

export default weatherCardList;
