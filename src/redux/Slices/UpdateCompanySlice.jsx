import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");

const id = JSON.parse(localStorage.getItem("companyId"));

export const updateCompany = createAsyncThunk(
  "company/signup",
  async (data) => {
    console.log(data, "data ree");
    try {
      let fd = new FormData();
      if (data.companyName) {
        fd.append("companyName", data.companyName);
      }
      if (data.address) {
        fd.append("address", data.address);
      }
      if (data.province) {
        fd.append("province", data.province);
      }
      if (data.city) {
        fd.append("city", data.city);
      }
      if (data.county) {
        fd.append("county", data.county);
      }

      if (data.phoneNumber) {
        fd.append("phoneNumber", data.phoneNumber);
      }

      const res = await axios.patch(
        `${BaseUrl}/api/company/updateCompany/${id}`,
        fd
      );

      console.log(res, "reduxx updateCompany");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateCompanySlice = createSlice({
  name: "updateCompany",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [updateCompany.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [updateCompany.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [updateCompany.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default updateCompanySlice.reducer;
