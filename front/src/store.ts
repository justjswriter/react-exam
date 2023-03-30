import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/productSlice'
import operationSlice from "./slices/operationSlice";

export const store = configureStore({
    reducer: {
        products: productReducer,
        operations: operationSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;