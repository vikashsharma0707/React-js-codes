import { useState } from "react";




const Arrayrender=()=>{

    const [data,setdata] =useState([
        
    {name:"java" ,subject:"java "},
    {name:"phython" ,subject:"phython"},
    {name:"mern" ,subject:"mern"},
    {name:"react" ,subject:"react"},
    {name:"javascript" ,subject:"javscript"}
    
    ]);

    let display =data.map((key)=>{
      return(
        <>
        <li>
            {key.name},
            {key.subject}

        </li>
        
        </>
      )
    }) 



    return(
        <>
         <div>
            {display}
         </div>
        
        </>
    )
}

export default Arrayrender;