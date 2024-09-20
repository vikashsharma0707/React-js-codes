

// This is the first type to retrun the value
/*const Component = () => {
    const name=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem"
     let subject= "hello";

     let age =16;
   
      if(age>=18){
        return (
            <>
            
              <h2>Name :{name}</h2>
              <h1>Subject :{subject}</h1>
              <button>not avilable</button>
              
            </>
          )
      }


      return (
        <>
          
          <h2>Name :{name}</h2>
          <h1>Subject :{subject}</h1>
          <button>watch now</button>
          <h1>this is greater than 18</h1>
          
        </>
      )
  
 
};*/





// with the help of ternary operator
/*const Component = () => {
    const name=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem"
     let subject= "hello";

     let age =19;
   


      return (
        <>
          
          <h2>Name :{name}</h2>
          <h1>Subject :{subject}</h1>
          <button>{(age>=18? "watch now":"unavailable")}</button>
          
          
        </>
      )
  
 
};*/


/*const Component = () => {
    const name=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem"
     let subject= "hello";

     let age =16;
     let  canwatch ="not avilable"

    if(age>=18)canwatch=  "watch now"


      return (
        <>
          
          <h2>Name :{name}</h2>
          <h1>Subject :{subject}</h1>
          <button>{}canwatch</button>
          <h1>this is greater than 18</h1>
          
        </>
      )
  
 
};*/



const Component = () => {
    const name=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem"
     let subject= "hello";

     let age =19;

     function canwatch(){
        if(age>=18){
            return "watch now"
        }

        else{
            return "not avilable"
        }
     }



      return (
        <>
          
          <h2>Name :{name}</h2>
          <h1>Subject :{subject}</h1>
          <button>{canwatch()}</button>
          
          
        </>
      )
  
 
};










export default Component;
