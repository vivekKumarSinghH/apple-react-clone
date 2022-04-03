import "./styles/top19.css"
import { Link } from "react-router-dom"

export const Top19=()=>{
    return <div>
        <div id="container19">
         <div>
             <div id="indiv19">
                <span id="box119">
                Switching to iPhone
is super simple.
                    </span> 
                    <br /> <br />
                    <Link id="link19" to={"/"}>Learn more</Link>
             </div>
             <div id="bottomimg19">
                 <img height={"100%"} width={"100%"} src="https://www.apple.com/v/iphone/home/be/images/overview/why-iphone/switching_to_iphone__e3oz9r418awm_large_2x.jpg" alt="" />
             </div>
         </div>
         <div>
             <div id="privacydiv">
                 <img height={"100%"} width={"100%"} src="https://www.apple.com/v/iphone/home/be/images/overview/why-iphone/privacy__cum61s425o6e_large_2x.png" alt="" />
             </div>
             <div id="bottom19">
                 <span id="box119">Privacy</span>
                 <div id="para19">What you share should be up to you.</div>
                 <br />
                 <Link id="link19" to={"/"}>Learn more</Link>

             </div>
         </div>
        </div>
    </div>
}