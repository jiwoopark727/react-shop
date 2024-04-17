import {Front, Display} from './component.js';
import data from './data.js';
import Detail from './pages/Detail.js';
import About from './pages/About.js';
import EventPage from './pages/EventPage.js';
import axios from 'axios';

import './App.css';
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { tab } from '@testing-library/user-event/dist/tab.js';


function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [click, setClick] = useState(0);
  let [loading,setLoading] = useState(false);


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
            }
          }>더보기버튼</button>
        

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

          </div> 
        } />


        <Route path="/detail/:id" element={ 
          <div>
            {/* 상세 정보 */}
            <Detail shoes={shoes}/>
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

      {
        loading == true ? 
        <div>
          <h4>로딩중...😓</h4>
        </div> : null
      }

    </div>
  );
}


export default App;