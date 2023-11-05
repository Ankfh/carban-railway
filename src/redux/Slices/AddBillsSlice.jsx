import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BaseUrl } from "../../BaseURL/BaseUrl";
const axios = require("axios");

export const addBills = createAsyncThunk("user/addBills", async (data) => {
  try {
    const token = JSON.parse(localStorage.getItem("token"));
    const state =data.setPdfProgress
    data = data.file;
    let fd = new FormData();
    fd.append("pdf",  data);
    console.log(data.lastModified)
    // const initProg = {id:data.lastModified, progress: 0}
    // addBillsSlice.initialState.progress.push(initProg)
    const config = {
      headers: { Authorization: "Bearer " + token },
      onUploadProgress: function(progressEvent) {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        state(percentCompleted)
        console.log(percentCompleted);
      }
    }
    const res = await axios.post(
      `${BaseUrl}/api/product/addbills`,
      fd,
      config,
    );
    console.log(res, "reduxx addBills");
    return res.data;
  } catch (error) {
    console.log(error);
  }
});
export const addBillsSlice = createSlice({
  name: "bills",
  initialState: {
    data: [],
    loading: false,
    error: false,
    progress:[],
  },
  reducers: {},
  extraReducers: {
    [addBills.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [addBills.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [addBills.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default addBillsSlice.reducer;
