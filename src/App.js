import React from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherApi from './components/Weather'
import Restaurant from './components/Restaurant'

function App() {
  return (
    <div className="App">
      <Restaurant />
      <h1>Master Branch</h1>
      <h1>Develop Branch</h1>
      <h3>Adam</h3>
    </div>
  );
}

export default App;
