import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import sh1 from './img/shoes1.jpg'
import sh2 from './img/shoes2.jpg'
import sh3 from './img/shoes3.jpg'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">NEW</Nav.Link>
            <Nav.Link href="#features">BEST30</Nav.Link>
            <Nav.Link href="#pricing">ABOUT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <Container>
        <Row>
          <Col className='col-md-4'>
            <img src={sh1} width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col className='col-md-4'>
            <img src={sh2}  width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col className='col-md-4'>
            <img src={sh3} width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;

