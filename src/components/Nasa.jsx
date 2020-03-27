import React from 'react';

export default class Nasa extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            img: "",
            longitude : props.longitude,
            latitude : props.latitude
        }
    }
    componentDidMount() {
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const url = 'https://api.nasa.gov/planetary/earth/imagery?';
      const nasaKey = 'ZDJJHnQ2ZteVFqHiik49vTYcQQCRNPpASMyeK7vB';
      fetch(`${proxyUrl}${url}lon=${this.props.longitude}&lat=${this.props.latitude}&api_key=${nasaKey}`, {
          method: 'GET',
          headers: new Headers({
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'http://localhost3000'
          })
      })
          .then(respsonse => respsonse.json())
          .then(json => {
              console.log(json);
              this.setState({ img: json.url });
          })
  }
  render() {
    return (
      <div>
       <img src={this.state.img} alt="nasa img"></img>
      </div>
    );
  }
}



