import "./ImageSlider.css"

export const SingleImage = ({image,txt})=>{


    return (
        <>
              <div className="singleBox">
              <div className="img-box">
                 <img src={image} alt="" className="slider-image"/>
              </div>
              <p>{txt}</p>
              </div>
        </>
    )
   
}