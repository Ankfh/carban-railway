import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");

export const addPhoto = createAsyncThunk("user/addPhoto", async (data) => {
  // console.log(data, "dattt");

  try {
    const token = JSON.parse(localStorage.getItem("token"));

    let fd = new FormData();
    fd.append("photo", data.file);
    fd.append("type", data.type);
    const res = await axios.post(
      `${BaseUrl}/api/product/productphotoadd`,
      fd,

      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    console.log(res, "reduxx addPhoto");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const addPhotoSlice = createSlice({
  name: "addPhoto",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [addPhoto.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [addPhoto.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [addPhoto.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default addPhotoSlice.reducer;
