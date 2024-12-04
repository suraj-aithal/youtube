import { createSlice } from "@reduxjs/toolkit";

const chatslice = createSlice({
    name:"chat",
    initialState:{
        message : []
    },
    reducers:{
        addmessage: (state,action) =>{
            state.message.splice(10,1);
            state.message.unshift(action.payload)
        }
    }
})

export const {addmessage} = chatslice.actions;
export default chatslice.reducer;