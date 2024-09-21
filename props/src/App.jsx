import Hello from "./Components/Hello";
import Destructuring from "./Components/Destructuring";
import Arrayprops from "./Components/Arrayprops";
import Arrayvalue from "./Components/Arrayvalue";
import Arrayrendering from "./Components/Arrayrendering";
import Arrayobject from "./Components/Arrayobject";
import Component2 from "./Components/Component2";


const App=()=>{

  const person={
        name:"java",
        subject:"java fullstack"
  }

  const array=[1,2,3,4,5]

  
  return(
    <>
     
  <Hello name="jay" message="I am a full stack developer "  subject="React JS" discription="Full stack developer"  city="Bhopal"/>
  <h1 style={{backgroundColor:"blue",width:"400px"}}>This is Destructuring props</h1>
  <Destructuring name="Rahul" message="I am a full stack developer "  subject="React JS" discription="Full stack developer"  city="Bhopal"         />
  <h1 style={{backgroundColor:"blue",width:"400px"}}>This is Array props</h1>
    <Arrayprops    person={person}/>
    <h1 style={{backgroundColor:"blue",width:"400px"}}>This is Array props</h1>
    <Arrayvalue name="Rahul" message="I am a full stack developer "  subject="React JS" discription="Full stack developer"  city="Bhopal"  array={array}/>
    <h1 style={{backgroundColor:"blue",width:"400px"}}>This is Arraylist rendering</h1>
    <Arrayrendering/>
    <h1 style={{backgroundColor:"blue",width:"400px"}}>This is Array object rendering</h1>
    <Arrayobject/>
    <h1 style={{backgroundColor:"blue",width:"400px"}}>This is Array  rendering</h1>
    <Component2/>

    
    </>
  )
}

export default App;