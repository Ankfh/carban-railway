import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");

export const deleteProductBills = createAsyncThunk(
  "product/deleteProductBills",
  async (data) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));

      console.log(token, "dattt");
      let fd = new FormData();
      fd.append("name", data);
      const res = await axios.delete(
        `${BaseUrl}/api/product/deletebills`,

        {
          headers: { Authorization: "Bearer " + token },
          data: fd,
        }
      );
      console.log(res, "reduxx deleteProductBills");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteProductBillsSlice = createSlice({
  name: "deleteProductBills",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [deleteProductBills.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [deleteProductBills.fulfilled]: (state, action) => {
      state.loading = false;
      //   state.data = action.payload;
    },
    [deleteProductBills.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default deleteProductBillsSlice.reducer;
