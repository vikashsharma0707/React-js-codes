
import { useState } from "react"
import Usercontext from "./Usercontext"

const Userprovider=({children})=>{
    const [user,setuser]=useState(0)
    return(
        <>
          <Usercontext.Provider  value={{user,setuser}}>
            {children}
          </Usercontext.Provider>
        </>
    )
}

export default Userprovider