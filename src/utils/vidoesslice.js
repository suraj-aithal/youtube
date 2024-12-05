import { createSlice } from "@reduxjs/toolkit";

const videosslice = createSlice({
    name:"videos",
    initialState:{
        videolist:[]
    },
    reducers:{
        addvideos: (state,action) => {
            state.videolist = action.payload
        },
        deletevideos: (state) =>{
            state.videolist = null
        }
    }
})

export const {addvideos,deletevideos} = videosslice.actions;
export default videosslice.reducer;