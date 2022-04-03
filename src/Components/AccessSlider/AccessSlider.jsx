import "./AccessSlider.css";
import { SingleImage } from "./SingleImage";

export function AccessSlider() {


const data = [{image:"https://www.apple.com/v/tv-home/c/images/overview/lighting__bwpnaru6q1w2_large.jpg",p1:"Lighting",p2:"Put your routine on a timer. Or set the mood with bulbs and switches.",p3:"Shop Lights & Bulbs, Outlets, and Switches >",p4:"Nanoleaf A19 Bulb"},{image:"https://www.apple.com/v/tv-home/c/images/overview/security__dbctk5zp4gcy_large.jpg",p1:"Security",p2:"Keep an eye on what matters most with cameras, doorbells, and more.",p3:"Shop Cameras and Sensors >",p4:"Logitech Circle View Wired Doorbell"},{image:"https://www.apple.com/v/tv-home/c/images/overview/comfort__bnwbuouyz10i_large.jpg",p1:"Comfort",p2:"Turn up the heat or keep your cool with temperature controls and fans.",p3:"Shop Thermostats >",p4:"ecobee SmartThermostat with Voice Control"},{image:"https://www.apple.com/v/tv-home/c/images/overview/entry__bfom4g78kbg2_large.jpg",p1:"Entry",p2:"Unlock more ways to access your home with locks and garage door openers.",p3:"Shop Sensors and Locks1 >",p4:"Yale Assure Lock SL Touchscreen Deadbolt – Black"}];

return (
    <>
       
     <div className="AcImgSlider">
         {data.map((e)=> (
            <SingleImage image={e.image} p1={e.p1} p2={e.p2} p3={e.p3} p4={e.p4}/>
         )
         )}
     </div>     
    

    </>
)

}



 












