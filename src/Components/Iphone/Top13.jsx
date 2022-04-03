import "./styles/top13.css"
import { Link } from "react-router-dom"

export const Top13=()=>{
    return <div>
        <div id="container13">
          <div id="box13">
              <span id="box113">MagSafe</span>
             <div id="para13">Snap on a magnetic case, wallet, or both. And get faster wireless charging.</div>
             <br />
             <Link id="link13" to={"/"}>Shop MagSafe accessories</Link>
          </div>
          <div id="side13">
              <img height={"100%"} width={"100%"} src="https://www.apple.com/v/iphone/home/be/images/overview/accessories/magsafe__bfji5hb1mqsy_large_2x.jpg" alt="" />
          </div>
        </div>
        
    </div>
}