import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");

export const passwordResetVerify = createAsyncThunk(
  "user/passwordResetVerify",
  async (data) => {
    try {
      console.log(data, "data reduxxxxxxxxxx");
      const token = JSON.parse(localStorage.getItem("token"));

      const res = await axios.get(
        `${BaseUrl}/api/user/verifypasswordlink/${data}`,

        {
          headers: { Authorization: "Bearer " + token },
        }
      );

      console.log(res, "reduxx passwordResetVerifyp");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const passwordResetVerifySlice = createSlice({
  name: "invitation",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [passwordResetVerify.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [passwordResetVerify.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [passwordResetVerify.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default passwordResetVerifySlice.reducer;
