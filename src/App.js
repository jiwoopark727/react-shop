import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import sh1 from './img/shoes1.jpg'
import sh2 from './img/shoes2.jpg'
import sh3 from './img/shoes3.jpg'
import {data, Template} from './data.js';


import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  let [shoes] = useState(data);
  let [address] = useState([sh1, sh2, sh3])

  return (
    <div className="App">

      {/* 대문 Navbar */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">NEW</Nav.Link>
            <Nav.Link href="#features">BEST30</Nav.Link>
            <Nav.Link href="#pricing">ABOUT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 대문 사진 */}
      <div className='main-bg'></div>


      {/* 상품 진열 */}
      <Container>
        <Row>
          {
            shoes.map(function(a,i){
              return(
                <Template shoes={shoes} a={a} i={i}
                          address={address} key={i}>
                </Template>
              )
            })
          }
        </Row>
      </Container>

    </div>
  );
}

export default App;

