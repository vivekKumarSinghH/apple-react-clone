export const Features = ({img,txt})=>{


    return(
        <>
          <div className="gridItem">
             <div>
              {img!== ""?  <img src={img} /> :"" }
             </div>
             <p>{txt}</p>
          </div>
        
        
        </>
    )
} 