import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");

export const userLogin = createAsyncThunk("user/login", async (data) => {
  try {
    let fd = new FormData();
    fd.append("email", data.email);
    fd.append("password", data.password);

    const res = await axios.post(`${BaseUrl}/api/user/login`, fd);

    console.log(res, "reduxx login");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const userLoginSlice = createSlice({
  name: "login",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [userLogin.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [userLogin.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default userLoginSlice.reducer;
