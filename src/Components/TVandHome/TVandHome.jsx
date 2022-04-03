import ReactPlayer from "react-player";
import { AccessSlider } from "../AccessSlider/AccessSlider";
import { HomePodmi } from "../HomePodmi/HomePodmi";
import { TVicons } from "../TVicons/TVicons";
import { TvImageSlider } from "../TvImageSlider/TvImageSlider";
import { TvMusicFit } from "../TvMusicFit/TvMusicFit";
import "./TVandHome.css";

export const TVandHome = ()=>{

const TVicon = [{url:"https://www.apple.com/v/tv-home/c/images/chapternav/light/apple_tv_fill_light__dnmd2pmoeviq_large.svg",text1:"Apple TV 4K"},{url:"https://www.apple.com/v/tv-home/c/images/chapternav/light/apple_tv_fill_light__dnmd2pmoeviq_large.svg",text1:"Apple TV HD"},{url:"https://www.apple.com/v/tv-home/c/images/chapternav/light/apple_tv_app_light__f6s7yq5zej2a_large.svg",text1:"Apple TV app"},{url:"https://www.apple.com/v/tv-home/c/images/chapternav/light/apple_tv_plus_light__fjwmgqxuwomu_large.svg",text1:"Apple TV+"},{url:"https://www.apple.com/v/tv-home/c/images/chapternav/light/homepodmini_light__genrqjukfl26_large.svg",text1:"HomePod mini"},{url:"https://www.apple.com/v/tv-home/c/images/chapternav/light/homekit_light__bu42vvqsjaj6_large.svg",text1:"Home app"},{url:"https://www.apple.com/v/tv-home/c/images/chapternav/light/home_accessories_light__eu5v1y6592eu_large.svg",text1:"Accessories"}];

const roomfilling = [{p1:"HomePod mini",p1Img:"",p2:"Room-filling sound in every room.",p3:"$99",url:"https://www.apple.com/v/tv-home/c/images/overview/room_filling_sound__zagu3551kwyi_large.jpg"},{p1:"",p1Img:"https://www.apple.com/v/tv-home/c/images/overview/apple_tv_4k_logo__vyjj7uki3tui_large.png",p2:"A higher definition of home entertainment.",p3:"Starting at $179",url:"https://www.apple.com/v/tv-home/c/images/overview/higher_definition__hfivribdc3ue_large.jpg"}];

const tvmovieData = [{url:"https://www.apple.com/v/tv-home/c/images/overview/tv_plus_logo__ftim9r0zkyum_large.png",txt:"Stream award-winning Apple Originals on every screen."},{url:"https://www.apple.com/v/tv-home/c/images/overview/apple_music_logo__fysswdp9i4yi_large.png",txt:"Access all your favorite songs and sing along with lyrics view."},{url:"https://www.apple.com/v/tv-home/c/images/overview/fitness_plus_logo__ejje682nywae_large.png",txt:"From HIIT to Meditation, there’s something for everyone."},{url:"https://www.apple.com/v/tv-home/c/images/overview/apple_arcade_logo__fkj0u4ziuguy_large.png",txt:"Over 200 incredibly fun games. No ads. No in-app purchases."}];




    return (
        <>
         <div className="tvicons">
           {TVicon.map((e)=>(
               <TVicons url={e.url} text1={e.text1} />
           ))}
         </div>
        

        <div className="cartoonImg">
        <img width="110%" height="350px" src="https://www.apple.com/v/tv-home/c/images/overview/hero_tv__d8nngabrofue_large.png"/>
        </div> 


       <div className="futureImgtxt">
           <div>
           {/* width="1400px" */}
           <img  src="https://www.apple.com/v/tv-home/c/images/overview/hero_homepod_appletv_lockup__ecxlvf764zu6_large.png"/>
           </div>
          
           <div>The future hits home.</div>
           <p>Simply connect your favorite devices and transform your house into a remarkably smart,
             convenient, and entertaining home. Control lights, locks, and thermostats with your iPhone
              — or just your voice. Play any song, in any room, from anywhere. And elevate movie night
                   with theater-like picture and sound. All with the security and privacy of Apple.
            </p>
            <h5>Stream Fraggle Rock: Back To The Rock on the Apple TV app</h5>        
       </div>


      <div className="homePod">
          {roomfilling.map((e)=>{
              return (
                  <HomePodmi p1={e.p1} p1Img={e.p1Img} p2={e.p2} p3={e.p3} url={e.url}/>
              )
          })}
      </div>


     <div className="home">
         <div>
         <img src="https://www.apple.com/v/tv-home/c/images/overview/your_home_at_your_command__b1w2tomy2wia_large.jpg" alt="" />
         </div>

         <div>
             <img src="https://www.apple.com/v/tv-home/c/images/overview/home_icon__9u57pp0qahea_large.png"/>
             <p>Home</p>
             <h3>Your home at your command.</h3>
             <p className="holm">Learn more {`>`}</p>
         </div>
     </div>


    <div className="every">Every reason to turn your house into a smart home.</div>

    <TvImageSlider/> 

    <div className="accessorries">Accessories. Around your home and across your devices.</div>

    <p className="sa">Shop accessories {`>`}</p>

    <AccessSlider/>

    <div className="watch"> Watch, sing, play, and work out. On the big screen. </div>

    <div className="tvvideo" >
    <div className="viinn">
    <ReactPlayer fluid={false} width='100%' height='660px' autoPlay={true} playing={true} loop={true} muted={true} url='https://www.apple.com/105/media/us/tv-home/2021/6123d7e6-6428-4838-aa37-65d1c499e3b7/anim/sizzle/large_2x.mp4#t=3.832313' />  
    </div>
    </div>


    <div className="tvmusic">
        {tvmovieData.map((e)=>{
            return (
                <TvMusicFit url={e.url} txt={e.txt} />
            )
        })}
    </div>






       </>
    )
}