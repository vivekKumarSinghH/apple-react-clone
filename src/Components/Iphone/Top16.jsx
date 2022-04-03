import "./styles/top16.css"
import { Link } from "react-router-dom"
import { Top17 } from "./Top17"

export const Top16=()=>{
    return <div>
        <div id="container16">
        <p id="link16">Shop all iPhone accessories</p>
        <div id="rowsDiv16">
            <div>
                <img width={"50px"} src="https://www.apple.com/v/iphone/home/be/images/overview/buystrip/icon_delivery__f4vnk0swb0eq_large_2x.png" alt="" />
                <br />
                <span id="delivery16">Free next‑day delivery</span>
                <div id="para16">On any in‑stock iPhone ordered by 5:00 p.m. Or pick up available items at an Apple Store.</div>
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
            <div>
            <img width={"50px"} src="https://www.apple.com/v/iphone/home/be/images/overview/buystrip/icon_personal_session__e6a44cdlylm6_large_2x.png" alt="" />
                <br />
                <span id="delivery16">Get help buying</span>
                <div id="para16">Have a question? Call a
Specialist or chat online.
Call 1‑800‑MY‑APPLE</div>
                <br />
                 <Link id="link16" to={"/"}>Learn more</Link>
            </div>
        </div>
        <Top17/>
        </div>
    </div>
}