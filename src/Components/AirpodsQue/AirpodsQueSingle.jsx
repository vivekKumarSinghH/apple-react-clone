export const AirpodsQueSingle = ({imgurl,p1,p2,p3})=> {





    return(
        <>

    <div className="airque" >
    <img width='350px' height='700px'  className="airQueimg" src={imgurl} alt="img"/>  
	<div className="textonairQue">
    <p>{p1}</p>
    <p>{p2}</p>
    <p>{p3}</p>
    </div>				
   
    <div>
        <button className="airQuebuy">Buy</button>
        <p className="airQuelm"> Learn more {'>'} </p>
    </div>

    </div>  
  
        </>
    )

}