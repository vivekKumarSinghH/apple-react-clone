import "./styles/top4.css"

import { Link } from "react-router-dom"
export const Top4=()=>{
   return <div>
       <div id="container5">
           <div id="whichDiv5">
           <span id="which5">Which Apple Watch is right for you?</span>
           </div>
         <div id="box-5"> 
        <div id="boxesDiv5">
        
            <div>
            <img height={"250px"} src="https://www.apple.com/v/watch/at/images/compare/compare_s7__dqi9jnwa4sq6_large_2x.jpg" alt="" />;
            <br />
                <img id="colorsvar5" src="https://www.apple.com/v/iphone/home/be/images/overview/compare/swatch_iphone_13__cr1wl9d1b5aq_medium_2x.png" alt="" />
              
               <br /> <span id="iphonetxt5">Apple Watch Series 7</span>
              <br /> <br /> <br /> <span id="price5">From $399</span>
              <br />
            <button id="button5">Buy</button>
            <br />
            <br />
            <Link id="link5" to={"/"}>Learn more </Link>
           
            </div>
            <div>
            <img height={"250px"} src="https://www.apple.com/v/watch/at/images/compare/compare_se__fjdos6x4rmmy_large_2x.jpg" alt="" />
            <br />
                <img id="colorsvar5-3" src="https://www.apple.com/v/iphone/home/be/images/overview/compare/swatch_iphone_se__bygc73yqw22u_large_2x.png" alt="" />
               
               
               <br /> <span id="iphonetxt5">Apple Watch SE</span>
              <br /> <br /> <br /> <span id="price5">From $229</span>
              <br />
            <button id="button5">Buy</button>
            <br />
            <br />
            <Link id="link5" to={"/"}>Learn more </Link>
            </div>
            <div>
            <img height={"250px"} src="https://www.apple.com/v/watch/at/images/compare/compare_s3__f6gqpfe5rdea_large_2x.jpg" alt="" />
              <br />
                <img id="colorsvar5" src="https://www.apple.com/v/iphone/home/be/images/overview/compare/swatch_iphone_12__e9bv45wax2ie_large_2x.png" alt="" />
            
               <br /> <span id="iphonetxt5">Apple Watch Series 3</span>
              <br /> <br /> <br /> <span id="price5">From $199</span>
              <br />
            <button id="button5">Buy</button>
            <br />
            <br />
            <Link id="link5" to={"/"}>Learn more </Link>
            </div>
        </div>
        </div>
       </div>
       <div id="pics4">
        <img width={"100%"} height={"100%"} src="https://i.pinimg.com/originals/b4/89/93/b48993c5b3d8a4ad85e0c9dbd36a5215.jpg" alt="" />
       </div>
       <div id="pics4">
        <img width={"100%"} height={"100%"} src="https://i.pinimg.com/originals/d8/f5/87/d8f5879d8507d2772f4895a55c15a301.jpg" alt="" />
       </div>
   </div>
}