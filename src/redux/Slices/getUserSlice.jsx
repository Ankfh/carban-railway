import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");

export const getUser = createAsyncThunk("user/getUser", async (data) => {
    console.log(data, 'dataaa ree')

  try {
    const token = JSON.parse(localStorage.getItem("token"));

    const res = await axios.get(
      `${BaseUrl}/api/user/getuser/${data}`,

      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    console.log(res, "reduxx getUser");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const getUserSlice = createSlice({
  name: "getUser",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getUser.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [getUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getUser.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default getUserSlice.reducer;
