import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";







const Layout=()=>{
    const navigate =useNavigate();
    return(
        <>
         <Header/>

         <Outlet/>
         <button onClick={()=>navigate("/About")}>click here</button>
         {/* <button onClick={()=>navigate("/About",{replace:true})}>click here</button> */}

         <Footer/>
        </>
    )
}

export default Layout;