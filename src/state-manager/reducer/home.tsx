import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo    :{ id :null,token:null,isLogged:null}
}

export const userReducer = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        loginAction:(state,action) => {
            state.userInfo = action.payload
        }
    }
});

export const { loginAction } = userReducer.actions;
export const getUserToken = (state:any) => state.userInfo?.token;
export const getUserIsLogged = (state:any) => state.userInfo?.isLogged;

export default userReducer.reducer;
