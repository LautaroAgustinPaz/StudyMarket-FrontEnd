import { configureStore } from "@reduxjs/toolkit";
import productosSlice from './slice/productos'

// Configuracionón del STORE
export default configureStore(
    {
        reducer: {
            /* Todos los Reducer de mi aplicación ( los slices que creemos ) */
            productosSlice
        }
    }
)