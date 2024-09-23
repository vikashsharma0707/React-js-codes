import { useState } from "react";



const Spread=()=>{

    const [user,setuser] =useState(
        {
            firstname:"",
            lastname:"",
            mobilenumber:"",
            password:"",
            email:""
        }
    )

    const handlechange=(e)=>{

        const name=e.target.name;
        const value=e.target.value
        setuser((data)=>({...data,[name]:value}))

    }

    const handlesubbmit=(e)=>{
        
        console.log(user)
    }



    return(
        <>

        <h1>this is form handling Page by using spread operator</h1>
        <input type="text" name="firstname" value={user.firstname}  onChange={handlechange} />
        <br/><br/>
        <input type="text"    name="lastname" value={user.lastname} onChange={handlechange}/>
        <br/><br/>
        <input type="text" name="mobilenumber" value={user.mobilenumber} onChange={handlechange}/>
        <br/><br/>
        <input type="text" name="password" value={user.password} onChange={handlechange} />
        <br/><br/>
        <input type="text" name="email" value={user.email} onChange={handlechange} />
        <br/><br/>
        <button onClick={handlesubbmit}>Save Data</button>
        
        </>
    )
}

export default Spread;
