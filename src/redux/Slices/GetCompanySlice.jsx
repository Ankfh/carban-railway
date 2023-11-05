import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");

export const getCompany = createAsyncThunk("user/getCompany", async (data) => {
    console.log(data, 'dataaa ree')

  try {
    const token = JSON.parse(localStorage.getItem("token"));

    const res = await axios.get(
      `${BaseUrl}/api/company/getcompany/${data}`,

      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    console.log(res, "reduxx getCompany");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const getCompanySliceSlice = createSlice({
  name: "getCompany",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getCompany.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [getCompany.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [getCompany.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default getCompanySliceSlice.reducer;
