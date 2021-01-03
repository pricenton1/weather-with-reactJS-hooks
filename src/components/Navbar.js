import React from 'react';
import {Switch,Link,Route} from 'react-router-dom';
import logo from '../assets/weather.png';
import HomePage from './HomePage';
import WeatherByName from '../containers/weatherByName/WeatherByName';
import WeatherById from '../containers/weatherById/WeatherById';
import WeatherByCoordinate from '../containers/weatherByCoordinate/WeatherByCoordinate';
import WeatherByZipCode from '../containers/weatherByZipCode/WeatherByZipCode';
import NavbarItem from './NavbarItem';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="navbar-nav mr-auto">
                        
                        <NavbarItem/>

                    </div>
                    <div>
                        <a href="#" className="navbar-brand">
                            <img src={logo} alt="logo" style={{width:'60px',height:"60px"}}/>
                        </a>
                    </div>
            </nav>

                <div className="container-fluid">
                    <Switch>
                        <Route exact path={"/"} component={HomePage} />
                        <Route exact path="/cityname" component={WeatherByName} />
                        <Route exact path="/id" component={WeatherById} />
                        <Route exact path="/coordinates" component={WeatherByCoordinate} />
                        <Route exact path="/zipcode" component={WeatherByZipCode} />                  
                    </Switch>
                </div>
        </div>
    )
}
export default Navbar;
