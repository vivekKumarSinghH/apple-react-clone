
import "./styles/top22.css"
import { Link } from "react-router-dom"

export const Top22=()=>{
    return <div>
        <div id="container22">
            <div id="div122">
                <div id="imgdiv22">
                    <img height={"100%"} width={"100%"} src="https://www.apple.com/v/iphone/home/be/images/overview/more-iphone/bundle__dlqe12erfzsm_large_2x.jpg" alt="" />
                </div>
            </div>
            <div id="div122">
                <div id="appleImg22">
                    <img height={"100%"} width={"100%"} src="https://www.apple.com/v/iphone/home/be/images/overview/more-iphone/apple_one__cq8ojsqxitea_large_2x.jpg" alt="" />
                </div>
                <div id="bottom22">
                    <span id="para22">
Apple One
Bundle up to six Apple services. And enjoy more for less.</span>
<br />
                 <Link id="link22" to={"/"}>Try it free      Learn more</Link>
                </div>
            </div>
            
        </div>
    </div>
}