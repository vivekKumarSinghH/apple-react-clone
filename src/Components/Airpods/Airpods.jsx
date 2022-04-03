import ReactPlayer from "react-player";  // npm i react-player 
import { Icons } from "../AirpodIcons/AirpodIcons";
import { AirpodsQue } from "../AirpodsQue/AirpodsQue";
import { Features } from "../Features/Features";
import { Hours } from "../Hours/Hours";
import { ImageSlider } from "../ImageSlider/ImageSlider";
import "./Airpods.css";





export function Airpod() {

const featureData = [{img:"",txt:"-"},{img:"https://www.apple.com/v/airpods/shared/compare/a/images/compare/icon_spatial_audio__kmoa5vlnkdmm_large_2x.png",txt:"Spatial audio with dynamic head tracking 4"},{img:"https://www.apple.com/v/airpods/shared/compare/a/images/compare/icon_spatial_audio__kmoa5vlnkdmm_large_2x.png",txt:"Spatial audio with dynamic head tracking 4"},{img:"https://www.apple.com/v/airpods/shared/compare/a/images/compare/icon_spatial_audio__kmoa5vlnkdmm_large_2x.png",txt:"Spatial audio with dynamic head tracking 4"},
                     {img:"",txt:"-"},{img:"",txt:"-"},{img:"https://user-images.githubusercontent.com/91543059/161094805-87689d50-aefd-4f9c-93d5-278bbde4951d.png",txt:"Active Noise Cancellation and Transparency mode"},{img:"https://user-images.githubusercontent.com/91543059/161094805-87689d50-aefd-4f9c-93d5-278bbde4951d.png",txt:"Active Noise Cancellation and Transparency mode"},
                     {img:"",txt:"-"},{img:"https://www.apple.com/v/airpods/shared/compare/a/images/compare/icon_water_resistent__6yj92ikcoiaa_large_2x.png",txt:"Sweat and water resistant 5"},{img:"https://www.apple.com/v/airpods/shared/compare/a/images/compare/icon_water_resistent__6yj92ikcoiaa_large_2x.png",txt:"Sweat and water resistant 5"},{img:"",txt:"-"},
                     {img:"https://www.apple.com/v/airpods/shared/compare/a/images/compare/icon_wireless_charging__e0t56m5mbxci_large_2x.png",txt:"Lightning charging"},{img:"https://www.apple.com/v/airpods/shared/compare/a/images/compare/icon_wireless_charging__e0t56m5mbxci_large_2x.png",txt:"MagSafe, wireless, and Lightning charging 6"},{img:"https://www.apple.com/v/airpods/shared/compare/a/images/compare/icon_wireless_charging__e0t56m5mbxci_large_2x.png",txt:"MagSafe, wireless, and Lightning charging 6"},{img:"https://www.apple.com/v/airpods/shared/compare/a/images/compare/icon_wireless_charging__e0t56m5mbxci_large_2x.png",txt:"Lightning charging"},
                    ] 

const hourData = [{hour:"5 hrs",txt:"Up to 5 hours of listening time with a single charge 7"},{hour:"6 hrs",txt:"Up to 6 hours of listening time with a single charge 7"},{hour:"4.5 hrs",txt:"Up to 4.5 hours of listening time with a single charge 7"},{hour:"20 hrs",txt:"Up to 20 hours of listening time with a single charge 7"}];


return(
    <>
    
    <Icons/>

    <div className="get">Get 6 months of Apple Music free with your AirPods.* <span className="check"> Check eligibility {'>'} </span> </div>

    <div className="video" >
    <ReactPlayer fluid={false} width='100%' height='800px'  Border-radius='10px' autoPlay={true} playing={true} loop={true} muted={true} url='https://www.apple.com/105/media/us/airpods/2021/625e09e3-e26e-49ed-a5ee-6e4eda5d275f/anim/supercut/large_2x.mp4' />  
    </div>
						
	<div className="textonVid">
    <p>AirPods</p>
    <p>3rd generation</p>
    <p>$179</p>
    </div>				
   
    <div>
        <button className="buy">Buy</button>
        <p className="lm"> Learn more {'>'} </p>
    </div>




    <div className="whiair" >
    <img width='410px' height='500px' className="limg" Border-radius='10px' src='https://www.apple.com/v/airpods/q/images/overview/airpods_pro_left__bvanpj0ujnf6_large.png' alt="img"/>  
    <img width='410px' height='500px' className="rimg" Border-radius='10px' src='https://www.apple.com/v/airpods/q/images/overview/airpods_pro_right__fm0wwisa76em_medium.png' alt="img"/> 
    </div>
						
	<div className="textonImg">
    <p>AirPods Pro</p>
    <p>$249</p>
    </div>				
   
    <div>
        <button className="buy1">Buy</button>
        <p className="lm1"> Learn more {'>'} </p>
    </div>





    
    <div className="airMaxImg" >
    <img width='535px' height='592px'  Border-radius='10px' src='https://www.apple.com/v/airpods/q/images/overview/airpods_max__f265q4g4ddym_large.png' alt="img"/>  
    </div>
						
	<div className="airMax">
    <img src="https://www.apple.com/v/airpods/q/images/overview/airpods_max_logo__bdgdixidcqcy_large.jpg" alt="img"/>
    <p>$549</p>
    </div>				
   
    <div>
        <button className="airbuy">Buy</button>
        <p className="airlm"> Learn more {'>'} </p>
    </div>
    






    <div className="airp" >
    <div >
    <img width='350px' height='700px'  className="airplimg" Border-radius='10px' src='https://www.apple.com/v/airpods/q/images/overview/airpods_2ndgen_left__gjpt8k836yy6_large.png' alt="img"/>  
    </div>
    <img width='310px' height='718px' className="airprimg" Border-radius='10px' src='https://www.apple.com/v/airpods/q/images/overview/airpods_2ndgen_right__gahfggwvcx6q_large.png' alt="img"/> 
    </div>
						
	<div className="textonairp">
    <p>AirPods</p>
    <p>2nd generation</p>
    <p>$129</p>
    </div>				
   
    <div>
        <button className="airpbuy">Buy</button>
        <p className="airplm"> Learn more {'>'} </p>
    </div>





   <div className="maco">A magical connection to 
   <div> your devices. </div>
   </div>
  

  <ImageSlider/>

  <p className="que"> Which AirPods are  </p> 
  <p className="que mt"> right for you? </p>


<AirpodsQue/>


  <div className="featuresDiv">
  {featureData.map((e)=> {
     return <>
        
         <Features img={e.img} txt={e.txt} />
     </>
  })}
  </div>



  <div className="hourDiv">
  {hourData.map((e)=> {
     return <>
    
         <Hours hour={e.hour} txt={e.txt} />
     </>
  })}
  </div>


<div className="cm">Compare all AirPods models {`>`}</div>


    </>
)

    

}