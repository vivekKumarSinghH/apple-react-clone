import "./styles/top5.css"
import {Button1} from "./styledComponents/Button1"
import { Link } from "react-router-dom"
export const Top5=()=>{
   return <div>
       <div id="container5">
           <div id="whichDiv5">
           <span id="which5">Which iPhone is right for you?</span>
           </div>
         
        <div id="boxesDiv5">
            <div>
                <img id="img-5" height={"250px"} src="https://www.apple.com/v/iphone/home/be/images/overview/compare/compare_iphone_13_pro__bpn3x8hs692a_small.jpg" alt="" />
                <img id="colorsvar5" src="https://www.apple.com/v/iphone/home/be/images/overview/compare/swatch_iphone_13_pro__dwe0m1kjylsi_small_2x.png" alt="" />
               <br /> <span id="new5">New</span>
               <br /><img id="logo5" width={"120px"} src="https://www.apple.com/v/iphone/home/be/images/overview/hero/iphone_13_pro_logo__cnrg1x0bkk2u_small_2x.png" alt="" />
               <br /> <span id="iphonetxt5">The ultimate iPhone.</span>
              <br /> <br /> <br /> <span id="price5">From $999</span>
              <br />
            <button id="button5">Buy</button>
            <br />
            <br />
            <Link id="link5" to={"/"}>Learn more </Link>
           
            </div>
            <div>
            <img id="img-5" height={"20px"} src="https://www.apple.com/v/iphone/home/be/images/overview/compare/compare_iphone_13__fqzwhmfmroey_small_2x.jpg" alt="" />
                <img id="colorsvar5" src="https://www.apple.com/v/iphone/home/be/images/overview/compare/swatch_iphone_13__cr1wl9d1b5aq_medium_2x.png" alt="" />
               <br /> <span id="new5">New</span>
               <br /><img id="logo5" width={"120px"} src="https://www.apple.com/v/iphone/home/be/images/overview/hero/iphone_13_logo__d3hio8hp6r2a_small_2x.jpg" alt="" />
               <br /> <span id="iphonetxt5">A total powerhouse.</span>
              <br /> <br /> <br /> <span id="price5">From $699**</span>
              <br />
            <button id="button5">Buy</button>
            <br />
            <br />
            <Link id="link5" to={"/"}>Learn more </Link>
           
            </div>
            <div>
            <img id="img-5" height={"250px"} src="https://www.apple.com/v/iphone/home/be/images/overview/compare/compare_iphone_se__d5blqx1pgymq_large_2x.jpg" alt="" />
            <br />
                <img id="colorsvar5-3" src="https://www.apple.com/v/iphone/home/be/images/overview/compare/swatch_iphone_se__bygc73yqw22u_large_2x.png" alt="" />
               <br /> <span id="new5">New</span>
               <br /><img id="logo5" width={"120px"} src="https://www.apple.com/v/iphone/home/be/images/overview/compare/logo_iphone_se__m265le0wq0q6_large_2x.png" alt="" />
               
               <br /> <span id="iphonetxt5">Serious power. Serious value.</span>
              <br /> <br /> <br /> <span id="price5">From $429</span>
              <br />
            <button id="button5">Buy</button>
            <br />
            <br />
            <Link id="link5" to={"/"}>Learn more </Link>
            </div>
            <div>
            <img id="img-5" height={"250px"} src="https://www.apple.com/v/iphone/home/be/images/overview/compare/compare_iphone_12__dz3sv9lzdzu6_large_2x.jpg" alt="" />
                <img id="colorsvar5" src="https://www.apple.com/v/iphone/home/be/images/overview/compare/swatch_iphone_12__e9bv45wax2ie_large_2x.png" alt="" />
               <br /> <span id="new5">New</span>
               <br /><img id="logo5" width={"120px"} src="https://www.apple.com/v/iphone/home/be/images/overview/compare/logo_iphone_12__cctwzbt7tsmq_large_2x.png" alt="" />
               <br /> <span id="iphonetxt5">As amazing as ever.</span>
              <br /> <br /> <br /> <span id="price5">From $599**</span>
              <br />
            <button id="button5">Buy</button>
            <br />
            <br />
            <Link id="link5" to={"/"}>Learn more </Link>
            </div>
        </div>
       </div>
   </div>
}