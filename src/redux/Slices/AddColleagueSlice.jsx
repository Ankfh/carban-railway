import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  colleague: [],
};

export const AddColleagueSlice = createSlice({
  name: "colleague",
  initialState,
  reducers: {
    addColleague: (state, action) => {
        console.log(action.payload,"pyyyyyyyyy")
   state.colleague.push(...action.payload)
    },
  
  },
});

export const { addColleague} = AddColleagueSlice.actions;

export default AddColleagueSlice.reducer;
