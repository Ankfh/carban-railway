import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");

export const getAllProduct = createAsyncThunk(
  "user/getAllProduct",
  async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      // `${BaseUrl}/api/product/getallproduct/${companyId}`,
      const companyId = JSON.parse(localStorage.getItem('companyId'));
      const res = await axios.get(
        `${BaseUrl}/api/product/getallproduct/${companyId}`,

        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log(res, "reduxx getAllProduct");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getAllProductSlice = createSlice({
  name: "allProduct",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getAllProduct.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [getAllProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getAllProduct.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default getAllProductSlice.reducer;
