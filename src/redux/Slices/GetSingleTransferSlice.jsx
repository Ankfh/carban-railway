import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");

export const gerSingleTransfer = createAsyncThunk(
  "user/gerSingleTransfer",
  async (data) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));

      const res = await axios.get(
        `${BaseUrl}/api/transferproduct/getsingletransfer/${data}`,

        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log(res, "reduxx gerSingleTransfer");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const gerSingleTransferSlice = createSlice({
  name: "singleTransfer",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [gerSingleTransfer.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [gerSingleTransfer.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [gerSingleTransfer.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default gerSingleTransferSlice.reducer;
