import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");

export const companySignup = createAsyncThunk(
  "company/signup",
  async (data) => {
    try {
      let fd = new FormData();
      fd.append("companyName", data.companyName);
      fd.append("province", data.province);
      fd.append("city", data.city);
      fd.append("address", data.address);
      fd.append("county", data.county);
      fd.append("phoneNumber", data.phoneNumber);
      const res = await axios.post(`${BaseUrl}/api/company/companysignup`, fd);
          
        console.log(res,'reduxx companySignupp')
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const companySignupSlice = createSlice({
  name: "companySignup",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [companySignup.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [companySignup.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [companySignup.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default companySignupSlice.reducer;
