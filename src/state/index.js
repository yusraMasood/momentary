import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import thunk from 'redux-thunk';
import { authSliceToken } from './auth';
import { apiSlice } from './apiSlice';
import { generalReducer } from './general';
import { entrySliceToken } from './entry';
const persistedConfig = {
  key: 'momentary-user',
  storage: AsyncStorage,
};
const reducers = combineReducers({
  // [authSliceToken.reducerPath]: authSliceToken.reducer,
  auth: authSliceToken.reducer,
  entry: entrySliceToken.reducer,
  general: generalReducer.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});
const persistedReducer = persistReducer(persistedConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({ serializableCheck: false}).concat([thunk,
    apiSlice.middleware
    ]);
  },
  devTools: process.env.NODE_ENV !== 'production',
});
export const persistor = persistStore(store);
