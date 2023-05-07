import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import {combineReducers} from "redux"; 
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import UserInfo from './reducer/user';
import Utils from './reducer/utils';
import thunk from 'redux-thunk'

const persistConfig = {
    key: 'root',
    storage,
}

const reducers = combineReducers({
    UserInfo: UserInfo,
    Utils: Utils
});
   

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
