import { createSlice } from "@reduxjs/toolkit";




const Todoslie= createSlice({

  name:"taskadd",
  initialState:{
    mytask:[]
  },


  reducers:{
      
    addtask:((state,actions)=>{
       state.mytask.push(actions.payload)
    }),

    deltask:(state,actions)=>{
      state.mytask=state.mytask.filter(item=>item.id!=actions.payload)
    },

    workct:(state,actions)=>{
      for(var i=0;i<state.mytask.length;i++){
        if(state.mytask[i].id==actions.payload){
          state.mytask[i].complete=true;
        }
      }
    },


    workunct:(state,actions)=>{
       for(var i=0;i<state.mytask.length;i++){
        if(state.mytask[i].id==actions.payload){
          state.mytask[i].complete=false;
        }
       }
    }

    

  }

})

export default Todoslie.reducer;
export const{addtask,deltask,workct,workunct}=Todoslie.actions;