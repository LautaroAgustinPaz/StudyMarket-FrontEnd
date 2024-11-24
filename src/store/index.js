import { configureStore } from "@reduxjs/toolkit";
import productosReducer from './slice/productos'
import usuariosReducer from "./slice/usuarios";


export default configureStore(
    {
        reducer: {
            productosReducer,
            usuariosReducer
        }
    }
)