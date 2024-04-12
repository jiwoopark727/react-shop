import {Button, Container, Nav, Navbar, Row, Col} from 'react-bootstrap';
import sh1 from './img/shoes1.jpg'
import sh2 from './img/shoes2.jpg'
import sh3 from './img/shoes3.jpg'
import {Card, Front, Display} from './component.js';
import data from './data.js';
import Detail from './pages/Detail.js';
import About from './pages/About.js';
import EventPage from './pages/EventPage.js';


import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'


function App() {

  let [shoes] = useState(data);
  let [address] = useState([sh1, sh2, sh3])
  let navigate = useNavigate();

  return (
    <div className="App">

      {/* 대문 Navbar */}
      <Front/>


      <Routes>
        <Route path="/" element={
          <div> 
          {/* 대문 사진 */}
          <div className='main-bg'></div>
          
          {/* 상품 진열 */}
          <Display shoes={shoes} address={address}/>
          </div> 
        } />


        <Route path="/detail/:id" element={ 
          <div>
          {/* 상세 정보 */}
          <Detail shoes={shoes} address={address}/>
          </div> 
        } />


        <Route path="/about" element={ <About/> }>
          <Route path="member" element={ <div>멤버들</div> } />
          <Route path="location" element={ <div>회사위치</div> } />
        </Route>

        <Route path='/event' element={ <EventPage/> }>
          <Route path="one" element={
              <p>첫 주문시 양배추즙 서비스</p>
          } />
          <Route path="two" element={
              <p>생일기념 쿠폰받기</p>
          } />
        </Route>

        <Route path="*" element={ <div>없는페이지임</div> } />
      </Routes>

      <button onClick={()=>{ navigate('/detail')}}>디테일이동버튼</button>
      <button onClick={()=>{ navigate('/')}}>홈이동버튼</button>
      <button onClick={()=>{ navigate('/event/one')}}>이벤트1이동버튼</button>
      <button onClick={()=>{ navigate('/event/two')}}>이벤트2이동버튼</button>

    </div>
  );
}

export default App;

