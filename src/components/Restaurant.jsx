import React from "react";

// let key = 'ff';
// const config = { headers: {"user-key": key }};

class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lon: props.lon,
      lat: props.lat
    };
  }
  componentDidMount() {
    fetch("https://developers.zomato.com/api/v2.1/geocode?lat={this.state.lon}&lon={this.state.lat}", {
      headers: {
        Accept: "application/json",
        "User-Key": "c4a72bc0d1013c0944741ce9dc776eba"
      }
    });
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}
export default Restaurant;
