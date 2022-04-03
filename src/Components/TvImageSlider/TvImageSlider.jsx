import "./TvImageSlider.css";
import { SingleImage } from "./SingleImage";

export function TvImageSlider() {


const data = [{image:"https://www.apple.com/v/tv-home/c/images/overview/control_your_home__ftcaw216qjqm_large.jpg",txt1:"Easily control your home from anywhere with your favorite devices.",txt2:"Learn more about the Home app >"},{image:"https://www.apple.com/v/tv-home/c/images/overview/seemlessly_connected__fp9rabi8a7u6_large.jpg",txt1:"Seamlessly connected entertainment in every room.",txt2:"Learn more about HomePod mini >"},{image:"https://user-images.githubusercontent.com/91543059/160870609-5ec521e3-7cfb-49b0-bde6-b79963e8b4e1.png",txt1:"Run it all with your voice.",txt2:"Learn more about Siri >"},{image:"https://www.apple.com/v/tv-home/c/images/overview/security_and_privacy__bzlguj2x29jm_large.jpg",txt1:"All with the security and privacy of Apple.",txt2:"Learn more about Privacy >"}];

return (
    <>
       
     <div className="TvImgSlider">
         {data.map((e,i)=> (
            <SingleImage image={e.image} txt1={e.txt1} txt2={e.txt2}/>
         )
         )}
     </div>     
    

    </>
)

}



 












