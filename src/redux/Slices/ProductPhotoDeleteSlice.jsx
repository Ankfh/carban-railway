import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");

export const deleteProductPhoto = createAsyncThunk(
  "product/deleteProductPhoto",
  async (data) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));

      console.log(data, "dattt");
      let fd = new FormData();
      fd.append("name", data);
      const res = await axios.delete(
        `${BaseUrl}/api/product/deleteproductphoto`,

        {
          headers: { Authorization: "Bearer " + token },
          data: fd,
        }
      );
      console.log(res, "reduxx deleteProductPhoto");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteProductPhotoSlice = createSlice({
  name: "deleteProductPhoto",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [deleteProductPhoto.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [deleteProductPhoto.fulfilled]: (state, action) => {
      state.loading = false;
      //   state.data = action.payload;
    },
    [deleteProductPhoto.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default deleteProductPhotoSlice.reducer;
