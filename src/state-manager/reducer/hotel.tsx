import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    hotels: []
}

export const hotelReducer = createSlice({
    name: 'hotels',
    initialState,
    reducers: {
        
    }
});


export default hotelReducer.reducer;
