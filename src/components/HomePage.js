import React from 'react'
import '../assets/style.css';
import awan from '../assets/awan.png';
import taman from '../assets/taman.png';
import { Container,Row,Col } from 'react-bootstrap';

const HomePage = () => {
    return (
       <Container fluid>
           <Row>
               <Col md={4}>
                <img src={awan} alt="awan1" style={{width:'350px',height:'250px'}}/>
               </Col>
               <Col md={4}>
                    <br/>
                    <h1>Home Page Weather</h1>
               </Col>
               <Col md={4}>
                <img src={awan} alt="awan1" style={{width:'300px',height:'200px'}}/>
               </Col>
           </Row>
           <Row>
           <Col md={{ span: 7, offset: 3 }}>
               <img src={taman} alt="taman" style={{width:'600px',height:'250px'}}/>
           </Col>
           </Row>
       </Container>
    )
}
export default HomePage;
