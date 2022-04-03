import "./TvImageSlider.css"

export const SingleImage = ({image,txt1,txt2})=>{


    return (
        <>
              <div className="TvsingleBox">
              <p>{txt1}</p>
              <p>{txt2}</p>
              <div className="Tvimg-box">
                 <img src={image} alt="" className="slider-image"/>
              </div>
              </div>
        </>
    )
   
}