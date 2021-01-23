import React from 'react';
import './App.css';
import Cars from './component/Cars';
import TrafficSignal from './component/TrafficSignal';

function App() {
  return (
    <div className="container">
      <Cars />
      <TrafficSignal />
    </div>
  );
}

export default App;
