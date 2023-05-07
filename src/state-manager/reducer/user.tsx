import { createSlice } from '@reduxjs/toolkit';

export interface UserModel {
    id: number;
    token:string;
    isLogged:boolean
}

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
