import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");

export const addTransferPhoto = createAsyncThunk("user/addTransferPhoto", async (data) => {
  console.log(data, "dattt");

  try {
    const token = JSON.parse(localStorage.getItem("token"));

    let fd = new FormData();
    fd.append("photo", data.file);
    fd.append("type", data.type);
    fd.append("id", data.id);
    const res = await axios.post(
      `${BaseUrl}/api/transferproduct/addtransferphoto`,
      fd,

      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    console.log(res, "reduxx addTransferPhoto");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const addTransferPhotoSlice = createSlice({
  name: "transferPhoto",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [addTransferPhoto.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [addTransferPhoto.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [addTransferPhoto.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default addTransferPhotoSlice.reducer;
