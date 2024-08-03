import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isloading: false,
  data: [],
};

export const testStoreSlice = createSlice({
  name: "testStoreSlice",
  initialState,
  reducers: {
    getData: (state) => {
      state.isloading = true;
    },
    dataSuccess: (state, action) => {
      state.isloading = false;
      state.data = action.payload;
    },
    dataFail: (state, action) => {
      state.isloading = false;
      state.data = action.payload;
    },
  },
});

export const { getData, dataSuccess, dataFail } = testStoreSlice.actions;

export default testStoreSlice.reducer;
