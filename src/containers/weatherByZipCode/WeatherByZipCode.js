import React,{useState,useEffect} from 'react'
import { getWeatherByZipCode } from '../../services/WeatherServices';
import TableWeather from '../../components/TabelWeather';
import DetailWeather from '../../components/DetailWeather';
import swal from 'sweetalert';

const WeatherByZipCode = () => {
    //hooks
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
        zipCode : "",
        countryCode : "",
    }
    const [code,setCode] = useState(initialForm);
    const [showTable, setShowTable] = useState(false);
    const [showDetails, setShowDetails] = useState(false)
    const [selectedMenu, setSelectedMenu] = useState({})

 
    const handleChangeZipCode = (event) => {
        const { name, value } = event.target
        
        setCode({...code, [name]: value })
        // console.log(code);
    }
    const onSubmit = () => {
        if(code.zipCode === "" || code.countryCode === ""){
            swal("Zip Code or Country ID Not Found", "", "error");
        }else{
            getWeatherByZipCode(code.zipCode,code.countryCode)
            .then(response => {
                console.log("INI ZIPKODE",response);
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
                }else if (response.cod === "404") {
                    swal("Zip Code or Country ID Not Found", "", "error");
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
                <h1>Weather Zip Code</h1>
                
                <input className="form-control" placeholder="Search Zip Code ..."
                    type="text" name="zipCode" onChange={handleChangeZipCode} value={code.zipCode}
                /><br/>
                <input className="form-control" placeholder="Search Country Code ..."
                    type="text" name="countryCode" onChange={handleChangeZipCode} value={code.countryCode}
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
export default WeatherByZipCode
