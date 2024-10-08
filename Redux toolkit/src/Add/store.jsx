import { configureStore } from "@reduxjs/toolkit";
import data from "./CounterSlice"



const store= configureStore({
    reducer:{
        mycounter:data
    }
})

export default store;