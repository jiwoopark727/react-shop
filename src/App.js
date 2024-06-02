/* eslint-disable */
import { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'

import {Front, Display} from './component.js';
import data from './data.js';
import About from './pages/About.js';
import EventPage from './pages/EventPage.js';
import axios from 'axios';

// import Cart from './pages/Cart.js';
// import Detail from './pages/Detail.js';
// lazy 하게 import 해오라고 할 수 있다 메인 페이지 로드할 때는 필요가 없으니까 아직
// 단점도 있긴함 Cart, Detail 컴포넌트 로딩시간 발생
const Cart = lazy(()=> import('./pages/Cart.js'))
const Detail = lazy(()=> import('./pages/Detail.js'))

import './App.css';

// useTransition 으로 감싼건 나중에 처리해줌
// ex)input 타이핑처럼 즉각해줄거 해주고 그리고 state 변경함수를 처리해줌 -> setName을 startTransitoin으로 감싸서~
// useDeferredValue도 비슷함 그 안에 state를 집어 넣으면 그 state가 변동사항이 생겼을 때 나중에 처리해줌
// import {useState, useTransition} from 'react'

// let a = new Array(10000).fill(0)

// function App(){
//   let [name, setName] = useState('')
//   let [isPending, startTransition] = useTransition()
  
//   return (
//     <div>
//       <input onChange={ (e)=>{ 
//         startTransition(()=>{
//           setName(e.target.value) 
//         })
//       }}/>

//       {
//         a.map(()=>{
//           return <div>{name}</div>
//         })
//       }
//     </div>
//   )
// }

function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [click, setClick] = useState(0);
  let [loading,setLoading] = useState(false);


  useEffect(() => {
    if (!localStorage.getItem('watched')) {
      localStorage.setItem('watched', JSON.stringify([]));
    }
  }, []);



  return (
    <div className="App">

      {/* 대문 Navbar */}
      <Front/>

      <Suspense fallback={<div>로딩중임</div>}>
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
              <Detail shoes={shoes}/>          
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

          <Route path="/cart" element={ <Cart/> }/>
          
        </Routes>
      </Suspense>

      {
        loading === true ? 
        <div>
          <h4>로딩중...😓</h4>
        </div> : null
      }

    </div>
  );
}


export default App;