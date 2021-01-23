import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  
  const [cars, setCars] = useState({
    redCar: false,
    blueCar: false,
    yellowCar: false,
  });


  const moveCar = (car, side) => {         
    setCars({
     ...cars, [car]: side,
    });    
  };

  return (
    <CarsContext.Provider value={{moveCar, cars}}>
      {children}
    </CarsContext.Provider>
  );  
};

export default Provider;
