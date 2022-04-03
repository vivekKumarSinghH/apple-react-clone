import React from 'react'
import { Link } from 'react-router-dom'
import ip from "../assets/13.png"
import se from "../assets/se.png"
import be from "../assets/b.jpg"
import Carts from './carts'
function Home() {

  const myStyle={
    backgroundImage: 
`url(${be})`,

backgroundSize: "100% 100%"
    
};


  return (
    <div>
    <div className="bg-[#f5f5f7] font-medium px-10 py-2 text-[#1D1D1f] text-[14px] text-center">
    <p>Get No Cost EMI for 3, 6 or 12 months with qualifying Credit Cards from most leading banks. <span className="text-blue-700">Learn more {" >"} </span> 
    </p>
    </div>

<Link to="/13">
    <div  className="text-center my-10">
    
    <h1 className="text-6xl font-bold">
    iPhone 13 Pro</h1>


    <h2 className="text-xl font-semibold mt-2">Oh. So. Pro.</h2>

    <p><span className="text-blue-700  font-semibold hover:underline ">Learn more  {" >"}	</span> 
    
    <span className="text-blue-700 font-semibold hover:underline ml-6 ">  Buy {" >"}</span> </p>
   
   <img src ={ip} alt="iph"className="scale-150 mt-10 sm:scale-100" />

    </div>

    </Link>


    
<Link to="/133">
<div  className="text-center my-10">

<p className="text-xl font-bold ">The new 	</p>
<h1 className="text-6xl font-bold ">
    iPhone <span className="text-5xl border-2 rounded-md ">SE</span> </h1>



<h2 className="text-xl font-semibold mt-2">Love the power. Lover the price.</h2>

<p><span className="text-blue-700  font-semibold hover:underline ">Learn more {" >"} 	</span> 

<span className="text-blue-700 font-semibold hover:underline ml-6 ">  Buy {" >"}</span> </p>

<img src ={se} alt="se" className="scale-150 mt-10 sm:scale-100" />

</div>

</Link>

<Link to="/n">
<div className="h-screen  ">
<div style={myStyle} className=" text-center bg-contain   bg-no-repeat h-[70%]  md:h-[80%] w-full " >

<p className="text-2xl text-white font-semibold p-2">An Apple Original Film</p>
<p className="text-6xl text-white font-semi">CODA</p>
<p className="text-2xl font-bold text-white mt-60 md:mt-96 px-20 ">WINNER OF 3 ACADEMY AWARDS INCLUDING BEST PICTURE</p>
<p className="text-2xl font-semibold text-white  ">Stream now </p>


</div>
</div>

</Link>

<Link to="/carts">
<Carts/>
</Link>


    
    </div>
  )
}

export default Home