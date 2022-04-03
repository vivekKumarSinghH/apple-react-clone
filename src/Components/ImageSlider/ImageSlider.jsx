// import { useState } from "react";
import "./ImageSlider.css";
import { SingleImage } from "./SingleImage";

export function ImageSlider() {


const data = [{image:"https://www.apple.com/v/airpods/q/images/overview/tile_onetap_setup__fzj1m8dhjoq6_large.jpg",txt:"One-tap setup"},{image:"https://www.apple.com/v/airpods/q/images/overview/tile_automatic_switching__etjisgj91gk2_large.jpg",txt:"Automatic switching"},{image:"https://www.apple.com/v/airpods/q/images/overview/tile_audio_sharing__ord9ku1kssq6_large.jpg",txt:"Audio Sharing"},{image:"https://user-images.githubusercontent.com/91543059/160870609-5ec521e3-7cfb-49b0-bde6-b79963e8b4e1.png",txt:"Always-on Siri"},{image:"https://www.apple.com/v/airpods/q/images/overview/tile_announce_notifications__f2jmuafd1wey_large.jpg",txt:"Announce Notifications"}];


return (
    <>
       
     <div className="ImgSlider">
         {data.map((e,i)=> (
            <SingleImage image={e.image} txt={e.txt}/>
         )
         )}
     </div>     
    

    </>
)

}



 












