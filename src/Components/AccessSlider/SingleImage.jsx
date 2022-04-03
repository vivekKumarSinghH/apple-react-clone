import "./AccessSlider.css"

export const SingleImage = ({image,p1,p2,p3,p4})=>{


    return (
        <>
              <div className="AcsingleBox">
              <p>{p1}</p>
              <p>{p2}</p>
              <p>{p3}</p>
              <div className="Acimg-box">
                 <img src={image} alt="" className="slider-image"/>
              </div>
              <p>{p4}</p>
              </div>
        </>
    )
   
}