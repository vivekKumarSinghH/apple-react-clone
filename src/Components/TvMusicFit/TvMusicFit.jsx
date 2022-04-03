import "../TVandHome/TVandHome.css"

export const TvMusicFit = ({url,txt})=>{
    return(
        <>
          <div className="tvmusicSingle">
              <img src={url}/>
              <p>{txt}</p>
              <button>Try it free</button>
              <p>Learn more {`>`}</p>
          </div>
        </>
    )
} 