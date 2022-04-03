import React from "react";
import mac from "../assets/mac.png";
import ips from "../assets/ips.png";
import ipads from "../assets/ipads.png";
import aw from "../assets/aw.png";
import ap from "../assets/ap.png";
import at from "../assets/at.png";
import atv from "../assets/atv.png";
import homepod from "../assets/homepod.png";
import acc from "../assets/acc.png";
import { Link } from "react-router-dom";

import "./Store.css";

function Store() {


  const airpods=[
    {
      title:"AirPods (3rd generation)",
      price:"300",
      img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1632861342000"
  
  },
  {
    title:"AirPods Pro",
    price:"350",
    img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP22?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1591634795000"
},
{
  title:"HomePod mini -Orange",
  price:"120",
  img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-mini-select-orange-202110?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1632925511000"
},
{
  title:"AirPods Max -silver",
  price:"820",
  img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-silver-202011?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1604021221000"},

  ]

  const accessories=[
    {
      title:"iPhone 13 Pro Silicone Case with MagSafe - Nectarine",
      price:"90",
      img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MN683?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1645997365583"
  },
  {
    title:"iPhone SE Silicone Case  - Chalk Pink",
  
    price:"80",
    img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MN6G3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1645509710532"},


    {
      title:"iPhone 13 Silicone Case with MagSafe  - Blue Fog",
    
      price:"85",
      img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MN613?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1645847133062"},

      
      {
        title:"iPhone Leather Wallet  with MagSafe  - Wisteria ",
      
        price:"79",
        img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MM0W3?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1629865215000"},

        {
          title:"45mm Flamingo Braided Solo Loop  - Size-6",
        
          price:"99",
          img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MN1L3ref?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1645079879837"},


          {
            title:"AirTag Leather Loop  - Forest Green",
          
            price:"59",
            img:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MM013?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1624640873000"},
  
  ]



  return (
    <div>
      <div className="bg-[#f5f5f7] font-medium px-10 py-2 text-[#1D1D1f] text-[14px] text-center">
        <p>
          Get No Cost EMI for 3, 6 or 12 months with qualifying Credit Cards
          from most leading banks.{" "}
          <span className="text-blue-700">Learn more {" >"} </span>
        </p>
      </div>

      <div className=" bg-[#f5f5f7] ">
        <div className="ml-[10%]  md:ml-[16%] p-8 ">
          <p className="text-gray-500 text-6xl font-semibold mb-12 md:max-w-[60%]">
            <span className="text-black">Store.</span>
            The best way to buy the products you love.
          </p>

          <div className="flex  gap-6 mt-10 py-8" id="divs">
            <Link to="/mac" className="w-[140px] h-[120px] text-center ">
              <img src={mac} alt="v" className="h-[80%]" />

              <p className="mt-4 font-semibold hover:underline">Mac</p>
            </Link>

            <Link to="/iphone" className="w-[140px] h-[120px] text-center ">
              <img src={ips} alt="v" className="h-[80%]" />

              <p className="mt-4 font-semibold hover:underline">iPhone</p>
            </Link>

            <Link to="/ipad" className="w-[140px] h-[120px] text-center ">
              <img src={ipads} alt="v" className="h-[80%]" />

              <p className="mt-4 font-semibold hover:underline">iPad</p>
            </Link>

            <Link to="/watch" className="w-[140px] h-[120px] text-center ">
              <img src={aw} alt="v" className="h-[80%]" />

              <p className="mt-4 font-semibold hover:underline"> Apple Watch</p>
            </Link>

            <Link to="/airpods" className="w-[140px] h-[120px] text-center ">
              <img src={ap} alt="v" className="h-[80%]" />

              <p className="mt-4 font-semibold hover:underline">AirPods</p>
            </Link>
            <Link to="/airtag" className="w-[140px] h-[120px] text-center ">
              <img src={at} alt="v" className="h-[80%]" />

              <p className="mt-4 font-semibold hover:underline">AirTag</p>
            </Link>

            <Link to="/appletv" className="w-[140px] h-[120px] text-center ">
              <img src={atv} alt="v" className="h-[80%]" />

              <p className="mt-4 font-semibold hover:underline">Apple TV</p>
            </Link>

            <Link to="/homepod" className="w-[140px] h-[120px] text-center ">
              <img src={homepod} alt="v" className="h-[80%]" />

              <p className="mt-4 font-semibold hover:underline">HomePod mini</p>
            </Link>

            <Link to="/accessories" className="w-[140px] h-[120px] text-center ">
              <img src={acc} alt="v" className="h-[80%]" />

              <p className="mt-4 font-semibold hover:underline">Accessories</p>
            </Link>
          </div>
        </div>

        <div className=" ml-[10%] md:ml-[16%] mt-12 ">
          <p className="text-gray-500 text-4xl font-semibold px-4  ">
            <span className="text-black ">The latest.</span>
            Take a look at what's new rightnow.
          </p>

          <div className="flex  gap-6 mt-2 p-4" id="divs">
            <Link
              to="/13"
              style={{
                backgroundImage:
                  "url('https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-13-pro-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645052290504')",
              }}
              className="w-[400px] h-[500px] bg-white  shadow-lg rounded-2xl hover:scale-105 duration-500"
            >
              <div className="p-10">
                <p className="font-semibold text-gray-500">IPHONE 13 PRO</p>
                <p className="text-2xl font-semibold text-black">
                  Oh. So. Pro.
                </p>
                <p className="text-xl font-semibold text-gray-500">
                  Now in Alpine Green. From $1299.00
                </p>
              </div>
            </Link>

            <Link
              to="/ipad"
              style={{
                backgroundImage:
                  "url('https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-air-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645636337374')",
              }}
              className="w-[400px] h-[500px] bg-white  shadow-lg rounded-2xl hover:scale-105 duration-500"
            >
              <div className="p-10 text-white">
                <p className="font-semibold ">IPAD AIR</p>
                <p className="text-2xl font-semibold ">
                  Light. Bright. Full of might.
                </p>
                <p className="text-xl font-semibold ">From $899.00</p>
              </div>
            </Link>

            <Link
              to="/macstudio"
              style={{
                backgroundImage:
                  "url('https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-mac-studio-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645043848581')",
              }}
              className="w-[400px] h-[500px] bg-white  shadow-lg rounded-2xl hover:scale-105 duration-500"
            >
              <div className="p-10">
                <p className="font-semibold text-gray-500">MAC STUDIO</p>
                <p className="text-2xl font-semibold text-black">
                  Empower station
                </p>
                <p className="text-xl font-semibold text-gray-500">
                  From $2599.00
                </p>
              </div>
            </Link>

            <Link
              to="/display"
              style={{
                backgroundImage:
                  "url('https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-studio-display-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645043848762')",
              }}
              className="w-[400px] h-[500px] bg-white  shadow-lg rounded-2xl hover:scale-105 duration-500"
            >
              <div className="p-10">
                <p className="font-semibold text-gray-500">STUDIO DISPLAY</p>
                <p className="text-2xl font-semibold text-black">
                  A sight to be bold
                </p>
                <p className="text-xl font-semibold text-gray-500">
                  From $1799.00
                </p>
              </div>
            </Link>

            <Link
              to="/se"
              style={{
                backgroundImage:
                  "url('https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-se-202203_GEO_EMEA?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645721593443')",
              }}
              className="w-[400px] h-[500px] bg-white  shadow-lg rounded-2xl hover:scale-105 duration-500"
            >
              <div className="p-10">
                <p className="font-semibold text-gray-500">IPHONE SE</p>
                <p className="text-2xl font-semibold text-black">
                  Love the power. Love the price.
                </p>
                <p className="text-xl font-semibold text-gray-500">
                  From $699.00
                </p>
              </div>
            </Link>

            <Link
              to="/13"
              style={{
                backgroundImage:
                  "url('https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-13-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645052290452')",
              }}
              className="w-[400px] h-[500px] bg-white  shadow-lg rounded-2xl hover:scale-105 duration-500"
            >
              <div className="p-10">
                <p className="font-semibold text-gray-500">IPHONE 13</p>
                <p className="text-2xl font-semibold text-black">
                  Your new superpower.
                </p>
                <p className="text-xl font-semibold text-gray-500">
                  Now in Green. From $899.00
                </p>
              </div>
            </Link>

            <Link
              to="/watch"
              style={{
                backgroundImage:
                  "url('https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-bands-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645052880599')",
              }}
              className="w-[400px] h-[500px] bg-white  shadow-lg rounded-2xl hover:scale-105 duration-500"
            >
              <div className="p-10">
                <p className="font-semibold text-gray-500">APPLE WATCH BANDS</p>
                <p className="text-2xl font-semibold text-black">
                  New hues in bloom.
                </p>
                <p className="text-xl font-semibold text-gray-500">
                  Shop the latest band styles and colors.
                </p>
              </div>
            </Link>
          </div>
        </div>
     
     
        <div className=" ml-[10%] md:ml-[16%] mt-12 ">
        <p className="text-gray-500 text-4xl font-semibold px-4  ">
          <span className="text-black">The latest.</span>
          Take a look at what's new rightnow.
        </p>

        <div className="flex gap-6 mt-2 p-4 " id="udiv" >
          <Link
            to="/13"
            style={{
              backgroundImage:
                "url('https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-specialist-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1626296836000')",
            }}
            className=" bg-white  shadow-lg rounded-2xl hover:scale-105 duration-500"
          >
            <div className="p-10">
             <p className="text-2xl font-semibold text-black">
               Shop one on one with a Specialist online.
              </p>
              
            </div>
          </Link>

          <div className="flex flex-col gap-4">
          <Link
            to="/ipad"
            style={{
              backgroundImage:
                "url('https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-25-apps-202108?wid=480&hei=240&fmt=p-jpg&qlt=95&.v=1626223748000')",
            }}
            className=" bg-white  shadow-lg rounded-2xl hover:scale-105 duration-500"
          >
            <div className="p-10 ">
              <p className="text-2xl font-semibold text-black ">
                Get to know your new device with a free Personal Session.
              </p>
              </div>
          </Link>

          <Link
            to="/ipad"
            style={{
              backgroundImage:
                "url('https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-25-genius-202108?wid=480&hei=240&fmt=p-jpg&qlt=95&.v=1626384443000')",
            }}
            className=" bg-white  shadow-lg rounded-2xl hover:scale-105 duration-500"
          >
            <div className="p-10 ">
              <p className="text-2xl text-black max-w-[40%] font-semibold ">
              Service and support.We're here to help.
              </p>
            </div>




            
          </Link>
          
          </div>
          

        </div>
      </div>

   



      <div className=" ml-[10%] md:ml-[16%] mt-12 ">
      <p className="text-gray-500 text-4xl font-semibold px-4  ">
        <span className="text-black ">Loud and clear.</span>
        Unparalleled choices for rich,high-quality sound.
      </p>

      <div className="flex  gap-6 mt-2 p-4" id="divs">
        
{airpods.map((e)=>{
        return <Link
          to="/ipad"
          className=" bg-white w-[300px] h-[450px] shadow-lg rounded-2xl  hover:scale-105 duration-500
          "
        >
        <div
        className="w-fit h-[60%] m-auto p-14"> 
        
        <img src={e.img} alt="x" />

        </div>

          <div className="p-8 ">
            <p className=" text-xl font-semibold ">
              {e.title}
            </p>
            <p className=" mt-8 font-semibold text-gray-500 ">MRP ${e.price} (Incl. of all taxes)</p>
          </div>
        </Link>
        
      })
      }
       
      </div>
    </div>
 

    <div className=" ml-[10%] md:ml-[16%] mt-12 ">
    <p className="text-gray-500 text-4xl font-semibold px-4  ">
      <span className="text-black ">Accessories.</span>
       Essentials that pair perfectly with your favourite devices.
    </p>

    <div className="flex  gap-6 mt-2 p-4" id="divs">
      
{accessories.map((e)=>{
      return <Link
        to="/ipad"
        className=" bg-white w-[300px] h-[450px] shadow-lg rounded-2xl  hover:scale-105 duration-500
        "
      >
      <div
      className="w-fit h-[60%] m-auto p-14"> 
      
      <img src={e.img} alt="x" />

      </div>

        <div className="p-8 ">
          <p className=" text-xl font-semibold ">
            {e.title}
          </p>
          <p className=" mt-8 font-semibold text-gray-500 ">MRP ${e.price} (Incl. of all taxes)</p>
        </div>
      </Link>
      
    })
    }
     
    </div>
  </div>

      
  <div className=" ml-[10%] md:ml-[16%] mt-12 ">
        <p className="text-gray-500 text-4xl font-semibold px-4  ">
          <span className="text-black">Do more with Apple products.</span>
          Here's where the fun begins.
        </p>

        <div className="flex gap-6 mt-2 p-4 " id="udiv" >
          <Link
            to="/13"
            style={{
              backgroundImage:
                "url('https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-subscriptions-202108?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1626375547000')",
            }}
            className=" bg-white  shadow-lg rounded-2xl hover:scale-105 duration-500"
          >
            <div className="p-10">
             <p className="text-2xl font-semibold text-black">
              Four Apple services. One easy subscription</p>
              
            </div>
          </Link>

          <Link
            to="/ipad"
            style={{
              backgroundImage:
                "url('https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-homekit-202110_GEO_IN?wid=480&hei=500&fmt=p-jpg&qlt=95&.v=1634069675000')",
            }}
            className=" bg-white  shadow-lg rounded-2xl hover:scale-105 duration-500"
          >
            <div className="p-10 ">
              <p className="text-2xl font-semibold text-black ">
             See how one app  can control your entire home.  </p>
              </div>
          </Link>

          

        </div>
      </div>
      
     
      <div className=" ml-[10%] md:ml-[16%] mt-12 ">
      <p className="text-gray-500 text-4xl font-semibold px-4  ">
        <span className="text-black"> Shop by group. </span>
       Get specially designed pricing.

      </p>

      <div className="flex  mt-4  w-[400px] h-[500px]"  >
        <Link
          to="/13"
          style={{
            backgroundImage:
              "url('https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-edu-202108_GEO_IN?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1627513224000')",
          }}
          className=" bg-white  shadow-lg rounded-2xl hover:scale-105 duration-500"
        >
          <div className="p-10">
           <p className="text-2xl font-semibold text-black">
          Save on Mac or iPad with education pricing.</p>
            
          </div>
        </Link>


        

      </div>
    </div>
    
    <div className=" ml-[10%] md:ml-[16%] mt-12 pb-10 ">

    <p className="text-4xl font-semibold mb-4">
    Quick Links</p>

    <p>
    <span className=" rounded-3xl p-2  px-4 mr-4 bg-gray-300">Order Status</span>
    <span className=" rounded-3xl p-2 px-4 mr-4 bg-gray-300">Shopping Help</span></p>

   </div>
     
      </div>
    </div>
  );
}

export default Store;
