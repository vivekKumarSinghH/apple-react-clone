import "./styles/top1.css"
import { Link } from "react-router-dom"

export const Top1=()=>{
    return <div>
        <div id="container1">
           <div id="contend1">
               <img width={"120px"} src="https://www.apple.com/v/watch/at/images/overview/series-7/logo_watch_s7__dnxp9zoaom82_large_2x.png" alt="" />
               <br />
               <span id="box1">
               Full screen ahead.
               </span>
               <br /> <br />
               <span id="price1">From $399</span>
               <br />
               <br />
               <button id="button1">Buy</button>
             
           </div>
           <div id="imgDiv1">
               <img height={"100%"} width={"90%"} src="https://www.apple.com/v/watch/at/images/overview/series-7/hero_s7__ep2maoos292e_large_2x.jpg" alt="" />
           </div>
        </div>
        {/* Next */}

        <div id="container2">
             <img id="img2" src="https://www.apple.com/v/watch/at/images/overview/display/display_s3__f9n138ohv7e6_large_2x.jpg" alt="" />
            <div id="right2">
                <br />
                <span id="topt2">Our largest display yet.</span>
               <div id="text2">Over 50% more screen area than Series 3.

               </div>
               <div id="btn2">
               <div id="btn-1-2">Series-7</div>
               Series 3
            </div>
            </div>
           
            </div>  
       




    </div>
}