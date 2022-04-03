import { Mac } from "../Components/MacComponent/MacComponent";
import { Routes, Route } from "react-router"
import { Studio } from "../Components/Mac Studio/Studio"
import { Ipad } from "../Components/ipad/Ipad";
import { Checkout } from "../Components/Checkout/Checkout"
import { Payment } from "../Components/Payment/Payment";
import Home from "../Components/Home";
import Store from "../Components/Store";
import {Watch} from "../Components/Watch/Watch/Watch"
import {Iphone} from "../Components/Iphone/Iphone/Iphone"


import { Airpod } from '../Components/Airpods/Airpods';
import { TVandHome } from '../Components/TVandHome/TVandHome';

export const AllRoutes = () => {
    return (
        <>
        
       
            <Routes>


<Route path="/" element={<Home/>}/>
<Route path="/store" element={<Store/>}/>
                <Route path="/mac" element={<Mac />} />
                <Route path="/mac-studio" element={<Studio/>}/>
                <Route path="/ipad" element={<Ipad />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/payment" element={<Payment/>} />
                <Route path="/iphone" element={<Iphone/>} />
                <Route path="/watch" element={<Watch/>} />
                <Route path="/airpods" element={<Airpod/>} />
                <Route path="/tvhome" element={<TVandHome/>} />
            </Routes>
        
        </>
    )
}