// store should be js file
//it is not a react component

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const store = configureStore({
    reducer:{
        counterSlice            //only things in export default will be imported defaultly, i.e. createSlice.reducers
    }
})
export default store 