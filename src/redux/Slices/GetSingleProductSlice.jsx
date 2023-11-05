import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");

export const getSingleProduct = createAsyncThunk(
  "user/getSingleProduct",
  async (data) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));

      const res = await axios.get(
        `${BaseUrl}/api/product/getsingleproduct/${data}`,

        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log(res, "reduxx getSingleProduct");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getSingleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getSingleProduct.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [getSingleProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getSingleProduct.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default getSingleProductSlice.reducer;
