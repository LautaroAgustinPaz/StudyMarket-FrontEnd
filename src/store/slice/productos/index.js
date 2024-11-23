import { createSlice } from "@reduxjs/toolkit";

export const productosSlice = createSlice(  
    {
        name: 'productos',
        initialState: {
            producto: null,
            productos: []
        },
        reducers: {
            setProductos: (state, action) => {
                state.productos = action.payload
            },
            setProducto: (state, action) => {
                state.producto = action.payload
            },
            addProducto: (state, action) => {
                state.productos = [...state.productos, action.payload]
            }
        }
    }
)

export const {
    setProductos,
    setProducto,
    addProducto
} = productosSlice.actions


export default productosSlice.reducer