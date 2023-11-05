import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  value: "",
};

export const RestPasswordDefultValueSlice = createSlice({
  name: "default",
  initialState,
  reducers: {
    addDefaultValue: (state, action) => {
      console.log(action.payload, "payloodd");
      if (action.payload) {
        state.value = action.payload;
      }
    },
  },
});

export const { addDefaultValue } = RestPasswordDefultValueSlice.actions;

export default RestPasswordDefultValueSlice.reducer;
