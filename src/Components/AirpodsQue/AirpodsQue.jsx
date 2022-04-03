import "../Airpods/Airpods.css";
import {AirpodsQueSingle} from "./AirpodsQueSingle.jsx";

export const AirpodsQue = ()=>{

const Data = [{imgurl:"https://www.apple.com/v/airpods/shared/compare/a/images/compare/compare_airpods_2nd_gen__fw52r8rxrpyu_large_2x.png",p1:"AirPods",p2:"2nd generation",p3:"$129"},
              {imgurl:"https://www.apple.com/v/airpods/shared/compare/a/images/compare/compare_airpods_3rd_gen__dyuzfy04ht0m_large_2x.png",p1:"AirPods",p2:"3rd generation",p3:"$179"},
              {imgurl:"https://www.apple.com/v/airpods/shared/compare/a/images/compare/compare_airpods_pro__e9uzt0mzviem_large_2x.png",p1:"AirPods Pro",p2:"",p3:"$249"},
              {imgurl:"https://www.apple.com/v/airpods/shared/compare/a/images/compare/compare_airpods_max__b14s2x6q07rm_large_2x.png",p1:"AirPods Max",p2:"",p3:"$549"}
            ]



return (
    <>

       <div className="airQueDiv">
          {Data.map((e)=>{    
            return  <AirpodsQueSingle imgurl={e.imgurl} p1={e.p1} p2={e.p2} p3={e.p3} />
         })}
       </div>

    </>
)


}