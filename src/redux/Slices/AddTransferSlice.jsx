import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");

export const addTransfer = createAsyncThunk("user/addTransfer", async (data) => {
  try {
    console.log(data,'data reduxxxxxxxxxx')
    const token = JSON.parse(localStorage.getItem("token"));
    const photo =JSON.stringify(data.photosName)
    let fd = new FormData();
    fd.append("customerCompanyName", data.customerCompanyName);
    fd.append("customerEmail", data.customerEmail);
    fd.append("customerProductName", data.customerProductName);
    fd.append("customerProductDescription", data.customerProductDescription);
    fd.append("serialNumber", data.serialNumber);
    fd.append("companyId", data.companyId);
    fd.append("url", data.url);
    fd.append("productPhoto", photo);
    const res = await axios.post(
      `${BaseUrl}/api/transferproduct/transferproduct`,
      fd,

      {
        headers: { Authorization: "Bearer " + token },
      }
    );

    console.log(res, "reduxx addTransferp");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const addTransferSlice = createSlice({
  name: "transfer",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [addTransfer.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [addTransfer.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [addTransfer.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default addTransferSlice.reducer;
