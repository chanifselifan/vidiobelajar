import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: 'Semua Kelas',
  duration: 'Semua Durasi',
  searchQuery: '',
  sortBy: 'Urutkan',
  selectedProduct: null,
  totalPrice: 0,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
});

export const { setCategory, setDuration, setSearchQuery, setSortBy, setSelectedProduct, setTotalPrice } = filterSlice.actions;
export default filterSlice.reducer;
