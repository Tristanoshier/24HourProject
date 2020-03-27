import React from 'react';
const nasaKey = 'F5UxaqjYbitLBfuGAqLZRVnTdPdktqkQDItV1rty';


export default class Nasa extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            img: "",
            longitude : props.longitude,
            latitude : props.latitude
        }
    }

    componentDidMount(){
    fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=${this.longitude}&lat=${this.latitude}&api_key=${nasaKey}`)
      .then(res => {
          res.json()
      })
      .then(json => {
      })
    }

  render() {
    return (
      <div>
       <img alt="nasa img"></img>
      </div>
    );
  }
}
