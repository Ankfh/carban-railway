import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");

export const verifyInvitation = createAsyncThunk(
  "user/verifyInvitation",
  async (data) => {
    try {
      // console.log(data, "data reduxxxxxxxxxx");
      const token = JSON.parse(localStorage.getItem("token"));

      const res = await axios.post(
        `${BaseUrl}/api/colleague/verifyinvitation/${data}`,

        {
          headers: { Authorization: "Bearer " + token },
        }
      );

      console.log(res, "reduxx verifyInvitationp");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const verifyInvitationSlice = createSlice({
  name: "invitation",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [verifyInvitation.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [verifyInvitation.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [verifyInvitation.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default verifyInvitationSlice.reducer;
