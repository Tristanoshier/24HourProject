// import React from "react";
// let key = "f340f1de73f3193cb855cbcda23ece38";

// class WeatherApi extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       temp: "",
//       lon: props.lon,
//       lat: props.lat
//     };
//   }
//   componentDidMount() {
//     //&units=Imperial fetchs the temp as F instead of C which is default.
//     fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&units=Imperial&appid=${key}`
//     )
//       .then(response => response.json())
//       .then(json => {
//         this.setState({
//           temp: json.main.temp
//         });
//       });
//   }
//   render() {
//     return (
//       <div>
//         <p>{Math.round(this.state.temp)}</p>
//       </div>
//     );
//   }
// }
// export default WeatherApi;

// let key = 'ff'
// const config = { headers: {"user-keyu": key }}