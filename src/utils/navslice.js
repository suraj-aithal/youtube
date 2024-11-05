import { createSlice } from "@reduxjs/toolkit";

const navslice = createSlice({
    name:'navslice',
    initialState:{
        ismenuopen:true,
    },
    reducers:{
        togglemenu : (state)=>{
            state.ismenuopen = !state.ismenuopen;
        },
        closemenu : (state) =>{
            state.ismenuopen = false;
        }
    }
})

export const {togglemenu , closemenu} = navslice.actions;
export default navslice.reducer;