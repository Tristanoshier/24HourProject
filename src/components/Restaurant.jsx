import React from "react";
// let key = 'ff';
// const config = { headers: {"user-key": key }};
class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantArray : [],
      longitude: props.longitude,
      latitude: props.latitude
    };
  }
  componentDidMount() {
    fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${this.state.latitude}&lon=${this.state.longitude}`, {
      headers: {
        Accept: "application/json",
        "User-Key": "c4a72bc0d1013c0944741ce9dc776eba"
      }
    }).then(res => res.json())
    .then(json => {
        this.setState({
            restaurantArray : [...json.nearby_restaurants]
        })
    })
  }

    restaurantMapper(){
      console.log(this.state.restaurantArray)
    }
  render() {
    return (
      <div>
        {this.restaurantMapper()}
      </div>
    );
  }
}
export default Restaurant;











