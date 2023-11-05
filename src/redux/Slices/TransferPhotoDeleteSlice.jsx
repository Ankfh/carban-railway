import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");

export const deleteTransferPhoto = createAsyncThunk(
  "product/deleteTransferPhoto",
  async (data) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));

      console.log(data.id, "dattt");
      let fd = new FormData();
      fd.append("name", data.typee);
      fd.append("id", data.id);
      const res = await axios.delete(
        `${BaseUrl}/api/transferproduct/deletetransferphoto`,

        {
          headers: { Authorization: "Bearer " + token },
          data: fd,
        }
      );
      console.log(res, "reduxx deleteTransferPhoto");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteTransferPhotoSlice = createSlice({
  name: "deleteTransferPhoto",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [deleteTransferPhoto.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [deleteTransferPhoto.fulfilled]: (state, action) => {
      state.loading = false;
      //   state.data = action.payload;
    },
    [deleteTransferPhoto.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default deleteTransferPhotoSlice.reducer;
