import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'cart']
};

const persistedReducer = persistReducer(persistConfig, combineReducers(rootReducer));

export function createStore(options) {
  return configureStore({
    reducer: persistedReducer,
    ...options,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
  });
}

export const store = createStore();
export const persistor = persistStore(store);

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
