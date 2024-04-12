import {useParams} from 'react-router-dom';
import data from '../data.js';

function Detail(props){
    let {id} = useParams();
    //datail/:id 디테일 뒤에 입력한 id와 일치하는 id를 가진 제품 object를 찾아서 그 제품의 id를 
    //아래 return문에서 사용해서 상세페이지 띄움
    let result = data.find(function(item){
        return item.id = id;
    })


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img className='haha' src={props.address[result.id]} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.shoes[result.id].title}</h4>
                    <p>{props.shoes[result.id].content}</p>
                    <p>{props.shoes[result.id].price}원</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    )
}

export default Detail;