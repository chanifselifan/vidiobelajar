import { createSlice } from '@reduxjs/toolkit';

const apiDataSlice = createSlice({
    name: 'apiData',
    initialState: {
        category: [], // Pastikan properti 'category' ada di initialState
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload; // Mengatur data kategori
        },
    },
});

export const { setCategory } = apiDataSlice.actions;
export default apiDataSlice.reducer;
