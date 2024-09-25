import { useContext, useState } from "react";
import Usercontext from "../Context/Usercontext";




const Login=()=>{

  const [username,setusername] =useState("");
  const [password,setpassword] =useState("");

  
  const {setuser} =useContext(Usercontext)

  const handlesubbmit=(e)=>{
    e.preventDefault
    setuser({username,password})
  }

  return(
    <>
    <h1>This is App page</h1>
    Enter name <input type="text" value={username}  onChange={(e)=>{setusername(e.target.value)}}/>
    <br/><br/>
    Enter password <input type="text" value={password}  onChange={(e)=>{setpassword(e.target.value)}}/>

    <button onClick={handlesubbmit}>Subbmit</button>
    </>
  )
}

export default Login;