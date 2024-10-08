import { configureStore } from "@reduxjs/toolkit";
import data from "./ColorSlice"



const store = configureStore({
    reducer:{
        mycolor:data
    }
})

export default store;
