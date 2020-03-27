import React from 'react';
import Weather from './components/Weather';
import { geolocated } from 'react-geolocated';
import Nasa from './components/Nasa';
import Restaurant from './components/Restaurant';
import './css/main.css'

class App extends React.Component {
  
  render() {
    return !this.props.isGeolocationAvailable ? (<div>Your browser does not support Geolocation</div>) 
    : !this.props.isGeolocationEnabled ? ( <div>Geolocation is not enabled</div>) 
    : this.props.coords ? (
        <div>
          <h1 className="main-header">Location Application</h1>
          <Weather longitude={this.props.coords.longitude} latitude={this.props.coords.latitude}/>
          <Nasa longitude={this.props.coords.longitude} latitude={this.props.coords.latitude} />
          <Restaurant longitude={this.props.coords.longitude} latitude={this.props.coords.latitude}/>
        </div>
    ) : (
        <div>Getting the location data&hellip; </div>
    );
  }
}
export default geolocated({
  positionOptions: {
      enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(App);
