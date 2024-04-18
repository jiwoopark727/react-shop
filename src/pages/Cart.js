import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { changeAge, changeName } from "./../store"
//import { changeCount } from "./../store"

function Cart(){

    let state = useSelector((state)=>{return state})
    let dispatch = useDispatch()

    return(
        <div>
            <h5>{state.user.name}의 장바구니 {state.user.age}살</h5>
            <button onClick={()=>{
                dispatch(changeAge(20))
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
                                    <td>{i+1}</td>
                                    <td>{state.cart[i].name}</td>
                                    <td>{state.cart[i].count}</td>
                                    <td><button onClick={()=>{
                                        dispatch(changeName())
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