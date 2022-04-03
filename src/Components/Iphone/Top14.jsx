import "./styles/top14.css"
import { Link } from "react-router-dom"

export const Top14=()=>{
    return <div>
        <div id="container14">
         <div id="img14">
             <img  height={"100%"} width={"100%"} src="https://www.apple.com/v/iphone/home/be/images/overview/accessories/airtag__b5lt0bcbd9ua_large_2x.jpg" alt="" />
         </div>
         <div id="box14">
             <div id="box214">
             <span id="box114">AirTag</span>
             <div id="para14">Snap on a magnetic case, wallet, or both. And get faster wireless charging.</div>
             <br />
             <Link id="link14" to={"/"}>Buy Learn more</Link>
             </div>
             
            

          </div>
        </div>
    </div>
}