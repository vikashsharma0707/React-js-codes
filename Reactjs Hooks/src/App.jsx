import Increment from "./Increment";
import Multiplestate from "./Multiplestate";
import Handleinput from "./Handleinput";
import Multipleinput from "./Multiplehandling";
import Formhandling from "./Formhandling";
import Arrayrender from "./Arrayrender";
import Derivedstate from "./Derivedstate";
import Condition from "./Condition";



const App=()=>{
  return(
    <>
      <h1>This is fisrt app</h1>
      <Increment/>
      <h1>This is multiple state</h1>
      <Multiplestate/>
      <Handleinput/>
      <Multipleinput/>
      <Formhandling/>
      <Arrayrender/>
      <h1>This is derived State</h1>
      <Derivedstate/>
      <h1>This condition for count and add the value of count</h1>
      <Condition/>
     
    </>
  )
}

export default App;