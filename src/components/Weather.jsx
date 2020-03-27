import React from "react";


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
    const weatherKey = 'c2e31562118e91365ccd3a1935a85dbe';
    console.log(this.state.latitude)
    console.log(this.state.longitude)
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&units=Imperial&appid=${weatherKey}`, {
    headers: {
        Accept: "application/json"
        }   
    }).then(res => {
          res.json()
      })
      .then(data => {
          console.log(data)
          
        });
    }

  render() {
    return (
      <div>
       <p>{this.state.temp}</p>
      </div>
    );
  }
}


