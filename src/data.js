import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap';

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

let Template = function ShoesInfo(props){
                        return(
                          <Col className='col-md-4'>
                            <img src={props.address[props.i]} width="80%"/>
                            <h4>{props.shoes[props.i].title}</h4>
                            <p>{props.shoes[props.i].price}</p>
                          </Col>
                        )
                      }

export {data, Template};
