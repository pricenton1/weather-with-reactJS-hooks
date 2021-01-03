import React, { useState, useEffect } from 'react'
import { getWeatherByName } from '../../services/WeatherServices';
import TableWeather from '../../components/TabelWeather';
import swal from 'sweetalert';
import DetailWeather from '../../components/DetailWeather';

const WeatherByName = () => {

    const [weather, setWeather] = useState([]);
    const [city, setCity] = useState({});
    const [coord,setCoord] = useState({
        lat : null,
        lon : null
    })
    const [temp,setTemp] = useState({
        avg : null,
        max : null,
        min : null,
    })
    const [wind,setWind] = useState({
        deg:null,
        speed : null
    })

    const [cityName, setCityName] = useState("");
    const [showTable,setShowTable] = useState(false);
    const [showDetails, setShowDetails] = useState(false)
    const [selectedMenu, setSelectedMenu] = useState({})
    
    const handleChangeName = (e) => {
        setCityName(e.target.value);

        // console.log(cityName)
    }
    const onSubmit = () => {
        if (cityName === ""){
            swal("City Not Found","", "error");
        }else{
            getWeatherByName(cityName).then(response => {
                console.log("RESPONSE", response)
                console.log("COORD", response.coord)
                console.log("Weather", response.weather)
                console.log("MAIN", response.main)
                console.log("NAMECITY", response.name)
                console.log("COUNRTY", response.sys)
                console.log("WIND", response.wind)
                if (response.cod === 200){
                    setWeather(response.weather)
                    setCity(response.name)
                    setCoord({...coord,lat : response.coord.lat,
                                lon : response.coord.lon
                    })
                    setTemp({...temp,avg:response.main.temp,
                                max:response.main.temp_max,
                                min:response.main.temp_min
                    })
                    setWind({...wind,deg:response.wind.deg,
                            speed:response.wind.speed
    
                    })
                    setShowTable(true)
                }else if (response.cod === "404"){
                    swal("City Not Found","", "error");
                }
            }).catch(err => {
                console.log(err)
            })
            
        }
        // console.log("INI FORM",cityName)
    }
    // show detail
    const showDetailWeather = () => {
        setShowDetails(!showDetails)
        setSelectedMenu({ ...weather[0]})
        console.log("INI DETAIL",selectedMenu)
    }
    // hide detail
    const hideDetailWeather = () => {
        setShowDetails(!showDetails)

    }
    // let card
    // if (showTable===true) {
    //     card = <Card
    //         key={new Date()}
    //         city={city}
    //         temp={temp.avg}
    //         tempMax={temp.max}
    //         tempMin={temp.min}
    //         wind={wind.speed}
    //         weather={weather[0]}
    //     />
    // }

    let weatherList 
    if (showTable===false) {
        weatherList = <center><h2>No Results</h2></center>
    }else{
        weatherList = <TableWeather weather={weather} city={city} coord={coord} showDetail={showDetailWeather}/>  
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1>Weather City Name</h1>
                    
                    <input className="form-control" placeholder="Search City ..."
                        type="text" name="cityName" onChange={handleChangeName} value={cityName}
                    /><br/>
                    
                    <center><button className="btn btn-outline-success" onClick={onSubmit}>Search</button></center>
                   
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-md-12">
                {weatherList}
                </div>
            </div>

            <DetailWeather show={showDetails} hideDetail={hideDetailWeather} weather={selectedMenu} city={city} 
                coord={coord} temp={temp} wind={wind}
            />
        </div>
    )
}
export default WeatherByName
