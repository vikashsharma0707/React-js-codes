import { useState } from "react"

const Multipleinput=()=>{

    const [data,setdata] =useState({firstname:"",lastname:""})
        
    


    return(
        <>
         <div>
            <h1>This is Input handling</h1>
            <input type="text" value={data.firstname} onChange={(e)=>{setdata({...data,  firstname: e.target.value})}} />
            <br/>
            <br/>
            <input type="text" value={data.lastname} onChange={(e)=>{setdata({...data,  lastname: e.target.value})}} />
            <p> First name :{data.firstname}</p>
            <p> last name :{data.lastname}</p>
           
         </div>


        </>
    )
}

export default Multipleinput;