import { createSlice } from '@reduxjs/toolkit';

export const utilsReducer = createSlice({
    name: 'utils',
    initialState: {
        loginModalStatus: false,
        RegisterModalStatus: false
    },
    reducers: {
        loginModalStatusHandler: (state, action) => {
            state.loginModalStatus = action.payload;
        },
        registerModalStatusHandler: (state, action) => {
            state.RegisterModalStatus = action.payload;
        }
    }
});

export const { loginModalStatusHandler, registerModalStatusHandler } = utilsReducer.actions;

export default utilsReducer.reducer;
