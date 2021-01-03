import React,{useState,useEffect} from 'react'
import { getWeatherByCoordinate } from '../../services/WeatherServices';
import TableWeather from '../../components/TabelWeather';
import DetailWeather from '../../components/DetailWeather';
import swal from 'sweetalert';

const WeatherByCoordinate = () => {

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

    const initialForm = {
        lat : "",
        lon : "",
    }
    const [coordinate,setCoordinate] = useState(initialForm);
    const [showTable, setShowTable] = useState(false);
    const [showDetails, setShowDetails] = useState(false)
    const [selectedMenu, setSelectedMenu] = useState({})

    const handleChangeCoordinate = (event) => {
        const { name, value } = event.target      
        setCoordinate({...coordinate, [name]: value })
        // console.log(coordinate);
    }

    const onSubmit = () => {
        if (coordinate.lat === "" || coordinate.lon === ""){
            swal("Coordinate Not Found", "", "error");
        }else{
            getWeatherByCoordinate(coordinate.lat,coordinate.lon)
            .then(response => {
                console.log("COORDINATE",response)
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

                } else if (response.cod === "404") {
                    swal("Coordinate Not Found", "", "error");
                }
                
            }).catch(err => {
                console.log("add", err)
            })
        }
        
    }
    useEffect(() => {
        
     }, [])
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
                <h1>Weather Geographic Coordinate</h1>
                
                <input className="form-control" placeholder="Search Latitude ..."
                    type="text" name="lat" onChange={handleChangeCoordinate} value={coordinate.lat}
                /><br/>
                <input className="form-control" placeholder="Search Longtitude ..."
                    type="text" name="lon" onChange={handleChangeCoordinate} value={coordinate.lon}
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
export default WeatherByCoordinate
