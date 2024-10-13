import { createSlice } from "@reduxjs/toolkit";

const navslice = createSlice({
    name:'navslice',
    initialState:{
        ismenuopen:true,
    },
    reducers:{
        togglemenu : (state)=>{
            state.ismenuopen = !state.ismenuopen;
        }
    }
})

export const {togglemenu} = navslice.actions;
export default navslice.reducer;