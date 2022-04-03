import "../Airpods/Airpods.css";

export function Icons() {

const iconData = [{url:"https://www.apple.com/v/airpods/q/images/chapternav/airpods_2gen_light__ckwbqlgv1r9e_large.svg",text1:"AirPods",text2:"2nd Generation"},{url:"https://www.apple.com/v/airpods/q/images/chapternav/airpods_3gen_light__6r7zooyk4lua_large.svg",text1:"AirPods", text2:"3rd Generation"},{url:"https://www.apple.com/v/airpods/q/images/chapternav/airpods_pro_light__ets5a19rt3au_large.svg",text1:"AirPods Pro"},{url:"https://www.apple.com/v/airpods/q/images/chapternav/airpods_max_light__cvaaddhgazqu_large.svg",text1:"AirPods Max"},{url:"https://www.apple.com/v/airpods/q/images/chapternav/airpods_compare_light__cmuvdvbxj1w2_large.svg",text1:"Compare"},{url:"https://www.apple.com/v/airpods/q/images/chapternav/apple_music_light__fexraacz3dme_large.svg",text1:"Apple Music"}];



return (

<div className="dis">
    {iconData.map((e)=> (
        <div className="iconText">
           <img width='32px' height='54px' className="img" src={e.url} alt="img"/>
           <p className="p1">{e.text1}</p>
           <p className="p2">{e.text2}</p>
        </div>
      
    ))}
</div>


)


}