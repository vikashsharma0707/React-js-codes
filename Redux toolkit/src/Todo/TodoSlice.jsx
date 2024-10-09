import { createSlice } from "@reduxjs/toolkit";




const Todoslie= createSlice({

  name:"taskadd",
  initialState:{
    mytask:[]
  },


  reducers:{
      
    addtask:((state,actions)=>{
       state.mytask.push(actions.payload)
    })


  }

})

export default Todoslie.reducer;
export const{addtask}=Todoslie.actions;