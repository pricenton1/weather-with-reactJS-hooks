import React from 'react';
import {Modal,Col,Form,Button} from 'react-bootstrap';
import '../assets/style.css';
import logo from '../assets/weather.png';


const DetailWeather = (props) => {
    const { show, hideDetail,weather:{id,main,description},city,
    coord:{lat,lon},temp:{avg,max,min},wind:{deg,speed} } = props

    return (
        <div>
        <Modal show={show}>
            <Modal.Header style={{background:'lightskyblue'}}>
                <Modal.Title id="contained-modal-title-vcenter" style={{fontWeight:'bold'}}>
                    Detail Weather {city} City
            </Modal.Title>
            <img src={logo} alt="logo" style={{width:'60px',height:"60px"}}/>
            </Modal.Header>

            <Modal.Body style={{backgroundImage:'linear-gradient(#1FA2FF, #12D8FA,#a6ffcb)'}}>
                <Form>
                    <Form.Group controlId="warehouseId">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="text" name="id" value={id} />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="">
                            <Form.Label>Weather</Form.Label>
                            <Form.Control type="text" name="main" value={main} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="warehouseLocation">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" name="desc"  value={description} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="">
                            <Form.Label>Latitude</Form.Label>
                            <Form.Control type="text" name="lat" value={lat}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="">
                            <Form.Label>Longtitude</Form.Label>
                            <Form.Control type="text" name="lon" value={lon} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="">
                            <Form.Label>Average Temp</Form.Label>
                            <Form.Control type="text" name="avg" value={avg}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="">
                            <Form.Label>Max Temp</Form.Label>
                            <Form.Control type="text" name="max" value={max} />
                        </Form.Group>

                        <Form.Group as={Col}  controlId="">
                            <Form.Label>Min Temp</Form.Label>
                            <Form.Control type="text" name="min" value={min} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="">
                            <Form.Label>Wind Deg</Form.Label>
                            <Form.Control type="text" name="deg" value={deg}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="">
                            <Form.Label>Wind Speed</Form.Label>
                            <Form.Control type="text" name="speed" value={speed} />
                        </Form.Group>
                    </Form.Row>

                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button className="btn btn-danger" onClick={hideDetail}>Close</Button>
            </Modal.Footer>
        </Modal>

    </div>
    )
}
export default DetailWeather; 
