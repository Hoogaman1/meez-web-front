import { createSlice } from '@reduxjs/toolkit';

export const utilsReducer = createSlice({
    name: 'utils',
    initialState: {
        authModalStatus: {
            status: false,
            type: ''
        }
    },
    reducers: {
        authModalStatusHandler: (state, action) => {
            state.authModalStatus = {
                status: action.payload.status,
                type: action.payload.type
            };
        }
    }
});

export const { authModalStatusHandler } = utilsReducer.actions;

export default utilsReducer.reducer;
