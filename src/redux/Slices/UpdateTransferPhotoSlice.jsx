import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");

export const updateTransferPhoto = createAsyncThunk(
  "user/updateTransferPhoto",
  async (data) => {
    console.log(data, "dattt");

    try {
      const token = JSON.parse(localStorage.getItem("token"));

      let fd = new FormData();
      fd.append("photo", data.file);
      fd.append("type", data.type);
      fd.append("id", data.id);
      fd.append("status", data.status);

      const res = await axios.post(
        `${BaseUrl}/api/transferproduct/updatetransferphoto`,
        fd,

        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log(res, "reduxx updateTransferPhoto");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const updateTransferPhotoSlice = createSlice({
  name: "updateTransferPhoto",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [updateTransferPhoto.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [updateTransferPhoto.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [updateTransferPhoto.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default updateTransferPhotoSlice.reducer;
