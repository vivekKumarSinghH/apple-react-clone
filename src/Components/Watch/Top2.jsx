import "./styles/top2.css"
import { Link } from "react-router-dom"

export const Top2=()=>{
    return <div>
        <div id="container13">
          <div id="box13">
              <img width={"130px"} src="https://www.apple.com/v/watch/at/images/overview/se/logo-watch-se__soyna2pegxeq_large_2x.png" alt="" />
              <br />
              <span id="box113">Heavy on features.
Light on price.</span>
             <div id="para13">From $279</div>
            <div id="buttons2">
                <button id="btn3">Buy</button>
            <Link id="link13" to={"/"}>Learn more</Link>
            </div>
            
          </div>
          <div id="side13">
              <img height={"100%"} width={"100%"} src="https://www.apple.com/v/watch/at/images/overview/se/tile-watch-se__knji2d25x8qe_large_2x.jpg" alt="" />
          </div>
        </div>
        
    </div>
}