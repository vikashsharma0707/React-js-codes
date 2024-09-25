


const Soldout=()=>{
    const Fruits = [
        { name: "apple", price: 100,soldout:false },
        { name: "banana", price: 200 ,soldout:true },
        { name: "mango", price: 300 ,soldout:false },
        { name: "pineapple", price: 400,soldout:true  },
        { name: "orange", price: 500,soldout:false  }
      ];
    
      let display = Fruits.map(({name,price,soldout}) => {
        return (
          <>
            
              <li>
                {name}, {price} ,{soldout?"Soldout":"Available"}
                </li>
        
          </>
        );
      });
    
      return (
        <>
          {display}
        </>
      );
    
}

export default Soldout