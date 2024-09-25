import Home from "./Home";
import About from "./About";


const Render=()=>{

const display= true;

if(display){
    return(
        <>
           <Home/>
        </>
    )
}

else{
    return(
        <>
          <About/>
        
        </>
    )
}


   
}
export default Render