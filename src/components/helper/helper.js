// import React from 'react'
// import clear from '../../assets/sun-weather.gif'
// import cloudy from '../../assets/cloudy-weather.gif'
// import light_rain from '../../assets/rain-cloud-weather.gif'
// import rain from '../../assets/torrential-rain-weather.gif'
// import haze from '../../assets/haze-weather.gif'
// import thunderstorm from '../../assets/stormy-weather.gif'
// import snow from '../../assets/light-snowy-weather.gif'
// const getFullDate = () => {
//     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const month = ["December", "January", "February", "March", "April", "June", "July", "August", "September", "October", "November"]
//     var d = new Date();
//     var dayName = days[d.getDay()];
//     var monthName = month[d.getMonth()]
//     var date = d.getDate()
//     var fullDate = dayName + "," + date + " " + monthName
//     return fullDate
// }
// const getWeathericon = props => {
//     let weather
//     switch (props.icon) {
//         case "01d":
//         case "01n":
//             weather = <img style={{ height: 250, marginLeft: "16%" }} alt="clear" src={clear}></img>
//             break;
//         case "02d":
//         case "02n":
//             weather = <img style={{ height: 250, marginLeft: "16%" }} alt="cloudy" src={cloudy}></img>
//             break
//         case "03d":
//         case "03n":
//             weather = <img style={{ height: 250, marginLeft: "16%" }} alt="cloudy" src={cloudy}></img>
//             break
//         case "04d":
//         case "04n":
//             weather = <img style={{ height: 250, marginLeft: "16%" }} alt="cloudy" src={cloudy}></img>
//             break
//         case "09d":
//         case "09n":
//             weather = <img style={{ height: 250, marginLeft: "16%" }} alt="light_rain" src={light_rain}></img>
//             break
//         case "10d":
//         case "10n":
//             weather = <img style={{ height: 250, marginLeft: "16%" }} alt="rain" src={rain}></img>
//             break
//         case "11d":
//         case "11n":
//             weather = <img style={{ height: 250, marginLeft: "16%" }} alt="thunderstorm" src={thunderstorm}></img>
//             break
//         case "13d":
//         case "13n":
//             weather = <img style={{ height: 250, marginLeft: "16%" }} alt="snow" src={snow}></img>
//             break
//         case "50d":
//         case "50n":
//             weather = <img style={{ height: 250, marginLeft: "16%" }} alt="haze" src={haze}></img>
//             break
//         default:
//             break;
//     }
//     return weather

// }
// export { getFullDate, getWeathericon }