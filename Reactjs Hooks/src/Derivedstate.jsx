import { useState } from "react";




const Derivedstate=()=>{

    const [data,setdata] =useState([
        
    {name:"java" ,subject:"java "},
    {name:"phython" ,subject:"phython"},
    {name:"mern" ,subject:"mern"},
    {name:"react" ,subject:"react"},
    {name:"javascript" ,subject:"javscript"}
    
    ]);

    const Usercount= data.length;
    const averagedata = data.reduce((accum,curele)=>accum+curele,0)/Usercount;
         
    

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
            <h1>User Number : {Usercount}</h1>
            <h1>average  : {averagedata}</h1>
         </div>
        
        </>
    )
}

export default Derivedstate;