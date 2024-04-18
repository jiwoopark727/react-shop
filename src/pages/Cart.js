import { Table } from "react-bootstrap"
import { configureStore } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"

function Cart(){

    let state = useSelector((state)=>{return state})
    console.log(state.cart);

    return(
        <div>
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
                                <tr>
                                    <td>{i+1}</td>
                                    <td>{a.name}</td>
                                    <td>{a.count}</td>
                                    <td>안녕</td>
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