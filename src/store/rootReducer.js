import { combineReducers } from "@reduxjs/toolkit";
import formReducer from "./formSlice"
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// 3
const persistConfig = {
    key: 'root',
    storage,
  };
// 1
 const rootReducers = combineReducers(
    {
        form : formReducer
    }
)
// 2
const persistedReducer = persistReducer(persistConfig, rootReducers);

export default persistedReducer