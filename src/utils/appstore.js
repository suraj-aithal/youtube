import { configureStore } from "@reduxjs/toolkit";
import navslice from "./navslice";

const store = configureStore({
    reducer:{
        app:navslice
    }
})

export default store