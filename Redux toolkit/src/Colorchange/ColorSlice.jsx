import { createSlice } from "@reduxjs/toolkit";



const ColorSlice = createSlice({
    name:"mycolor",
    initialState:{
        mycl:"red"
    },


    reducers:{

        Changecolor:((state,actions)=>{
             state.mycl=actions.payload
        })
    }

})

export default ColorSlice.reducer;
export const{Changecolor}=ColorSlice.actions;