import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");

export const passwordResetLink = createAsyncThunk(
  "user/signup",
  async (data) => {
    console.log(data, "verify data redixx");
    try {
      let fd = new FormData();
      fd.append("email", data.email);

      const res = await axios.post(`${BaseUrl}/api/user/resetPasswordLink`, fd);

      console.log(res, "reduxx passwordResetLinkp");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const passwordResetLinkSlice = createSlice({
  name: "passwordResetLink",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [passwordResetLink.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [passwordResetLink.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [passwordResetLink.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default passwordResetLinkSlice.reducer;
