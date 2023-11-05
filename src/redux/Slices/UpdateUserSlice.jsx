import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");




export const updateUser = createAsyncThunk("user/signup", async (data) => {
  const id = JSON.parse(localStorage.getItem("userId"));
    console.log(id, 'dataaaa  user update')
  try {
    let fd = new FormData();
    if (data.userName) {
      fd.append("userName", data.userName);
    }
    if (data.email) {
      fd.append("email", data.email);
    }
    if (data.password) {
      fd.append("password", data.password);
    }

    const res = await axios.patch(`${BaseUrl}/api/user/updateuser/${id}`, fd);

    console.log(res, "reduxx updateUser");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const updateUserSlice = createSlice({
  name: "updateUser",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [updateUser.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [updateUser.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default updateUserSlice.reducer;
