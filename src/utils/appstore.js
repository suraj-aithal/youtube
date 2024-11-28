import { configureStore } from "@reduxjs/toolkit";
import navslice from "./navslice"; 
import searchslice from "./searchslice";  

const store = configureStore({
  reducer: {
    app: navslice,    
    search: searchslice
  }
});

export default store;
