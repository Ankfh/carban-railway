import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  dataError: [],
};

export const AddDownloadPopData = createSlice({
  name: "addAdminPhoto",
  initialState,
  reducers: {
    addDataphoto: (state, action) => {
      const { photos ,id ,  name } = action.payload;
     
      state.dataError.unshift({ photos ,id , name});
    },
  },
});

export const { addDataphoto } = AddDownloadPopData.actions;

export default AddDownloadPopData.reducer;
