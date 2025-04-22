import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        category: 'Semua Kelas',
        duration: 'Semua Durasi',
        searchQuery: '',
        sortBy: 'Urutkan',
        selectedProduct: null,
    },
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
    },
});

export const { setCategory, setDuration, setSearchQuery, setSortBy, setSelectedProduct } = filterSlice.actions;
export default filterSlice.reducer;
