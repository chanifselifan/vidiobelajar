import { createSlice } from '@reduxjs/toolkit';

const apiDataSlice = createSlice({
  name: 'apiData',
  initialState: [],
  reducers: {
    setData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setData } = apiDataSlice.actions;
export default apiDataSlice.reducer;
