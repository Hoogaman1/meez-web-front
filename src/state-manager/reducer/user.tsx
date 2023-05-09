import { createSlice } from '@reduxjs/toolkit';


const userInfo = { id: 0,token:'',isLogged:false}  


const initialState = {
    userInfo
}

export const userReducer = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        loginAction:(state,action) => {
            state.userInfo = action.payload
        },
        logout:(state,action) =>{
            state.userInfo = action.payload
        }
    }
});

export const { loginAction,logout } = userReducer.actions;
export const getUserToken = (state:any) => state.userInfo?.token;
export const getUserIsLogged = (state:any) => state.userInfo?.isLogged;

export default userReducer.reducer;
