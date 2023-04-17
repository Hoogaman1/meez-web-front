import { createSlice } from '@reduxjs/toolkit';

export const userReducer = createSlice({
    name: 'userInfo',
    initialState: {
        login: typeof window !== 'undefined' && localStorage.getItem('accessToken') !== null ? false : false
    },
    reducers: {
        authStateHandler: (state, action) => {
            state.login = action.payload;
        }
    }
});

export const { authStateHandler } = userReducer.actions;

export default userReducer.reducer;
