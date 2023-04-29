import { configureStore } from '@reduxjs/toolkit';
import UserInfo from './reducer/user';
import Utils from './reducer/utils';
import userID from './reducer/getUser';

const store = configureStore({
    reducer: {
        UserInfo: UserInfo,
        Utils: Utils,
        UserID: userID
    }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
