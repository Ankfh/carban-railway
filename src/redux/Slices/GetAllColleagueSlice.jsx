import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");

export const getAllColleague = createAsyncThunk(
  "user/getAllColleague",
  async (data) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const companyId = JSON.parse(localStorage.getItem("companyId"));
      const res = await axios.get(
        `${BaseUrl}/api/colleague/getallcolleague/${companyId}`,

        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      console.log(res, "reduxx getAllColleague");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getAllColleagueSlice = createSlice({
  name: "allColleaguue",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getAllColleague.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [getAllColleague.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getAllColleague.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default getAllColleagueSlice.reducer;
