import { createSlice } from "@reduxjs/toolkit";




const CounterSlice= createSlice({
    name:"mycounter",
    initialState:{
        cnt:0
    },


    reducers:{
       
        myincre:(state)=>{
            state.cnt=state.cnt+1
        },

        mydecre:(state)=>{
            state.cnt=state.cnt-1
        },

        myreset:(state)=>{
            state.cnt=0;
        }


    }
})

export default CounterSlice.reducer;
export const{myincre,mydecre,myreset}  = CounterSlice.actions;