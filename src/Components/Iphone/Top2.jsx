import "./styles/top2.css"
import {Button1} from "./styledComponents/Button1"
import { Link } from "react-router-dom"

export const Top2=()=>{
    return <div>
        <div id="firstTopDiv2">
            <div id="content2"> 
            <img height={"10px"} width={"100px"} src="https://www.apple.com/v/iphone/home/be/images/overview/hero/iphone_13_logo__d3hio8hp6r2a_small_2x.jpg" alt="" />
            <br />
            <span id="font">Your new superpower.</span>
            <br />
            <p id="btext">From $29.12/mo. for 24 mo. or $699 before trade‑in1</p>
            <br />
            <div id="buttonDiv2">
            <Button1/>
            <Link id="link" to={"/"}>Learn more </Link>
            </div>
            </div>
            <img id="img-2" width={"800px"} src="https://www.apple.com/v/iphone/home/be/images/overview/hero/iphone_13_hero__c7g09yt0mjcm_large_2x.png" alt="" />
            <div>
           
            </div>
        </div>
        <div></div>
    </div>
}

