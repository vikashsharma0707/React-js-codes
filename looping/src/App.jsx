import data from "../db/db.json"


const App=()=>{

 let ans= data.map((key)=>{
    return(
        <>
        <h1>{key.id}</h1>
        <h1>{key.name}</h1>
        <img src={key.image}  style={{width:"100px",height:"100px"}}/>
        <h4>{key.rating}</h4>
        <p>{key.discription}</p>
        <a href={key.watch} ><button>Watch now</button></a>
        </>
    )
 })
    return(
        <>

        <h1 style={{alignItems:"center",justifyContent:"center",marginLeft:"40%"}}>This is Looping in React JSX</h1>
        
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
            {ans}
        </div>


        
        
        </>
    )
}


export default App;