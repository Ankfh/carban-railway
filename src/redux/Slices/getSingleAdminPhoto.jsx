import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");

export const getAdminPhoto = createAsyncThunk(
  "user/getAdminPhoto",
  async (data) => {

    console.log(data,'reduxadmin')
    try {
      const token = JSON.parse(localStorage.getItem("token"));

      const res = await axios.get(
        `${BaseUrl}/api/admin/getadminphoto/${data}`,

        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log(res, "reduxx getAdminPhoto");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getAdminPhotoSlice = createSlice({
  name: "adminPhoto",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getAdminPhoto.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [getAdminPhoto.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getAdminPhoto.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default getAdminPhotoSlice.reducer;
