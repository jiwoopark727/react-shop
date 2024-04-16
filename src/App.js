import {Front, Display} from './component.js';
import data from './data.js';
import Detail from './pages/Detail.js';
import About from './pages/About.js';
import EventPage from './pages/EventPage.js';
import axios from 'axios';
import { Nav } from 'react-bootstrap';

import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { tab } from '@testing-library/user-event/dist/tab.js';


function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [click, setClick] = useState(0);
  let [loading,setLoading] = useState(false);
  let [tab, setTab] = useState(0);

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
          <Display shoes={shoes}/>
          </div> 
        } />


        <Route path="/detail/:id" element={ 
          <DetailContent shoes={shoes}/>
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

      {
        loading == true ? 
        <div>
          <h4>로딩중...😓</h4>
        </div> : null
      }

      <button onClick={()=>{
        setClick(click+1);

        setLoading(true);

        axios.get('https://codingapple1.github.io/shop/data' + (click+2) + '.json').then((결과)=>{
          let copy = [...shoes, ...결과.data];
          // 결과.data.map((a,i)=>{
          //   copy.push(결과.data[i]);
          // })
          setShoes(copy);
          setLoading(false);
        })
        .catch(()=>{
          setLoading(false);
          alert("상품없음");
        })
      }}>더보기버튼</button>
    

      <button onClick={()=>{
          console.log(shoes);
        }
      }>shoes항목보기</button>


      <p>
        <button onClick={()=>{ navigate('/detail')}}>디테일이동버튼</button>
        <button onClick={()=>{ navigate('/')}}>홈이동버튼</button>
        <button onClick={()=>{ navigate('/event/one')}}>이벤트1이동버튼</button>
        <button onClick={()=>{ navigate('/event/two')}}>이벤트2이동버튼</button>
      </p>

      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={()=> setTab(0) } eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=> setTab(1) } eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=> setTab(2) } eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tab={tab}/>

    </div>
  );
}

function TabContent(props){
  let [fade, setFade] = useState('')

  useEffect(()=>{
    let a = setTimeout(()=>{setFade('end');}, 10)

    return()=>{
      clearTimeout(a);
      setFade('');
    }
  },[props.tab])


  return (
    <div className={'start ' + fade}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.tab]}
    </div>
  )
}

function DetailContent(props){
  let shoes = props.shoes;
  let [fade2, setFade2] = useState('');

  useEffect(()=>{
    let a = setTimeout(()=>{ setFade2('end') })

    return()=>{
      setTimeout(a);
      setFade2('');
    }
  },[])

  return(
    <div className={'start '+ fade2}>
      {/* 상세 정보 */}
      <Detail shoes={shoes}/>
    </div> 
  )
}

export default App;