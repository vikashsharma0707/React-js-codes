import { configureStore } from "@reduxjs/toolkit";
import data from "./TodoSlice"


const store = configureStore({
    reducer:{
        taskadd:data
    }
})

export default store;