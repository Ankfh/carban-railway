import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  dataError: [],
};

export const errorsDataSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    addDataError: (state, action) => {
      const { data1, data2, data3, data4 } = action.payload;
      if (data1 == "error") {
        state.dataError.unshift({
          type: data1,
          id: data2,
          url: data3,
          _id: data4,
        });
      }
      if (data1 == "download") {
        state.dataError.unshift({ type: data1, photo: data2, name: data3 });
      }
      console.log(action.payload, "action reduz");

      // state.Bills.unshift({ file, fileSize, active: true });
    },
  },
});

export const { addDataError } = errorsDataSlice.actions;

export default errorsDataSlice.reducer;
