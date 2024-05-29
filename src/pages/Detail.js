import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useDispatch } from "react-redux"
import { addProduct, printProduct } from "./../store.js"
import { Routes, Route, useNavigate } from 'react-router-dom'

function Detail(props){
    let {id} = useParams();
    //datail/:id 디테일 뒤에 입력한 id와 일치하는 id를 가진 제품 object를 찾아서 그 제품의 id를 
    //아래 return문에서 사용해서 상세페이지 띄움
    let result = props.shoes.find(function(item){
        return item.id == id;
    })
    let [alert1, setAlert] = useState(true);
    let [num, setNum] = useState('');
    let [fade2, setFade2] = useState('');
    let [tab, setTab] = useState(0);


    let YellowBtn = styled.button`
        background : yellow;
        color : black;
        padding : 10px;
    `

    useEffect(()=>{
        let a = setTimeout(()=>{ setAlert(false); }, 2000);

        return()=>{
            clearTimeout(a);
        }
    },[])


    useEffect(()=>{
        if(isNaN(num)==true){
            alert('숫자만 입력하세요')
        }
    }, [num])


    useEffect(()=>{
      let a = setTimeout(()=>{ setFade2('end') })
  
      return()=>{
        setTimeout(a);
        setFade2('');
      }
    },[])

    let dispatch = useDispatch();
    let navigate = useNavigate();


    return(
        <div className={"container start " + fade2}>
            {
                alert1 == true ?         
                <div className='alert alert-warning'>
                2초이내 구매시 할인
                </div> : null
            }
            
            <YellowBtn>하이요</YellowBtn>

            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes"+ (Number(result.id)+1) +".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.shoes[result.id]?.title}</h4>
                    <p>{props.shoes[result.id]?.content}</p>
                    <p>{props.shoes[result.id]?.price}원</p>
                    <button className="btn btn-danger" onClick={()=>{
                        dispatch(addProduct({id:result.id, name:result.title, count:1}))
                    }}>주문하기</button>
                    {/* 숫자 아닌걸 입력하면 경고창 띄우기 */}
                    <p className='num' style={{margin: 20}}>
                        <input onChange={(e)=>{ setNum(e.target.value) }}></input>
                    </p>
                </div>
                
            </div>


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

            <TabContent tab={tab} shoes={props.shoes}/>
            

        </div> 
    )
}

function TabContent(props){
    let [fade, setFade] = useState('')
  
    useEffect(()=>{
      let a = setTimeout(()=>{setFade('end');}, 100)
  
      return()=>{
        clearTimeout(a);
        setFade('');
      }
    },[props.tab])
  
  
    return (
      <div className={'start ' + fade}>
        {[  <div>
                <p>{props.shoes[props.tab]?.title}</p>
                <p>{props.shoes[props.tab]?.content}</p>
                <p>{props.shoes[props.tab]?.price}</p>
            </div>,
            <div>
                <p>{props.shoes[props.tab]?.title}</p>
                <p>{props.shoes[props.tab]?.content}</p>
                <p>{props.shoes[props.tab]?.price}</p>
            </div>,
            <div>
                <p>{props.shoes[props.tab]?.title}</p>
                <p>{props.shoes[props.tab]?.content}</p>
                <p>{props.shoes[props.tab]?.price}</p>
            </div>][props.tab]}
      </div>
    )
  }

export default Detail;