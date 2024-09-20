
import Home from "./Home";
import About from "./About";



const App=()=>{
  return(
    <>
    <Home/>
    {/* here we call the components many times */}
    <Home/>
    <About/>
    <About/>
    
    </>
  )
}

export default App;