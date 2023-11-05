import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  Bills: [],
};

export const GoodsBillsSlice = createSlice({
  name: "bills",
  initialState,
  reducers: {
    uploadBill: (state, action) => {
      const { file, fileSize,typeType } = action.payload;
      const iIndex = state.Bills.findIndex((item) => item.name === file.name);
      if (fileSize > 2) {
        return;
      } else {
        state.Bills.push({ file, fileSize,typeType, active: true });
        // state.fileSize.push(fileSize)
      }
    },
    deleteBills: (state, action) => {
      const iIndex = state.Bills.findIndex(
        (item) => item.name === action.payload.file.name
      );
      state.Bills.splice(iIndex, 1);
      // console.log(iIndex , "redux payload")
    },
    deleteAll: (state, action) => {
      state.Bills = [];
    },
  },
});

export const { uploadBill, deleteAll, deleteBills } = GoodsBillsSlice.actions;

export default GoodsBillsSlice.reducer;
