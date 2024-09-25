// import { createContext } from "react";
// import ChildA from "./ChildA";
// import Mode from "./Mode";



// const Hello= createContext();
// const Hello1= createContext()
// const App=()=>{
//   return(
//     <>
//     <h1>This is chjkhjahdf</h1>
//     <Hello.Provider value={"React js"}>
//     <ChildA/>
//     </Hello.Provider>

//     <Hello1.Provider  value={"useContex"}>
//       <ChildA/>
//     </Hello1.Provider>

//     <Mode/>
   
//     </>
//   )
// }

// export default App;
// export {Hello,Hello1}

import Mode from "./Mode";

const App=()=>{
  return(
    <>
    <Mode/>
    </>
  )
}

export default App;