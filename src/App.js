import React from 'react';
import Weather from './components/Weather';
import { geolocated } from 'react-geolocated';
import Nasa from './components/Nasa';
import Restaurant from './components/Restaurant';

class App extends React.Component {
  
  render() {
    return !this.props.isGeolocationAvailable ? (<div>Your browser does not support Geolocation</div>) 
    : !this.props.isGeolocationEnabled ? ( <div>Geolocation is not enabled</div>) 
    : this.props.coords ? (
        <div>
          <p>latitude</p>
          <p>{this.props.coords.latitude}</p>
          <p>longitude</p>
          <p>{this.props.coords.longitude}</p>
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
