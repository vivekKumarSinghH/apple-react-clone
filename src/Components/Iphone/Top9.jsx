
import "./styles/top9.css"
import { Link } from "react-router-dom"

export const Top9=()=>{
    return <div>
        <div id="container9">
        <div id="topcont9"><span>Special carrier deals at Apple</span>
        <div id="bottom9">Save up to $800 on
iPhone 13 and iPhone 13 Pro
after trade‑in.5</div>
        
        </div>
        <div id="icons9">
            <div>
                <img height={"93px"} width={"100%"} src="https://www.apple.com/v/iphone/home/be/images/overview/retail/logo_att__b4yop8gfjb7m_large_2x.jpg" alt="" />
            </div>
            <div>
                <img width={"100%"} height={"93px"} src="https://www.apple.com/v/iphone/home/be/images/overview/retail/logo_t_mobile_sprint__3phs4chyz0ym_large_2x.jpg" alt="" />
            </div>
            <div>
                <img height={"93px"} width={"100%"} src="https://www.apple.com/v/iphone/home/be/images/overview/retail/logo_verizon__e5z2thzgmeuu_large_2x.jpg" alt="" />
            </div>
        </div>
        <div id="icons91">
          <div>Save up to $800</div>
          <div>Get $400 ‑ $850 in credit</div>
          <div>Save up to $440</div>
        </div>
        <button id="button9">Find your deal</button>
        <p className="des9" >Our Specialists can help you shop — online or in store.  <Link id="link9" to={"/"} > Connect with an iPhone Specialist</Link>  </p>
        </div>
    </div>
}