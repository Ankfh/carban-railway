import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");

export const passwordChange = createAsyncThunk("user/signup", async (data) => {
  console.log(data, 'verify data redixx')
  try {
    let fd = new FormData();
    fd.append("password", data.password);
   

    const res = await axios.post(
      `${BaseUrl}/api/user/changepassword/${data.id}`,
      fd
    );

    console.log(res, "reduxx passwordChangep");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const passwordChangeSlice = createSlice({
  name: "passwordChange",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [passwordChange.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [passwordChange.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [passwordChange.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default passwordChangeSlice.reducer;
