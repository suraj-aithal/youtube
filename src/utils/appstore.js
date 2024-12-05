import { configureStore } from "@reduxjs/toolkit";
import navslice from "./navslice"; 
import searchslice from "./searchslice";  
import chatslice from "./chatslice"
import videoslice from "./vidoesslice"

const store = configureStore({
  reducer: {
    app: navslice,    
    search: searchslice,
    chat:chatslice,
    video:videoslice
  }
});

export default store;
