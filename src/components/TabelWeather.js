import React from 'react';
import {Table,Button} from 'react-bootstrap'

const TabelWeather = (props) => {
    const {weather,city,coord,showDetail} = props
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {/* <th>No</th> */}
                        <th>ID</th>
                        <th>City</th>
                        <th>Weather</th>
                        <th>Description</th>
                        <th colSpan="2">Coordinate</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        weather.map((weather,index) =>(
                            <tr>
                                {/* <td>{index+1}</td> */}
                                <td>{weather.id}</td>
                                <td>{city}</td>
                                <td>{weather.main}</td>
                                <td>{weather.description}</td>
                                <td>{coord.lat}</td>
                                <td>{coord.lon}</td>
                                <td>
                                
                                    <Button className="btn btn-outline btn-secondary" onClick={showDetail} > 
                                       Details
                                    </Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default TabelWeather;
