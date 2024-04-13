import {useParams} from 'react-router-dom';
import data from '../data.js';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

function Detail(props){
    let {id} = useParams();
    //datail/:id 디테일 뒤에 입력한 id와 일치하는 id를 가진 제품 object를 찾아서 그 제품의 id를 
    //아래 return문에서 사용해서 상세페이지 띄움
    let result = data.find(function(item){
        return item.id = id;
    })
    let YellowBtn = styled.button`
        background : yellow;
        color : black;
        padding : 10px;
    `

    let [alert1, setAlert] = useState(true);
    useEffect(()=>{
        let a = setTimeout(()=>{ setAlert(false); }, 2000);

        return()=>{
            clearTimeout(a);
        }
    },[])

    let [num, setNum] = useState('');

    useEffect(()=>{
        if(isNaN(num)==true){
            alert('숫자만 입력하세요')
        }
    }, [num])


    return(
        <div className="container">
            {
                alert1 == true ?         
                <div className='alert alert-warning'>
                2초이내 구매시 할인
                </div> : null
            }
            <YellowBtn>하이요</YellowBtn>
            <div className="row">
                <div className="col-md-6">
                    <img className='haha' src={props.address[result.id]} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.shoes[result.id].title}</h4>
                    <p>{props.shoes[result.id].content}</p>
                    <p>{props.shoes[result.id].price}원</p>
                    <button className="btn btn-danger">주문하기</button> 
                    {/* 숫자 아닌걸 입력하면 경고창 띄우기 */}
                    <p className='num' style={{margin: 20}}>
                        <input onChange={(e)=>{ setNum(e.target.value) }}></input>
                    </p>
                </div>
            </div>
        </div> 
    )
}


export default Detail;