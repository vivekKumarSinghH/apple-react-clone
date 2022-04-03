export const HomePodmi = ({p1,p1Img,p2,p3,url})=>{
    return(
        <>
          <div className="hopod">
              <div>
                 <p>{p1}</p>
                 <img src={p1Img}/>
                 <h3>{p2}</h3>
                 <p className="pri">{p3}</p>
              </div>

              <div className="btntxt">
                  <button>Buy</button>
                  <p>Learn more {'>'}</p>
              </div> 

              <img className="outImg" src={url}/>
              
          </div>
        </>
    )
}