import React from "react";
let key = 'c2e31562118e91365ccd3a1935a85dbe';

export default class Weather extends React.Component {
    constructor(props){
        console.log(props)
        super(props);
        this.state ={
            temp: "",
            longitude : props.longitude,
            latitude : props.latitude
        }
    }

    componentDidMount(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&units=Imperial&appid=${key}`)
      .then(res => {
          res.json()
      })
      .then(json => {
        console.log(json);
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


