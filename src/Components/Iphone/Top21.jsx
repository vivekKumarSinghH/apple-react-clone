import "./styles/top21.css"
import { Link } from "react-router-dom"

export const Top21=()=>{
    return <div>
      <div id="container13">
          <div id="box21">
              <span id="today21">Today at Apple</span>
              <br /> <br />
              <span id="box121">Virtual Sessions</span>
             <div id="para13">Learn the basics of using iPhone live with Apple Creatives.</div>
             <br />
             <Link id="link13" to={"/"}>Sign up</Link>
          </div>
          <div id="side13">
              <img height={"100%"} width={"100%"} src="https://www.apple.com/v/iphone/home/be/images/overview/more-iphone/virtual_sessions__fcxxod3j0v22_large_2x.jpg" alt="" />
          </div>
        </div>
    </div>
}