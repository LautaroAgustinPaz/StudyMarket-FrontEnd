import { createSlice } from "@reduxjs/toolkit";

export const productosSlice = createSlice(  
    {
        name: 'productos',
        initialState: {
            productos: null
        },
        reducers: {
            setProductos: (state, action) => {
                state.productos = action.payload
            }
        }
    }
)

export const {
    setProductos
} = productosSlice.actions


export default productosSlice.reducer