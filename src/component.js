import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom'

function Card(props){
    return(
      <Col className='col-md-4'>
        <a href={"/detail/"+props.i}>
          <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width="80%"/>
        </a>
        <h4>{props.shoes[props.i].title}</h4>
        <p>{props.shoes[props.i].price}원</p>
      </Col>
    )
  }
  
  function Front(props){
    return(
      //대문Navbar
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">NEW</Nav.Link>
            <Nav.Link href="#features">BEST30</Nav.Link>
            <Nav.Link href="#pricing">ABOUT</Nav.Link>
            <p>"     "</p>
            <Link to="/" style={{ textDecoration: "none", marginTop: '8px'}}>홈</Link>
            <p>"     "</p>
            <Link to="/detail" style={{ textDecoration: "none", marginTop: '8px'}} >상세페이지</Link>
            <p>"     "</p>
            <Link to="/about" style={{ textDecoration: "none", marginTop: '8px'}}>어바웃페이지</Link>
          </Nav>
        </Container>
      </Navbar>
    )
  }
  
  function Display(props){
    let shoes = props.shoes;
    return(
      //상품진열
      <Container>
        <Row>
          {
            props.shoes.map(function(a,i){
              return(
                <Card shoes={shoes} a={a} i={i} key={i}>
                </Card>
              )
            })
          }
        </Row>
      </Container>
    )
  }

  export {Card, Front, Display};