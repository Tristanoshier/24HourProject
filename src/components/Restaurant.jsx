import React from "react";
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
        
        return this.state.restaurantArray.map((restaurant, index) => {
            return(
            <div className="display-box" key={index}>
                <h4 className="name-heading">{restaurant.restaurant.name}</h4>
                <p className="address-heading">{restaurant.restaurant.location.address}</p>
            </div>
            )
        })  
    }
  render() {
    return (
      <div className="restaurant-box">
        <h2 className="restaurant-main">-Restaurants Near You-</h2>
        {this.restaurantMapper()}
      </div>
    );
  }
}
export default Restaurant;











