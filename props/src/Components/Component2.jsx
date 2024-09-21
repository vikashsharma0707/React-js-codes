import Componentrendering from "./Componentrendering";



const Component2=()=>{

    const fruits =[
        
        { name:"mango",price:100},
        { name:"Apple",price:200},
        { name:"orange",price:300},
        { name:"mango",price:400},
        { name:"pineapple",price:500}
         
     
 ]


    const display= fruits.map((key)=>{
          return(
            <>
             {/* <h1>{key}</h1> */}
             <Componentrendering    name={key.name} price={key.price}  />
            </>
          )
    })
    return(
        <>
            <div>
                {display}
            </div>
        </>
    )
}
export default Component2;