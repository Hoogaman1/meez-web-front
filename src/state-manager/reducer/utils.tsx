import { createSlice } from '@reduxjs/toolkit';

export const utilsReducer = createSlice({
    name: 'utils',
    initialState: {
        consultationModalStatus: false,
        caseFollowingUpModalStatus: false
    },
    reducers: {
        consultationModalHandler: (state, action) => {
            state.consultationModalStatus = action.payload;
        },
        caseFollowingUpHandler: (state, action) => {
            state.caseFollowingUpModalStatus = action.payload;
        }
    }
});

export const { consultationModalHandler, caseFollowingUpHandler } = utilsReducer.actions;

export default utilsReducer.reducer;
