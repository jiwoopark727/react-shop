import { Outlet } from 'react-router-dom'

function About(){
    return(
        <div>
            <h3>about페이지임</h3>
            <Outlet></Outlet>
        </div>
    )
}

export default About;