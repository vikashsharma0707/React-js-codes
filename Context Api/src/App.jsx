import { useState } from "react";
import Userproviter from "./Context/Userprovider";
import Login from "./Component/Login";
import Profile from "./Component/Profile";




const App=()=>{

 




  return(
    <>
    <Userproviter>
      <Login/>
      <Profile/>
    </Userproviter>
    </>
  )
}

export default App;