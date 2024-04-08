import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import sh1 from './img/shoes1.jpg'
import sh2 from './img/shoes2.jpg'
import sh3 from './img/shoes3.jpg'
import {data, Card, Front, Display, Detail} from './data.js';
import { Routes, Route, Link } from 'react-router-dom'


import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  let [shoes] = useState(data);
  let [address] = useState([sh1, sh2, sh3])

  return (
    <div className="App">

      {/* 대문 Navbar */}
      <Front/>


      {/* 대문 사진 */}
      <div className='main-bg'></div>


      <Routes>
        <Route path="/" element={ <div> 
          
          {/* 상품 진열 */}
          <Display shoes={shoes} address={address}/>

        </div> } />
        <Route path="/detail" element={ <div>
          
          {/* 상세 정보 */}
          <Detail/>

        </div> } />
        <Route path="/about" element={ <div>어바웃페이지임</div> } />
      </Routes>


    </div>
  );
}

export default App;

