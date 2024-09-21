

const Listrendering = () => {

    const Fruits = [
      { name: "apple", price: 100 },
      { name: "banana", price: 200 },
      { name: "mango", price: 300 },
      { name: "pineapple", price: 400 },
      { name: "orange", price: 500 }
    ];
  
    let display = Fruits.map(({name,price}) => {
      return (
        <>
          {price > 300 ? (
            <div>
              {name}, {price}
            </div>
          ) : null}
        </>
      );
    });
  
    return (
      <>
        {display}
      </>
    );
  }
  
  export default Listrendering;
  


 //This is second method
//   const Listrendering = () => {

//     const Fruits = [
//       { name: "apple", price: 100 },
//       { name: "banana", price: 200 },
//       { name: "mango", price: 300 },
//       { name: "pineapple", price: 400 },
//       { name: "orange", price: 500 }
//     ];
  
//     let display = Fruits.map((key) => {
//       return (
//         <>
//           {key.price > 300 ? (
//             <div key={key.name}>
//               {key.name}, {key.price}
//             </div>
//           ) : null}
//         </>
//       );
//     });
  
//     return (
//       <>
//         {display}
//       </>
//     );
//   }
  
//   export default Listrendering;
  