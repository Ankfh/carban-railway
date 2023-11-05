import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");

export const addProduct = createAsyncThunk("user/addProduct", async (data) => {
  try {
    console.log(data,'data reduxxxxxxxxxx')
    const token = JSON.parse(localStorage.getItem("token"));
    const photo =JSON.stringify(data.photosName)
    const pdf =JSON.stringify(data.billsName)
    let fd = new FormData();
    fd.append("productName", data.productName);
    fd.append("productDiscription", data.productDiscription);
    fd.append("serialNumber", data.serialNumber);
    fd.append("companyId", data.companyId);
    fd.append("productPhoto", photo);
    fd.append("goodsBill", pdf);
    const res = await axios.post(
      `${BaseUrl}/api/product/addproduct`,
      fd,

      {
        headers: { Authorization: "Bearer " + token },
      }
    );

    console.log(res, "reduxx addProductp");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const addProductSlice = createSlice({
  name: "addProduct",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [addProduct.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [addProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [addProduct.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default addProductSlice.reducer;
