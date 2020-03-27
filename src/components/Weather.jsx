import React from "react";
const weatherKey = 'c2e31562118e91365ccd3a1935a85dbe';

export default class Weather extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            temp: "",
            longitude : props.longitude,
            latitude : props.latitude
        }
    }

    componentDidMount(){
    console.log(this.state.latitude)
    console.log(this.state.longitude)
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&units=Imperial&appid=${weatherKey}`)
      .then(res => {
          res.json()
      })
      .then(json => {
          console.log(json)
      });
    }

  render() {
    return (
      <div>
       <p></p>
      </div>
    );
  }
}


