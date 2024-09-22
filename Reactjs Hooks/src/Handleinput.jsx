import { useState } from "react"



// This is first method form handling input by making onChnage function
// const Handleinput=()=>{

//     const [data,setdata] =useState("")
        
//     const handledata=(e)=>{
//         setdata(e.target.value)
//     }


//     return(
//         <>
//          <div>
//             <h1>This is Input handling</h1>
//             <input type="text" value={data} onChange={handledata} />
//             <h1>Current state value is : {data}</h1>
//          </div>


//         </>
//     )
// }

// export default Handleinput



//This is second method form handling input by giving the of setname function
const Handleinput=()=>{

    const [data,setdata] =useState("")
        
    

    return(
        <>
         <div>
            <h1>This is Input handling</h1>
            <input type="text" value={data} onChange={(e)=>{setdata(e.target.value)}} />
            <h1>Current state value is : {data}</h1>
         </div>


        </>
    )
}

export default Handleinput



