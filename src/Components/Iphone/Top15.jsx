import { Link } from "react-router-dom";
import "./styles/top15.css"

export const Top15=()=>{
    return <div>
        <div id="container15">
         <div id="inDiv15">
             <span id="box115">AirPods</span>
             <div id="para15">Explore all AirPods models and find the best ones for you.</div>
             <br />
             <Link id="link15" to={"/"}>Learn more</Link>
         </div>
        </div>
    </div>
}