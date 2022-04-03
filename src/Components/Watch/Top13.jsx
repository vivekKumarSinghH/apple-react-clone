import "./styles/top13.css"
import { Link } from "react-router-dom"


export const Top13=()=>{
    return <div>
        <div id="container16">
     
        <div id="rowsDiv16">
            <div>
                <img width={"50px"} src="https://www.apple.com/v/iphone/home/be/images/overview/buystrip/icon_delivery__f4vnk0swb0eq_large_2x.png" alt="" />
                <br />
                <span id="delivery16">Free delivery</span>
                <div id="para16">
And free returns. See checkout
for delivery dates.</div>
                <br />
                 <Link id="link16" to={"/"}>Learn more</Link>
            </div>
            <div>
            <img width={"50px"} src="https://www.apple.com/v/iphone/home/be/images/overview/buystrip/icon_financing__cz6p4nvq3a4i_large_2x.png" alt="" />
                <br />
                <span id="delivery16">Pay monthly at 0% APR</span>
                <div id="para16">You can pay over time when you choose to check out with Apple Card Monthly Installments.*</div>
                <br />
                 <Link id="link16" to={"/"}>Learn more</Link>
            </div>
          
        </div>
           
           <div id="nextDiv">Get more out of Apple Watch</div>
       
        </div>
    </div>
}