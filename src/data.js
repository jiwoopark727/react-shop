import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom'

let data = [
    {
      id : 0,
      title : "White and Black",
      content : "Born in France",
      price : 120000
    },
  
    {
      id : 1,
      title : "Red Knit",
      content : "Born in Seoul",
      price : 110000
    },
  
    {
      id : 2,
      title : "Grey Yordan",
      content : "Born in the States",
      price : 130000
    }
  ]

function Card(props){
  return(
    <Col className='col-md-4'>
      <img src={props.address[props.i]} width="80%"/>
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].price}</p>
    </Col>
  )
}

function Front(props){
  return(
    //대문Navbar
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
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
  let address = props.address;
  return(
    //상품진열
    <Container>
      <Row>
        {
          props.shoes.map(function(a,i){
            return(
              <Card shoes={shoes} a={a} i={i}
                    address={address} key={i}>
              </Card>
            )
          })
        }
      </Row>
    </Container>
  )
} 

function Detail(){
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  )
}
      


export {data, Card, Front, Display, Detail};
