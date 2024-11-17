import { configureStore } from "@reduxjs/toolkit";
import productosReducer from './slice/productos'

export default configureStore(
    {
        reducer: {
            productosReducer
        }
    }
)