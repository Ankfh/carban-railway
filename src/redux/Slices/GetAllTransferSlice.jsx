import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");

export const getAllTransfer = createAsyncThunk(
  "user/getAllTransfer",
  async (data) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));

      const res = await axios.get(
        `${BaseUrl}/api/transferproduct/getalltransfer`,

        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log(res, "reduxx getAllTransfer");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getAllTransferSlice = createSlice({
  name: "allTransfer",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getAllTransfer.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [getAllTransfer.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getAllTransfer.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default getAllTransferSlice.reducer;
