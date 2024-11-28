import { createSlice } from "@reduxjs/toolkit";

const searchslice = createSlice({
    name:'searchslice',
    initialState:{
       
    },
    reducers:{
      Cacheresults : (state,action)=>{
        state = Object.assign(state,action.payload)
    }
}
})

export const {Cacheresults} = searchslice.actions;
export default searchslice.reducer;