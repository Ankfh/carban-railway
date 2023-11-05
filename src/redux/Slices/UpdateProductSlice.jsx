import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");

export const updateProduct = createAsyncThunk("user/updateProduct", async (data) => {
  console.log(data,'data reduxxxxxxxxxx')
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const url =JSON.stringify(data.url)
    let fd = new FormData();
    // fd.append("productName", data.productName);
    // fd.append("serialNumber", data.serialNumber);
    // fd.append("productDescription", data.productDescription);
    fd.append("productPhoto", data.productPhoto);
    fd.append("productUrl", url);
    fd.append("companyId", data.companyId);
    const res = await axios.patch(
      `${BaseUrl}/api/product/updateproduct/${data.id}`,
      fd,

      {
        headers: { Authorization: "Bearer " + token },
      }
    );

    console.log(res, "reduxx updateProductp");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const updateProductSlice = createSlice({
  name: "updateProduct",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [updateProduct.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [updateProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [updateProduct.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default updateProductSlice.reducer;
