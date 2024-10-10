import { useNavigate } from "react-router-dom";



const Error=()=>{
    const navigate=useNavigate();
    return(
        <>
        
          <h1>Page not found :404 Error</h1>
          <button  onClick={()=>{navigate("/Home")}}>Go to home page</button>
        </>
    )
}

export default Error;