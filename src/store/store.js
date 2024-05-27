import { persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./rootReducer";

const store = configureStore({
    reducer: rootReducers
})

const persistor = persistStore(store);

export { store, persistor };

