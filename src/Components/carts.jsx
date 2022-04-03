import React from 'react'
// import { Link } from 'react-router-dom'\

import ipad from "../assets/ipad.jpg"
import ci from "../assets/ci.jpg"
import cw from "../assets/cw.jpg"
import cm from "../assets/cm.jpg"
function Carts() {
  return (
      <div className ="grid  md:grid-cols-2">



      
    <div className="mb-6">

    <div className="text-center ">
    
    
      <p className="text-4xl font-bold" >Studio Display</p>
      <p className="text-xl font-semibold">A sight to be bold.</p>
     
        <p className="mt-6 text-blue-700 font-semibold " >Learn more {">"} <span>Buy{" >"}</span></p>

        </div>
      <img alt ="i" className="w-[60%] md:w-[65%] m-auto mt-8" src="https://www.apple.com/v/mac/home/bl/images/overview/hero/studio_display__cn9qj5umkwya_large.jpg"/>
     
    

    </div>



    <div className="mb-6">

    <div className="text-center ">
    
    
      <p className="text-4xl font-bold" >Mac Studio</p>
      <p className="text-xl font-semibold">Empower station</p>
     
        <p className="mt-6 text-blue-700 font-semibold " >Learn more {">"} <span>Buy{" >"}</span></p>

        </div>
      <img alt ="i" className=" w-[60%] md:w-[65%] m-auto mt-8" src="https://www.apple.com/v/mac/home/bl/images/overview/hero/mac_studio__c2wojtx43pw2_large.jpg"/>
     
    

    </div>


    <div className="mb-6 bg-black p-4">

    <div className="text-center text-white">
    
    
      <p className="text-4xl font-bold" >iPad air</p>
      <p className="text-xl font-semibold">Light. Bright. Full of might.</p>
     
        <p className="mt-6 text-blue-700 font-semibold " >Learn more {">"} <span>Buy{" >"}</span></p>

        </div>
      <img alt ="i" className=" m-auto mt-8" src={ipad}/>
     
    

    </div>

    
    <div className="mb-6 ">

    <div className="text-center ">
    
    
      <p className="text-4xl font-bold" >iPhone 13</p>
      <p className="text-xl font-semibold">Your new superpower.</p>
     
        <p className="mt-6 text-blue-700 font-semibold " >Learn more {">"} <span>Buy{" >"}</span></p>

        </div>
      <img alt ="i" className="m-auto mt-8" src={ci}/>
     
    

    </div>
    {/* first section end */}
   
    <div className="mb-6 ">

    <div className="text-center ">
    
    
      <p className="text-4xl font-bold" >WATCH</p>
      <p className="text-xl font-semibold text-red-600">SERIES 7</p>
      <p className="text-xl font-semibold">It's our largest display yet.</p>
     
        <p className="mt-6 text-blue-700 font-semibold " >Learn more {">"} <span>Buy{" >"}</span></p>

        </div>
      <img alt ="i" className="m-auto mt-8" src={cw}/>
     
    

    </div>

    <div className="mb-6 ">

    <div className="text-center ">
    
    
      <p className="text-4xl font-bold px-40" >A global supply chain led by our values.</p>
     
        <p className="mt-6 text-blue-700 font-semibold " >Learn more {">"} <span>Buy{" >"}</span></p>

        </div>
      <img alt ="i" className="m-auto mt-8" src={cm}/>
     
    

    </div>

  </div>
  )
}

export default Carts