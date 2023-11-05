import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");

export const updateTransfer = createAsyncThunk("user/updateTransfer", async (data) => {
  try {
    console.log(data,'data reduxxxxxxxxxx')
    const token = JSON.parse(localStorage.getItem("token"));
    // const photo =JSON.stringify(data.photosName)
    let fd = new FormData();
    fd.append("customerCompanyName", data.customerCompanyName);
    fd.append("customerEmail", data.customerEmail);
    fd.append("customerProductName", data.customerProductName);
    fd.append("customerProductDescription", data.customerProductDescription);
    fd.append("serialNumber", data.serialNumber);
    fd.append("companyId", data.companyId);
    fd.append("url", data.url);
    // fd.append("productPhoto", photo);
    const res = await axios.patch(
      `${BaseUrl}/api/transferproduct/updatetransferproduct/${data.id}`,
      fd,

      {
        headers: { Authorization: "Bearer " + token },
      }
    );

    console.log(res, "reduxx updateTransferp");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const updateTransferSlice = createSlice({
  name: "updateTransfer",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [updateTransfer.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [updateTransfer.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [updateTransfer.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default updateTransferSlice.reducer;
