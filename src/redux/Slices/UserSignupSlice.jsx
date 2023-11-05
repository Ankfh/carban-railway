import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");

export const userSignup = createAsyncThunk("user/signup", async (data) => {
  try {
    let fd = new FormData();
    fd.append("userName", data.userName);
    fd.append("email", data.email);
    fd.append("password", data.password);
    fd.append("companyId", data.companyId);

    const res = await axios.post(`${BaseUrl}/api/user/register`, fd);

    console.log(res, "reduxx userSignupp");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const userSignupSlice = createSlice({
  name: "userSignup",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [userSignup.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [userSignup.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [userSignup.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default userSignupSlice.reducer;
