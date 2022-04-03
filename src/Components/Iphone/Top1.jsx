import "./styles/top1.css"
import {Button1} from "./styledComponents/Button1"
import { Link } from "react-router-dom"

export const Top1=()=>{
    return <div>
        <div id="firstTopDiv">
            <div id="content"> 
            <img height={"10px"} width={"150px"} src="https://www.apple.com/v/iphone/home/be/images/overview/hero/iphone_13_pro_logo__cnrg1x0bkk2u_small_2x.png" alt="" />
           
            <span id="font">Oh.So.Pro.</span>
            <br />
            <p id="btext">From $41.62/mo. for 24 mo. or $999 before trade‑in1</p>
            <br />
            <div id="buttonDiv">
            <Button1/> <br /> 
            <Link id="link" to={"/"}>Learn more </Link>
            </div>
            </div>
            <img id="img-1" width={"800px"} src="https://www.apple.com/v/iphone/home/be/images/overview/hero/iphone_13_pro_hero__gqclakbze4a6_large_2x.png" alt="" />
            <div>
           
            </div>
        </div>
       
    </div>
}