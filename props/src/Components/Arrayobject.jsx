



const Arrayobject=()=>{

    const Fruits =[
        
           { name:"mango",price:100},
           { name:"Apple",price:200},
           { name:"orange",price:300},
           { name:"mango",price:400},
           { name:"pineapple",price:500}
            
        
    ]


    const display=Fruits.map((key)=>{
        return(
            <>
              <li>{key.id} {key.name} ${key.price}</li>
              
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

export default Arrayobject