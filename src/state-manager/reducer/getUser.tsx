import { createSlice } from '@reduxjs/toolkit';

export const userID = createSlice({
    name: 'userID',
    initialState: {
        userID: 0
    },
    reducers: {
        userIDHandler: (state, action) => {
            state.userID = action.payload;
        }
    }
});

export const { userIDHandler } = userID.actions;

export default userID.reducer;