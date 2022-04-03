export const TVicons = ({url,text1})=>{
    return (
        <>
            <div>
               <img width='32px' height='54px' className="img" src={url} alt="img"/>
               <p className="p1">{text1}</p>
            </div>
        </>
    )
}