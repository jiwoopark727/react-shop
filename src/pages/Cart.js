import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { changeAge, changeName } from "./../store/userSlice.js"
import { addCount, minusCount, removeProduct } from "./../store.js"
import { useState, memo } from "react"

// let Child = memo(function(){
//     console.log('재렌더링됨')
//     return <div>자식임</div>
//   })

function 함수(){
    return 반복문10억번돌린결과
}

function Cart(){

    let state = useSelector((state)=>{return state})
    let dispatch = useDispatch()

    let [count, setCount] = useState(0)

    //useMemo 컴포넌트 렌더링시 1회만 실행해줌
    let result = useMemo(()=>{ return 함수() }, [])

    return(
        <div>

            <Child></Child>
            <button onClick={()=>{ setCount(count+1) }}> + </button>

            <h5>{state.user.name}의 장바구니 {state.user.age}살</h5>
            <button onClick={()=>{
                dispatch(changeAge(12))
                dispatch(changeName())
            }}>버튼</button>
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    <th>삭제</th>
                </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{state.cart[i].id}</td>
                                    <td>{state.cart[i].name}</td>
                                    <td>{state.cart[i].count}</td>
                                    <td><button onClick={()=>{
                                        dispatch(addCount(state.cart[i].id))
                                    }}>+</button>
                                    <button onClick={()=>{
                                        dispatch(minusCount(state.cart[i].id))
                                    }}>-</button></td>
                                    <td><button onClick={()=>{
                                        dispatch(removeProduct(state.cart[i].id))
                                    }}>상품삭제</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table> 
        
        </div>
    )
}

export default Cart