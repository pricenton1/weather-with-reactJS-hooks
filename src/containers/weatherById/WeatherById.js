import React, { useState, useEffect } from 'react'
import { getWeatherById } from '../../services/WeatherServices';
import TableWeather from '../../components/TabelWeather';
import DetailWeather from '../../components/DetailWeather';
import swal from 'sweetalert';

const WeatherById = () => {
    const [weather, setWeather] = useState([]);
    const [city, setCity] = useState({});
    const [coord, setCoord] = useState({
        lat: null,
        lon: null
    })
    const [temp, setTemp] = useState({
        avg: null,
        max: null,
        min: null,
    })
    const [wind, setWind] = useState({
        deg: null,
        speed: null
    })

    const [id, setId] = useState("");
    const [showTable, setShowTable] = useState(false);
    const [showDetails, setShowDetails] = useState(false)
    const [selectedMenu, setSelectedMenu] = useState({})

    const handleChangeId = (e) => {
        setId(e.target.value);
        // console.log(id)
    }
    const onSubmit = () => {
        if (id === ""){
            swal("ID Not Found", "", "error");
        }else{
            getWeatherById(id)
            .then(response => {
                console.log(response)
                if (response.cod === 200) {
                    setWeather(response.weather)
                    setCity(response.name)
                    setCoord({
                        ...coord, lat: response.coord.lat,
                        lon: response.coord.lon
                    })
                    setTemp({
                        ...temp, avg: response.main.temp,
                        max: response.main.temp_max,
                        min: response.main.temp_min
                    })
                    setWind({
                        ...wind, deg: response.wind.deg,
                        speed: response.wind.speed

                    })

                    setShowTable(true)

                } else if (response.cod === "404" || "400") {
                    swal("ID Not Found", "", "error");
                }

            }).catch(err => {
                console.log(err)
            })
        }
    }
    // show detail
    const showDetailWeather = () => {
        setShowDetails(!showDetails)
        setSelectedMenu({ ...weather[0] })
        console.log("INI DETAIL", selectedMenu)
    }
    // hide detail
    const hideDetailWeather = () => {
        setShowDetails(!showDetails)

    }
    useEffect(() => {

    }, [])

    let weatherList
    if (showTable === false) {
        weatherList = <center><h2>No Results</h2></center>
    } else {
        weatherList = <TableWeather weather={weather} city={city} coord={coord} showDetail={showDetailWeather} />
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1>Weather City ID</h1>
                    
                    <input className="form-control" placeholder="Search City ID ..."
                        type="text" name="id" onChange={handleChangeId} value={id}
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
export default WeatherById
