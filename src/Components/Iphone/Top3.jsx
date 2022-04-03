import "./styles/top3.css"
import {Button1} from "./styledComponents/Button1"
import { Link } from "react-router-dom"
export const Top3=()=>{
    return <div>
        <div id="container3" >
            <div id="side3">
                <div id="content3">
                    <span id="new3">New</span>
                    <br />
                    <img id="trdimg" width={"100px"} height={"10px"} src="https://www.apple.com/v/iphone/home/be/images/overview/hero/iphone_se_logo__ii1n5sjcmci2_small_2x.jpg" alt="" />
                    <br />
                   
                    <span id="love3">
                        <span>Love the power.</span>
                        <br />
                        <span id="love4">Love the price.</span>
                    </span>
                    <br />
                    <p id="btext-3">From $17.87/mo. for 24 mo. or $429 before trade‑in1</p>
                    <div id="buttonDiv3">
                    <Button1/>
                    <Link id="link" to={"/"}>Learn more  </Link>
            </div>
                </div>
               
            </div>
            <div id="side3-2">
                <img height={"300px"} src="" alt="" />
            </div>
        </div>
    </div>
}