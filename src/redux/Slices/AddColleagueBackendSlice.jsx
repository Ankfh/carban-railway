import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");

export const colleagueAdd = createAsyncThunk("colleague/colleagueAdd", async (data) => {
  try {
      const token = JSON.parse(localStorage.getItem("token"));
      const companyId = JSON.parse(localStorage.getItem("companyId"));
      const email =JSON.stringify(data)
      console.log(email,'data reduxxxxxxxxxx')
      let fd = new FormData();
    fd.append("email", email);
    fd.append("companyId", companyId);
    const res = await axios.post(
      `${BaseUrl}/api/colleague/addcolleague`,
      fd,

      {
        headers: { Authorization: "Bearer " + token },
      }
    );

    console.log(res, "reduxx colleagueAddp");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const colleagueAddSlice = createSlice({
  name: "colleagueAdd",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [colleagueAdd.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [colleagueAdd.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [colleagueAdd.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default colleagueAddSlice.reducer;
