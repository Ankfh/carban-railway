import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");

export const userLinkSignup = createAsyncThunk("user/signup", async (data) => {
  console.log(data, 'verify data redixx')
  try {
    let fd = new FormData();
    fd.append("userName", data.userName);
    fd.append("email", data.email);
    fd.append("password", data.password);
    fd.append("companyId", data.companyId);

    const res = await axios.post(
      `${BaseUrl}/api/user/userlinksignup/${data.id}`,
      fd
    );

    console.log(res, "reduxx userLinkSignupp");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const userLinkSignupSlice = createSlice({
  name: "userLinkSignup",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [userLinkSignup.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [userLinkSignup.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [userLinkSignup.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default userLinkSignupSlice.reducer;
