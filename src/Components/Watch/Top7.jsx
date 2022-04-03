import "./styles/top7.css"
import { Link } from "react-router-dom"

export const Top7=()=>{
    return <div>
        <div id="container7">
            <div id="inDiv-7">
                <img width={"350px"} src="https://www.apple.com/v/watch/at/images/overview/fitness-plus/logo_fitness_plus__b7eq6fhq3cc2_large_2x.png" alt="" />
                <div id="para-7">Get 3 months free when you
buy an Apple Watch.9</div>
        <div id="links-7">
            <Link to={"/"} id="link-7" >Shop Apple Watch</Link>
            <br />
            <Link to={"/"} id="link-7">Learn about Apple Fitness+</Link>
        </div>
            </div>
        </div>
    </div>
}