import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { changeAge, changeName } from "./../store/userSlice.js"
import { changeCount } from "./../store.js"

function Cart(){

    let state = useSelector((state)=>{return state})
    let dispatch = useDispatch()

    return(
        <div>
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
                                        dispatch(changeCount(a.id))
                                    }}>+</button></td>
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