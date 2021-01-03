// import React from 'react'
// import '../../App.css'

// import temperature from '../../assets/temperature-weather.gif'
// import wind from '../../assets/windy-weather.gif'
// import map from '../../assets/map-marker.gif'
// import { getFullDate, getWeathericon } from '../helpers/helper'
// export default function Card(props) {

//     const conventTemp = temp => {
//         let cel = Math.floor(temp - 273)
//         return cel
//     }
//    const weather = getWeathericon(props)
//     const fullDate = getFullDate()
//     return (
//         <div className="display-card">
//             <h1 className="display-4 header">
//                 <img alt="map-icon" style={{ height: 70, paddingRight: 10 }} src={map}></img>
//                 {props.city},
//                 {props.country}
//             </h1>
//             {weather}
//             <p className="desc">{props.desc}</p>
//             <p className="day lead">{fullDate}</p>

//             <table className="info">
//                 <tr>
//                     <td rowSpan="2">
//                         <img style={{ height: 50 }} alt="wind-icon" src={wind}></img>
//                         <p style={{ paddingTop: 20 }}>{props.wind} m/s</p>
//                     </td>
//                     <td rowSpan="2">
//                         <h2 className="display-4"><img alt="temperature-icon" style={{ height: 70 }} src={temperature}></img>{conventTemp(props.temp)}&deg; C</h2>

//                     </td>
//                     <td> <h3>
//                         {conventTemp(props.tempMax)}&deg; C
//                         </h3>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>
//                         <h3>
//                             {conventTemp(props.tempMin)}&deg; C</h3>
//                     </td>
//                 </tr>
//             </table>
//         </div>
//     )
// }
