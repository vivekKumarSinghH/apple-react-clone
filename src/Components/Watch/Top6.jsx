import "./styles/top6.css"
import { Link } from "react-router-dom"

export const Top6=()=>{
    return <div>
         <div id="container6">
             <div id="inDiv6">
                 <span id="text-1-6">Family Setup</span>
                 <div id="head-6">Your family joined at the wrist.</div>
                 <div id="para-6">Now family members who don‘t have an iPhone can stay in touch with Apple Watch.</div>
                 <div id="buttons-6">
                     <button id="button-6">Learn more</button>
                     <div id="link-6"><Link id="link-6" to={"/"}>
Shop Apple Watch</Link></div>
                     
                 </div>
             </div>
             <div>
                 <img id="img-6" src="https://www.apple.com/v/watch/at/images/overview/family-setup/family_setup__efow9dhr7owi_large_2x.jpg" alt="" />
             </div>
         </div>
    </div>
}